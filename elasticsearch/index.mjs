import fs from "fs";
import { JSDOM } from "jsdom";
import { Client } from "@elastic/elasticsearch";

console.log("Connecting to Elasticsearch...");
const client = new Client({
  node: "https://localhost:9200",
  tls: {
    //        ca: fs.readFileSync('./http_ca.crt'),
    rejectUnauthorized: false,
  },
  auth: {
    username: "elastic",
    password: "sugondese",
  },
});

console.log("Connected to Elasticsearch");

const getFiles = (dir) => {
  let files = fs.readdirSync(dir);
  let filesToProcess = [];

  files.forEach((file) => {
    let filePath = `${dir}/${file}`;
    if (fs.statSync(filePath).isDirectory()) {
      filesToProcess = filesToProcess.concat(getFiles(filePath));
    } else if (file.endsWith(".html")) {
      filesToProcess.push(filePath);
    }
  });

  return filesToProcess;
};

console.log("Collecting files to index...");
let filesToProcess = getFiles("../public");

let fileContents = [];

console.log("Indexing files...");
filesToProcess.forEach((file) => {
  let fileData = fs.readFileSync(`../public/${file}`, "utf8");

  let title;
  let href = file
    .replace("../public", "")
    .replace("/index", "")
    .replace(".html", "");
  let content;

  let html = new JSDOM(fileData).window.document;

  title =
    html.querySelector("title")?.textContent?.trim() ??
    file.replace(".html", "").trim();
  if (title.includes("http://") || title.includes("https://")) return;

  let article = html.querySelector("article");
  if (!article) {
    fileContents.push({ title, href, content: html.body.textContent });
    return;
  }

  title = title.replace("Galaxypedia - ", "");

  article.querySelector(".shipinfobox")?.remove();
  article.querySelector("#page-title")?.remove();
  article.querySelectorAll("article div").forEach((div) => div.remove());
  article
    .querySelectorAll("script, style, link")
    .forEach((tag) => tag.remove());

  content = article.textContent.replace(/\s+/g, " ").trim();

  fileContents.push({ title, href, content });
});
console.log("Indexing complete");

console.log("Uploading index to Elasticsearch...");
(async () => {
  if (await client.indices.exists({ index: "galaxypedia" })) {
    console.log("Deleting existing index");
    await client.indices.delete({ index: "galaxypedia" });
  }

  console.log("Creating new index");
  await client.indices.create(
    {
      index: "galaxypedia",
      operations: {
        mappings: {
          properties: {
            title: { type: "text" },
            url: { type: "text" },
            content: { type: "text" },
          },
        },
      },
    },
    { ignore: [400] },
  );

  console.log("Preparing index for upload");
  const operations = fileContents.flatMap((doc) => [
    { index: { _index: "galaxypedia" } },
    doc,
  ]);

    console.log("Uploading index");
  const bulkResponse = await client.bulk({ refresh: true, body: operations });
  if (bulkResponse.errors) {
    const erroredDocuments = [];
    bulkResponse.items.forEach((action, i) => {
      const operation = Object.keys(action)[0];
      if (action[operation].error) {
        erroredDocuments.push({
          status: action[operation].status,
          error: action[operation].error,
          operation: operations[i * 2],
          document: operations[i * 2 + 1],
        });
      }
    });
    console.log(erroredDocuments);
  } else {
    console.log(`Successfully uploaded and indexed ${fileContents.length} documents`);
  }

  await client.close();
})();

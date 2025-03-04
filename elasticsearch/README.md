# Elasticsearch
This directory contains helper functions for interfacing with Elasticsearch, and the Galaxypedia's docker configuration for it.

## Background
The Galaxypedia is meant to be stateless and serverless. The goal from the start has been to ensure that the Galaxypedia can be run on any machine with no need for anything but the code and the outputted html.

However, a drawback of this minimalist approach is that implementing search functionality that is simple, lightweight, yet accurate is difficult. The Galaxypedia is a static site, and as such, it has no backend to handle search queries. This means that the search functionality must be implemented in the frontend (client sided).

The first search implementation was Pagefind. It checks two of the boxes, in that it's fast, lightweight, and simple. The problem is that it relies heavily on term frequency and doesn't provide that accurate of results. Compared to Elasticsearch, it's not even remotely close to being as accurate.

While Elasticsearch is a powerful search engine, it's not lightweight. It's a full-fledged search engine that requires a server to run. Because us Galaxypedia developers get high off of masochism, we decided to go with the best of both worlds. If an elasticsearch endpoint is provided in the hugo config, it is used. If not, we fall back to Pagefind.

## Contents

## Elasticsearch Setup
The docker-compose file in this directory sets up an Elasticsearch instance. The instance is configured to use the `galaxypedia` index. Let's go over setting things up

First, ensure you have both `docker` and `docker compose` installed. If you don't, you can install them by following the instructions [here](https://docs.docker.com/get-docker/).

Next, navigate to the `elasticsearch` directory and copy the `.env.example` file to `.env`. This file contains the environment variables that the docker-compose file uses. You can change the values of these variables as instructed in the comments (be particularly careful with the memory limit. you'll know if its causing problems if your exit code is 137).

Finally, run the following command to start the Elasticsearch instance:
```bash
docker-compose up
```

You can now access the Elasticsearch instance at `http://localhost:5601`. The default username is `elastic` and the password is whatever you set in the `.env` file. First and foremost, you'll want to create the `galaxypedia` index. You'll need to do this manually via the web ui since the scripts to do this are not yet implemented.

When done, you need to index the data.

## Indexing and upserting data

The .js script in this directory is used to index and upsert data into the Elasticsearch instance. It reads the `galaxypedia.json` file in the `public` directory and indexes the data into the `galaxypedia` index. The script is run with the following command:
```bash
node index-and-upload-to-elasticsearch.js
```

> [!WARNING]  
> Make sure you run `pnpm install` before running the script. If you don't have `pnpm` installed, you can install it by running `npm install -g pnpm`.

If you encounter any errors, just keep rerunning the script. It should succeed eventually. If you encounter any issues, please let us know.

## Searching with Elasticsearch
After upserting the data, you should be able to see it in the elasticsearch web ui.

To ensure we're on a clean slate, let's delete anything unnecessary in the public directory when building:
```bash
hugo --cleanDestinationDir
```

Now, lets start the hugo server:
```bash
hugo serve
```

> [!WARNING]  
> Searching will not work as you will have to make some custom adjustments to `assets/js/search.js`. This guide will be updated with instructions on how to do this in the future. For now, you'll have to figure it out yourself.

And navigate to `http://localhost:1313`. You'll notice that the search doesn't work. This is because of some CORS shenanigans. To fix this, just navigate to [https://localhost:9200/galaxypedia/_search](https://localhost:9200/galaxypedia/_search) (make sure to change the port to whatever you set) and accept the risk. This should fix the issue.
Enjoy your new and improved search!

(function (params) {
  const baseUrl = params.baseUrl.replace(/\/$/, "");
  const url = new URL(window.location.href);
  if (url.pathname.startsWith(baseUrl)) {
    const newUrl = new URL(url.pathname.replace(baseUrl, ""), baseUrl);
    window.location.href = newUrl.toString();
  }
})("@params");

const staticCalculator = "Calculator-Project-v1";
const assets = [
  "/",
  "/index.html",
  "/static/styles.css",
  "/static/scripts.js",
  "/android-chrome-192x192.png",
  "/android-chrome-512x512.png",
  "/apple-touch-icon.png",
  "/favicon-16x16.png",
  "/favicon-32x32.png",
  "mstile-150x150.png",
  "/safari-pinned-tab.svg"
];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticCalculator).then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});
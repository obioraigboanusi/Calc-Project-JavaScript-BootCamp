const cacheName = "Calculator-Project-v1";
const files = [
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

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(cacheName).then((cache) => {
      cache.addAll(files);
    })
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(keyList.map((key) => {
        if (key !== cacheName && key !== dataCacheName) {
          return caches.delete(key)
        }
      }));
    })
  )
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => {
      return res || fetch(e.request);
    })
  );
});
const CACHE = "keramoutsi-guide-v1";
const ASSETS = [
  "./",
  "./index.html",
  "./sources.html",
  "./assets/css/styles.css",
  "./assets/js/script.js",
  "./assets/icons/favicon.svg",
  "./assets/images/keramoutsi-panorama.jpg",
  "./assets/images/iraklis-kokkinidis.jpg",
  "./assets/images/panagia-keramoutsi.jpg",
  "./assets/images/fabrica-kokkinidi-1.jpg",
  "./assets/images/fabrica-kokkinidi-2.jpg",
  "./assets/images/fabrica-kokkinidi-3.jpg"
];
self.addEventListener("install", event => event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS))));
self.addEventListener("activate", event => event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE).map(key => caches.delete(key))))));
self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;
  event.respondWith(caches.match(event.request).then(cached => cached || fetch(event.request).then(response => {
    const copy = response.clone();
    caches.open(CACHE).then(cache => cache.put(event.request, copy));
    return response;
  }).catch(() => caches.match("./index.html"))));
});

var cacheName = 'mmaismma/beatmaker-cache';
var cacheAssets = [
  "./style.css",
  "./script.js",
  "./index.html",
  "/beatmaker/Resources/Beats/0_01.flac",
  "/beatmaker/Resources/Beats/0_02.flac",
  "/beatmaker/Resources/Beats/0_04.flac",
  "/beatmaker/Resources/Beats/0_06.flac",
  "/beatmaker/Resources/Beats/0_07.flac",
  "/beatmaker/Resources/Beats/0_08.flac",
  "/beatmaker/Resources/Beats/0_09.flac",
  "/beatmaker/Resources/Beats/0_11.flac",
  "/beatmaker/Resources/Beats/0_12.flac",
  "/beatmaker/Resources/Beats/0_16.flac",
  "/beatmaker/Resources/Beats/0_18.flac",
  "/beatmaker/Resources/Beats/0_21.flac",
  "/beatmaker/Resources/Beats/0_22.flac",
  "/beatmaker/Resources/Beats/0_24.flac",
  "/beatmaker/Resources/Beats/0_25.flac",
  "/beatmaker/Resources/Beats/0_28.flac",
  "/beatmaker/Resources/Beats/0_29.flac",
  "/beatmaker/Resources/Beats/0_31.flac",
  "/beatmaker/Resources/Beats/0_32.flac",
  "/beatmaker/Resources/Beats/0_33.flac",
  "/beatmaker/Resources/Beats/0_35.flac",
  "/beatmaker/Resources/Beats/0_41.flac",
  "/beatmaker/Resources/Beats/0_44.flac",
  "/beatmaker/Resources/Beats/0_47.flac",
  "manifest.webmanifest"
]

self.addEventListener("install", function (event) {
  //skipWaiting();
  event.waitUntil(precache());
});

self.addEventListener("activate", event => {
  console.log("Inside the activate handler:", event);
});

self.addEventListener("fetch", event => {
  event.respondWith(fromCache(evt.request))
  event.waitUntil(update(event.request))
});

function precache() {
  return caches.open(cacheName).then(function (cache) {
    return cache.addAll(cacheAssets);
  });
}

function fromCache(request) {
  return caches.open(cacheName).then(function (cache) {
    return cache.match(request).then(function (matching) {
      return matching || Promise.reject('no-match');
    });
  });
}

function update(request) {
  return caches.open(cacheName).then(function (cache) {
    return fetch(request).then(function (response) {
      return cache.put(request, response);
    });
  });
}
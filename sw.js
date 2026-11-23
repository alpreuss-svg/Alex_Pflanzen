// Programm offline verfügbar halten: erst Netz (damit Updates ankommen), sonst Zwischenspeicher.
const CACHE = 'pflanzen-2';
const FILES = ['./', 'index.html', 'app.js', 'style.css', 'manifest.webmanifest', 'icons/icon-192.png', 'icons/icon-512.png'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES))); self.skipWaiting(); });
self.addEventListener('activate', e => e.waitUntil(
  caches.keys().then(ks => Promise.all(ks.filter(k => k.startsWith('pflanzen-') && k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())));
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET' || new URL(e.request.url).origin !== location.origin) return;
  e.respondWith(fetch(e.request, { cache: 'no-cache' }).then(r => {
    if (r.ok) { const k = r.clone(); e.waitUntil(caches.open(CACHE).then(c => c.put(e.request, k))); }
    return r;
  }).catch(async () => await caches.match(e.request, { ignoreSearch: true }) || (e.request.mode === 'navigate' && await caches.match('index.html')) || Response.error()));
});

/* ═══════════════════════════════════════════
   ONDEPASSA COPA 2026 — Service Worker
   Caches static assets for offline access
   ═══════════════════════════════════════════ */

const CACHE_NAME = 'ondepassa-v1';
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/styles.css',
  '/app.js',
  '/usuario.html',
  '/usuario.js',
  '/manifest.json',
  '/robots.txt',
  '/ads.txt',
  '/offline.html',
  '/pages/usa-vs-bosnia-2026.html',
  '/pages/mexico-vs-ecuador-2026.html',
  '/pages/england-vs-dr-congo-2026.html',
  '/pages/belgium-vs-senegal-2026.html',
  '/pages/brazil-vs-croatia-2026.html',
  '/pages/argentina-vs-uruguay-2026.html',
  '/pages/brazil-vs-england-2026.html',
  '/pages/argentina-vs-belgium-2026.html',
  '/pages/usa-vs-germany-2026.html',
  '/pages/mexico-vs-spain-2026.html',
  '/pages/brazil-vs-argentina-2026.html',
  '/pages/usa-vs-mexico-2026.html',
  '/pages/final-2026.html'
];

// Install — cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS);
    }).then(() => self.skipWaiting())
  );
});

// Activate — clean old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch — network-first for HTML, cache-first for assets
self.addEventListener('fetch', (event) => {
  // For navigation requests (HTML pages) — network first
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request).then((response) => {
        const clone = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
        return response;
      }).catch(() => {
        return caches.match(event.request).then((cached) => {
          return cached || caches.match('/offline.html');
        });
      })
    );
    return;
  }

  // For static assets (CSS, JS, images) — cache first
  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;
      return fetch(event.request).then((response) => {
        if (response.ok && event.request.method === 'GET') {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
        }
        return response;
      }).catch(() => {
        return new Response('Offline', { status: 503 });
      });
    })
  );
});

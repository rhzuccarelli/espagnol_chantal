const CACHE = 'es-quiz-v1';
const BASE = new URL('.', self.location).href;
const ASSETS = [
  BASE,
  BASE + 'index.html',
  BASE + 'spanish-verbs-quiz.html',
  BASE + 'spanish-verbs-learn.html',
  BASE + 'spanish-verbs-cheatsheet.html',
  BASE + 'spanish-participios-quiz.html',
  BASE + 'spanish-participios-learn.html',
  BASE + 'spanish-vocab-learn.html',
  BASE + 'spanish-vocab-quiz.html',
  BASE + 'spanish-gramatica.html',
  BASE + 'spanish-gramatica-quiz.html',
  BASE + 'spanish-expresiones.html',
  BASE + 'verbos.json',
  BASE + 'participios.json',
  BASE + 'vocabulario.json',
  BASE + 'gramatica.json',
  BASE + 'gramatica-quiz.json',
  BASE + 'expresiones.json',
  BASE + 'manifest.json',
  BASE + 'icons/icon-192.png',
  BASE + 'icons/icon-512.png',
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;
      return fetch(e.request).then(res => {
        if (res.ok) {
          const clone = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, clone));
        }
        return res;
      });
    })
  );
});

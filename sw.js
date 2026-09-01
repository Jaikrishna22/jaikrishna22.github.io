const cacheName = 'tnpsc-portal-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/dashboard.html',
  '/progress-tracker.html',
  '/leaderboard.html',
  '/certificates.html',
  '/current-affairs.html',
  '/tnpsc-english.html',
  '/tnpsc-plurals.html',
  '/tnpsc-quizzes.html',
  '/question-papers.html',
  '/answer-keys.html',
  '/video-solutions.html'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
      .catch(() => caches.match('/index.html'))
  );
});

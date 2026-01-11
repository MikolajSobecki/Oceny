self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('pwa-cache').then(cache =>
      cache.addAll(['index.html', 'pytania.txt'])
    )
  );
});

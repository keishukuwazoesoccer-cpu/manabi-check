// まなびチェックAI：オフラインでも開けるようにアプリ本体を端末に保存しておく
// 91e20c54e1 は npm run build のたびに自動で書き換わる（中身が変わるとキャッシュ名も変わり、更新が届く）
const CACHE = 'manabi-check-91e20c54e1';
const FILES = ['./', './index.html', './manifest.webmanifest', './apple-touch-icon.png', './icon-192.png', './icon-512.png', './icon-maskable-512.png'];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((ks) => Promise.all(ks.filter((k) => k.startsWith('manabi-check-') && k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});
// ページ本体はネット優先（つながらない・3秒以上かかるときは保存済みを表示）、アイコン等は保存済み優先
self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  if (req.mode === 'navigate') {
    e.respondWith(new Promise((resolve) => {
      let done = false;
      const finish = (r) => { if (!done && r) { done = true; resolve(r); } };
      const fallback = () => caches.match('./index.html').then(finish);
      const timer = setTimeout(fallback, 3000);
      fetch(req).then((r) => {
        clearTimeout(timer);
        if (r.ok) { const cp = r.clone(); caches.open(CACHE).then((c) => c.put('./index.html', cp)); finish(r); }
        else fallback().then(() => finish(r));
      }).catch(() => { clearTimeout(timer); fallback(); });
    }));
    return;
  }
  e.respondWith(caches.match(req).then((hit) => hit || fetch(req)));
});

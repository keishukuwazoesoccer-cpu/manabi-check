// まなびチェックAI：オフラインでも開けるようにアプリ本体を端末に保存しておく
// b234f7a08c は npm run build のたびに自動で書き換わる（中身が変わるとキャッシュ名も変わり、更新が届く）
const CACHE = 'manabi-check-b234f7a08c';
const FILES = ['./', './index.html', './manifest.webmanifest', './apple-touch-icon.png', './icon-192.png', './icon-512.png', './icon-maskable-512.png'];

FILES.push(...["./kahoot-images/0609e2f961e6b6276941.png","./kahoot-images/0a3637bfda11b4282ea6.png","./kahoot-images/0a81d9910546cf7e8372.png","./kahoot-images/1387cc7a14e1dc118dcb.png","./kahoot-images/19c1f94bf427532398be.png","./kahoot-images/19f633e88703bbd23c7e.png","./kahoot-images/1a4824554abd0a240480.png","./kahoot-images/1a693d13f75d7428721a.png","./kahoot-images/1b7095055663ebf38014.png","./kahoot-images/1bf3ec06941bf21e20cf.png","./kahoot-images/24c49f12910a73e08668.png","./kahoot-images/26fa5ed61e795a84ffdd.png","./kahoot-images/295b2a6b312b91727339.png","./kahoot-images/2dfff7a42a66d8c0b9a7.png","./kahoot-images/2e8e5f0f6fbb291f251f.png","./kahoot-images/2f8fdf967c9d80c04932.png","./kahoot-images/35e55d40f9cd3fcf5002.png","./kahoot-images/391399fb0a13b02898aa.png","./kahoot-images/3913e314ba548c13b919.png","./kahoot-images/3a9cd98dc3ed8f1b0de2.png","./kahoot-images/3c34e02dafd3e0bc7f9a.png","./kahoot-images/3d482a6e784b86459ed3.png","./kahoot-images/3f9b6f0c1290672dc7ce.png","./kahoot-images/414397e1fe71e87bbfa7.png","./kahoot-images/45ba1c54981c16a06890.png","./kahoot-images/460540b00501fc8c16cb.png","./kahoot-images/4caef2bff8f021f901d5.png","./kahoot-images/4d19458f1796f5673f66.png","./kahoot-images/5428fcee09a5ea864c60.png","./kahoot-images/571f247ef2facc160493.png","./kahoot-images/5d1db35b134335adebf7.png","./kahoot-images/628bc70550facf1f4095.png","./kahoot-images/6664b7146a5e208fe24c.png","./kahoot-images/6a8ce16836372b9b4c50.png","./kahoot-images/6f80cb0eb1fc44499517.png","./kahoot-images/70a538ed2aec86e9c415.png","./kahoot-images/7b7d86cbbb9816ad163d.png","./kahoot-images/7d0e25d56fe2901a733f.png","./kahoot-images/7f04ba277b41c17fb14c.png","./kahoot-images/8059795a347531e7a3f3.png","./kahoot-images/814fd56f0fa2f974730a.png","./kahoot-images/88dbc1f667705b823b28.png","./kahoot-images/9112debfdeb63e4ab8f2.png","./kahoot-images/93bd5c99c8ef6bc82c6b.png","./kahoot-images/94494d04b1dfd0394bce.png","./kahoot-images/94ead8b61f088f936987.png","./kahoot-images/9a97f335ae6f6ea90c3d.png","./kahoot-images/9bba7733ba142d1e8246.png","./kahoot-images/9d432714880dc741a4f0.png","./kahoot-images/9d63637d991f2ca30156.png","./kahoot-images/a3cd3206e26c4cd49bec.png","./kahoot-images/a85021c66828f59828fd.png","./kahoot-images/a91fbf24200a6102a2b5.png","./kahoot-images/a965d31253f9c8ff3f21.png","./kahoot-images/aa254b12cb60a8e9e079.png","./kahoot-images/aaae199e2cf8b2cad70e.png","./kahoot-images/abaf70ecb7273ff01c2b.png","./kahoot-images/ad5f8924153132f8702a.png","./kahoot-images/aef980340b8a83ff2768.png","./kahoot-images/b3d52a233c2318d61471.png","./kahoot-images/bea33a8b2858cd6fb537.png","./kahoot-images/bf49a24cfc15016baa7f.png","./kahoot-images/c0c7e8b6298cb9a14901.png","./kahoot-images/c18784ccf742c15f744c.png","./kahoot-images/c322c76a9adea8a7c79d.png","./kahoot-images/c5330cd32380697a3984.png","./kahoot-images/c879fb4c180abb58f72c.png","./kahoot-images/d1961ad5d75d5c3921af.png","./kahoot-images/d3f483b4f0625f9c507a.png","./kahoot-images/d4b640f3df350777e4f8.png","./kahoot-images/d5195ed1a3091b3a3c4c.png","./kahoot-images/da1f27c7974a65a06f35.png","./kahoot-images/dc8c61139d8174d7b2f7.png","./kahoot-images/dd2b757403d30f7ab188.png","./kahoot-images/df7988db2b282bd62291.png","./kahoot-images/e1e4962e61ddf833ebbb.png","./kahoot-images/e2541bd1e03040735f19.png","./kahoot-images/e3a18a651494cd94e85b.png","./kahoot-images/e4160cee8b9b270149c6.png","./kahoot-images/e5955c06f05f86526436.png","./kahoot-images/eb573ce4514bba3f8b10.png","./kahoot-images/f18478364e818a254c79.png","./kahoot-images/f3c6503ec8f599392482.png","./kahoot-images/f978a1c6943c6f78d3b7.png","./kahoot-images/fe71ea88d1189cd44b31.png"]);

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

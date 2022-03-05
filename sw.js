
/* Cache Versioniereung, nötig wegen Proggen (um aktuelle Kode im Cache zu haben)   */
const CACHE_VERSION = 'cache-v0'

// static assets to precache: App Shell
const appShellFiles = [
    "/",
    "/index.html",
    "/fallback.html",
    "/src/styles.css",
    "/src/views/index.js",
    "./src/views/app.js",
    "/src/views/base-view.js",
    "/src/views/not-found-view.js",
    "/src/views/stats-view.js",
    "/src/views/todo-view.js",
    "/src/img/icons/favicon.png",
    "/src/img/icons/icon-144x144.png",
    "/src/img/icons/icon-192x192.png",
    "/src/img/icons/icon-512x512.png",
]

/* Pre-caching: App Shell bzw. statische Assets */
self.addEventListener('install', (event) => {
    event.waitUntil((async () => {
        const cache = await caches.open(CACHE_VERSION);
        await cache.addAll(appShellFiles);
    })());
});



/* Statische Cache Versioniereung  */
self.addEventListener('activate', (e) => {
    e.waitUntil(caches.keys().then((keyList) => {
        return Promise.all(keyList.map((key) => {
            /* nur neuerste Cache behalten 
               - nötig wegen Proggen (um aktuelle Kode und HTML im Cache zu haben) 
               - nötig alten SW stoppen und neuen SW starten
            */
            if (key === CACHE_VERSION) { return; }
            return caches.delete(key);
        }))
    })
    );
});



/* Regeln die Nutzen von Statischen Inhalten im Cache */
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then(cacheResult => {
            /* Cache First  
             - wenn Inhalt im Cache ist, dann Inhalt aus Cache zurückgeben 
             - sonst 'fetch' an Web Server schicken 
             */
            return cacheResult || fetch(event.request); // hier würde dynamische Cache kommen
            /* Fallback Seite: 
            - falls ein Unterseite im cache NICHT vorhanden ist und App offline ist, 
            - Szenario: 
              - Unterseite wurde im Online Modus nicht geöffnet 
              - App ist offline
              - Nutzen navigiert in diese Unterseite 
            */
        }).catch(() => caches.match('/fallback.html'))
    );
});

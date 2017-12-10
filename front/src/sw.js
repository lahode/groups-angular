// SW Version
const SW_VERSION = '0.0.1';

// Application assets
const AppAssets = [
    '/',
    '/index.html',
    '/0.chunk.js',
    '/inline.bundle.js',
    '/main.bundle.js',
    '/polyfills.bundle.js',
    '/styles.bundle.css'
];

// Installing SW
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open('app-cache-' + SW_VERSION).then(cache => cache.addAll(AppAssets))
    ); 
});

// Activating SW
self.addEventListener('activate', event => {
    // Clean static cache
    let cleanCache = caches.keys().then(ck => {
        ck.forEach(key => {
            if (key !== 'app-cache-' + SW_VERSION && key.match('app-cache-')) {
                return caches.delete(key);
            }
        });
    });
});

// Fetching SW
self.addEventListener('fetch', e => {
    // Static cache strategy for local resources
    if (e.request.url.match(location.origin)) {
        e.respondWith(scStrategy(e.request));
    }

    // Dynamic cache strategy for server resources
    else if (e.request.url.match('http://localhost:4300') && e.request.method =='GET') {
        e.respondWith(dcStrategy(e.request));
    }
});

// Static cache strategy
const scStrategy = (req, cacheName = 'app-cache-' + SW_VERSION) => {
    return caches.match(req).then( cacheRes => {
        if (cacheRes) return cacheRes;
        return fetch(req).then(netRes => {
            caches.open('app-cache-' + SW_VERSION).then(cache => cache.put(req, netRes));
            return netRes.clone();
        });
    });
};

// Dynamic cache strategy
const dcStrategy = (req) => {
    return fetch(req).then(netRes => {
        if (!netRes.ok) throw netRes;
        caches.open('app-cache-' + SW_VERSION).then(cache => cache.put(req, netRes));     
        return netRes.clone();
    })
    .catch(err => {
        if (req.url.match('api/check-auth') && err.status == 403) {
            return false;
        } else {
            return caches.match(req);
        }
    });
};
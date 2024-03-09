import { warmStrategyCache, offlineFallback } from 'workbox-recipes'
import { CacheFirst } from 'workbox-strategies'
import { CacheableResponsePlugin } from 'workbox-cacheable-response'
import { precacheAndRoute } from 'workbox-precaching'
import { ExpirationPlugin } from 'workbox-expiration'

declare const self: ServiceWorkerGlobalScope

// Precache all of the assets generated by your build process.
// Their URLs are injected into the manifest variable below.
// This variable must be present somewhere in your service worker file,
// even if you decide not to use precaching. See https://cra.link/PWA
precacheAndRoute(self.__WB_MANIFEST)

// Set up page cache
const pageCache = new CacheFirst({
    cacheName: 'intrinsic-page-cache',
    plugins: [
        new CacheableResponsePlugin({
            statuses: [0, 200],
        }),
        new ExpirationPlugin({
            maxAgeSeconds: 30 * 24 * 60 * 60,
        }),
    ],
})

warmStrategyCache({
    urls: ['/index.html', '/'],
    strategy: pageCache,
})

// Set up offline fallback
offlineFallback({
    pageFallback: '/offline.html',
})

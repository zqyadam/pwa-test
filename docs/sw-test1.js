this.addEventListener('install', function(event) {
    console.log('serviceWorker install');
    event.waitUntil(self.skipWaiting());
    // event.waitUntil(
    //     caches.open('pwa-test-v1').then(function(cache) {
    //         console.log(cache);
    //         console.log('wating until');
    //     })
    // )
})


this.addEventListener('fetch', function(event) {
    console.log(event);
    console.log('fetch an event');
})
this.addEventListener('install', function(event) {
    console.log('serviceWorker install');
    event.waitUntil(self.skipWaiting());
})


this.addEventListener('fetch', function(event) {
    console.log(event);
    console.log('fetch an event');
})
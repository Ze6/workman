importScripts('./cache-polyfill.js');


self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('simplecache').then(function(cache) {
     return cache.addAll([
       '/',
       '/index.html',
	// Dependencies 
       '/static/css/main.css',
       '/static/js/vue.js',
       '/static/js/vue-router.js',
    
	// Pages
  '/static/views/index_page.vue.js',
  '/static/views/octa_home.vue.js',
  '/static/views/page404.vue.js',

	// Components
  '/static/components/octa.vue.js',
  
  // Assets
  '/static/imgs/icons/android-chrome-192x192.png',
  '/static/imgs/icons/android-chrome-512x512.png',  
  '/static/imgs/icons/apple-touch-icon.png',
  '/static/imgs/icons/favicon-194x194.png',
  '/static/imgs/icons/favicon-48x48.png',
  '/static/imgs/icons/favicon-32x32.png',
  '/static/imgs/icons/favicon-16x16.png',
  '/static/imgs/icons/favicon.ico',
  '/static/imgs/icons/favicon.svg',  
     ]);
   })
 );
});

self.addEventListener('fetch', function(event){
  console.log(event.request.url);
  event.respondWith(
    caches.match(event.request).then(function(response){
      return response || fetch(event.request);
      
    })
  )

})


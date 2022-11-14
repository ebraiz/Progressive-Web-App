self.addEventListener("install", e => {
	e.waitUntil(
		caches.open("static").then(cache => {
			return cache.addAll(
			[
				"./", 
				"./src/style.css", 
				"./images/logo.png",
				"./images/ic-bars.svg",
				"./images/ic-close.svg",
				"./images/billy.png",
				"./images/alpha-pay.png",
				"./images/master-pos.png",
				"./images/the-swag.png",
				"./images/alphapay.svg",
				"./images/koupon.svg",
				"./images/topline.svg",
				"./images/playsport.svg",
				"./images/billy.svg",
				"./images/swag.svg",
				"./images/buzzbassador.svg",
				"./images/the-m.svg",
				"./images/vial.svg",
				"./images/finantier.svg",
				"./images/tradeit.svg",
				"./images/creditmyrent.svg",
				"./images/eran-galperin.png",
				"./images/ic-star.svg",
				"./images/logo-martial-arts.png",
				"./images/shelby-baldwin.png",
				"./images/logo-buzzbassador.png",
				"./images/logo-clutch.svg"
			]);
		})
	);
});

// self.addEventListener("fetch", e => {
// 	//console.log(`Intercepting fetch requrest for: ${e.request.url}`);
// 	e.respondWith(
// 		caches.match(e.request).then(response => {
// 			return response || fetch(e.request);
// 		})
// 	);
// })

self.addEventListener('fetch', function(event) {
	event.respondWith(async function() {
		try{
			var res = await fetch(event.request);
			var cache = await caches.open('cache');
			cache.put(event.request.url, res.clone());
			return res;
		}
		catch(error){
			return caches.match(event.request);
		}
	}());
});
'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "c845fc3ac0642f42a8d6b3dd75cf2390",
"assets/assets/images/2.0x/flutter_logo.png": "4efb9624185aff46ca4bf5ab96496736",
"assets/assets/images/3.0x/flutter_logo.png": "b8ead818b15b6518ac627b53376b42f2",
"assets/assets/images/flutter_logo.png": "478970b138ad955405d4efda115125bf",
"assets/assets/images/profile/green_round_avatar.jpg": "9c24bcf8607f75201a567d135c80dbe9",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "477accf8223eef3e6c422874a65a0e2c",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"catalog/catalog.json": "95dd2e32b627e3362076280966b6d283",
"catalog/posts/dead_simple_example_using_keys/animation.gif": "06c851da8f467cd18f7f9322feda6dc8",
"catalog/posts/dead_simple_example_using_keys/content.md": "8944a8e5a91729476e13e2446532e51f",
"catalog/posts/dead_simple_example_using_keys/post.json": "5d692c5c01163781ac7231c00f783f26",
"catalog/posts/dead_simple_example_using_keys/thumbnail.png": "215778a341f0bfa3ee73834b576c3aee",
"catalog/posts/flutter_animate_interactive_viewer_as_map/animation.gif": "a8e228974362c68488630ea97ab4aae7",
"catalog/posts/flutter_animate_interactive_viewer_as_map/content.md": "d5713a288d7885830704e756438113fd",
"catalog/posts/flutter_animate_interactive_viewer_as_map/final_animation.gif": "a30aebb783b0840eb0d2b13101a18aba",
"catalog/posts/flutter_animate_interactive_viewer_as_map/post.json": "8ff8d71f10908957ba4c42d5df31b5a3",
"catalog/posts/flutter_animate_interactive_viewer_as_map/screen_1.jpeg": "45d873fd89c1a9f8f1028c19ec3610f2",
"catalog/posts/flutter_animate_interactive_viewer_as_map/screen_2.png": "39440e59b1fe9b58efae9765903fd0ec",
"catalog/posts/flutter_animate_interactive_viewer_as_map/screen_3.png": "78886e8f45f74352d70136b880031e65",
"catalog/posts/flutter_animate_interactive_viewer_as_map/thumbnail.png": "ab9abe64f88235603d4716297f5236bf",
"catalog/posts/flutter_animate_interactive_viewer_fly_over_the_map/animation_map.gif": "2646e31a6a64a6f70f272cbede1c1da9",
"catalog/posts/flutter_animate_interactive_viewer_fly_over_the_map/content.md": "b66fac657e4e121e4fb3329a3b634914",
"catalog/posts/flutter_animate_interactive_viewer_fly_over_the_map/final_animation.gif": "1778e18bac5637672d2dc4b1ad621bf5",
"catalog/posts/flutter_animate_interactive_viewer_fly_over_the_map/post.json": "8602eb2d0b479e83aa5e8f11ac498bd8",
"catalog/posts/flutter_animate_interactive_viewer_fly_over_the_map/screen_1.png": "8743a809fd7db715b9ff5d77e64168e0",
"catalog/posts/flutter_animate_interactive_viewer_fly_over_the_map/screen_2.png": "b840746eac514f9422234f91ce91fa89",
"catalog/posts/flutter_animate_interactive_viewer_fly_over_the_map/screen_3.png": "ac7b17b42aeeda9a08f5648eea5d9a05",
"catalog/posts/flutter_animate_interactive_viewer_fly_over_the_map/screen_4.png": "a478f4222b7e1882e5369bbc3c1eab96",
"catalog/posts/flutter_animate_interactive_viewer_fly_over_the_map/thumbnail.png": "cb5ad29d7c9276c73081f456a7e82ef0",
"catalog/posts/retro_of_my_3_years/content.md": "55d74b00b4380cf2f09881b9efcd2ec6",
"catalog/posts/retro_of_my_3_years/post.json": "ad058da0233f4ef09a4258d96e9097a8",
"catalog/posts/retro_of_my_3_years/thumbnail.png": "fe27fe5346c54e70737433f4977f7c55",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/android-icon-144x144.png": "88d6b836f18c4ab8d1e9d944783d1d7e",
"icons/android-icon-192x192.png": "c02917dffc36a1ba13fd9af7372cdb2d",
"icons/android-icon-36x36.png": "74eef8a5c5d7a8ce2ca1af41d28c8a17",
"icons/android-icon-48x48.png": "1fd1fd3ccba4b2ddd433a9e8db488e6a",
"icons/android-icon-72x72.png": "c8ee683c53f95b7d11fcaa81a4f5d822",
"icons/android-icon-96x96.png": "0602eca25ab1f71f4701985ec65b64a2",
"icons/apple-icon-114x114.png": "08d2ae07a3d35a8cda5eb9b61691174e",
"icons/apple-icon-120x120.png": "fba30b4db378bb09dd236100df45fc47",
"icons/apple-icon-144x144.png": "88d6b836f18c4ab8d1e9d944783d1d7e",
"icons/apple-icon-152x152.png": "3903f894e655aae98aa5336ee8c486fe",
"icons/apple-icon-180x180.png": "87f1ff9a7c3f030e8905e5c0f0e7ac85",
"icons/apple-icon-57x57.png": "4260aa0624d2bbc17c6a6a670023f65e",
"icons/apple-icon-60x60.png": "10259acbd8ac1092f921f599c22f3dc6",
"icons/apple-icon-72x72.png": "c8ee683c53f95b7d11fcaa81a4f5d822",
"icons/apple-icon-76x76.png": "18e21d77c753495d9246eb24595bc129",
"icons/apple-icon-precomposed.png": "56ab85c401edebc121a96e04637f60d3",
"icons/apple-icon.png": "56ab85c401edebc121a96e04637f60d3",
"icons/favicon-16x16.png": "e227003dbc7fe1092cb6258d650c6b0a",
"icons/favicon-32x32.png": "64658662466bb987f195f4f14a9ee51a",
"icons/favicon-96x96.png": "0602eca25ab1f71f4701985ec65b64a2",
"icons/favicon.ico": "44ac55191a7281a9347d3e80f5aed6a4",
"icons/ms-icon-144x144.png": "88d6b836f18c4ab8d1e9d944783d1d7e",
"icons/ms-icon-150x150.png": "150d8334e5125ecf9bc9bb41dc27e5bf",
"icons/ms-icon-310x310.png": "da4a70e84c0559eef338fbc83be96df9",
"icons/ms-icon-70x70.png": "bb48fa09a12f6c49c38a8cda9503a481",
"index.html": "35f474b4437fce7971f824cde44c93f9",
"/": "35f474b4437fce7971f824cde44c93f9",
"main.dart.js": "17c45776a9c4a0d50b1bd10edf703a80",
"manifest.json": "552b63626b9b177d944a4b5c7b463bd8",
"profile/experience/experiences.json": "4bc928370421e2a5f140df3af3741eb1",
"profile/profile.json": "5cf08ad82cde8ce520a96022f49e1fa8",
"version.json": "88032042c819bd8b16c3a76b2bef1b5d"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

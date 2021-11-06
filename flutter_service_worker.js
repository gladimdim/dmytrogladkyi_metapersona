'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "88032042c819bd8b16c3a76b2bef1b5d",
"index.html": "53d82fabd438b98eb96866e08111fa55",
"/": "53d82fabd438b98eb96866e08111fa55",
"main.dart.js": "42d74cbf18f4e0e870885aabe53d957c",
"catalog/posts/flutter_animate_interactive_viewer_fly_over_the_map/final_animation.gif": "1778e18bac5637672d2dc4b1ad621bf5",
"catalog/posts/flutter_animate_interactive_viewer_fly_over_the_map/content.md": "2a05114d014c6c5a2654e5aa2a5482cc",
"catalog/posts/flutter_animate_interactive_viewer_fly_over_the_map/screen_4.png": "a478f4222b7e1882e5369bbc3c1eab96",
"catalog/posts/flutter_animate_interactive_viewer_fly_over_the_map/screen_2.png": "b840746eac514f9422234f91ce91fa89",
"catalog/posts/flutter_animate_interactive_viewer_fly_over_the_map/screen_3.png": "ac7b17b42aeeda9a08f5648eea5d9a05",
"catalog/posts/flutter_animate_interactive_viewer_fly_over_the_map/screen_1.png": "8743a809fd7db715b9ff5d77e64168e0",
"catalog/posts/flutter_animate_interactive_viewer_fly_over_the_map/thumbnail.png": "cb5ad29d7c9276c73081f456a7e82ef0",
"catalog/posts/flutter_animate_interactive_viewer_fly_over_the_map/animation_map.gif": "2646e31a6a64a6f70f272cbede1c1da9",
"catalog/posts/flutter_animate_interactive_viewer_fly_over_the_map/post.json": "b4dc34776580c286081dd481fdf2168d",
"catalog/posts/flutter_animate_interactive_viewer_as_map/final_animation.gif": "a30aebb783b0840eb0d2b13101a18aba",
"catalog/posts/flutter_animate_interactive_viewer_as_map/content.md": "8f058c67cdbdfd7effe5d286229a88fd",
"catalog/posts/flutter_animate_interactive_viewer_as_map/screen_2.png": "39440e59b1fe9b58efae9765903fd0ec",
"catalog/posts/flutter_animate_interactive_viewer_as_map/screen_3.png": "78886e8f45f74352d70136b880031e65",
"catalog/posts/flutter_animate_interactive_viewer_as_map/thumbnail.png": "ab9abe64f88235603d4716297f5236bf",
"catalog/posts/flutter_animate_interactive_viewer_as_map/screen_1.jpeg": "45d873fd89c1a9f8f1028c19ec3610f2",
"catalog/posts/flutter_animate_interactive_viewer_as_map/animation.gif": "a8e228974362c68488630ea97ab4aae7",
"catalog/posts/flutter_animate_interactive_viewer_as_map/post.json": "434046414ea2f11b294fc5b62c202d16",
"catalog/posts/locadeserta_sloboda_whatsnew_305/screen1.png": "ed2538e99d6c96384cee9ceb0dc243da",
"catalog/posts/locadeserta_sloboda_whatsnew_305/screen2.png": "75df0a0c3726653b2e2818581f817b19",
"catalog/posts/locadeserta_sloboda_whatsnew_305/content.md": "de936930ae6e14c67e0d125971c9895b",
"catalog/posts/locadeserta_sloboda_whatsnew_305/thumbnail.png": "1bad7ac6fbd2842aab098063154e2dae",
"catalog/posts/locadeserta_sloboda_whatsnew_305/post.json": "d472e245bd8da3490041276a4ee3930e",
"catalog/posts/flutter_fog_of_war/screen7.png": "f114308871da4efb093b1a07f76c097c",
"catalog/posts/flutter_fog_of_war/screen3.jpeg": "d26ed3a0284fb3b67bc9f95d8286f22a",
"catalog/posts/flutter_fog_of_war/screen2.jpeg": "300fb87f1f93b9e7e50b0bb0ae6881d0",
"catalog/posts/flutter_fog_of_war/content.md": "b494375ace421448f573c1b5dabf580d",
"catalog/posts/flutter_fog_of_war/screen5.jpeg": "3aedc6917d04923bb796f4c445a5cbd8",
"catalog/posts/flutter_fog_of_war/screen.jpeg": "c185d25e2a0df0dd93df1b8146950f7d",
"catalog/posts/flutter_fog_of_war/screen4.jpeg": "d3959128d359c9c0878af0a8d8976f0a",
"catalog/posts/flutter_fog_of_war/screen10.png": "cb1a188698a47ec35cac7c958684feb9",
"catalog/posts/flutter_fog_of_war/thumbnail.jpg": "496a250fcde2ab543795bba2243186f9",
"catalog/posts/flutter_fog_of_war/screen6.jpeg": "6d3598fb40e873079f6a7b90e7ee4629",
"catalog/posts/flutter_fog_of_war/screen1.jpeg": "1337e523b397b4a773716823555a6e64",
"catalog/posts/flutter_fog_of_war/screen8.png": "a3b901a418a9bf94bb715f0cac0c9183",
"catalog/posts/flutter_fog_of_war/post.json": "a59174a238edb1735533a34ab89027c7",
"catalog/posts/sloboda_versiya-290-doslidzhennya/screen11.jpeg": "f5534db9ecc9677c88f6b7dc907f5097",
"catalog/posts/sloboda_versiya-290-doslidzhennya/screen3.jpeg": "0c5e6877f5e17a49e3650a02af2177f5",
"catalog/posts/sloboda_versiya-290-doslidzhennya/screen2.jpeg": "ea84da6b001ae1f5523f272f43b9cd26",
"catalog/posts/sloboda_versiya-290-doslidzhennya/content.md": "8e517daf54fc44d45802a3ee199a589b",
"catalog/posts/sloboda_versiya-290-doslidzhennya/screen10.jpeg": "bd366279c182c078221c8a9dea8cb7ce",
"catalog/posts/sloboda_versiya-290-doslidzhennya/screen5.jpeg": "dc2efc4715b4188e4fc16d282e68cc9c",
"catalog/posts/sloboda_versiya-290-doslidzhennya/screen9.jpeg": "28001381715d6567450891027b080e65",
"catalog/posts/sloboda_versiya-290-doslidzhennya/screen8.jpeg": "ace192eb20a8946858d8bf092e70b235",
"catalog/posts/sloboda_versiya-290-doslidzhennya/screen4.jpeg": "071d320c62ad12f0063489915299775d",
"catalog/posts/sloboda_versiya-290-doslidzhennya/screen7.jpeg": "78efdae197d7f0bf5bd3e68fae463494",
"catalog/posts/sloboda_versiya-290-doslidzhennya/thumbnail.png": "885842e81ddea902ad2ec7f7f6dd88d2",
"catalog/posts/sloboda_versiya-290-doslidzhennya/screen6.jpeg": "f4b9012bba13de5c1e31ba24403dd5ae",
"catalog/posts/sloboda_versiya-290-doslidzhennya/screen1.jpeg": "741cef5f8d7cb0c4e0f8a9c5a6cf0e96",
"catalog/posts/sloboda_versiya-290-doslidzhennya/screen0.jpeg": "b00d8daabb3b2a47328fbbf2ee49c1ad",
"catalog/posts/sloboda_versiya-290-doslidzhennya/post.json": "69aeec2fe1e86423fcae2ba08df612dd",
"catalog/posts/sloboda_3_update/screen7.png": "8a799cd13fe998c3add119207ecae996",
"catalog/posts/sloboda_3_update/screen6.png": "3ca8384a46b5b9ba8fae8268a7a2c93f",
"catalog/posts/sloboda_3_update/screen4.png": "75b2187c09475b6685085157d8a70f41",
"catalog/posts/sloboda_3_update/screen5.png": "04c0187dc1f8c887b1e3f9aef06d502d",
"catalog/posts/sloboda_3_update/screen1.png": "780845dc9224e704c983d10fd53e3065",
"catalog/posts/sloboda_3_update/screen2.png": "e79758d520524ccf2d7b63fe79d55a3f",
"catalog/posts/sloboda_3_update/content.md": "21685c349381ba767aa5467e369b3518",
"catalog/posts/sloboda_3_update/screen3.png": "5aff620ea30b17d4701df953237e01fd",
"catalog/posts/sloboda_3_update/screen12.png": "fe6cbbb45cbdfd39305871620e830dc9",
"catalog/posts/sloboda_3_update/screen12.jpg": "af2f9ed5b327b211ad78012e17f84771",
"catalog/posts/sloboda_3_update/screen11.png": "461df98ec0d7510facc5099b02fdd7b7",
"catalog/posts/sloboda_3_update/screen10.png": "ba12eb93c7fe6b6d19aaceab0f08e8d4",
"catalog/posts/sloboda_3_update/thumbnail.png": "cf615ae4175cef53a5221e395624bce8",
"catalog/posts/sloboda_3_update/screen8.png": "ab5428f191ffd7e4e7a5034b00fa816b",
"catalog/posts/sloboda_3_update/screen9.png": "59faa5720bcfc606339aac2e580254fe",
"catalog/posts/sloboda_3_update/post.json": "2ff7275b3897589196b9d1ed7353bf97",
"catalog/posts/retro_of_my_3_years/content.md": "77a48a0e4b2ac6ec6c4cf9244d9a15aa",
"catalog/posts/retro_of_my_3_years/thumbnail.png": "fe27fe5346c54e70737433f4977f7c55",
"catalog/posts/retro_of_my_3_years/post.json": "b0b681074b13efbb363486d8d1aca257",
"catalog/posts/dead_simple_example_using_keys/content.md": "238fac9e69899a1e8fc7f022b875a405",
"catalog/posts/dead_simple_example_using_keys/thumbnail.png": "215778a341f0bfa3ee73834b576c3aee",
"catalog/posts/dead_simple_example_using_keys/animation.gif": "06c851da8f467cd18f7f9322feda6dc8",
"catalog/posts/dead_simple_example_using_keys/post.json": "ff9f7003d53ac67fa22d7f56839affc2",
"catalog/catalog.json": "8c030e674589cd07b1aa784908006ad2",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"profile/experience/experiences.json": "5e4975f9a9bfb9fda897d18510f8229c",
"profile/profile.json": "5cb9f71fd3854469bc034196feafc151",
"icons/favicon-16x16.png": "e227003dbc7fe1092cb6258d650c6b0a",
"icons/favicon.ico": "44ac55191a7281a9347d3e80f5aed6a4",
"icons/apple-icon.png": "56ab85c401edebc121a96e04637f60d3",
"icons/apple-icon-144x144.png": "88d6b836f18c4ab8d1e9d944783d1d7e",
"icons/android-icon-192x192.png": "c02917dffc36a1ba13fd9af7372cdb2d",
"icons/apple-icon-precomposed.png": "56ab85c401edebc121a96e04637f60d3",
"icons/apple-icon-114x114.png": "08d2ae07a3d35a8cda5eb9b61691174e",
"icons/ms-icon-310x310.png": "da4a70e84c0559eef338fbc83be96df9",
"icons/ms-icon-144x144.png": "88d6b836f18c4ab8d1e9d944783d1d7e",
"icons/apple-icon-57x57.png": "4260aa0624d2bbc17c6a6a670023f65e",
"icons/apple-icon-152x152.png": "3903f894e655aae98aa5336ee8c486fe",
"icons/ms-icon-150x150.png": "150d8334e5125ecf9bc9bb41dc27e5bf",
"icons/android-icon-72x72.png": "c8ee683c53f95b7d11fcaa81a4f5d822",
"icons/android-icon-96x96.png": "0602eca25ab1f71f4701985ec65b64a2",
"icons/android-icon-36x36.png": "74eef8a5c5d7a8ce2ca1af41d28c8a17",
"icons/apple-icon-180x180.png": "87f1ff9a7c3f030e8905e5c0f0e7ac85",
"icons/favicon-96x96.png": "0602eca25ab1f71f4701985ec65b64a2",
"icons/android-icon-48x48.png": "1fd1fd3ccba4b2ddd433a9e8db488e6a",
"icons/apple-icon-76x76.png": "18e21d77c753495d9246eb24595bc129",
"icons/apple-icon-60x60.png": "10259acbd8ac1092f921f599c22f3dc6",
"icons/android-icon-144x144.png": "88d6b836f18c4ab8d1e9d944783d1d7e",
"icons/apple-icon-72x72.png": "c8ee683c53f95b7d11fcaa81a4f5d822",
"icons/apple-icon-120x120.png": "fba30b4db378bb09dd236100df45fc47",
"icons/favicon-32x32.png": "64658662466bb987f195f4f14a9ee51a",
"icons/ms-icon-70x70.png": "bb48fa09a12f6c49c38a8cda9503a481",
"manifest.json": "cd36c0a7efb2c54c7033ef449a703c38",
"assets/AssetManifest.json": "c845fc3ac0642f42a8d6b3dd75cf2390",
"assets/NOTICES": "b5088aa7ba74df25b544ed212d5aa6a3",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/images/flutter_logo.png": "478970b138ad955405d4efda115125bf",
"assets/assets/images/2.0x/flutter_logo.png": "4efb9624185aff46ca4bf5ab96496736",
"assets/assets/images/3.0x/flutter_logo.png": "b8ead818b15b6518ac627b53376b42f2",
"assets/assets/images/profile/green_round_avatar.jpg": "9c24bcf8607f75201a567d135c80dbe9",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498"
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

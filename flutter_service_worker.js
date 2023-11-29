'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "1147bcba8291100b9472caecb806d7ad",
"index.html": "bd26d71208219ccea4641a2db96ca92b",
"/": "bd26d71208219ccea4641a2db96ca92b",
"main.dart.js": "1963fca92b0b33c28688915221a8153b",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "94469bebfde2e64f29231990933f7442",
"icons/Icon-192.png": "ae63873c86239966f1eca8e3f8ab50c0",
"icons/Icon-maskable-192.png": "ae63873c86239966f1eca8e3f8ab50c0",
"icons/Icon-maskable-512.png": "7495076ef3db40a24d71984577439386",
"icons/Icon-512.png": "7495076ef3db40a24d71984577439386",
"manifest.json": "9a78621665ff5a7b12d2db88348eb788",
"assets/AssetManifest.json": "531916216f74f42661282f83c9a9e271",
"assets/NOTICES": "ff9d97280376f58b1df4d51fe315a7e1",
"assets/FontManifest.json": "0359dbfa17d31cc7f4847c62577890b0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "f2163b9d4e6f1ea52063f498c8878bb9",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "6c033745d48357498675fb3e6f818a7c",
"assets/fonts/MaterialIcons-Regular.otf": "8400d0527c65d5dc0ebf1f13ef05d480",
"assets/fonts/Marianne/italic/Marianne-LightItalic.otf": "ab2f3f4efd64c6ebf79c10c64c9e5f6d",
"assets/fonts/Marianne/italic/Marianne-RegularItalic.otf": "1935e8642d7aafcb48a1a3e12fbc1dbe",
"assets/fonts/Marianne/italic/Marianne-MediumItalic.otf": "31c3c800a0b7c6f84aeee1fb2561d830",
"assets/fonts/Marianne/normal/Marianne-Bold.otf": "8777ccfe444bc286bc4ee5b94d65e46c",
"assets/fonts/Marianne/normal/Marianne-Thin.otf": "9b2043ca052c408fa68502150ac79338",
"assets/fonts/Marianne/normal/Marianne-Regular.otf": "cb94c50f09878c19dbc7bce8ffb26719",
"assets/fonts/Marianne/normal/Marianne-Light.otf": "5a7a39640d969f6d6aa4ed6adeba3138",
"assets/fonts/Marianne/normal/Marianne-ExtraBold.otf": "0c354ef53d1fdc3cdb1ed1ca00b63f8a",
"assets/fonts/Marianne/normal/Marianne-Medium.otf": "712af6ae4bb19939f2fb3af0d8bd630b",
"assets/assets/ic_info_2.svg": "0d58cbc8a5e0f864fa9b5cecf686a831",
"assets/assets/ic_share.svg": "0390d0acb3e5cbb528181f6402ae5a10",
"assets/assets/ic_oops.svg": "7e0df19db00c1549d7e7f5b2047f2861",
"assets/assets/ic_profile.svg": "0b44ffec02ba1ab170fe2a26c04c1eff",
"assets/assets/ic_togglable_right.svg": "3472c101812a64324e16d768b7d9b5a6",
"assets/assets/ic_share_white.svg": "d2c193482289e98ce8e08f4420d345ec",
"assets/assets/ic_thumb_down_white.svg": "53cd938db7a0755e400d59607cc2c097",
"assets/assets/ic_backward.svg": "3537ddcdad0e7afcb5a0076dd6abc39c",
"assets/assets/ic_info.svg": "4a9d352ec72ff036fddf029c3f680bf2",
"assets/assets/ic_consultation_step3_answered.svg": "e27437f0b47bb9c003355f848161155d",
"assets/assets/ic_timer.svg": "5827bde2b897773254119ac52e015d03",
"assets/assets/ic_thumb_white.svg": "cfab163d0ced3c3e74eb48e6c947e0a2",
"assets/assets/ic_heart_white_full.svg": "7754a9f3e554d54425c43c4e2646fb33",
"assets/assets/ic_bell.svg": "ebd7ea3a7893ff485ccf39b84de486ac",
"assets/assets/ic_heart.svg": "ab226ffc40220f89fcbcb86e3a7f18ba",
"assets/assets/ic_forward.svg": "e7ab54ed1ec0a321b97d7b830c4aee79",
"assets/assets/ic_question_confirmation.svg": "921e9b214c5ab3bccad4f8339437d9d7",
"assets/assets/ic_onboarding_step1.png": "ec9a4ecde62d6eb393a9b5de33d8f795",
"assets/assets/ic_close.svg": "a4c5aea7e0a176c957555081f9af2a05",
"assets/assets/ic_consultation_inactivate.svg": "dd0e643077ff6016e6541e75d0963ff9",
"assets/assets/ic_onboarding_step2.png": "d00aaddd000c3f43305ac5af7e9ef4d3",
"assets/assets/ic_heart_full.svg": "1ad19280eca52380425b7caecccfa0f6",
"assets/assets/ic_onboarding_step3.png": "66fe73bdd0178ae2ba2d43f420bef6c7",
"assets/assets/ic_calendar.svg": "abdce98003f50bd6362bc877a3bac2ef",
"assets/assets/ic_onboarding_web.png": "badca00521fc3f697d6bdc174dd6c7f0",
"assets/assets/ic_summary_consultation_step1.svg": "f3b6b3d513e5990ad2f7fa247a540040",
"assets/assets/ic_question_inactivate.svg": "c1bb2a04b976b053af4c8a6dc4c7dfe7",
"assets/assets/ic_trash.svg": "4efdeb7a6fef82d0290a9d6fedd0aad2",
"assets/assets/launcher_icons/ic_agora_dev_logo.png": "c09148ef3bc8483a3610edd419cec384",
"assets/assets/launcher_icons/ic_agora_logo_completed.png": "c1b76629f513b932e5aba57a52d0e438",
"assets/assets/launcher_icons/ic_agora_logo.png": "a9772171942da07f59ef29cd2e7c65e4",
"assets/assets/ic_query.svg": "71460d9d3f824a2f3336f69499cf7d00",
"assets/assets/ic_summary_consultation_step2.svg": "ed8494525e73c5189adc0c1fd6f2b77c",
"assets/assets/ic_demographic_information.svg": "18e66782681b0d7384092079f800a9d0",
"assets/assets/ic_summary_consultation_step3.svg": "c5cee19463d2243bf774bea2c51000ae",
"assets/assets/ic_togglable_bottom.svg": "d16ec77700096a73b20cd44242510e00",
"assets/assets/ic_consultation_step2_finished.svg": "60fc78ce9b6ceb944e4314e376767958",
"assets/assets/ic_consultation_step1_ongoing.svg": "f7f2b89570e45edb17aa7f55b84db1e2",
"assets/assets/ic_bell_light_blue.svg": "c306f523e59dec3586a4c0224a218ae2",
"assets/assets/ic_consultation_ongoing_empty.png": "c183815cc6225283869c0a2f698ee9c7",
"assets/assets/ic_consultation.svg": "bb3e006b882132b18b75a4226dde504c",
"assets/assets/ic_heart_white.svg": "148be64718355c5458f223fc622835e4",
"assets/assets/ic_check.svg": "c658e6cc886d6161ead4ef94789a06c9",
"assets/assets/ic_person.svg": "e06674a9d2ac521b08cc2339b9db96fc",
"assets/assets/ic_question.svg": "d3ef435d044e7c33bdbb8161ff0ee980",
"assets/assets/ic_back.svg": "9a86bbfe8ccdf111b49aa4234ffaf7de",
"assets/assets/ic_confirmation.svg": "dc3510df4c4d56a87138579af6839845",
"assets/assets/ic_copy.svg": "4d842404194563b77c8019e3182a58dd",
"assets/assets/ic_search.svg": "e587f0cc81074abb428227994a2cf354",
"assets/assets/ic_bubble.svg": "12aa7f5a2df36385e41ed79cd8a35dfd",
"assets/assets/ic_marianne.svg": "b3aee26d5d9d9b84b4589dd1c9ffc446",
"assets/assets/ic_timer_brun.svg": "1740fb1c01a905a0bd590a7d2eda5cf1",
"assets/assets/ic_next.svg": "ea7f5014bb2ac822f5172422c2dcb16d",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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

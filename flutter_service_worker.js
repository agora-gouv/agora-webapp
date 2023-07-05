'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "cca5ee95a0deaa8917902887ae9c7316",
"index.html": "72790986cd85feea8d52e835747b3aa6",
"/": "72790986cd85feea8d52e835747b3aa6",
"main.dart.js": "bb8bc2f8df760f3f4943b62917237d7a",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"favicon.png": "bddcc92e975d111f55ef5bc5680ac322",
"icons/Icon-192.png": "d2ff6caea11c721dcd83af14805a31aa",
"icons/Icon-maskable-192.png": "d2ff6caea11c721dcd83af14805a31aa",
"icons/Icon-maskable-512.png": "48b851c8252f29f25522814586cf3ac7",
"icons/Icon-512.png": "48b851c8252f29f25522814586cf3ac7",
"manifest.json": "ba04e6da2f88549f877635ad4fe4060d",
"assets/AssetManifest.json": "33100432c7cb4ba96a71a700b35f3ee7",
"assets/NOTICES": "cf919ee4ad3916ce1011d6952dca04f0",
"assets/FontManifest.json": "0359dbfa17d31cc7f4847c62577890b0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/fonts/Marianne/italic/Marianne-LightItalic.otf": "ab2f3f4efd64c6ebf79c10c64c9e5f6d",
"assets/fonts/Marianne/italic/Marianne-RegularItalic.otf": "1935e8642d7aafcb48a1a3e12fbc1dbe",
"assets/fonts/Marianne/italic/Marianne-MediumItalic.otf": "31c3c800a0b7c6f84aeee1fb2561d830",
"assets/fonts/Marianne/normal/Marianne-Bold.otf": "8777ccfe444bc286bc4ee5b94d65e46c",
"assets/fonts/Marianne/normal/Marianne-Thin.otf": "9b2043ca052c408fa68502150ac79338",
"assets/fonts/Marianne/normal/Marianne-Regular.otf": "cb94c50f09878c19dbc7bce8ffb26719",
"assets/fonts/Marianne/normal/Marianne-Light.otf": "5a7a39640d969f6d6aa4ed6adeba3138",
"assets/fonts/Marianne/normal/Marianne-ExtraBold.otf": "0c354ef53d1fdc3cdb1ed1ca00b63f8a",
"assets/fonts/Marianne/normal/Marianne-Medium.otf": "712af6ae4bb19939f2fb3af0d8bd630b",
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
"assets/assets/ic_onboarding_step2.png": "d00aaddd000c3f43305ac5af7e9ef4d3",
"assets/assets/ic_list.svg": "8b76ff7a6cd438d4f554a8fd0fd83b47",
"assets/assets/ic_heart_full.svg": "1ad19280eca52380425b7caecccfa0f6",
"assets/assets/ic_onboarding_step3.png": "66fe73bdd0178ae2ba2d43f420bef6c7",
"assets/assets/ic_calendar.svg": "abdce98003f50bd6362bc877a3bac2ef",
"assets/assets/ic_summary_consultation_step1.svg": "f3b6b3d513e5990ad2f7fa247a540040",
"assets/assets/launcher_icons/ic_agora_dev_logo.png": "c09148ef3bc8483a3610edd419cec384",
"assets/assets/launcher_icons/ic_agora_logo_completed.png": "c1b76629f513b932e5aba57a52d0e438",
"assets/assets/launcher_icons/ic_agora_logo.png": "8014c07378bb91eb63af5c738212bf0e",
"assets/assets/ic_query.svg": "71460d9d3f824a2f3336f69499cf7d00",
"assets/assets/ic_summary_consultation_step2.svg": "ed8494525e73c5189adc0c1fd6f2b77c",
"assets/assets/ic_demographic_information.svg": "18e66782681b0d7384092079f800a9d0",
"assets/assets/ic_summary_consultation_step3.svg": "c5cee19463d2243bf774bea2c51000ae",
"assets/assets/ic_togglable_bottom.svg": "d16ec77700096a73b20cd44242510e00",
"assets/assets/ic_consultation_step2_finished.svg": "60fc78ce9b6ceb944e4314e376767958",
"assets/assets/ic_consultation_step1_ongoing.svg": "f7f2b89570e45edb17aa7f55b84db1e2",
"assets/assets/ic_consultation.svg": "2153a2d98c0cffb785e6408a005068f2",
"assets/assets/ic_heart_white.svg": "148be64718355c5458f223fc622835e4",
"assets/assets/ic_check.svg": "c658e6cc886d6161ead4ef94789a06c9",
"assets/assets/ic_person.svg": "e06674a9d2ac521b08cc2339b9db96fc",
"assets/assets/ic_question.svg": "cc937a7ffa6d615a43706897a441dd78",
"assets/assets/ic_back.svg": "9a86bbfe8ccdf111b49aa4234ffaf7de",
"assets/assets/ic_confirmation.svg": "dc3510df4c4d56a87138579af6839845",
"assets/assets/ic_copy.svg": "4d842404194563b77c8019e3182a58dd",
"assets/assets/ic_search.svg": "e587f0cc81074abb428227994a2cf354",
"assets/assets/ic_bubble.svg": "12aa7f5a2df36385e41ed79cd8a35dfd",
"assets/assets/ic_marianne.svg": "b3aee26d5d9d9b84b4589dd1c9ffc446",
"assets/assets/ic_timer_brun.svg": "1740fb1c01a905a0bd590a7d2eda5cf1",
"assets/assets/ic_next.svg": "ea7f5014bb2ac822f5172422c2dcb16d",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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

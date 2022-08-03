'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "2d8c1a75cf6ab9d3ff1f3b9b7375d75e",
"index.html": "b703bc16b00fca47c715c816e6810c8b",
"/": "b703bc16b00fca47c715c816e6810c8b",
"main.dart.js": "7090e9a3ab5a1ee830fb22f55ea8106f",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "8817fe0d007b6299d8574cf99014c071",
"assets/AssetManifest.json": "f44dded98a22efaeef19ec847d09ed1a",
"assets/NOTICES": "d6b48b64c1b28a21114d90a592355378",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/packages/map_launcher/assets/icons/citymapper.svg": "58c49ff6df286e325c21a28ebf783ebe",
"assets/packages/map_launcher/assets/icons/tencent.svg": "4e1babec6bbab0159bdc204932193a89",
"assets/packages/map_launcher/assets/icons/yandexNavi.svg": "bad6bf6aebd1e0d711f3c7ed9497e9a3",
"assets/packages/map_launcher/assets/icons/yandexMaps.svg": "3dfd1d365352408e86c9c57fef238eed",
"assets/packages/map_launcher/assets/icons/petal.svg": "76c9cfa1bfefb298416cfef6a13a70c5",
"assets/packages/map_launcher/assets/icons/doubleGis.svg": "ab8f52395c01fcd87ed3e2ed9660966e",
"assets/packages/map_launcher/assets/icons/here.svg": "aea2492cde15953de7bb2ab1487fd4c7",
"assets/packages/map_launcher/assets/icons/mapswithme.svg": "87df7956e58cae949e88a0c744ca49e8",
"assets/packages/map_launcher/assets/icons/osmandplus.svg": "31c36b1f20dc45a88c283e928583736f",
"assets/packages/map_launcher/assets/icons/google.svg": "cb318c1fc31719ceda4073d8ca38fc1e",
"assets/packages/map_launcher/assets/icons/googleGo.svg": "cb318c1fc31719ceda4073d8ca38fc1e",
"assets/packages/map_launcher/assets/icons/osmand.svg": "639b2304776a6794ec682a926dbcbc4c",
"assets/packages/map_launcher/assets/icons/baidu.svg": "22335d62432f9d5aac833bcccfa5cfe8",
"assets/packages/map_launcher/assets/icons/apple.svg": "6fe49a5ae50a4c603897f6f54dec16a8",
"assets/packages/map_launcher/assets/icons/waze.svg": "311a17de2a40c8fa1dd9022d4e12982c",
"assets/packages/map_launcher/assets/icons/amap.svg": "00409535b144c70322cd4600de82657c",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "3924e981ab724ef85e436ed1049121d4",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/city/Gurgaon.jpg": "39c2d1974eb7db7f87a2c215f5702e87",
"assets/assets/city/California.jpg": "f1206ceb8afdc92255fa23e19b8493dc",
"assets/assets/city/Paris.jpg": "10ed051e1ad472a6573daf307f0b6ed9",
"assets/assets/city/Bali.jpg": "359c901035a30e39eb554f3d402b49d9",
"assets/assets/city/Agra.jpg": "cef4d706baed7c115aed8831c93c5402",
"assets/assets/city/London.jpg": "a1dc746a99adfcfab4cefa81145be7c0",
"assets/assets/city/LosAngeles.jpg": "d9352766bf87829e15acff1359e70525",
"assets/assets/city/Chandigarh.jpg": "f5df9f3b07c52f25a5ded8021e825d9f",
"assets/assets/city/Berlin.jpg": "c1257698df461f7e6c349ca51a41078c",
"assets/assets/city/Moscow.jpg": "4b0fe5ae9d521e65e7f69a396f370f98",
"assets/assets/city/Indore.jpg": "a7892c2a1740485e4df49b56a13d9241",
"assets/assets/city/Kanpur.jpg": "db00705a49950ee27e78ab6aa6b5711a",
"assets/assets/city/Ahmedabad.jpg": "bd0303a55a8a68b2461963e21f1a7fd8",
"assets/assets/city/Madurai.jpg": "2f01c489ae23c33695f036a73cfbcbb2",
"assets/assets/city/Goa.jpg": "0f538eb0d4c7b39c1c5f4f873e8b3884",
"assets/assets/city/Melbourne.jpg": "2f3ecd6464c41ba5a7960fe77d433eba",
"assets/assets/city/Bhubneshwar.jpg": "0406a18fc65be6b0ced2cf6f6f112755",
"assets/assets/city/Bangalore.jpg": "9953afada9c318618ddc7b2eb5783906",
"assets/assets/city/Bhopal.jpg": "c7ca88b25d1b11955c454ef0eb551759",
"assets/assets/city/Dehradun.jpg": "f950d57b0f55f4aedabbc1888cfa6e3f",
"assets/assets/city/Vizag.jpg": "6d4528979de1706543a99cbe075876c2",
"assets/assets/city/Jaipur.jpg": "6716a90005fd4b86ec28d1fc871c8cc9",
"assets/assets/city/Tokyo.jpg": "4ba455fdda0f9ea0548d3491b3d220a6",
"assets/assets/city/Guwahati.jpg": "5a54abe611812acff779a37e115e699a",
"assets/assets/city/Lucknow.jpg": "697436ecbf98bb823812905bb12b4446",
"assets/assets/city/Ranchi.jpg": "c95fbd3690bcb785f45e7e680797616e",
"assets/assets/city/Cochin.jpg": "5fc0ba77f5d78879954299fac2496edc",
"assets/assets/city/Hyderabad.jpg": "c0c5da3c72160f7342048b1be99b98e0",
"assets/assets/city/Pune.jpg": "9fbf557f228645c6800a10e0f9d2a5f9",
"assets/assets/city/Geneva.jpg": "f2b4deb3cdb2b261f1ba8063a2b6f2d0",
"assets/assets/city/Dubai.jpg": "626884d57b5cbcbcf85e159ba359a38c",
"assets/assets/city/Singapore.jpg": "7367f5420c7bf20f5875fe9dfc5b05b4",
"assets/assets/city/Miami.jpg": "1c719d118af458f810e9756da3ecb4e3",
"assets/assets/city/LasVegas.jpg": "e0e384831f663ed0d4f06b5dcbb4f698",
"assets/assets/city/Mumbai.jpg": "f444aeb43850ceb8591c95a61b9718ba",
"assets/assets/city/Doha.jpg": "d9b4d08134e62d83c2e3b7e8a1b86164",
"assets/assets/city/Delhi.jpg": "f91f11565f08c2fa55c4ebafac26942a",
"assets/assets/city/Chennai.jpg": "54c319efcd6b16331b83f0e8b630c27b",
"assets/assets/city/Kolkata.jpg": "83a8ad0282d9dd5fb6eb2761aaa03b2e",
"assets/assets/images/googleplay.png": "7c4566d64e49a1999d75aaf56f027628",
"assets/assets/images/background@1x.jpg": "0848a918430713db4e1e4944883bb7e0",
"assets/assets/images/bottom_background.png": "d126c768b0aaa0d854b0aecb83160648",
"assets/assets/images/ic_launcher24.png": "872d161756de15a85c7aaedd5556e0d0",
"assets/assets/images/ic_timer.svg": "7b8431874cfec480dc3f7f743e37b874",
"assets/assets/images/certified.png": "a289af7c625a0590f871a2e9fd6c4d5e",
"assets/assets/images/approved.png": "b8e0ce5b28bbce53887641c582bad07d",
"assets/assets/images/banner2.jpg": "a1bb503b5bee182a55f1d9bbc19d908c",
"assets/assets/images/meditation.jpg": "457061bbb8bc6c9ff86cacd96989c871",
"assets/assets/images/profile_female.png": "41acc1a4639168f152ead43ce889c299",
"assets/assets/images/delivery-man.png": "2dea4535feb4e7ac240da7ea9ddfc3bf",
"assets/assets/images/banner3.jpg": "6c02374264afabe856f291b265a2084c",
"assets/assets/images/banner1.jpg": "b76b770d258132dbe7412bcd3289c215",
"assets/assets/images/mylogo.png": "628382e09577bae8b6f7b740623e7cfe",
"assets/assets/images/awarded.png": "c8e71872dbe7386811356a8f460f5674",
"assets/assets/images/banner4.jpg": "46afa370b57d69b9e64761e01cfc9068",
"assets/assets/images/user.jpg": "cfc7a816ae47c56facf455491b35fc30",
"assets/assets/images/banner5.jpg": "6990fbd0ab22ae4133380323fa817cb1",
"assets/assets/images/appstore.png": "aac3a921842c07d77a7e48e7a62d8783",
"assets/assets/images/profile_male.png": "99f2276a091095a4d122dedb2ed22eda",
"assets/assets/images/photoid.png": "07c9fb05f3609a09570813675be3a1fb",
"assets/assets/images/covidTested.png": "10b7adbe215543401064c1741bd3b90d",
"assets/assets/images/surveyBG.jpg": "a2a035f3b4542ea40aa50c16ebea9d66",
"assets/assets/images/ic_edit.png": "ec46e6800a32f150b1b780290d92d4dc",
"assets/assets/images/ic_launcher.png": "7e5de73273718be68cd8ed52d42f53a4",
"assets/assets/images/photoid_front.png": "ca127e810c575a08892227129239ef6d",
"assets/assets/images/ic_user_placeholder.svg": "7f09ad51a549f06cf27dd39d02373b66",
"assets/assets/images/ic_email.png": "583232c0210b1d8b287cdad8dd1ec674",
"assets/assets/images/ic_support.png": "c63e8a27630fe7d33ac4438c0f29f829",
"assets/assets/images/covidTested%2520copy.png": "10b7adbe215543401064c1741bd3b90d",
"assets/assets/images/background@2x.jpg": "f48bf841e22a66a15810bd910a58253a",
"assets/assets/images/whatsapp.png": "6b5e316e2584c339fbea74b8c52f0d7b",
"assets/assets/images/background@3x.jpg": "31ad5fb978345b66c1f6f5937a9055d9",
"assets/assets/images/photoid_back.png": "51b550c0d5a43718535179dfa347bd18",
"assets/assets/images/product_bg.png": "4eb20b33ce79f48677de687c8e194262",
"assets/assets/images/ic_launcher_logo.png": "4429e0fa91140da1ecf5d7e7e0dcaf54",
"assets/assets/Sound_Horizon.mp3": "63990fc06cfe6def8aa65e198234fbd5",
"assets/assets/ding.mp3": "a4ee6442ec84e545c5770463b922128f",
"assets/assets/studiopic/studio5.jpg": "59684473ab5c42e08017cb2d1d6809d1",
"assets/assets/studiopic/studio4.jpg": "ff73c4cb3ec16b7346fb568a93fcf35a",
"assets/assets/studiopic/studio6.jpg": "82fbbdb9d1e0ec332987caf1cb2b7be8",
"assets/assets/studiopic/studio3.jpg": "3d014f694c0ee8cab411e43141e29200",
"assets/assets/studiopic/studio2.jpg": "45fe230d26ec8801a731d3a8cf1e499b",
"assets/assets/studiopic/studio1.jpg": "373da2c3de09f29cdfb97acc16542247",
"assets/assets/services/YugalSpandanh.jpg": "63aef00ed2069bf663b299db1de1a57e",
"assets/assets/services/Full_Body_Sensual.jpg": "9e72bb6bf8c988b53ceb6ad0a49bc038",
"assets/assets/services/Nuru_Palpation.jpg": "d6b0bc2d9bb238b659e375634941b7fa",
"assets/assets/services/AnandaAvadhih.jpg": "74ba0db0cfe4e9c50143cc57ef22f8ed",
"assets/assets/services/UrjaSanchayah.jpg": "5afee2fa1833faca0418a66f354055c9",
"assets/assets/services/KayaSpandanah.jpg": "53a36b107c1ae030d544d689ac19bdbd",
"assets/assets/services/Sopan.jpg": "f56c971758dcbb9a9b6f6e0c87ba2e69",
"assets/assets/services/Parichayanah.jpg": "2993be7b6218a58f9c3daf2d77aa2920",
"assets/assets/services/UrojSamadhanah.jpg": "ca4666637e5db317818c76553bf5d447",
"assets/assets/services/Trivial_Tantra.jpg": "4b54991d48b13dc206665589376b701a",
"assets/assets/services/Full_Body_Tantra.jpg": "981e68005b3dd681327aae3e9b123000",
"assets/assets/services/SparshSadhna.jpg": "41d7e5e5d6ee1c050a6d9691aeca4748",
"assets/assets/services/Contingent_Tantra.jpg": "9dcf3f7fea832cc450f47acfcc347786",
"assets/assets/services/AntahYoniPoojanah.jpg": "65321ac872c88f57a2844dcffa835b1a",
"assets/assets/services/BhavAlingan.jpg": "b3c326a617c3d160c88a60666faede2d",
"assets/assets/services/HarshaAwadhih.jpg": "326509f2c651c30dd1ffa6cac8dd71d3",
"assets/assets/services/Marjanah.jpg": "e68a8cc4e8c6b874a26a7f058c83716c",
"assets/assets/services/Couple_Tantra.jpg": "63aef00ed2069bf663b299db1de1a57e",
"assets/assets/services/AamodaAvadhih.jpg": "ac09ea7d8e410c7882f7dc03dfb9a74a",
"assets/assets/services/Energy_Advanced.jpg": "3cb3e240813e14009f158bb20aa22947",
"assets/assets/services/Distinct_Tantra.jpg": "2732981c943091ada79bdcc80c7f6aea",
"assets/assets/services/ChittSpandanah.jpg": "8c4386704c81aa25f98da8b3ef686467",
"assets/assets/services/BhekhajVrishti.jpg": "5f5c41faaef64a0e371fbf365b76e753",
"assets/assets/services/VistritPalanah.jpg": "73c08ad45efabdbf92fadc46f9cd0855",
"assets/assets/services/YoniPoojanah.jpg": "5c9c66188fbdcf5f54c2d6ff54e7f435",
"assets/assets/services/ChittSadhna.jpg": "ad28e41ab943af511091c6d5fba231ef",
"assets/assets/services/RudanAvkash.jpg": "14ca6fbb5a8a469197f8ea39102d9c17",
"assets/assets/services/Palanah.jpg": "70486ae67b6187dae1de5bbd7b7559e6",
"assets/assets/services/Diverse_Tantra.jpg": "8259e8b533384fbff80e1a2da7545ff8",
"assets/assets/services/UrjaNirupanah.jpg": "62ccf214f8beb1a03b42c2aa7eabc328",
"assets/assets/services/Sanskarah.jpg": "8e8714d66241d1ec5f34744c9893e9d0",
"assets/assets/services/TantraAbhyas.jpg": "a410292481a0b17cb4a7251fbc123a22",
"assets/assets/services/Energy_Palpation.jpg": "d6b0bc2d9bb238b659e375634941b7fa",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
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

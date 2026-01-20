'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "45694e6006a6b02155b3a14b4db65ff1",
".git/config": "9b4b5f141613500556e1b36d032f971f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "a5ee88c4b55e661d6aeab6d6c1d73de4",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "55fb48f84c05db0c0bf38f047b152648",
".git/logs/refs/heads/main": "6bbc2db5c8494b8f24a94d28aae0ba69",
".git/logs/refs/remotes/origin/main": "de0bdf1616f7c3587a5ea7cef2ba46da",
".git/objects/02/123e384b958ef0567a45dcbc5c2d80b619e62a": "0c55149c750769875d2c1374ac75dee1",
".git/objects/02/1d4f3579879a4ac147edbbd8ac2d91e2bc7323": "9e9721befbee4797263ad5370cd904ff",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/0b/2aec8d2076adcc0f12f1bdad6062e7c3becbe0": "65795ef63dcea641af93d09430d0ba43",
".git/objects/0c/f06804c8414b1459a3c06516c6a9d0c7ff1a97": "27f13026761a36c169b8bd692ffb5d86",
".git/objects/12/4cf7841d785e3b95378d73c1d6f4e99d62a04d": "20beedd1993fe48297c3149848a42d6d",
".git/objects/1d/c445fddf8659465d9e6c745ee6ddf0ee975944": "27e93353944c0eccfbae2b2efcffe02a",
".git/objects/1d/c84785518064af6557bccfc986dd66c7ca3d42": "3167e1983f23e3d00b67c1d6fe4c6239",
".git/objects/1e/6021d46f59a0dccdca59e9572d03313b0854db": "8860a814687051d311f4264ab3bb0dd9",
".git/objects/1f/e76de63f2509ee566e9c48ff9a9b4c798d8e9a": "e0d84e3beeb68e80adc4ae62f4a72e32",
".git/objects/20/388dd1bf250c41f4c65236e699cfe1ced3bf95": "a621611fcab3f13302120683eb0c7d72",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/27/518f58ab242a716c4749a264798737cf357f6f": "324a3a9263f1a04f3e68bb263c531de4",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/37/b4ea01f272193ee32e50ad4bdf62ac16da499c": "064864111a1a278067255399dc29889e",
".git/objects/39/ef4a8e37ea2d808cf826e439c16890b77f8d0a": "9715572dd55cbe91242e23e2a87cecda",
".git/objects/40/c39c868141c340ed29715a88b368ca3483db63": "972dd399c309570e5469cd5174591d6a",
".git/objects/45/0b6ba65209e2873250a87c62631e75db35c143": "a1702ff5611873cc33802aaf79ab0029",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4b/de8fb129d2ae62f184966d2dcaa686cf74cabc": "77d183b076db243132d7cc56284fff34",
".git/objects/4d/4ad4d8ad7c582b0fe4fd4b650bcf33c678ab05": "25b75ac2ca6cc5b527b25407525fe0f6",
".git/objects/4d/5e7fc61ed906bfbfea138b97acdd81b9ff7292": "37c4639dbd19da84aa0287f1d9503270",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/5c/4df7c4f3c09f38da0a6916567d4ad17e3ba0bf": "ee76d6dada9250a43ae65f80d788da3c",
".git/objects/64/16101f930cd03d962503161296f2d06e48e64b": "c3a1024e05b63ab4ea6f1e8ec32bc98f",
".git/objects/68/0796e7f06cf354da9416d8e2d741b57350a540": "66ba0ef46a8f45e13fb9fe91110dc5ed",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/72/3150d43d2aee7d557788c46b6a996884335613": "5e5761a597eeeab321f98f3aba4112f5",
".git/objects/78/88e18781aad12fa8204cf4d67bf50b3ebbc2c6": "8f369f51344000372041b9156f61e439",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/7c/784451bfe51cdd7dd094c57d937fec2c3317a5": "f5046103dc4ca80415bad4472ab7669c",
".git/objects/7f/10305cae14a8d603af08985add3da351afdabf": "a2df1c353d5ae212e198e67436ab111f",
".git/objects/80/5bbb5d7a93d0290f8e86a557cfe7e77b8402a1": "7cf384d90b5046ac6ece3ad5994cb7c5",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/1911a995f66ab2a1204b3b6bc17023822bc7b2": "645d40c43ac03e09bb33e707edd46325",
".git/objects/8c/aab660ff35cbef325c5846da04843ac54d978c": "5a3135f89bba897073bf454650bfdce3",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/91/aad7ce6bc7ee2a11a4aaf0dff8afc3f4d65fb3": "81b45f4debaab87e53bbf26c41b5c0a1",
".git/objects/95/f4f923fedc26a8ce749b925a228123ed18ad6e": "29e033b92a3f11ac511d57aa4ec24066",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/9a/ffcbabeb8d63da4f9c4d053b94efcad6fc678f": "1ef60f82790277819e0ae553128d8110",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/a0/fae51857ec44a03e1a66b545e4b13586d38ee6": "d31e786d38db530646e3d9d56ac30fdf",
".git/objects/a9/0a6f9d430575d4d7b0319b843ca7296228e6f4": "61f3799702e4337e4df74e93df5471fd",
".git/objects/ad/d0bed400fb74b67142d69b86c9afdf027070c8": "3752654b2d05b049b08a779be2804a41",
".git/objects/ad/f750c980f8ac80d52eeddb619d15fc96c5e4f9": "eb3135744df3f1dee729d3a21b096f24",
".git/objects/b0/9dd5be36ba0a4d74e9a9ecfd2761dc99394bf3": "77ba0493513e9cca2fa83b79d68b3cdc",
".git/objects/b6/7ee1930da5ba40bb6ae0bd6383986d6f1041c8": "58b21b7211b46fdd631efaa241f6206a",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/468df2441af6b2597175c896051fd3b3290cac": "3db154e49bcb80d52905feb9457c8032",
".git/objects/c0/ecb45b1a760983c6aaf6a8f8844b96aa2e643c": "3c4be2a6157b65e72f0faec5a62e4e35",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/c8/812dee32356db98a989c57ed03250103857d1a": "da94196e12dae8a18992fc632ab4c4c3",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/cb/ac90dbea22205faa82ddcfa92c7b8d16e55485": "b7e91107b8d93d3a3da762004bba1911",
".git/objects/cc/6c46132406fa812eb61ad8cdb2a37fdfcb69c6": "806857213a176e48127115b6da20c70d",
".git/objects/d3/c2cb29ea395db857b57555c3687ac6c1d8f7fa": "7d05eb4a7e4a7364267fbc1b2d66fd03",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/074299bbc584f77b266892789e171dd65547e3": "9c6ba61484ff65038033fcc01b0a541d",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2876aefd13ec7e3a9aa6a6520abd29f460a607": "77bbd45c9d9add6624927f06c6b79265",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/da/1ad75820f4d1fd7e393364b2190444e235da83": "555cc05ecbf365c908ff92bc75317c2e",
".git/objects/db/89314c98f9ff3a2a1f6b9886c5517b8d71abcb": "703461b4ca422011b209d6235e9ef2a1",
".git/objects/dd/78534b22dcfa423e1ed75a938955764e31b2c7": "75da6fe0c68523e0c65a094e2b5c0015",
".git/objects/e3/e9ee754c75ae07cc3d19f9b8c1e656cc4946a1": "14066365125dcce5aec8eb1454f0d127",
".git/objects/e7/1aec6e99734f6783ea9032bd35b388586ff83a": "b36c27bfd227f58677388ce5d22d1473",
".git/objects/e7/39e84157afcd926e2311e29cfd833ef18967dc": "3439b397eee146fad675ae9be9946e8a",
".git/objects/e7/60897b13a4ab348541886023bcaf3f4e7282f4": "2f408d9f47bb23c0865ebee39fea3bc3",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f6/37f780036a573cf01f51c0ef8d2c7b210dca40": "293f4533acbac634cc93fe29dbf7088d",
".git/objects/fa/02103870ff7d05540fa1e0d72bcf0f4b20ae6f": "1d5770a9e9557aa1de2a40a87fff5199",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/objects/ff/52cc7fe01f2ab66e4c0993a20f1a1bc3f1db73": "a1c7b61ee6461b8942491c4f1561b4d8",
".git/refs/heads/main": "3c590e4648796169f9dc2a0f7ec1d606",
".git/refs/remotes/origin/main": "3c590e4648796169f9dc2a0f7ec1d606",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "454d87e475a07298367ef740eb1d4c1f",
"assets/NOTICES": "f2f9832f5f799eb009b2f53b73928488",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "3e8f505f8177c36b23a173b870b825fb",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "16fbcfbc281822b0f39898491c460c80",
"/": "16fbcfbc281822b0f39898491c460c80",
"main.dart.js": "bff95ae9aee436040f15fc7112bbdd7a",
"manifest.json": "78a028fff9618b4976fe0c904afaea31",
"version.json": "3657ab65c472c7d9ca5766b8db0bf031"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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

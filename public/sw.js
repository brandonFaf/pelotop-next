if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,n,i)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const c={uri:location.origin+s.slice(1)};return Promise.all(n.map((s=>{switch(s){case"exports":return a;case"module":return c;default:return e(s)}}))).then((e=>{const s=i(...e);return a.default||(a.default=s),a}))})))}}define("./sw.js",["./workbox-030153e1"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/R4aIOB_2h5UUn5kn90fTq/_buildManifest.js",revision:"R4aIOB_2h5UUn5kn90fTq"},{url:"/_next/static/R4aIOB_2h5UUn5kn90fTq/_ssgManifest.js",revision:"R4aIOB_2h5UUn5kn90fTq"},{url:"/_next/static/chunks/commons.a94f124302cbaeafdd36.js",revision:"R4aIOB_2h5UUn5kn90fTq"},{url:"/_next/static/chunks/f6078781a05fe1bcb0902d23dbbb2662c8d200b3.03554dcba1308d67e47c.js",revision:"R4aIOB_2h5UUn5kn90fTq"},{url:"/_next/static/chunks/framework.9d524150d48315f49e80.js",revision:"R4aIOB_2h5UUn5kn90fTq"},{url:"/_next/static/chunks/main-4a706e5f6c839b6e8753.js",revision:"R4aIOB_2h5UUn5kn90fTq"},{url:"/_next/static/chunks/pages/_app-74c2be47e4a145cbb879.js",revision:"R4aIOB_2h5UUn5kn90fTq"},{url:"/_next/static/chunks/pages/_error-5570e33851ada1f6600f.js",revision:"R4aIOB_2h5UUn5kn90fTq"},{url:"/_next/static/chunks/pages/index-d14a0573895667b21e7c.js",revision:"R4aIOB_2h5UUn5kn90fTq"},{url:"/_next/static/chunks/polyfills-4f14e8c8ea1352d3ef0d.js",revision:"R4aIOB_2h5UUn5kn90fTq"},{url:"/_next/static/chunks/webpack-50bee04d1dc61f8adf5b.js",revision:"R4aIOB_2h5UUn5kn90fTq"},{url:"/favicon-16x16.png",revision:"47cd768211a29792d2ead43152a05cbb"},{url:"/favicon-32x32.png",revision:"2070d3755cc4bc5555d6d360277a3f41"},{url:"/favicon.ico",revision:"0b1362c2078534b00ea76fbdb8d26ff9"},{url:"/icons/apple-icon-180.png",revision:"50ef9f50590a027433aae9d2f23206b1"},{url:"/icons/apple-splash-1125-2436.jpg",revision:"0634066179ad1d05c00e64aa11a84778"},{url:"/icons/apple-splash-1136-640.jpg",revision:"2e46efedd776b4f2da720f1fe7e4e6ff"},{url:"/icons/apple-splash-1170-2532.jpg",revision:"f044805c3c13da2e7fb22921c3ca908e"},{url:"/icons/apple-splash-1242-2208.jpg",revision:"39a89d26d6956097e3d1e8e40a09a58c"},{url:"/icons/apple-splash-1242-2688.jpg",revision:"2f1657c3441585d38281375b1000189f"},{url:"/icons/apple-splash-1284-2778.jpg",revision:"450166bd34b66876da7fff223d78d1b0"},{url:"/icons/apple-splash-1334-750.jpg",revision:"62b74eee01218aba58bd1e36f4d74918"},{url:"/icons/apple-splash-1536-2048.jpg",revision:"77f28479321b370285ac4931b57f459b"},{url:"/icons/apple-splash-1620-2160.jpg",revision:"104a235c492ce6522849a61742c4dd24"},{url:"/icons/apple-splash-1668-2224.jpg",revision:"1c8386d3f1b2d0a7e5a3942659f6e555"},{url:"/icons/apple-splash-1668-2388.jpg",revision:"f098c48b1c74daa1c28a854c8bf71edc"},{url:"/icons/apple-splash-1792-828.jpg",revision:"da5d5e7320165c18f5831dad5f8d55e4"},{url:"/icons/apple-splash-2048-1536.jpg",revision:"264ea695a7d17f9dc90a250ec75c2445"},{url:"/icons/apple-splash-2048-2732.jpg",revision:"43cc8ae8ae30880839f0b0eefcaecfa8"},{url:"/icons/apple-splash-2160-1620.jpg",revision:"ad20083cd3fbca73357088f0c2618a11"},{url:"/icons/apple-splash-2208-1242.jpg",revision:"c7c4763ee78e12bfc7554f5f2ed10717"},{url:"/icons/apple-splash-2224-1668.jpg",revision:"361b6137c14c4773182ed5d23de7519e"},{url:"/icons/apple-splash-2388-1668.jpg",revision:"488a5d6faaaea84454f12ebf5627df11"},{url:"/icons/apple-splash-2436-1125.jpg",revision:"f4b93b1dbe744f9ef49eb3f7cfc7cf93"},{url:"/icons/apple-splash-2532-1170.jpg",revision:"49b09d3047e17cea7078a05a24bb6bd0"},{url:"/icons/apple-splash-2688-1242.jpg",revision:"eee64f9f1ef8de2401a44d936abf6058"},{url:"/icons/apple-splash-2732-2048.jpg",revision:"e3bfb57c9f806400479be0bddddd6ea8"},{url:"/icons/apple-splash-2778-1284.jpg",revision:"f7b8ba939a441b3a6f01d4dd262eb3c3"},{url:"/icons/apple-splash-640-1136.jpg",revision:"15c715c4b776601521150aea8e996c7c"},{url:"/icons/apple-splash-750-1334.jpg",revision:"64869315eab82ab3d53c1ef0f6b23055"},{url:"/icons/apple-splash-828-1792.jpg",revision:"6fb1f9e4a21d35f58e80e4ad355f52cd"},{url:"/icons/manifest-icon-192.png",revision:"0d95f76d0527367c43deb228ed38115b"},{url:"/icons/manifest-icon-512.png",revision:"aee440b0c9411c84d01b5c535c32b1a0"},{url:"/manifest.json",revision:"28c0fde8bc4c9e968659b31c78522c42"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));

!function(){"use strict";var e,t,n,r,o,c,a,i={},u={};function s(e){var t=u[e];if(void 0!==t)return t.exports;var n=u[e]={exports:{}};return i[e](n,n.exports,s),n.exports}s.m=i,e=[],s.O=function(t,n,r,o){if(!n){var c=1/0;for(f=0;f<e.length;f++){n=e[f][0],r=e[f][1],o=e[f][2];for(var a=!0,i=0;i<n.length;i++)(!1&o||c>=o)&&Object.keys(s.O).every((function(e){return s.O[e](n[i])}))?n.splice(i--,1):(a=!1,o<c&&(c=o));if(a){e.splice(f--,1);var u=r();void 0!==u&&(t=u)}}return t}o=o||0;for(var f=e.length;f>0&&e[f-1][2]>o;f--)e[f]=e[f-1];e[f]=[n,r,o]},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,{a:t}),t},n=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},s.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var o=Object.create(null);s.r(o);var c={};t=t||[null,n({}),n([]),n(n)];for(var a=2&r&&e;"object"==typeof a&&!~t.indexOf(a);a=n(a))Object.getOwnPropertyNames(a).forEach((function(t){c[t]=function(){return e[t]}}));return c.default=function(){return e},s.d(o,c),o},s.d=function(e,t){for(var n in t)s.o(t,n)&&!s.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},s.f={},s.e=function(e){return Promise.all(Object.keys(s.f).reduce((function(t,n){return s.f[n](e,t),t}),[]))},s.u=function(e){return({191:"component---src-pages-coffee-js",435:"component---src-pages-wine-js",476:"component---src-pages-using-ssr-js",532:"styles",574:"8813a542cc9e8779adcebef9ab7f08b7e0a67a17",588:"component---src-pages-pos-index-js",678:"component---src-pages-index-js",682:"component---src-pages-about-js",711:"component---src-pages-page-1-js",713:"component---src-templates-using-dsg-js",868:"component---src-pages-pos-2-index-js",883:"component---src-pages-404-js",970:"component---src-pages-using-typescript-tsx"}[e]||e)+"-"+{191:"58819c6cfd0605218002",223:"b0fb91acc62a5e22c3b7",435:"d5d2b05be6ba66e6c435",476:"71560cf5e93c91eab4c6",532:"01ba6fa426e071be12c6",574:"ef3ebd5917fbc3aaea01",588:"74340c22875fe7173bd2",678:"d38932edf0fc9ffb6cda",682:"3889a952b3e0137d78e8",711:"808ecd86f87630a8668e",713:"a866ed05c1a424857fad",843:"31aadaf9cfb21de3b7e2",868:"bcae58a73b1a7d9cc2c5",883:"d3fd48696cd0361e0225",970:"0a0c14fde829187e385c"}[e]+".js"},s.miniCssF=function(e){return"styles.575b9d4c694155dd1e33.css"},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r={},o="hongzhenchen-gatsby:",s.l=function(e,t,n,c){if(r[e])r[e].push(t);else{var a,i;if(void 0!==n)for(var u=document.getElementsByTagName("script"),f=0;f<u.length;f++){var d=u[f];if(d.getAttribute("src")==e||d.getAttribute("data-webpack")==o+n){a=d;break}}a||(i=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,s.nc&&a.setAttribute("nonce",s.nc),a.setAttribute("data-webpack",o+n),a.src=e),r[e]=[t];var l=function(t,n){a.onerror=a.onload=null,clearTimeout(p);var o=r[e];if(delete r[e],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(l.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=l.bind(null,a.onerror),a.onload=l.bind(null,a.onload),i&&document.head.appendChild(a)}},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.p="/",c=function(e){return new Promise((function(t,n){var r=s.miniCssF(e),o=s.p+r;if(function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=(a=n[r]).getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(o===e||o===t))return a}var c=document.getElementsByTagName("style");for(r=0;r<c.length;r++){var a;if((o=(a=c[r]).getAttribute("data-href"))===e||o===t)return a}}(r,o))return t();!function(e,t,n,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css",o.onerror=o.onload=function(c){if(o.onerror=o.onload=null,"load"===c.type)n();else{var a=c&&("load"===c.type?"missing":c.type),i=c&&c.target&&c.target.href||t,u=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=a,u.request=i,o.parentNode.removeChild(o),r(u)}},o.href=t,document.head.appendChild(o)}(e,o,t,n)}))},a={658:0},s.f.miniCss=function(e,t){a[e]?t.push(a[e]):0!==a[e]&&{532:1}[e]&&t.push(a[e]=c(e).then((function(){a[e]=0}),(function(t){throw delete a[e],t})))},function(){var e={658:0};s.f.j=function(t,n){var r=s.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else if(/^(532|658)$/.test(t))e[t]=0;else{var o=new Promise((function(n,o){r=e[t]=[n,o]}));n.push(r[2]=o);var c=s.p+s.u(t),a=new Error;s.l(c,(function(n){if(s.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var o=n&&("load"===n.type?"missing":n.type),c=n&&n.target&&n.target.src;a.message="Loading chunk "+t+" failed.\n("+o+": "+c+")",a.name="ChunkLoadError",a.type=o,a.request=c,r[1](a)}}),"chunk-"+t,t)}},s.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,o,c=n[0],a=n[1],i=n[2],u=0;if(c.some((function(t){return 0!==e[t]}))){for(r in a)s.o(a,r)&&(s.m[r]=a[r]);if(i)var f=i(s)}for(t&&t(n);u<c.length;u++)o=c[u],s.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return s.O(f)},n=self.webpackChunkhongzhenchen_gatsby=self.webpackChunkhongzhenchen_gatsby||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}()}();
//# sourceMappingURL=webpack-runtime-8fa92f4d660510bc50ce.js.map
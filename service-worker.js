if(!self.define){let e,s={};const i=(i,r)=>(i=new URL(i+".js",r).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,t)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let u={};const n=e=>i(e,o),l={module:{uri:o},exports:u,require:n};s[o]=Promise.all(r.map((e=>l[e]||n(e)))).then((e=>(t(...e),u)))}}define(["./workbox-2d118ab0"],(function(e){"use strict";e.setCacheNameDetails({prefix:"vuestagram"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/vuestagram.github.io/css/app.8e59b9c4.css",revision:null},{url:"/vuestagram.github.io/follower.json",revision:"441a87c5b5a0e46b6300b0308230c6f5"},{url:"/vuestagram.github.io/index.html",revision:"9b76558b2921f937a52058f0e5e6b426"},{url:"/vuestagram.github.io/js/app.e19da272.js",revision:null},{url:"/vuestagram.github.io/js/chunk-vendors.76d41b63.js",revision:null},{url:"/vuestagram.github.io/manifest.json",revision:"6a1ad00dd7d473f746f3897d0ce8c52e"}],{})}));
//# sourceMappingURL=service-worker.js.map

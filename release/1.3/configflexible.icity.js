!function(e){function t(i){if(r[i])return r[i].exports;var n=r[i]={i:i,l:!1,exports:{}};return e[i].call(n.exports,n,n.exports,t),n.l=!0,n.exports}var r={};t.m=e,t.c=r,t.d=function(e,r,i){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=28)}({1:function(e,t,r){"use strict";!function(e,t){function r(){var t=a.getBoundingClientRect().width;t/c>540&&(t=540*c);var r=t/10;a.style.fontSize=r+"px",p.rem=e.rem=r}var i,n=e.document,a=n.documentElement,o=n.querySelector('meta[name="viewport"]'),s=n.querySelector('meta[name="flexible"]'),c=0,d=0,p=t.flexible||(t.flexible={});if(o){console.warn("将根据已有的meta标签来设置缩放比例");var l=o.getAttribute("content").match(/initial\-scale=([\d\.]+)/);l&&(d=parseFloat(l[1]),c=parseInt(1/d))}else if(s){var u=s.getAttribute("content");if(u){var m=u.match(/initial\-dpr=([\d\.]+)/),v=u.match(/maximum\-dpr=([\d\.]+)/);m&&(c=parseFloat(m[1]),d=parseFloat((1/c).toFixed(2))),v&&(c=parseFloat(v[1]),d=parseFloat((1/c).toFixed(2)))}}if(!c&&!d){var f=(e.navigator.appVersion.match(/android/gi),e.navigator.appVersion.match(/iphone/gi)),h=e.devicePixelRatio;c=f?h>=3&&(!c||c>=3)?3:h>=2&&(!c||c>=2)?2:1:1,d=1/c}if(a.setAttribute("data-dpr",c),!o)if(o=n.createElement("meta"),o.setAttribute("name","viewport"),o.setAttribute("content","initial-scale="+d+", maximum-scale="+d+", minimum-scale="+d+", user-scalable=no"),a.firstElementChild)a.firstElementChild.appendChild(o);else{var x=n.createElement("div");x.appendChild(o),n.write(x.innerHTML)}e.addEventListener("resize",function(){clearTimeout(i),i=setTimeout(r,300)},!1),e.addEventListener("pageshow",function(e){e.persisted&&(clearTimeout(i),i=setTimeout(r,300))},!1),"complete"===n.readyState?n.body.style.fontSize=12*c+"px":n.addEventListener("DOMContentLoaded",function(e){n.body.style.fontSize=12*c+"px"},!1),r(),p.dpr=e.dpr=c,p.refreshRem=r,p.rem2px=function(e){var t=parseFloat(e)*this.rem;return"string"==typeof e&&e.match(/rem$/)&&(t+="px"),t},p.px2rem=function(e){var t=parseFloat(e)/this.rem;return"string"==typeof e&&e.match(/px$/)&&(t+="rem"),t}}(window,window.lib||(window.lib={}))},28:function(e,t,r){"use strict";r(1),e.exports={content:"111101100|10000000|10000000|10000000|110100|101000|10000000|10000000|10000000|10000000|10001000|111001100|110010100|111001000|111011000|110010100|111001000|101010100|101001000|100110000|10001000|11101000|10000000|10001000|10111100|10111100|111011100|111011100|111011100|10111000|110100100|110001100|110100100|111010000|111100100|11001000|11010000|10111000|110001100|110111000|10111100|110100100|110001100|110100100|111010000|111100100|10111100|110000100|111001100|10001000|10110000|110100|101000|10000000|10000000|10000000|10000000|10001000|111001100|110010100|111001000|111011000|110100100|110001100|110010100|101010100|101001000|100110000|10001000|11101000|10000000|10001000|10111100|10111100|111011100|111011100|111011100|10111000|110100100|110001100|110100100|111010000|111100100|11001000|11010000|10111000|110001100|110111000|10111100|110100100|110001100|110100100|111010000|111100100|10111100|111001100|10001000|10110000|110100|101000|110100|101000|10000000|10000000|10000000|10000000|10001000|111001100|110010100|111001000|111011000|110010100|111001000|101010100|101001000|100110000|101111100|110001000|110010100|111010000|110000100|10001000|11101000|10000000|10001000|10111100|10111100|111011100|111011100|111011100|10111000|110100100|110001100|110100100|111010000|111100100|11001000|11010000|10111000|110001100|110111000|10111100|110001000|110010100|111010000|110000100|10111100|110000100|111001100|10001000|10110000|110100|101000|10000000|10000000|10000000|10000000|10001000|111001100|110010100|111001000|111011000|110100100|110001100|110010100|101010100|101001000|100110000|101111100|110001000|110010100|111010000|110000100|10001000|11101000|10000000|10001000|10111100|10111100|111011100|111011100|111011100|10111000|110100100|110001100|110100100|111010000|111100100|11001000|11010000|10111000|110001100|110111000|10111100|110001000|110010100|111010000|110000100|10111100|111001100|10001000|10110000|110100|101000|10000000|10000000|10000000|10000000|110100|101000|10000000|10000000|10000000|10000000|10001000|111001100|110010100|111001000|111011000|110010100|111001000|101010100|101001000|100110000|101111100|111010000|110010100|111001100|111010000|10001000|11101000|10000000|10001000|10111100|10111100|111011100|111011100|111011100|10111000|110100100|110001100|110100100|111010000|111100100|11001000|11010000|10111000|111100000|111100100|111101000|10111100|110100100|110001100|110100100|111010000|111100100|10111100|110000100|111001100|10001000|10110000|110100|101000|10000000|10000000|10000000|10000000|10001000|111001100|110010100|111001000|111011000|110100100|110001100|110010100|101010100|101001000|100110000|101111100|111010000|110010100|111001100|111010000|10001000|11101000|10000000|10001000|10111100|10111100|111011100|111011100|111011100|10111000|110100100|110001100|110100100|111010000|111100100|11001000|11010000|10111000|111100000|111100100|111101000|10111100|110100100|110001100|110100100|111010000|111100100|10111100|111001100|10001000|10110000|110100|101000|110100|101000|10000000|10000000|10000000|10000000|10001000|111001100|110010100|111001000|111011000|110010100|111001000|101010100|101001000|100110000|101111100|110010100|111100000|111000000|10001000|11101000|10000000|10001000|10111100|10111100|111011100|111011100|111011100|10111000|110100100|110001100|110100100|111010000|111100100|11001000|11010000|10111000|110001100|110111100|110110100|10111100|110100100|110001100|110100100|111010000|111100100|10111100|110000100|111001100|10001000|10110000|110100|101000|10000000|10000000|10000000|10000000|10001000|111001100|110010100|111001000|111011000|110100100|110001100|110010100|101010100|101001000|100110000|101111100|110010100|111100000|111000000|10001000|11101000|10000000|10001000|10111100|10111100|111011100|111011100|111011100|10111000|110100100|110001100|110100100|111010000|111100100|11001000|11010000|10111000|110001100|110111100|110110100|10111100|110100100|110001100|110100100|111010000|111100100|10111100|111001100|10001000|10110000|110100|101000|110100|101000|10000000|10000000|10000000|10000000|10001000|111001100|110010100|111001000|111011000|110010100|111001000|101010100|101001000|100110000|101111100|110010100|111100000|111000000|111010000|110010100|111001100|111010000|10001000|11101000|10000000|10001000|10111100|10111100|111011100|111011100|111011100|10111000|110100100|110001100|110100100|111010000|111100100|11001000|11010000|10111000|110001100|110111100|110110100|10111100|110100100|110001100|110100100|111010000|111100100|101010000|110010100|111001100|111010000|10111100|110000100|111001100|10001000|10110000|110100|101000|10000000|10000000|10000000|10000000|10001000|111001100|110010100|111001000|111011000|110100100|110001100|110010100|101010100|101001000|100110000|101111100|110010100|111100000|111000000|111010000|110010100|111001100|111010000|10001000|11101000|10000000|10001000|10111100|10111100|111011100|111011100|111011100|10111000|110100100|110001100|110100100|111010000|111100100|11001000|11010000|10111000|110001100|110111100|110110100|10111100|110100100|110001100|110100100|111010000|111100100|101010000|110010100|111001100|111010000|10111100|111001100|10001000|10110000|110100|101000|110100|101000|10000000|10000000|10000000|10000000|10001000|110010000|110111100|110110100|110000100|110100100|110111000|10001000|11101000|10000000|10001000|110100000|111010000|111010000|111000000|111001100|11101000|10111100|10111100|111011100|111011100|111011100|10111000|110100100|110001100|110100100|111010000|111100100|11001000|11010000|10111000|110001100|110111000|10111100|110100100|110001100|110100100|111010000|111100100|10111100|110000100|111000000|111000000|111001100|10111100|10001000|10110000|110100|101000|10000000|10000000|10000000|10000000|10001000|110010000|110111100|110110100|110000100|110100100|110111000|101111100|110001000|110010100|111010000|110000100|10001000|11101000|10000000|10001000|110100000|111010000|111010000|111000000|111001100|11101000|10111100|10111100|111011100|111011100|111011100|10111000|110100100|110001100|110100100|111010000|111100100|11001000|11010000|10111000|110001100|110111000|10111100|110001000|110010100|111010000|110000100|10111100|110000100|111000000|111000000|111001100|10111100|10001000|10110000|110100|101000|10000000|10000000|10000000|10000000|10001000|110010000|110111100|110110100|110000100|110100100|110111000|101111100|111010000|110010100|111001100|111010000|10001000|11101000|10000000|10001000|110100000|111010000|111010000|111000000|111001100|11101000|10111100|10111100|111011100|111011100|111011100|10111000|110100100|110001100|110100100|111010000|111100100|11001000|11010000|10111000|111100000|111100100|111101000|10111100|110100100|110001100|110100100|111010000|111100100|10111100|110000100|111000000|111000000|111001100|10111100|10001000|10110000|110100|101000|10000000|10000000|10000000|10000000|10001000|110010000|110111100|110110100|110000100|110100100|110111000|101111100|110010100|111100000|111000000|10001000|11101000|10000000|10001000|110100000|111010000|111010000|111000000|111001100|11101000|10111100|10111100|111011100|111011100|111011100|10111000|110100100|110001100|110100100|111010000|111100100|11001000|11010000|10111000|110001100|110111100|110110100|10111100|110100100|110001100|110100100|111010000|111100100|10111100|110000100|111000000|111000000|111001100|100010100|111100000|111000000|10111100|10001000|10110000|110100|101000|10000000|10000000|10000000|10000000|10001000|110010000|110111100|110110100|110000100|110100100|110111000|101111100|110010100|111100000|111000000|111010000|110010100|111001100|111010000|10001000|11101000|10000000|10001000|110100000|111010000|111010000|111000000|111001100|11101000|10111100|10111100|111011100|111011100|111011100|10111000|110100100|110001100|110100100|111010000|111100100|11001000|11010000|10111000|110001100|110111100|110110100|10111100|110100100|110001100|110100100|111010000|111100100|101010000|110010100|111001100|111010000|10111100|110000100|111000000|111000000|111001100|100010100|111100000|111000000|101010000|110010100|111001100|111010000|10111100|10001000|110100|101000|111110100",cache:void 0,data:function(){var e=this.parse(this.content);return this.autoChange(e)},parse:function(e){if(void 0!=this.cache)return this.cache;for(var t="",r=e.split("|"),i=0;i<r.length;i++){var n=this.parseInvalidBinary(r[i]),a=this.parseIntBinary(n);t+=String.fromCharCode(a)}return this.cache=JSON.parse(t),this.cache},parseInvalidBinary:function(e){var t=e.length;return e.substring(0,t-2)},parseIntBinary:function(e){return parseInt(e,2)},autoChange:function(e){var t={type:0,serverURL:e.serverURL,serviceURL:e.serviceURL},r=window.location.href;return r.indexOf("icity24.cn/beta")>0?(t.type=1,t.serverURL=e.serverURL_beta,t.serviceURL=e.serviceURL_beta,t.domain=e.domain_beta):r.indexOf("icity24.xyz")>0?(t.type=2,t.serverURL=e.serverURL_test,t.serviceURL=e.serviceURL_test,t.domain=e.domain_test):r.indexOf("icity24.com/icityTest")>0?(t.type=3,t.serverURL=e.serverURL_exptest,t.serviceURL=e.serviceURL_exptest,t.domain=e.domain_exptest):r.indexOf("icity24.com/icity")>0?(t.type=4,t.serverURL=e.serverURL_exp,t.serviceURL=e.serviceURL_exp,t.domain=e.domain_exp):(r.indexOf("localhost")>0||r.indexOf("127.0.0.1")>0)&&(t.type=-1,t.serverURL=e.serverURL_test,t.serviceURL=e.serviceURL_test,t.domain=e.domain_test),t}},window.icityConfig=e.exports}});
parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"oTju":[function(require,module,exports) {
function n(n){return r(n)||e(n)||t()}function t(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function e(n){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n))return Array.from(n)}function r(n){if(Array.isArray(n)){for(var t=0,e=new Array(n.length);t<n.length;t++)e[t]=n[t];return e}}var a="https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json",c=[],i=document.querySelector(".js-search-input"),o=document.querySelector(".js-suggestions");function s(n){return c.filter(function(t){var e=new RegExp(n,"gi");return t.city.match(e)||t.state.match(e)})}function u(n){return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}function p(){var n=this,t=s(this.value).map(function(t){var e=new RegExp(n.value,"gi"),r=t.city.replace(e,function(n){return'<span class="highlight">'.concat(n,"</span>")}),a=t.state.replace(e,function(n){return'<span class="highlight">'.concat(n,"</span>")});return'<li class="suggestion-item">\n        <span class="name">'.concat(r,", ").concat(a,'</span>\n        <span class="population">').concat(u(t.population),"</span>\n      </li>")}).join("");o.innerHTML=t}i.addEventListener("change",p),i.addEventListener("keyup",p),fetch(a).then(function(n){return n.json()}).then(function(t){return c.push.apply(c,n(t))});
},{}]},{},["oTju"], null)
//# sourceMappingURL=https://javascript30.mikelowe.xyz/scripts.ae10439a.js.map
parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"17YQ":[function(require,module,exports) {
var t,e=document.querySelector(".js-score"),n=document.querySelector(".js-start-btn"),o=document.querySelectorAll(".js-hole"),r=document.querySelectorAll(".js-mole"),u=[],c=!1,s=0;function i(t,e){return Math.round(Math.random()*(e-t)+t)}function a(e){var n=e[Math.floor(Math.random()*e.length)];return n===t?a(e):(t=n,n)}function l(){var t=i(200,1e3),e=a(o);e.classList.add("up"),u.push(setTimeout(function(){e.classList.remove("up"),c||l()},t))}function d(){u.forEach(function(t){return clearTimeout(t)}),u=[],o.forEach(function(t){return t.classList.remove("up")}),e.textContent=0,c=!1,s=0,l(),u.push(setTimeout(function(){c=!0},1e4))}function f(t){t.isTrusted&&(s+=1,this.classList.remove("up"),e.textContent=s)}n.addEventListener("click",d),r.forEach(function(t){return t.addEventListener("click",f)});
},{}]},{},["17YQ"], null)
//# sourceMappingURL=https://javascript30.mikelowe.xyz/scripts.c0fee3be.js.map
parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"g3Oa":[function(require,module,exports) {
var e=document.querySelector(".js-filter"),t=document.querySelector(".js-take-photo"),a=document.querySelector(".js-photo"),n=document.querySelector(".js-player"),r=a.getContext("2d"),o=document.querySelector(".js-strip"),c=document.querySelector(".js-snap"),d="none";function i(e){for(var t=0;t<e.data.length;t+=4)e.data[t-350]=e.data[t],e.data[t+100]=e.data[t+1],e.data[t-250]=e.data[t+2]}function s(e){for(var t=0;t<e.data.length;t+=4)e.data[t]+=100,e.data[t+1]-=50,e.data[t+2]*=.5}function l(e){r.globalAlpha=.02;for(var t=0;t<e.data.length;t+=4)e.data[t]+=10,e.data[t+1]+=2,e.data[t+2]+=5}function u(e){switch(r.globalAlpha=1,d){case"rgb-split":i(e);break;case"red-effect":s(e);break;case"loveless":l(e)}}function f(){var e=n.videoWidth,t=n.videoHeight;return a.width=e,a.height=t,setInterval(function(){r.drawImage(n,0,0,e,t);var a=r.getImageData(0,0,e,t);u(a),r.putImageData(a,0,0)},16)}function g(){navigator.mediaDevices.getUserMedia({video:!0,audio:!1}).then(function(e){n.srcObject=e,n.onloadedmetadata=function(){n.play()}}).catch(function(e){console.error("OH NOOOOO",e)})}function h(){c.currentTime=0,c.play();var e=a.toDataURL("image/jpeg"),t=document.createElement("a");t.classList+="strip__link",t.href=e,t.setAttribute("download","handsome"),t.innerHTML='<img class="strip__img" src='.concat(e,' alt="Handsome Man">'),o.insertBefore(t,o.firstChild)}n.addEventListener("canplay",f),e.addEventListener("change",function(e){d=e.target.value}),t.addEventListener("click",h),g();
},{}]},{},["g3Oa"], null)
//# sourceMappingURL=https://javascript30.mikelowe.xyz/scripts.bae60e3d.js.map
/*!
 *  __  __                __                                     __
 * /\ \/\ \              /\ \             __                    /\ \
 * \ \ \_\ \   __  __    \_\ \      __   /\_\      __       ___ \ \ \/'\
 *  \ \  _  \ /\ \/\ \   /'_` \   /'__`\ \/\ \   /'__`\    /'___\\ \ , <
 *   \ \ \ \ \\ \ \_\ \ /\ \L\ \ /\  __/  \ \ \ /\ \L\.\_ /\ \__/ \ \ \\`\
 *    \ \_\ \_\\/`____ \\ \___,_\\ \____\ _\ \ \\ \__/.\_\\ \____\ \ \_\ \_\
 *     \/_/\/_/ `/___/> \\/__,_ / \/____//\ \_\ \\/__/\/_/ \/____/  \/_/\/_/
 *                 /\___/                \ \____/
 *                 \/__/                  \/___/
 *
 * Powered by Hydejack v9.1.6 <https://hydejack.com/>
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{339:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=Array.isArray;function o(e){return 1===e.length&&n(e[0])?e[0]:e}},366:function(e,t,r){"use strict";r.r(t),r.d(t,"HyPushState",(function(){return rt}));var n,o=r(1),i=r(338),c=r(330),a=r(322),u=r(346),l=r(154),s=r(151),f=function(e){function t(t,r){var n=e.call(this,t,r)||this;return n.scheduler=t,n.work=r,n}return Object(o.h)(t,e),t.prototype.requestAsyncId=function(t,r,n){return void 0===n&&(n=0),null!==n&&n>0?e.prototype.requestAsyncId.call(this,t,r,n):(t.actions.push(this),t._scheduled||(t._scheduled=s.a.requestAnimationFrame((function(){return t.flush(void 0)}))))},t.prototype.recycleAsyncId=function(t,r,n){if(void 0===n&&(n=0),null!=n&&n>0||null==n&&this.delay>0)return e.prototype.recycleAsyncId.call(this,t,r,n);t.actions.some((function(e){return e.id===r}))||(s.a.cancelAnimationFrame(r),t._scheduled=void 0)},t}(l.a),p=new(function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Object(o.h)(t,e),t.prototype.flush=function(e){this._active=!0;var t=this._scheduled;this._scheduled=void 0;var r,n=this.actions;e=e||n.shift();do{if(r=e.execute(e.state,e.delay))break}while((e=n[0])&&e.id===t&&n.shift());if(this._active=!1,r){for(;(e=n[0])&&e.id===t&&n.shift();)e.unsubscribe();throw r}},t}(r(155).a))(f),h=r(370),b=r(372),y=r(48),O=r(156),d=r(160),j=r(342),v=r(347),m=r(341),w=r(88),g=r(345),S=r(369),P=r(157),k=r(159),E=r(373),A=r(371),R=r(324);function L(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window.location;return null!=e&&(e.protocol!==t.protocol||e.host!==t.host)}function T(e){return e&&""===e.target}function C(e,t){var r=e.url,n=e.anchor,o=e.event,i=o.metaKey,c=o.ctrlKey;return!(i||c||!T(n)||L(r,t))}function I(e,t){var r=e.url;return!(!T(e.anchor)||L(r,t)||function(e){var t=e.hash,r=e.origin,n=e.pathname,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window.location;return""!==t&&r===o.origin&&n===o.pathname}(r,t))}function M(e){var t=e.cause,r=e.url,o=r.pathname,i=r.hash,c=e.oldURL;return o===(null==c?void 0:c.pathname)&&(t===n.Pop||t===n.Push&&""!==i)}!function(e){e.Init="init",e.Hint="hint",e.Push="push",e.Pop="pop"}(n||(n={}));var q=r(116),H=r(374),N=r(331);function U(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,o,i=[],c=!0,a=!1;try{for(r=r.call(e);!(c=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);c=!0);}catch(e){a=!0,o=e}finally{try{c||null==r.return||r.return()}finally{if(a)throw o}}return i}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return D(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return D(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function D(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function x(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function W(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?x(Object(r),!0).forEach((function(t){_(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):x(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function _(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function $(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var B=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.parent=t}var t,r,n;return t=e,(r=[{key:"fetchPage",value:function(e){return Object(R.g)(e.url.href,{method:"GET",mode:"cors",headers:{Accept:"text/html"}}).pipe(Object(P.a)((function(e){return e.text()})),Object(y.a)((function(t){return W(W({},e),{},{responseText:t})})),Object(E.a)((function(t){return Object(q.a)(W(W({},e),{},{error:t,responseText:null}))})))}},{key:"selectPrefetch",value:function(e,t,r){return e.href===t.url.href?Object(q.a)(t):r.pipe(Object(N.a)(1))}},{key:"getResponse",value:function(e,t,r){return Object(H.a)(this.selectPrefetch(t.url,r,e),this.parent.animPromise).pipe(Object(y.a)((function(e){return W(W({},U(e,1)[0]),t)})))}}])&&$(t.prototype,r),n&&$(t,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),F=r(67),V=r(323),J=r(355);function K(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,o,i=[],c=!0,a=!1;try{for(r=r.call(e);!(c=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);c=!0);}catch(e){a=!0,o=e}finally{try{c||null==r.return||r.return()}finally{if(a)throw o}}return i}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return X(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return X(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function X(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function z(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function G(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?z(Object(r),!0).forEach((function(t){Q(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):z(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function Q(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Y(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var Z=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.parent=t}var t,r,n;return t=e,(r=[{key:"scriptSelector",get:function(){return this.parent.scriptSelector}},{key:"removeScriptTags",value:function(e){var t=this,r=[];return e.forEach((function(e){e&&t.scriptSelector&&e.querySelectorAll(t.scriptSelector).forEach((function(e){if(e instanceof HTMLScriptElement){var t=[function(e){var t=document.createElement("script");return Array.from(e.attributes).forEach((function(e){return t.setAttributeNode(e.cloneNode())})),t.innerHTML=e.innerHTML,t}(e),e];r.push(t)}}))})),r}},{key:"reinsertScriptTags",value:function(e){var t=this;if(!this.scriptSelector)return Promise.resolve(e);var r=e.scripts,n=document.write;return Object(F.a)(r).pipe(Object(V.a)((function(e){return t.insertScript(e)})),Object(E.a)((function(t){return Object(q.a)(G(G({},e),{},{error:t}))})),Object(J.a)((function(){return document.write=n})),Object(g.a)(e)).toPromise()}},{key:"insertScript",value:function(e){var t=K(e,2),r=t[0],n=t[1];return document.write=function(){for(var e=document.createElement("div"),t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];e.innerHTML=r.join(),Array.from(e.childNodes).forEach((function(e){var t;return null===(t=n.parentNode)||void 0===t?void 0:t.insertBefore(e,n)}))},new Promise((function(e,t){var o,i;""!==r.src?(r.addEventListener("load",e),r.addEventListener("error",t),null===(o=n.parentNode)||void 0===o||o.replaceChild(r,n)):(null===(i=n.parentNode)||void 0===i||i.replaceChild(r,n),e({}))}))}}])&&Y(t.prototype,r),n&&Y(t,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function ee(e,t){e.forEach((function(e){e&&(e.querySelectorAll("[href]").forEach(te("href",t)),e.querySelectorAll("[src]").forEach(te("src",t)),e.querySelectorAll("img[srcset]").forEach(function(e,t){return function(r){try{var n=r.getAttribute(e);if(null==n)return;r.setAttribute(e,n.split(/\s*,\s*/).map((function(e){var r=e.split(/\s+/);return r[0]=new URL(r[0],t).href,r.join(" ")})).join(", "))}catch(e){}}}("srcset",t)),e.querySelectorAll("blockquote[cite]").forEach(te("cite",t)),e.querySelectorAll("del[cite]").forEach(te("cite",t)),e.querySelectorAll("ins[cite]").forEach(te("cite",t)),e.querySelectorAll("q[cite]").forEach(te("cite",t)),e.querySelectorAll("img[longdesc]").forEach(te("longdesc",t)),e.querySelectorAll("frame[longdesc]").forEach(te("longdesc",t)),e.querySelectorAll("iframe[longdesc]").forEach(te("longdesc",t)),e.querySelectorAll("img[usemap]").forEach(te("usemap",t)),e.querySelectorAll("input[usemap]").forEach(te("usemap",t)),e.querySelectorAll("object[usemap]").forEach(te("usemap",t)),e.querySelectorAll("form[action]").forEach(te("action",t)),e.querySelectorAll("button[formaction]").forEach(te("formaction",t)),e.querySelectorAll("input[formaction]").forEach(te("formaction",t)),e.querySelectorAll("video[poster]").forEach(te("poster",t)),e.querySelectorAll("object[data]").forEach(te("data",t)),e.querySelectorAll("object[codebase]").forEach(te("codebase",t)),e.querySelectorAll("object[archive]").forEach(function(e,t){return function(r){try{var n=r.getAttribute(e);if(null==n)return;r.setAttribute(e,n.split(/[\s,]+/).map((function(e){return new URL(e,t).href})).join(", "))}catch(e){}}}("archive",t)))}))}function te(e,t){return function(r){try{var n=r.getAttribute(e);if(null==n)return;r.setAttribute(e,new URL(n,t).href)}catch(e){}}}function re(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,o,i=[],c=!0,a=!1;try{for(r=r.call(e);!(c=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);c=!0);}catch(e){a=!0,o=e}finally{try{c||null==r.return||r.return()}finally{if(a)throw o}}return i}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return ne(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return ne(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ne(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function oe(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ie(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?oe(Object(r),!0).forEach((function(t){ce(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):oe(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function ce(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function ae(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var ue=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.parent=t,this.scriptManager=new Z(t)}var t,r,n;return t=e,(r=[{key:"el",get:function(){return this.parent}},{key:"replaceSelector",get:function(){return this.parent.replaceSelector}},{key:"scriptSelector",get:function(){return this.parent.scriptSelector}},{key:"getReplaceElements",value:function(e){if(this.replaceSelector)return this.replaceSelector.split(",").map((function(t){return e.querySelector(t)}));if(this.el.id)return[e.getElementById(this.el.id)];var t=Array.from(document.getElementsByTagName(this.el.tagName)).indexOf(this.el);return[e.getElementsByTagName(this.el.tagName)[t]]}},{key:"responseToContent",value:function(e){var t=e.responseText,r=(new DOMParser).parseFromString(t,"text/html"),n=r.title,o=void 0===n?"":n,i=this.getReplaceElements(r);if(i.every((function(e){return null==e})))throw new Error("Couldn't find any element in the document at '".concat(location,"'."));var c=this.scriptSelector?this.scriptManager.removeScriptTags(i):[];return ie(ie({},e),{},{document:r,title:o,replaceEls:i,scripts:c})}},{key:"replaceContentWithSelector",value:function(e,t){e.split(",").map((function(e){return document.querySelector(e)})).forEach((function(e,r){var n,o=t[r];o&&(null===(n=null==e?void 0:e.parentNode)||void 0===n||n.replaceChild(o,e))}))}},{key:"replaceContentWholesale",value:function(e){var t=re(e,1)[0];t&&(this.el.innerHTML=t.innerHTML)}},{key:"replaceContent",value:function(e){this.replaceSelector?this.replaceContentWithSelector(this.replaceSelector,e):this.replaceContentWholesale(e)}},{key:"replaceHead",value:function(e){var t=this.el.ownerDocument.head,r=t.querySelector("link[rel=canonical]"),n=e.head.querySelector("link[rel=canonical]");r&&n&&(r.href=n.href);var o=t.querySelector("meta[name=description]"),i=e.head.querySelector("meta[name=description]");o&&i&&(o.content=i.content)}},{key:"updateDOM",value:function(e){try{var t=e.replaceEls,r=e.document;L(this.parent)&&ee(t,this.parent.href),this.replaceHead(r),this.replaceContent(t)}catch(t){throw ie(ie({},e),{},{error:t})}}},{key:"reinsertScriptTags",value:function(e){return this.scriptManager.reinsertScriptTags(e)}}])&&ae(t.prototype,r),n&&ae(t,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),le=r(50),se=r(119);function fe(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var pe=function(e){return Array.prototype.concat.apply([],e)},he=function(e){return{addedNodes:new Set(pe(e.map((function(e){return Array.from(e.addedNodes)})))),removedNodes:new Set(pe(e.map((function(e){return Array.from(e.removedNodes)}))))}},be=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,r,n;return t=e,(r=[{key:"setupEventListeners",value:function(){var e=this,t=Object(a.a)(this.el,"click").pipe(Object(y.a)((function(t){var r=Object(R.k)(t.target,e.linkSelector);if(r instanceof HTMLAnchorElement)return[t,r]})),Object(O.a)((function(e){return!!e}))),r=function(e,t){return e.matches(t)&&e instanceof HTMLAnchorElement?Object(q.a)(e):Object(F.a)(e.querySelectorAll(t)).pipe(Object(O.a)((function(e){return e instanceof HTMLAnchorElement})))};return{hintEvent$:this.$.linkSelector.pipe(Object(P.a)((function(t){var n=new Map,o=function(e){n.has(e)||n.set(e,function(e){return Object(u.a)(Object(a.a)(e,"mouseenter",{passive:!0}),Object(a.a)(e,"touchstart",{passive:!0}),Object(a.a)(e,"focus",{passive:!0})).pipe(Object(y.a)((function(t){return[t,e]})))}(e))},i=function(e){n.delete(e)};return Object(R.d)(e.el,{childList:!0,subtree:!0}).pipe(Object(j.a)({addedNodes:[e.el],removedNodes:[]}),Object(R.c)(500),Object(y.a)(he),Object(P.a)((function(e){var c=e.addedNodes,a=e.removedNodes;return Object(F.a)(a).pipe(Object(O.a)((function(e){return e instanceof Element})),Object(le.a)((function(e){return r(e,t)})),Object(d.a)(i)).subscribe(),Object(F.a)(c).pipe(Object(O.a)((function(e){return e instanceof Element})),Object(le.a)((function(e){return r(e,t)})),Object(d.a)(o)).subscribe(),Object(F.a)(n.values()).pipe(Object(se.a)())})),Object(R.l)(e.$.prefetch))}))),pushEvent$:t}}}])&&fe(t.prototype,r),n&&fe(t,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function ye(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Oe(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ye(Object(r),!0).forEach((function(t){de(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ye(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function de(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function je(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var ve=function(e){return new Promise((function(t){return setTimeout(t,e)}))},me=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.parent=t}var t,r,n;return t=e,(r=[{key:"onStart",value:function(e){var t=this;this.parent.animPromise=ve(this.parent.duration),this.parent.fireEvent("start",{detail:Oe(Oe({},e),{},{transitionUntil:function(e){t.parent.animPromise=Promise.all([t.parent.animPromise,e])}})})}},{key:"emitDOMError",value:function(e){var t=location.href;window.history.back(),setTimeout((function(){return document.location.assign(t)}),100)}},{key:"emitNetworkError",value:function(e){this.parent.fireEvent("networkerror",{detail:e})}},{key:"emitError",value:function(e){this.parent.fireEvent("error",{detail:e})}},{key:"emitReady",value:function(e){this.parent.fireEvent("ready",{detail:e})}},{key:"emitAfter",value:function(e){var t=this;this.parent.fadePromise=ve(this.parent.duration),this.parent.fireEvent("after",{detail:Oe(Oe({},e),{},{transitionUntil:function(e){t.parent.fadePromise=Promise.all([t.parent.fadePromise,e])}})})}},{key:"emitProgress",value:function(e){this.parent.fireEvent("progress",{detail:e})}},{key:"emitLoad",value:function(e){this.parent.fireEvent("load",{detail:e})}}])&&je(t.prototype,r),n&&je(t,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function we(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ge(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?we(Object(r),!0).forEach((function(t){Se(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):we(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function Se(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Pe(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}window.HashChangeEvent=window.HashChangeEvent||function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.oldURL,n=void 0===r?"":r,o=t.newURL,i=void 0===o?"":o,c=new CustomEvent(e);return c.oldURL=n,c.newURL=i,c};var ke=function(){function e(t){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.updateHistoryScrollPosition=function(){if(!L(r.parent)){var e=r.assignScrollPosition(history.state||{});history.replaceState(e,document.title)}},this.parent=t}var t,r,o;return t=e,(r=[{key:"updateHistoryState",value:function(e){var t=e.cause,r=e.replace,o=e.url,i=e.oldURL;if(!L(this.parent))switch(t){case n.Init:case n.Push:var c=this.parent.histId;if(r||o.href===location.href){var a=ge(ge({},history.state),{},Se({},c,{}));history.replaceState(a,document.title,o.href)}else history.pushState(Se({},c,{}),document.title,o.href);case n.Pop:this.parent.simulateHashChange&&i&&function(e,t){e.hash!==t.hash&&window.dispatchEvent(new HashChangeEvent("hashchange",{newURL:e.href,oldURL:t.href}))}(o,i)}}},{key:"updateTitle",value:function(e){var t=e.cause,r=e.title;document.title=r,L(this.parent)||t!==n.Push||history.replaceState(history.state,r)}},{key:"assignScrollPosition",value:function(e){var t=this.parent.histId;return ge(ge({},e),{},Se({},t,ge(ge({},e[t]),{},{scrollTop:Object(R.j)(),scrollHeight:Object(R.i)()})))}}])&&Pe(t.prototype,r),o&&Pe(t,o),Object.defineProperty(t,"prototype",{writable:!1}),e}();function Ee(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var Ae,Re,Le,Te,Ce,Ie,Me,qe,He,Ne,Ue,De,xe,We=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.parent=t,"scrollRestoration"in history&&(history.scrollRestoration="manual")}var t,r,o;return t=e,(r=[{key:"manageScrollPosition",value:function(e){var t=e.cause,r=e.url.hash;switch(t){case n.Push:this.scrollHashIntoView(r,{behavior:"smooth",block:"start",inline:"nearest"});break;case n.Pop:this.restoreScrollPosition();break;case n.Init:this.restoreScrollPositionOnReload()}}},{key:"elementFromHash",value:function(e){return document.getElementById(decodeURIComponent(e.substr(1)))}},{key:"scrollHashIntoView",value:function(e,t){if(e){var r=this.elementFromHash(e);r&&r.scrollIntoView(t)}else window.scroll(window.pageXOffset,0)}},{key:"restoreScrollPosition",value:function(){var e=this.parent.histId,t=(history.state&&history.state[e]||{}).scrollTop;null!=t&&window.scroll(window.pageXOffset,t)}},{key:"restoreScrollPositionOnReload",value:function(){var e=this,t=this.parent.histId;history.state&&history.state[t]&&0===Object(R.j)()?this.restoreScrollPosition():location.hash&&requestAnimationFrame((function(){return e.scrollHashIntoView(location.hash,!0)}))}}])&&Ee(t.prototype,r),o&&Ee(t,o),Object.defineProperty(t,"prototype",{writable:!1}),e}();function _e(e){return(_e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function $e(e){return function(e){if(Array.isArray(e))return Ve(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||Fe(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Be(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,o,i=[],c=!0,a=!1;try{for(r=r.call(e);!(c=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);c=!0);}catch(e){a=!0,o=e}finally{try{c||null==r.return||r.return()}finally{if(a)throw o}}return i}(e,t)||Fe(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Fe(e,t){if(e){if("string"==typeof e)return Ve(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Ve(e,t):void 0}}function Ve(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function Je(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Ke(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function Xe(){return(Xe="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var n=ze(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(arguments.length<3?e:r):o.value}}).apply(this,arguments)}function ze(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=et(e)););return e}function Ge(e,t){return(Ge=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Qe(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=et(e);if(t){var o=et(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Ye(this,r)}}function Ye(e,t){if(t&&("object"===_e(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return Ze(e)}function Ze(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function et(e){return(et=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}
/**
 * Copyright (c) 2020 Florian Klampfer <https://qwtel.com/>
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 * @license
 * @nocompile
 */
function tt(e,t){return e.url.href===t.url.href&&e.error===t.error&&e.cacheNr===t.cacheNr}var rt=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Ge(e,t)}(s,e);var t,r,i,l=Qe(s);function s(){var e;return Je(this,s),(e=l.apply(this,arguments)).el=Ze(e),e.linkSelector="a[href]:not([data-no-push])",e.prefetch=!1,e.duration=0,e.simulateHashChange=!1,e.baseURL=window.location.href,Ae.set(Ze(e),Object(R.f)()),e.animPromise=Promise.resolve(null),e.fadePromise=Promise.resolve(null),Re.set(Ze(e),new We(Ze(e))),Le.set(Ze(e),new ke(Ze(e))),Te.set(Ze(e),new B(Ze(e))),Ce.set(Ze(e),new ue(Ze(e))),Ie.set(Ze(e),new me(Ze(e))),Me.set(Ze(e),new URL(e.baseURL)),qe.set(Ze(e),(function(t,r){var n=new URL(Object(o.e)(Ze(e),Me,"f").href);n[t]=r,e.assign(n.href)})),He.set(Ze(e),0),Ne.set(Ze(e),new c.a),Ue.set(Ze(e),(function(t){L(Object(R.k)(t.target,"a[href]"))&&Object(o.e)(Ze(e),Le,"f").updateHistoryScrollPosition()})),De.set(Ze(e),void 0),xe.set(Ze(e),(function(){var t=e.setupEventListeners(),r=t.pushEvent$,i=t.hintEvent$,c=r.pipe(Object(y.a)((function(t){var r=Be(t,2),i=r[0],c=r[1];return{cause:n.Push,url:new URL(c.href,e.href),anchor:c,event:i,cacheNr:Object(o.e)(Ze(e),He,"f")}})),Object(O.a)((function(t){return C(t,Ze(e))})),Object(d.a)((function(t){t.event.preventDefault(),Object(o.e)(Ze(e),Le,"f").updateHistoryScrollPosition()}))),l=Object(a.a)(window,"popstate").pipe(Object(O.a)((function(){return window.history.state&&window.history.state[e.histId]})),Object(y.a)((function(t){return{cause:n.Pop,url:new URL(window.location.href),cacheNr:Object(o.e)(Ze(e),He,"f"),event:t}}))),s=Object(o.e)(Ze(e),Ne,"f"),f=Object(u.a)(c,l,s).pipe(Object(j.a)({url:new URL(window.location.href)}),Object(v.a)(),Object(y.a)((function(e){var t=Be(e,2),r=t[0],n=t[1];return Object.assign(n,{oldURL:r.url})})),Object(m.a)()),b=f.pipe(Object(O.a)((function(e){return!M(e)})),Object(m.a)()),L=f.pipe(Object(O.a)((function(e){return M(e)})),Object(O.a)((function(){return history.state&&history.state[e.histId]})),Object(w.a)(p),Object(d.a)((function(t){Object(o.e)(Ze(e),Le,"f").updateHistoryState(t),Object(o.e)(Ze(e),Re,"f").manageScrollPosition(t)}))),T=Object(h.a)((function(){return Object(u.a)(b.pipe(Object(g.a)(!0)),Object(o.e)(Ze(e),De,"f").pipe(Object(g.a)(!1)))})).pipe(Object(j.a)(!1)),q=i.pipe(Object(R.h)(T.pipe(Object(y.a)((function(e){return!e})))),Object(y.a)((function(t){var r=Be(t,2),i=r[0],c=r[1];return{cause:n.Hint,url:new URL(c.href,e.href),anchor:c,event:i,cacheNr:Object(o.e)(Ze(e),He,"f")}})),Object(O.a)((function(t){return I(t,Ze(e))}))),H=Object(u.a)(q,b).pipe(Object(S.a)((function(e,t){return tt(e,t)})),Object(P.a)((function(t){return Object(o.e)(Ze(e),Te,"f").fetchPage(t)})),Object(j.a)({url:{}}),Object(m.a)()),N=Object(o.f)(Ze(e),De,b.pipe(Object(d.a)((function(t){Object(o.e)(Ze(e),Ie,"f").onStart(t),Object(o.e)(Ze(e),Le,"f").updateHistoryState(t),Object(o.f)(Ze(e),Me,t.url,"f")})),Object(k.a)(H),Object(P.a)((function(t){var r;return(r=Object(o.e)(Ze(e),Te,"f")).getResponse.apply(r,[H].concat($e(t)))})),Object(m.a)()),"f"),U=N.pipe(Object(O.a)((function(e){return!e.error}))),D=N.pipe(Object(O.a)((function(e){return!!e.error}))),x=U.pipe(Object(y.a)((function(t){return Object(o.e)(Ze(e),Ce,"f").responseToContent(t)})),Object(d.a)((function(t){return Object(o.e)(Ze(e),Ie,"f").emitReady(t)})),Object(w.a)(p),Object(d.a)((function(t){Object(o.e)(Ze(e),Ce,"f").updateDOM(t),Object(o.e)(Ze(e),Le,"f").updateTitle(t),Object(o.e)(Ze(e),Ie,"f").emitAfter(t)})),Object(j.a)({cause:n.Init,url:Object(o.e)(Ze(e),Me,"f"),scripts:[]}),Object(w.a)(p),Object(d.a)((function(t){return Object(o.e)(Ze(e),Re,"f").manageScrollPosition(t)})),Object(d.a)({error:function(t){return Object(o.e)(Ze(e),Ie,"f").emitDOMError(t)}}),Object(E.a)((function(e,t){return t})),Object(P.a)((function(t){return e.fadePromise.then((function(){return t}))})),Object(P.a)((function(t){return Object(o.e)(Ze(e),Ce,"f").reinsertScriptTags(t)})),Object(d.a)({error:function(t){return Object(o.e)(Ze(e),Ie,"f").emitError(t)}}),Object(E.a)((function(e,t){return t})),Object(d.a)((function(t){return Object(o.e)(Ze(e),Ie,"f").emitLoad(t)}))),W=D.pipe(Object(d.a)((function(t){return Object(o.e)(Ze(e),Ie,"f").emitNetworkError(t)}))),_=b.pipe(Object(P.a)((function(t){return Object(h.a)((function(){return e.animPromise})).pipe(Object(A.a)(N),Object(g.a)(t))})),Object(d.a)((function(t){return Object(o.e)(Ze(e),Ie,"f").emitProgress(t)})));x.subscribe(),L.subscribe(),W.subscribe(),_.subscribe(),Object(o.e)(Ze(e),Ae,"f").resolve(Ze(e)),e.fireEvent("init")})),e}return t=s,(r=[{key:"createRenderRoot",value:function(){return this}},{key:"initialized",get:function(){return Object(o.e)(this,Ae,"f")}},{key:"hash",get:function(){return Object(o.e)(this,Me,"f").hash},set:function(e){Object(o.e)(this,qe,"f").call(this,"hash",e)}},{key:"host",get:function(){return Object(o.e)(this,Me,"f").host},set:function(e){Object(o.e)(this,qe,"f").call(this,"host",e)}},{key:"hostname",get:function(){return Object(o.e)(this,Me,"f").hostname},set:function(e){Object(o.e)(this,qe,"f").call(this,"hostname",e)}},{key:"href",get:function(){return Object(o.e)(this,Me,"f").href},set:function(e){Object(o.e)(this,qe,"f").call(this,"href",e)}},{key:"pathname",get:function(){return Object(o.e)(this,Me,"f").pathname},set:function(e){Object(o.e)(this,qe,"f").call(this,"pathname",e)}},{key:"port",get:function(){return Object(o.e)(this,Me,"f").port},set:function(e){Object(o.e)(this,qe,"f").call(this,"port",e)}},{key:"protocol",get:function(){return Object(o.e)(this,Me,"f").protocol},set:function(e){Object(o.e)(this,qe,"f").call(this,"protocol",e)}},{key:"search",get:function(){return Object(o.e)(this,Me,"f").search},set:function(e){Object(o.e)(this,qe,"f").call(this,"search",e)}},{key:"origin",get:function(){return Object(o.e)(this,Me,"f").origin}},{key:"ancestorOrigins",get:function(){return window.location.ancestorOrigins}},{key:"histId",get:function(){return this.id||this.tagName}},{key:"assign",value:function(e){var t;Object(o.e)(this,Ne,"f").next({cause:n.Push,url:new URL(e,this.href),cacheNr:Object(o.f)(this,He,(t=Object(o.e)(this,He,"f"),++t),"f")})}},{key:"reload",value:function(){var e;Object(o.e)(this,Ne,"f").next({cause:n.Push,url:new URL(this.href),cacheNr:Object(o.f)(this,He,(e=Object(o.e)(this,He,"f"),++e),"f"),replace:!0})}},{key:"replace",value:function(e){var t;Object(o.e)(this,Ne,"f").next({cause:n.Push,url:new URL(e,this.href),cacheNr:Object(o.f)(this,He,(t=Object(o.e)(this,He,"f"),++t),"f"),replace:!0})}},{key:"connectedCallback",value:function(){Xe(et(s.prototype),"connectedCallback",this).call(this),this.$={linkSelector:new b.a(this.linkSelector),prefetch:new b.a(this.prefetch)},window.addEventListener("beforeunload",Object(o.e)(this,Le,"f").updateHistoryScrollPosition),document.documentElement.addEventListener("click",Object(o.e)(this,Ue,"f")),this.updateComplete.then(Object(o.e)(this,xe,"f"))}},{key:"disconnectedCallback",value:function(){window.removeEventListener("beforeunload",Object(o.e)(this,Le,"f").updateHistoryScrollPosition),document.documentElement.removeEventListener("click",Object(o.e)(this,Ue,"f"))}}])&&Ke(t.prototype,r),i&&Ke(t,i),Object.defineProperty(t,"prototype",{writable:!1}),s}(Object(R.b)(R.a,[be]));Ae=new WeakMap,Re=new WeakMap,Le=new WeakMap,Te=new WeakMap,Ce=new WeakMap,Ie=new WeakMap,Me=new WeakMap,qe=new WeakMap,He=new WeakMap,Ne=new WeakMap,Ue=new WeakMap,De=new WeakMap,xe=new WeakMap,Object(o.g)([Object(i.e)({type:String,reflect:!0,attribute:"replace-selector"})],rt.prototype,"replaceSelector",void 0),Object(o.g)([Object(i.e)({type:String,reflect:!0,attribute:"link-selector"})],rt.prototype,"linkSelector",void 0),Object(o.g)([Object(i.e)({type:String,reflect:!0,attribute:"script-selector"})],rt.prototype,"scriptSelector",void 0),Object(o.g)([Object(i.e)({type:Boolean,reflect:!0})],rt.prototype,"prefetch",void 0),Object(o.g)([Object(i.e)({type:Number,reflect:!0})],rt.prototype,"duration",void 0),Object(o.g)([Object(i.e)({type:Boolean,reflect:!0,attribute:"hashchange"})],rt.prototype,"simulateHashChange",void 0),Object(o.g)([Object(i.e)({type:String})],rt.prototype,"baseURL",void 0),Object(o.g)([Object(i.e)()],rt.prototype,"assign",null),Object(o.g)([Object(i.e)()],rt.prototype,"reload",null),Object(o.g)([Object(i.e)()],rt.prototype,"replace",null),rt=Object(o.g)([Object(i.c)("hy-push-state")],rt)},373:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r(16),o=r(9),i=r(11);function c(e){return Object(i.a)((function(t,r){var i,a=null,u=!1;a=t.subscribe(new o.a(r,void 0,void 0,(function(o){i=Object(n.a)(e(o,c(e)(t))),a?(a.unsubscribe(),a=null,i.subscribe(r)):u=!0}))),u&&(a.unsubscribe(),a=null,i.subscribe(r))}))}},374:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var n=r(1),o=r(8),i=r(16),c=r(339),a=r(328),u=r(9),l=r(51);function s(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var r=Object(l.b)(e),s=Object(c.a)(e);return s.length?new o.a((function(e){var t=s.map((function(){return[]})),o=s.map((function(){return!1}));e.add((function(){t=o=null}));for(var c=function(c){Object(i.a)(s[c]).subscribe(new u.a(e,(function(i){if(t[c].push(i),t.every((function(e){return e.length}))){var a=t.map((function(e){return e.shift()}));e.next(r?r.apply(void 0,Object(n.k)([],Object(n.j)(a))):a),t.some((function(e,t){return!e.length&&o[t]}))&&e.complete()}}),(function(){o[c]=!0,!t[c].length&&e.complete()})))},a=0;!e.closed&&a<s.length;a++)c(a);return function(){t=o=null}})):a.a}},375:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r(48),o=r(16),i=r(11),c=r(9);function a(e,t){return t?function(r){return r.pipe(a((function(r,i){return Object(o.a)(e(r,i)).pipe(Object(n.a)((function(e,n){return t(r,e,i,n)})))})))}:Object(i.a)((function(t,r){var n=0,i=null,a=!1;t.subscribe(new c.a(r,(function(t){i||(i=new c.a(r,void 0,(function(){i=null,a&&r.complete()})),Object(o.a)(e(t,n++)).subscribe(i))}),(function(){a=!0,!i&&r.complete()})))}))}}}]);
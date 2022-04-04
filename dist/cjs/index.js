"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var c=require("react");function e(c){return c&&"object"==typeof c&&"default"in c?c:{default:c}}var n=e(c),t=function(){return t=Object.assign||function(c){for(var e,n=1,t=arguments.length;n<t;n++)for(var a in e=arguments[n])Object.prototype.hasOwnProperty.call(e,a)&&(c[a]=e[a]);return c},t.apply(this,arguments)};
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function a(c,e){var n={};for(var t in c)Object.prototype.hasOwnProperty.call(c,t)&&e.indexOf(t)<0&&(n[t]=c[t]);if(null!=c&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(t=Object.getOwnPropertySymbols(c);a<t.length;a++)e.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(c,t[a])&&(n[t[a]]=c[t[a]])}return n}function s(c,e,n){if(n||2===arguments.length)for(var t,a=0,s=e.length;a<s;a++)!t&&a in e||(t||(t=Array.prototype.slice.call(e,0,a)),t[a]=e[a]);return c.concat(t||Array.prototype.slice.call(e))}function l(c){var e=c.children,s=c.className,l=c.elementType,r=void 0===l?"div":l,i=a(c,["children","className","elementType"]),o=t({},i);return s&&(o.className=s),n.default.createElement(r,o,e)}function r(c){var e=[],a={};"string"==typeof c.className&&c.className.length>0?e.push(c.className):Array.isArray(c.classNames)?e=e.concat(c.classNames):Array.isArray(c.classNames)?e=c.classNames:Array.isArray(c.className)&&(e=e.concat(c.className)),!0===c.loading&&e.push("cool-cats-loading"),Array.isArray(c.states)&&c.states.filter((function(c){return"object"==typeof c})).filter((function(c){return!Object.keys(c).includes("className")||c.className.length>0})).forEach((function(c){var n,t;if(c.className)if("boolean"==typeof c.condition||"function"==typeof c.condition){var s=(n=c.className,t="function"==typeof c.condition?c.condition():c.condition,"function"==typeof n?n(t):!0===t?n:"");s&&s.length>0&&e.push(s)}else c.className&&c.className.length>0&&e.push(c.className);c.attr&&c.value&&("boolean"==typeof c.condition&&!0===c.condition||void 0===c.condition)&&(a[c.attr]=c.value)}));var s=["elementType","states","classNames","className","emptyCondition","loading","invalidProps"].concat(c.invalidProps||[]),r=Object.fromEntries(Object.entries(c).filter((function(c){var e=c[0];return!s.includes(e)}))),i="div";if("string"==typeof c.elementType?i=c.elementType:c.href&&(i="a","http"!==c.href.substr(0,4)&&"//"!==c.href.substr(0,2)||(r.target="_blank")),c.emptyCondition)return n.default.createElement(n.default.Fragment,null,c.children);var o=e.filter((function(c){return c}));return n.default.createElement(l,t({elementType:i,className:o.join(" ")},r,a),c.children)}function i(c,e){void 0===e&&(e={});var n=e.insertAt;if(c&&"undefined"!=typeof document){var t=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css","top"===n&&t.firstChild?t.insertBefore(a,t.firstChild):t.appendChild(a),a.styleSheet?a.styleSheet.cssText=c:a.appendChild(document.createTextNode(c))}}i('[class^=ccwc-], [class^=ccwc-]:before, [class^=ccwc-]:after,\n[class^=ccwc-] *,\n[class^=ccwc-] *:before,\n[class^=ccwc-] *:after,\n[class*=" ccwc-"],\n[class*=" ccwc-"]:before,\n[class*=" ccwc-"]:after,\n[class*=" ccwc-"] *,\n[class*=" ccwc-"] *:before,\n[class*=" ccwc-"] *:after {\n  box-sizing: border-box;\n}\n[class^=ccwc-],\n[class^=ccwc-] *,\n[class*=" ccwc-"],\n[class*=" ccwc-"] * {\n  font-family: "Poppins", serif;\n  font-weight: bold;\n  margin: 0;\n  line-height: 1.5;\n  -webkit-font-smoothing: antialiased;\n}\n[class^=ccwc-] p,\n[class^=ccwc-] li,\n[class^=ccwc-] * p,\n[class^=ccwc-] * li,\n[class*=" ccwc-"] p,\n[class*=" ccwc-"] li,\n[class*=" ccwc-"] * p,\n[class*=" ccwc-"] * li {\n  font-weight: normal;\n}\n[class^=ccwc-] img,\n[class^=ccwc-] picture,\n[class^=ccwc-] video,\n[class^=ccwc-] canvas,\n[class^=ccwc-] svg,\n[class^=ccwc-] * img,\n[class^=ccwc-] * picture,\n[class^=ccwc-] * video,\n[class^=ccwc-] * canvas,\n[class^=ccwc-] * svg,\n[class*=" ccwc-"] img,\n[class*=" ccwc-"] picture,\n[class*=" ccwc-"] video,\n[class*=" ccwc-"] canvas,\n[class*=" ccwc-"] svg,\n[class*=" ccwc-"] * img,\n[class*=" ccwc-"] * picture,\n[class*=" ccwc-"] * video,\n[class*=" ccwc-"] * canvas,\n[class*=" ccwc-"] * svg {\n  display: block;\n  max-width: 100%;\n}\n[class^=ccwc-] input,\n[class^=ccwc-] button,\n[class^=ccwc-] textarea,\n[class^=ccwc-] select,\n[class^=ccwc-] * input,\n[class^=ccwc-] * button,\n[class^=ccwc-] * textarea,\n[class^=ccwc-] * select,\n[class*=" ccwc-"] input,\n[class*=" ccwc-"] button,\n[class*=" ccwc-"] textarea,\n[class*=" ccwc-"] select,\n[class*=" ccwc-"] * input,\n[class*=" ccwc-"] * button,\n[class*=" ccwc-"] * textarea,\n[class*=" ccwc-"] * select {\n  font: inherit;\n}\n[class^=ccwc-] p,\n[class^=ccwc-] h1,\n[class^=ccwc-] h2,\n[class^=ccwc-] h3,\n[class^=ccwc-] h4,\n[class^=ccwc-] h5,\n[class^=ccwc-] h6,\n[class^=ccwc-] * p,\n[class^=ccwc-] * h1,\n[class^=ccwc-] * h2,\n[class^=ccwc-] * h3,\n[class^=ccwc-] * h4,\n[class^=ccwc-] * h5,\n[class^=ccwc-] * h6,\n[class*=" ccwc-"] p,\n[class*=" ccwc-"] h1,\n[class*=" ccwc-"] h2,\n[class*=" ccwc-"] h3,\n[class*=" ccwc-"] h4,\n[class*=" ccwc-"] h5,\n[class*=" ccwc-"] h6,\n[class*=" ccwc-"] * p,\n[class*=" ccwc-"] * h1,\n[class*=" ccwc-"] * h2,\n[class*=" ccwc-"] * h3,\n[class*=" ccwc-"] * h4,\n[class*=" ccwc-"] * h5,\n[class*=" ccwc-"] * h6 {\n  overflow-wrap: break-word;\n}');function o(c){return n.default.createElement(r,{elementType:c.elementType||"div",className:c.class||c.className||"",states:[{className:"ccwc-boolean-visibility"},{className:"ccwc-boolean-visibility--hidden",condition:!0!==c.visible},{className:"ccwc-boolean-visibility--visible",condition:!0===c.visible}]},c.children||null)}i(".ccwc-boolean-visibility {\n  transition: opacity 0.5s;\n}\n.ccwc-boolean-visibility--visible {\n  opacity: 1;\n}\n.ccwc-boolean-visibility--hidden {\n  opacity: 0;\n  pointer-events: none;\n}");function f(c){var e=c.children;return n.default.createElement(r,{className:"ccwc-text"},e)}function u(c){var e=c.visible,t=c.fixed,a=c.type,s=c.className,l=c.children;return n.default.createElement(r,{className:["ccwc-alert"],states:[{className:s?"".concat(s):"",condition:"string"==typeof s&&s.length>0},{className:a?"ccwc-alert--".concat(a):"",condition:"string"==typeof a&&a.length>0},{className:"ccwc-boolean-visibility",condition:"boolean"==typeof e},{className:"ccwc-boolean-visibility--hidden",condition:!1===e},{className:"ccwc-boolean-visibility--visible",condition:!0===e},{className:"ccwc-alert--fixed",condition:!0===t}]},l)}function d(c){var e,t=c.children;return t?"li"===t.type||"li"===(null===(e=null==t?void 0:t.props)||void 0===e?void 0:e.elementType)?n.default.createElement(n.default.Fragment,null,t):n.default.createElement(r,{elementType:"li"},t):null}function p(c){var e,s=c.children,l=c.className,i=c.elementType,o=void 0===i?"ul":i,f=a(c,["children","className","elementType"]);return n.default.createElement(r,t({elementType:o,className:l||"ccwc-list"},f),(e=s).filter?e.filter((function(c){return void 0!==c&&c})).map((function(c,e){return n.default.createElement(d,{key:e},c)})):n.default.createElement(d,null,e))}function w(c){var e="number"==typeof c.size?c.size:"2";return n.default.createElement(r,t({},c,{invalidProps:["size"],elementType:"h".concat(e),className:c.className||"",states:(c.states||[]).concat([{className:"ccwc-header"},{className:"ccwc-header--".concat(e)}])}),c.children)}i(".ccwc-alert {\n  height: 100px;\n  border-radius: 60px 20px 20px 60px;\n  background-color: #ffffff;\n  line-height: 23px;\n  width: 98%;\n  z-index: 999;\n  font-weight: bold;\n  font-size: small;\n  transition: all 0.4s;\n  padding-right: 15px;\n  box-shadow: 0px 0px 10px #999;\n}\n@media screen and (min-width: 440px) {\n  .ccwc-alert {\n    font-size: inherit;\n    left: 16px;\n    width: auto;\n  }\n}\n.ccwc-alert.ccwc-alert--fixed {\n  position: fixed;\n  bottom: 16px;\n}\n.ccwc-alert > *:first-child:not(.ccwc-text) {\n  height: 100px;\n  width: 100px;\n  border: 0 none;\n  outline: none;\n  z-index: 4;\n  background-color: transparent;\n  background-position: center center;\n  margin-right: 10px;\n  float: left;\n  border-radius: 60px;\n  overflow: hidden;\n}\n@media screen and (min-width: 800px) {\n  .ccwc-alert > *:first-child:not(.ccwc-text) {\n    font-size: inherit;\n  }\n}\n.ccwc-alert > *:first-child:not(.ccwc-text).lazy-load-image-background {\n  border: 10px solid white;\n}\n.ccwc-alert > *:first-child.ccwc-text {\n  margin-left: 16px;\n}\n.ccwc-alert .ccwc-text {\n  display: flex;\n  flex-flow: column nowrap;\n  align-items: flex-start;\n  justify-content: center;\n  flex-grow: 1;\n  height: 100px;\n  font-size: 12px;\n  min-width: 200px;\n}\n@media screen and (min-width: 800px) {\n  .ccwc-alert .ccwc-text {\n    font-size: 16px;\n  }\n}\n.ccwc-alert .ccwc-text > span {\n  display: block;\n  color: #ff0000;\n  text-transform: uppercase;\n}\n.ccwc-alert .ccwc-text .button.close {\n  top: -20px;\n  right: -20px;\n}\n.ccwc-alert:not(.ccwc-boolean-visibility--hidden) + .ccwc-alert--fixed {\n  margin-bottom: 116px;\n}");function m(e){var t=e.tabs,a=e.activeTab,s=e.children,l=c.useState(a||t[0]||""),i=l[0],o=l[1];if(!s||0===t.length)return n.default.createElement(n.default.Fragment,null);var f;return n.default.createElement(r,{className:"ccwc-tabs"},n.default.createElement(r,{className:"ccwc-tabs__headers"},t.map((function(c,e){return n.default.createElement(b,{key:e,tab:c,active:i===c,onClick:function(){return o(c)}})}))),n.default.createElement(r,{className:"ccwc-tabs__panels"},(f=s,t.map((function(c,e){return n.default.createElement(h,{active:i===c,key:e},f[e])})))))}function b(c){var e=c.tab,t=c.active,a=c.onClick;return n.default.createElement(w,{size:2,onClick:a,className:"ccwc-tabs__header",states:[{className:"active",condition:t}]},e)}function h(c){var e=c.active,t=c.children;return n.default.createElement(r,{className:"ccwc-tabs__panel",states:[{className:"open",condition:e}]},t)}function x(c){var e=c.count,t=c.single,a=c.plural,s=c.zero,l=c.loading;return l?n.default.createElement(n.default.Fragment,null,l):e<=0&&s&&s.length?n.default.createElement(n.default.Fragment,null,s):1===e?n.default.createElement(n.default.Fragment,null,t):n.default.createElement(n.default.Fragment,null,a)}function v(e){var t=e.mod,a=e.absolute,l=c.useState(0),r=l[0],i=l[1];c.useEffect((function(){var c=setInterval((function(){i((function(c){return c+1}))}),500);return function(){return clearInterval(c)}}),[]);var o={position:a?"absolute":"static"};return n.default.createElement("span",{style:o,className:"dots"},s([],Array(r%(t||3)+1),!0).map((function(c){return"."})).join(""))}function y(e){var n=c.useState(!1),t=n[0],a=n[1],s=new IntersectionObserver((function(c){var e=c[0];return a(e.isIntersecting)}));return c.useEffect((function(){return s.observe(e.current),function(){s.disconnect()}}),[]),t}function g(e){var n=c.useState(e||[]),t=n[0],a=n[1],l=function(){for(var c=[],e=0;e<arguments.length;e++)c[e]=arguments[e];if(!Array.isArray(t))throw new Error("Data is not an array, use set instead");var n=c.shift();if(void 0===[][n])throw new Error(n+" is not a array method");var l=s([],t,!0);return l[n].apply(l,c),a(l)};return{get:function(){return t},set:function(c){return a(c)},reset:function(c){return a(e||[])},push:function(c){return l.call(void 0,"push",c)},pop:function(){return l.call(void 0,"pop")},removeByValue:function(c){var e=s([],t,!0).filter((function(e){var n=e;"string"!=typeof n&&(n=JSON.stringify(n));var t=c;return"string"!=typeof t&&(t=JSON.stringify(t)),n!==t}));return a(e)}}}i(".ccwc-tabs {\n  display: flex;\n  flex-flow: column nowrap;\n  align-items: center;\n  justify-content: flex-start;\n  width: 100%;\n}\n\n.ccwc-tab-buttons,\n.ccwc-tabs__headers {\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  justify-content: center;\n  width: calc(100% - 32px);\n}\n.ccwc-tab-buttons .ccwc-header,\n.ccwc-tabs__headers .ccwc-header {\n  font-size: 22px;\n  line-height: 42px;\n  text-transform: uppercase;\n  color: #14396D;\n  flex-grow: 1;\n  text-align: center;\n  margin-bottom: -5px;\n  padding: 0 16px;\n  cursor: pointer;\n}\n.ccwc-tab-buttons .ccwc-header:hover,\n.ccwc-tabs__headers .ccwc-header:hover {\n  border-radius: 10px 10px 0px 0px;\n  background-color: #DFDFDF;\n  z-index: 10;\n  position: relative;\n}\n.ccwc-tab-buttons .ccwc-header.active,\n.ccwc-tabs__headers .ccwc-header.active {\n  border-top: solid 4px rgba(0, 0, 0, 0.2);\n  border-left: solid 4px rgba(0, 0, 0, 0.2);\n  border-right: solid 4px rgba(0, 0, 0, 0.2);\n  border-bottom: solid 4px #ffffff;\n  border-radius: 10px 10px 0px 0px;\n  background-color: #ffffff;\n  z-index: 10;\n  position: relative;\n}\n\n.ccwc-tabs__panels {\n  flex-grow: 1;\n  width: 100%;\n}\n\n.ccwc-tabs__panel,\n.ccwc-tab {\n  display: none;\n  padding: 30px 20px;\n  border: solid 4px rgba(0, 0, 0, 0.2);\n  border-radius: 10px;\n  width: 100%;\n  height: 100%;\n  flex-grow: 1;\n}\n.ccwc-tabs__panel.open,\n.ccwc-tab.open {\n  display: block;\n}\n.ccwc-tabs__panel.tab-activity li,\n.ccwc-tab.tab-activity li {\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  justify-content: flex-start;\n}\n.ccwc-tabs__panel.tab-activity li > span,\n.ccwc-tab.tab-activity li > span {\n  margin-right: 12px;\n}");var N={Components:Object.freeze({__proto__:null,Container:r,BooleanVisibilityContainer:o,Alert:u,AlertText:f,List:p,Tabs:m,TabsTab:b,TabsContent:h,Plural:x,Dots:v,Header:w}),Hooks:Object.freeze({__proto__:null,useObserver:y,useData:g}),Utils:Object.freeze({__proto__:null})};exports.Alert=u,exports.AlertText=f,exports.BooleanVisibilityContainer=o,exports.Container=r,exports.Dots=v,exports.Header=w,exports.List=p,exports.Plural=x,exports.Tabs=m,exports.TabsContent=h,exports.TabsTab=b,exports.default=N,exports.useData=g,exports.useObserver=y;
//# sourceMappingURL=index.js.map

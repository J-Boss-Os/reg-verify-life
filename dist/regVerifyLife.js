!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.RegLife=t():e.RegLife=t()}(window,(function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";function n(){}r.r(t),n.prototype.type=function(e){return Object.prototype.toString.call(e).slice(8,-1).toLowerCase()};var o=n;o.prototype.rules={Email:/^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/,Empty:/^\s*$/,Space:/\s+/,Number:/^[0-9]+$/,Ip:/^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])((\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])){3}|(\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])){5})$/,Fax:/^(([0\+]\d{2,3}-)?(0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$/,Phone:/^1[3|4|5|6|7|8|9]\d{9}/,Url:/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\*\+,;=.]+$/,Money:/^(0|[1-9]\d*)(\.\d+)?$/,Chinese:/^[\u0391-\uFFE5]+$/,English:/^[A-Za-z]+$/,Percent:/^-?(100|(([1-9]\d|\d)(\.\d{1,2})?))%$/,IDcard:/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,VehicleNumber:{8:/^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}(([0-9]{5}[DF]$)|([DF][A-HJ-NP-Z0-9][0-9]{4}$))/,7:/^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]{1}$/},Int:/^-?\d+$/,Float:/^(-?\d+)(\.\d+)?$/};var u=o;u.prototype._init=function(){var e=function(e){"VehicleNumber"===e?u.prototype.isVehicleNumber=function(e,t){if(7==e.length||8==e.length){var r=this.rules.VehicleNumber[e.length].test(e);return t&&t(r),r}throw Error("车牌号输入有误")}:u.prototype["is"+e]=function(t,r){var n=this.rules[e].test(t);return r&&r(n),n}};for(var t in this.rules)e(t)};var i=u;i.prototype.extend=function(e,t){"function"===this.type(t)?this[e]=function(e,r){var n=t(e,r);return r&&r(n),n}:"regexp"===this.type(t)?this[e]=function(e,r){var n=t.test(e);return r&&r(n),n}:console.warn("The data you pass in should be a function or a regular")};var d=new i;d._init();t.default=d}])}));
//# sourceMappingURL=regVerifyLife.js.map
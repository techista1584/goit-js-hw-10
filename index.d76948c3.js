!function(){function e(e,n,t,r){Object.defineProperty(e,n,{get:t,set:r,enumerable:!0,configurable:!0})}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},o=n.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var o={id:e,exports:{}};return t[e]=o,n.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){r[e]=n},n.parcelRequired7c6=o),o.register("bOlkj",(function(n,t){e(n.exports,"fetchBreeds",(function(){return i})),e(n.exports,"fetchCatByBreed",(function(){return c}));var r="https://api.thecatapi.com/v1",o="live_X0FQQwuQQQB9OTdYFlA1OANI678ENk5EZwXMPyPWuAWxEO7e4DdwY2pYpwdFTN6u";function i(){return fetch("".concat(r,"/breeds?api_key=").concat(o)).then((function(e){if(!e.ok)throw new Error(e.status);return e.json()}))}function c(e){return fetch("".concat(r,"/images/search?api_key=").concat(o,"&breed_ids=").concat(e)).then((function(e){if(!e.ok)throw new Error(e.status);return e.json()}))}})),o("bOlkj")}();
//# sourceMappingURL=index.d76948c3.js.map
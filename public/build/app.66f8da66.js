"use strict";
(self["webpackChunkgrapheneframework"] = self["webpackChunkgrapheneframework"] || []).push([["app"],{

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_app_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/app.css */ "./resources/css/app.css");
/* harmony import */ var _http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http */ "./resources/js/http.js");


console.log(_http__WEBPACK_IMPORTED_MODULE_1__["default"].defaults.headers.common);
_http__WEBPACK_IMPORTED_MODULE_1__["default"].get('/test').then(function (resp) {
  console.log(resp.data);
})["catch"](function (err) {
  console.log(err);
});

/***/ }),

/***/ "./resources/js/http.js":
/*!******************************!*\
  !*** ./resources/js/http.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * Import axios and set CSRF fields.
 * 
 * Axios will become http.
 * 
 * So use http instead of axios.
 */

var csrf = getCsrfFields();
var http = axios__WEBPACK_IMPORTED_MODULE_0__["default"].create({
  transformRequest: [function (data, headers) {
    Object.keys(csrf);
    return data;
  }]
});
http.defaults.headers.common['Content-Type'] = 'application/json';
http.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

/**
 * Get CSRF fields.
 * 
 * @returns object
 */
function getCsrfFields() {
  var csrfNameMeta = document.querySelector('meta#csrf_name');
  var csrfValueMeta = document.querySelector('meta#csrf_value');
  var csrfNameKey = csrfNameMeta.getAttribute('name');
  var csrfName = csrfNameMeta.content;
  var csrfValueKey = csrfValueMeta.getAttribute('name');
  var csrfValue = csrfValueMeta.content;
  return _defineProperty(_defineProperty({}, csrfNameKey, csrfName), csrfValueKey, csrfValue);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (http);

/***/ }),

/***/ "./resources/css/app.css":
/*!*******************************!*\
  !*** ./resources/css/app.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_axios_lib_axios_js"], () => (__webpack_exec__("./resources/js/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLjY2ZjhkYTY2LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUF1QjtBQUNFO0FBRXpCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsNkNBQUksQ0FBQ0csUUFBUSxDQUFDQyxPQUFPLENBQUNDLE1BQU0sQ0FBQztBQUV6Q0wsNkNBQUksQ0FBQ00sR0FBRyxDQUNKLE9BQ0osQ0FBQyxDQUNBQyxJQUFJLENBQUMsVUFBQUMsSUFBSSxFQUFJO0VBQ1ZQLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTSxJQUFJLENBQUNDLElBQUksQ0FBQztBQUMxQixDQUFDLENBQUMsU0FDSSxDQUFDLFVBQUFDLEdBQUcsRUFBSTtFQUNWVCxPQUFPLENBQUNDLEdBQUcsQ0FBQ1EsR0FBRyxDQUFDO0FBQ3BCLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2JGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzBCO0FBRTFCLElBQU1FLElBQUksR0FBR0MsYUFBYSxDQUFDLENBQUM7QUFFNUIsSUFBTWIsSUFBSSxHQUFHVyw2Q0FBSyxDQUFDRyxNQUFNLENBQUM7RUFDdEJDLGdCQUFnQixFQUFFLENBQUUsVUFBU04sSUFBSSxFQUFFTCxPQUFPLEVBQUU7SUFDeENZLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDTCxJQUFJLENBQUM7SUFDakIsT0FBT0gsSUFBSTtFQUNmLENBQUM7QUFDTCxDQUFDLENBQUM7QUFFRlQsSUFBSSxDQUFDRyxRQUFRLENBQUNDLE9BQU8sQ0FBQ0MsTUFBTSxDQUFDLGNBQWMsQ0FBQyxHQUFHLGtCQUFrQjtBQUNqRUwsSUFBSSxDQUFDRyxRQUFRLENBQUNDLE9BQU8sQ0FBQ0MsTUFBTSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsZ0JBQWdCOztBQUVuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBU1EsYUFBYUEsQ0FBQSxFQUFHO0VBQ3JCLElBQU1LLFlBQVksR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsZ0JBQWdCLENBQUM7RUFDN0QsSUFBTUMsYUFBYSxHQUFHRixRQUFRLENBQUNDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQztFQUUvRCxJQUFNRSxXQUFXLEdBQUdKLFlBQVksQ0FBQ0ssWUFBWSxDQUFDLE1BQU0sQ0FBQztFQUNyRCxJQUFNQyxRQUFRLEdBQUdOLFlBQVksQ0FBQ08sT0FBTztFQUVyQyxJQUFNQyxZQUFZLEdBQUdMLGFBQWEsQ0FBQ0UsWUFBWSxDQUFDLE1BQU0sQ0FBQztFQUN2RCxJQUFNSSxTQUFTLEdBQUdOLGFBQWEsQ0FBQ0ksT0FBTztFQUV2QyxPQUFBRyxlQUFBLENBQUFBLGVBQUEsS0FDS04sV0FBVyxFQUFHRSxRQUFRLEdBQ3RCRSxZQUFZLEVBQUdDLFNBQVM7QUFFakM7QUFFQSxpRUFBZTNCLElBQUk7Ozs7Ozs7Ozs7O0FDMUNuQiIsInNvdXJjZXMiOlsid2VicGFjazovL2dyYXBoZW5lZnJhbWV3b3JrLy4vcmVzb3VyY2VzL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9ncmFwaGVuZWZyYW1ld29yay8uL3Jlc291cmNlcy9qcy9odHRwLmpzIiwid2VicGFjazovL2dyYXBoZW5lZnJhbWV3b3JrLy4vcmVzb3VyY2VzL2Nzcy9hcHAuY3NzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vY3NzL2FwcC5jc3MnXHJcbmltcG9ydCBodHRwIGZyb20gJy4vaHR0cCdcclxuXHJcbmNvbnNvbGUubG9nKGh0dHAuZGVmYXVsdHMuaGVhZGVycy5jb21tb24pXHJcblxyXG5odHRwLmdldChcclxuICAgICcvdGVzdCdcclxuKVxyXG4udGhlbihyZXNwID0+IHtcclxuICAgIGNvbnNvbGUubG9nKHJlc3AuZGF0YSlcclxufSlcclxuLmNhdGNoKGVyciA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnIpXHJcbn0pIiwiLyoqXHJcbiAqIEltcG9ydCBheGlvcyBhbmQgc2V0IENTUkYgZmllbGRzLlxyXG4gKiBcclxuICogQXhpb3Mgd2lsbCBiZWNvbWUgaHR0cC5cclxuICogXHJcbiAqIFNvIHVzZSBodHRwIGluc3RlYWQgb2YgYXhpb3MuXHJcbiAqL1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5jb25zdCBjc3JmID0gZ2V0Q3NyZkZpZWxkcygpO1xyXG5cclxuY29uc3QgaHR0cCA9IGF4aW9zLmNyZWF0ZSh7XHJcbiAgICB0cmFuc2Zvcm1SZXF1ZXN0OiBbIGZ1bmN0aW9uKGRhdGEsIGhlYWRlcnMpIHtcclxuICAgICAgICBPYmplY3Qua2V5cyhjc3JmKVxyXG4gICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfSBdXHJcbn0pO1xyXG5cclxuaHR0cC5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnQ29udGVudC1UeXBlJ10gPSAnYXBwbGljYXRpb24vanNvbic7XHJcbmh0dHAuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bJ1gtUmVxdWVzdGVkLVdpdGgnXSA9ICdYTUxIdHRwUmVxdWVzdCc7XHJcblxyXG4vKipcclxuICogR2V0IENTUkYgZmllbGRzLlxyXG4gKiBcclxuICogQHJldHVybnMgb2JqZWN0XHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRDc3JmRmllbGRzKCkge1xyXG4gICAgY29uc3QgY3NyZk5hbWVNZXRhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWV0YSNjc3JmX25hbWUnKTtcclxuICAgIGNvbnN0IGNzcmZWYWx1ZU1ldGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtZXRhI2NzcmZfdmFsdWUnKTtcclxuXHJcbiAgICBjb25zdCBjc3JmTmFtZUtleSA9IGNzcmZOYW1lTWV0YS5nZXRBdHRyaWJ1dGUoJ25hbWUnKTtcclxuICAgIGNvbnN0IGNzcmZOYW1lID0gY3NyZk5hbWVNZXRhLmNvbnRlbnQ7XHJcblxyXG4gICAgY29uc3QgY3NyZlZhbHVlS2V5ID0gY3NyZlZhbHVlTWV0YS5nZXRBdHRyaWJ1dGUoJ25hbWUnKTtcclxuICAgIGNvbnN0IGNzcmZWYWx1ZSA9IGNzcmZWYWx1ZU1ldGEuY29udGVudDtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIFtjc3JmTmFtZUtleV06IGNzcmZOYW1lLFxyXG4gICAgICAgIFtjc3JmVmFsdWVLZXldOiBjc3JmVmFsdWVcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaHR0cDsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiaHR0cCIsImNvbnNvbGUiLCJsb2ciLCJkZWZhdWx0cyIsImhlYWRlcnMiLCJjb21tb24iLCJnZXQiLCJ0aGVuIiwicmVzcCIsImRhdGEiLCJlcnIiLCJheGlvcyIsImNzcmYiLCJnZXRDc3JmRmllbGRzIiwiY3JlYXRlIiwidHJhbnNmb3JtUmVxdWVzdCIsIk9iamVjdCIsImtleXMiLCJjc3JmTmFtZU1ldGEiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjc3JmVmFsdWVNZXRhIiwiY3NyZk5hbWVLZXkiLCJnZXRBdHRyaWJ1dGUiLCJjc3JmTmFtZSIsImNvbnRlbnQiLCJjc3JmVmFsdWVLZXkiLCJjc3JmVmFsdWUiLCJfZGVmaW5lUHJvcGVydHkiXSwic291cmNlUm9vdCI6IiJ9
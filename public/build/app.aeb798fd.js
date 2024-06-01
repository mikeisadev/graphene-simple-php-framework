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


console.log('Axios headers', _http__WEBPACK_IMPORTED_MODULE_1__["default"].defaults.headers);
_http__WEBPACK_IMPORTED_MODULE_1__["default"].get('/axios-get').then(function (res) {
  console.log(res.data);
});
_http__WEBPACK_IMPORTED_MODULE_1__["default"].post('/axios-post').then('/axios-post');

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
var csrfMethods = ['post', 'put', 'patch', 'delete'];
var http = axios__WEBPACK_IMPORTED_MODULE_0__["default"].create({});
csrfMethods.map(function (method) {
  Object.keys(csrf).map(function (key) {
    http.defaults.headers[method][key] = csrf[key];
  });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmFlYjc5OGZkLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUF1QjtBQUNFO0FBRXpCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxlQUFlLEVBQUVGLDZDQUFJLENBQUNHLFFBQVEsQ0FBQ0MsT0FBTyxDQUFDO0FBRW5ESiw2Q0FBSSxDQUFDSyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQ2pCQyxJQUFJLENBQUMsVUFBQUMsR0FBRyxFQUFJO0VBQ1ROLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSyxHQUFHLENBQUNDLElBQUksQ0FBQztBQUN6QixDQUFDLENBQUM7QUFFTlIsNkNBQUksQ0FBQ1MsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUNuQkgsSUFBSSxDQUFDLGFBQWEsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1h4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUMwQjtBQUUxQixJQUFNSyxJQUFJLEdBQUdDLGFBQWEsQ0FBQyxDQUFDO0FBQzVCLElBQU1DLFdBQVcsR0FBRyxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLFFBQVEsQ0FBQztBQUV0RCxJQUFNYixJQUFJLEdBQUdVLDZDQUFLLENBQUNJLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUU3QkQsV0FBVyxDQUFDRSxHQUFHLENBQUMsVUFBQUMsTUFBTSxFQUFJO0VBQ3RCQyxNQUFNLENBQUNDLElBQUksQ0FBQ1AsSUFBSSxDQUFDLENBQUNJLEdBQUcsQ0FBQyxVQUFBSSxHQUFHLEVBQUk7SUFDekJuQixJQUFJLENBQUNHLFFBQVEsQ0FBQ0MsT0FBTyxDQUFDWSxNQUFNLENBQUMsQ0FBQ0csR0FBRyxDQUFDLEdBQUdSLElBQUksQ0FBQ1EsR0FBRyxDQUFDO0VBQ2xELENBQUMsQ0FBQztBQUNOLENBQUMsQ0FBQztBQUVGbkIsSUFBSSxDQUFDRyxRQUFRLENBQUNDLE9BQU8sQ0FBQ2dCLE1BQU0sQ0FBQyxjQUFjLENBQUMsR0FBRyxrQkFBa0I7QUFDakVwQixJQUFJLENBQUNHLFFBQVEsQ0FBQ0MsT0FBTyxDQUFDZ0IsTUFBTSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsZ0JBQWdCOztBQUVuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBU1IsYUFBYUEsQ0FBQSxFQUFHO0VBQ3JCLElBQU1TLFlBQVksR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsZ0JBQWdCLENBQUM7RUFDN0QsSUFBTUMsYUFBYSxHQUFHRixRQUFRLENBQUNDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQztFQUUvRCxJQUFNRSxXQUFXLEdBQUdKLFlBQVksQ0FBQ0ssWUFBWSxDQUFDLE1BQU0sQ0FBQztFQUNyRCxJQUFNQyxRQUFRLEdBQUdOLFlBQVksQ0FBQ08sT0FBTztFQUVyQyxJQUFNQyxZQUFZLEdBQUdMLGFBQWEsQ0FBQ0UsWUFBWSxDQUFDLE1BQU0sQ0FBQztFQUN2RCxJQUFNSSxTQUFTLEdBQUdOLGFBQWEsQ0FBQ0ksT0FBTztFQUV2QyxPQUFBRyxlQUFBLENBQUFBLGVBQUEsS0FDS04sV0FBVyxFQUFHRSxRQUFRLEdBQ3RCRSxZQUFZLEVBQUdDLFNBQVM7QUFFakM7QUFFQSxpRUFBZTlCLElBQUk7Ozs7Ozs7Ozs7O0FDNUNuQiIsInNvdXJjZXMiOlsid2VicGFjazovL2dyYXBoZW5lZnJhbWV3b3JrLy4vcmVzb3VyY2VzL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9ncmFwaGVuZWZyYW1ld29yay8uL3Jlc291cmNlcy9qcy9odHRwLmpzIiwid2VicGFjazovL2dyYXBoZW5lZnJhbWV3b3JrLy4vcmVzb3VyY2VzL2Nzcy9hcHAuY3NzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vY3NzL2FwcC5jc3MnXHJcbmltcG9ydCBodHRwIGZyb20gJy4vaHR0cCdcclxuXHJcbmNvbnNvbGUubG9nKCdBeGlvcyBoZWFkZXJzJywgaHR0cC5kZWZhdWx0cy5oZWFkZXJzKVxyXG5cclxuaHR0cC5nZXQoJy9heGlvcy1nZXQnKVxyXG4gICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSlcclxuICAgIH0pO1xyXG5cclxuaHR0cC5wb3N0KCcvYXhpb3MtcG9zdCcpXHJcbiAgICAudGhlbignL2F4aW9zLXBvc3QnKTsiLCIvKipcclxuICogSW1wb3J0IGF4aW9zIGFuZCBzZXQgQ1NSRiBmaWVsZHMuXHJcbiAqIFxyXG4gKiBBeGlvcyB3aWxsIGJlY29tZSBodHRwLlxyXG4gKiBcclxuICogU28gdXNlIGh0dHAgaW5zdGVhZCBvZiBheGlvcy5cclxuICovXHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmNvbnN0IGNzcmYgPSBnZXRDc3JmRmllbGRzKCk7XHJcbmNvbnN0IGNzcmZNZXRob2RzID0gWydwb3N0JywgJ3B1dCcsICdwYXRjaCcsICdkZWxldGUnXTtcclxuXHJcbmNvbnN0IGh0dHAgPSBheGlvcy5jcmVhdGUoe30pO1xyXG5cclxuY3NyZk1ldGhvZHMubWFwKG1ldGhvZCA9PiB7XHJcbiAgICBPYmplY3Qua2V5cyhjc3JmKS5tYXAoa2V5ID0+IHtcclxuICAgICAgICBodHRwLmRlZmF1bHRzLmhlYWRlcnNbbWV0aG9kXVtrZXldID0gY3NyZltrZXldXHJcbiAgICB9KVxyXG59KVxyXG5cclxuaHR0cC5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnQ29udGVudC1UeXBlJ10gPSAnYXBwbGljYXRpb24vanNvbic7XHJcbmh0dHAuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bJ1gtUmVxdWVzdGVkLVdpdGgnXSA9ICdYTUxIdHRwUmVxdWVzdCc7XHJcblxyXG4vKipcclxuICogR2V0IENTUkYgZmllbGRzLlxyXG4gKiBcclxuICogQHJldHVybnMgb2JqZWN0XHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRDc3JmRmllbGRzKCkge1xyXG4gICAgY29uc3QgY3NyZk5hbWVNZXRhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWV0YSNjc3JmX25hbWUnKTtcclxuICAgIGNvbnN0IGNzcmZWYWx1ZU1ldGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtZXRhI2NzcmZfdmFsdWUnKTtcclxuXHJcbiAgICBjb25zdCBjc3JmTmFtZUtleSA9IGNzcmZOYW1lTWV0YS5nZXRBdHRyaWJ1dGUoJ25hbWUnKTtcclxuICAgIGNvbnN0IGNzcmZOYW1lID0gY3NyZk5hbWVNZXRhLmNvbnRlbnQ7XHJcblxyXG4gICAgY29uc3QgY3NyZlZhbHVlS2V5ID0gY3NyZlZhbHVlTWV0YS5nZXRBdHRyaWJ1dGUoJ25hbWUnKTtcclxuICAgIGNvbnN0IGNzcmZWYWx1ZSA9IGNzcmZWYWx1ZU1ldGEuY29udGVudDtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIFtjc3JmTmFtZUtleV06IGNzcmZOYW1lLFxyXG4gICAgICAgIFtjc3JmVmFsdWVLZXldOiBjc3JmVmFsdWVcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaHR0cDsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiaHR0cCIsImNvbnNvbGUiLCJsb2ciLCJkZWZhdWx0cyIsImhlYWRlcnMiLCJnZXQiLCJ0aGVuIiwicmVzIiwiZGF0YSIsInBvc3QiLCJheGlvcyIsImNzcmYiLCJnZXRDc3JmRmllbGRzIiwiY3NyZk1ldGhvZHMiLCJjcmVhdGUiLCJtYXAiLCJtZXRob2QiLCJPYmplY3QiLCJrZXlzIiwia2V5IiwiY29tbW9uIiwiY3NyZk5hbWVNZXRhIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY3NyZlZhbHVlTWV0YSIsImNzcmZOYW1lS2V5IiwiZ2V0QXR0cmlidXRlIiwiY3NyZk5hbWUiLCJjb250ZW50IiwiY3NyZlZhbHVlS2V5IiwiY3NyZlZhbHVlIiwiX2RlZmluZVByb3BlcnR5Il0sInNvdXJjZVJvb3QiOiIifQ==
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
    console.log(data, headers);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmFjZjJhMTZhLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUF1QjtBQUNFO0FBRXpCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsNkNBQUksQ0FBQ0csUUFBUSxDQUFDQyxPQUFPLENBQUNDLE1BQU0sQ0FBQztBQUV6Q0wsNkNBQUksQ0FBQ00sR0FBRyxDQUNKLE9BQ0osQ0FBQyxDQUNBQyxJQUFJLENBQUMsVUFBQUMsSUFBSSxFQUFJO0VBQ1ZQLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTSxJQUFJLENBQUNDLElBQUksQ0FBQztBQUMxQixDQUFDLENBQUMsU0FDSSxDQUFDLFVBQUFDLEdBQUcsRUFBSTtFQUNWVCxPQUFPLENBQUNDLEdBQUcsQ0FBQ1EsR0FBRyxDQUFDO0FBQ3BCLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2JGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzBCO0FBRTFCLElBQU1FLElBQUksR0FBR0MsYUFBYSxDQUFDLENBQUM7QUFFNUIsSUFBTWIsSUFBSSxHQUFHVyw2Q0FBSyxDQUFDRyxNQUFNLENBQUM7RUFDdEJDLGdCQUFnQixFQUFFLENBQUUsVUFBU04sSUFBSSxFQUFFTCxPQUFPLEVBQUU7SUFDeENILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTyxJQUFJLEVBQUVMLE9BQU8sQ0FBQztFQUM5QixDQUFDO0FBQ0wsQ0FBQyxDQUFDO0FBRUZKLElBQUksQ0FBQ0csUUFBUSxDQUFDQyxPQUFPLENBQUNDLE1BQU0sQ0FBQyxjQUFjLENBQUMsR0FBRyxrQkFBa0I7QUFDakVMLElBQUksQ0FBQ0csUUFBUSxDQUFDQyxPQUFPLENBQUNDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLGdCQUFnQjs7QUFFbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVNRLGFBQWFBLENBQUEsRUFBRztFQUNyQixJQUFNRyxZQUFZLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGdCQUFnQixDQUFDO0VBQzdELElBQU1DLGFBQWEsR0FBR0YsUUFBUSxDQUFDQyxhQUFhLENBQUMsaUJBQWlCLENBQUM7RUFFL0QsSUFBTUUsV0FBVyxHQUFHSixZQUFZLENBQUNLLFlBQVksQ0FBQyxNQUFNLENBQUM7RUFDckQsSUFBTUMsUUFBUSxHQUFHTixZQUFZLENBQUNPLE9BQU87RUFFckMsSUFBTUMsWUFBWSxHQUFHTCxhQUFhLENBQUNFLFlBQVksQ0FBQyxNQUFNLENBQUM7RUFDdkQsSUFBTUksU0FBUyxHQUFHTixhQUFhLENBQUNJLE9BQU87RUFFdkMsT0FBQUcsZUFBQSxDQUFBQSxlQUFBLEtBQ0tOLFdBQVcsRUFBR0UsUUFBUSxHQUN0QkUsWUFBWSxFQUFHQyxTQUFTO0FBRWpDO0FBRUEsaUVBQWV6QixJQUFJOzs7Ozs7Ozs7OztBQ3pDbkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ncmFwaGVuZWZyYW1ld29yay8uL3Jlc291cmNlcy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZ3JhcGhlbmVmcmFtZXdvcmsvLi9yZXNvdXJjZXMvanMvaHR0cC5qcyIsIndlYnBhY2s6Ly9ncmFwaGVuZWZyYW1ld29yay8uL3Jlc291cmNlcy9jc3MvYXBwLmNzcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL2Nzcy9hcHAuY3NzJ1xyXG5pbXBvcnQgaHR0cCBmcm9tICcuL2h0dHAnXHJcblxyXG5jb25zb2xlLmxvZyhodHRwLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uKVxyXG5cclxuaHR0cC5nZXQoXHJcbiAgICAnL3Rlc3QnXHJcbilcclxuLnRoZW4ocmVzcCA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhyZXNwLmRhdGEpXHJcbn0pXHJcbi5jYXRjaChlcnIgPT4ge1xyXG4gICAgY29uc29sZS5sb2coZXJyKVxyXG59KSIsIi8qKlxyXG4gKiBJbXBvcnQgYXhpb3MgYW5kIHNldCBDU1JGIGZpZWxkcy5cclxuICogXHJcbiAqIEF4aW9zIHdpbGwgYmVjb21lIGh0dHAuXHJcbiAqIFxyXG4gKiBTbyB1c2UgaHR0cCBpbnN0ZWFkIG9mIGF4aW9zLlxyXG4gKi9cclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuY29uc3QgY3NyZiA9IGdldENzcmZGaWVsZHMoKTtcclxuXHJcbmNvbnN0IGh0dHAgPSBheGlvcy5jcmVhdGUoe1xyXG4gICAgdHJhbnNmb3JtUmVxdWVzdDogWyBmdW5jdGlvbihkYXRhLCBoZWFkZXJzKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSwgaGVhZGVycylcclxuICAgIH0gXVxyXG59KTtcclxuXHJcbmh0dHAuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bJ0NvbnRlbnQtVHlwZSddID0gJ2FwcGxpY2F0aW9uL2pzb24nO1xyXG5odHRwLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWydYLVJlcXVlc3RlZC1XaXRoJ10gPSAnWE1MSHR0cFJlcXVlc3QnO1xyXG5cclxuLyoqXHJcbiAqIEdldCBDU1JGIGZpZWxkcy5cclxuICogXHJcbiAqIEByZXR1cm5zIG9iamVjdFxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0Q3NyZkZpZWxkcygpIHtcclxuICAgIGNvbnN0IGNzcmZOYW1lTWV0YSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21ldGEjY3NyZl9uYW1lJyk7XHJcbiAgICBjb25zdCBjc3JmVmFsdWVNZXRhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWV0YSNjc3JmX3ZhbHVlJyk7XHJcblxyXG4gICAgY29uc3QgY3NyZk5hbWVLZXkgPSBjc3JmTmFtZU1ldGEuZ2V0QXR0cmlidXRlKCduYW1lJyk7XHJcbiAgICBjb25zdCBjc3JmTmFtZSA9IGNzcmZOYW1lTWV0YS5jb250ZW50O1xyXG5cclxuICAgIGNvbnN0IGNzcmZWYWx1ZUtleSA9IGNzcmZWYWx1ZU1ldGEuZ2V0QXR0cmlidXRlKCduYW1lJyk7XHJcbiAgICBjb25zdCBjc3JmVmFsdWUgPSBjc3JmVmFsdWVNZXRhLmNvbnRlbnQ7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBbY3NyZk5hbWVLZXldOiBjc3JmTmFtZSxcclxuICAgICAgICBbY3NyZlZhbHVlS2V5XTogY3NyZlZhbHVlXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGh0dHA7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbImh0dHAiLCJjb25zb2xlIiwibG9nIiwiZGVmYXVsdHMiLCJoZWFkZXJzIiwiY29tbW9uIiwiZ2V0IiwidGhlbiIsInJlc3AiLCJkYXRhIiwiZXJyIiwiYXhpb3MiLCJjc3JmIiwiZ2V0Q3NyZkZpZWxkcyIsImNyZWF0ZSIsInRyYW5zZm9ybVJlcXVlc3QiLCJjc3JmTmFtZU1ldGEiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjc3JmVmFsdWVNZXRhIiwiY3NyZk5hbWVLZXkiLCJnZXRBdHRyaWJ1dGUiLCJjc3JmTmFtZSIsImNvbnRlbnQiLCJjc3JmVmFsdWVLZXkiLCJjc3JmVmFsdWUiLCJfZGVmaW5lUHJvcGVydHkiXSwic291cmNlUm9vdCI6IiJ9
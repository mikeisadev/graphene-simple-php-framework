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
_http__WEBPACK_IMPORTED_MODULE_1__["default"].post('/test').then(function (resp) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmZiZmRmOTI0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUF1QjtBQUNFO0FBRXpCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsNkNBQUksQ0FBQ0csUUFBUSxDQUFDQyxPQUFPLENBQUNDLE1BQU0sQ0FBQztBQUV6Q0wsNkNBQUksQ0FBQ00sSUFBSSxDQUNMLE9BQ0osQ0FBQyxDQUNBQyxJQUFJLENBQUMsVUFBQUMsSUFBSSxFQUFJO0VBQ1ZQLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTSxJQUFJLENBQUNDLElBQUksQ0FBQztBQUMxQixDQUFDLENBQUMsU0FDSSxDQUFDLFVBQUFDLEdBQUcsRUFBSTtFQUNWVCxPQUFPLENBQUNDLEdBQUcsQ0FBQ1EsR0FBRyxDQUFDO0FBQ3BCLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2JGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzBCO0FBRTFCLElBQU1FLElBQUksR0FBR0MsYUFBYSxDQUFDLENBQUM7QUFDNUIsSUFBTUMsV0FBVyxHQUFHLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsUUFBUSxDQUFDO0FBRXRELElBQU1kLElBQUksR0FBR1csNkNBQUssQ0FBQ0ksTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBRTdCRCxXQUFXLENBQUNFLEdBQUcsQ0FBQyxVQUFBQyxNQUFNLEVBQUk7RUFDdEJDLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDUCxJQUFJLENBQUMsQ0FBQ0ksR0FBRyxDQUFDLFVBQUFJLEdBQUcsRUFBSTtJQUN6QnBCLElBQUksQ0FBQ0csUUFBUSxDQUFDQyxPQUFPLENBQUNhLE1BQU0sQ0FBQyxDQUFDRyxHQUFHLENBQUMsR0FBR1IsSUFBSSxDQUFDUSxHQUFHLENBQUM7RUFDbEQsQ0FBQyxDQUFDO0FBQ04sQ0FBQyxDQUFDO0FBRUZwQixJQUFJLENBQUNHLFFBQVEsQ0FBQ0MsT0FBTyxDQUFDQyxNQUFNLENBQUMsY0FBYyxDQUFDLEdBQUcsa0JBQWtCO0FBQ2pFTCxJQUFJLENBQUNHLFFBQVEsQ0FBQ0MsT0FBTyxDQUFDQyxNQUFNLENBQUMsa0JBQWtCLENBQUMsR0FBRyxnQkFBZ0I7O0FBRW5FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTUSxhQUFhQSxDQUFBLEVBQUc7RUFDckIsSUFBTVEsWUFBWSxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQztFQUM3RCxJQUFNQyxhQUFhLEdBQUdGLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGlCQUFpQixDQUFDO0VBRS9ELElBQU1FLFdBQVcsR0FBR0osWUFBWSxDQUFDSyxZQUFZLENBQUMsTUFBTSxDQUFDO0VBQ3JELElBQU1DLFFBQVEsR0FBR04sWUFBWSxDQUFDTyxPQUFPO0VBRXJDLElBQU1DLFlBQVksR0FBR0wsYUFBYSxDQUFDRSxZQUFZLENBQUMsTUFBTSxDQUFDO0VBQ3ZELElBQU1JLFNBQVMsR0FBR04sYUFBYSxDQUFDSSxPQUFPO0VBRXZDLE9BQUFHLGVBQUEsQ0FBQUEsZUFBQSxLQUNLTixXQUFXLEVBQUdFLFFBQVEsR0FDdEJFLFlBQVksRUFBR0MsU0FBUztBQUVqQztBQUVBLGlFQUFlOUIsSUFBSTs7Ozs7Ozs7Ozs7QUM1Q25CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3JhcGhlbmVmcmFtZXdvcmsvLi9yZXNvdXJjZXMvanMvYXBwLmpzIiwid2VicGFjazovL2dyYXBoZW5lZnJhbWV3b3JrLy4vcmVzb3VyY2VzL2pzL2h0dHAuanMiLCJ3ZWJwYWNrOi8vZ3JhcGhlbmVmcmFtZXdvcmsvLi9yZXNvdXJjZXMvY3NzL2FwcC5jc3MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9jc3MvYXBwLmNzcydcclxuaW1wb3J0IGh0dHAgZnJvbSAnLi9odHRwJ1xyXG5cclxuY29uc29sZS5sb2coaHR0cC5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vbilcclxuXHJcbmh0dHAucG9zdChcclxuICAgICcvdGVzdCdcclxuKVxyXG4udGhlbihyZXNwID0+IHtcclxuICAgIGNvbnNvbGUubG9nKHJlc3AuZGF0YSlcclxufSlcclxuLmNhdGNoKGVyciA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnIpXHJcbn0pIiwiLyoqXHJcbiAqIEltcG9ydCBheGlvcyBhbmQgc2V0IENTUkYgZmllbGRzLlxyXG4gKiBcclxuICogQXhpb3Mgd2lsbCBiZWNvbWUgaHR0cC5cclxuICogXHJcbiAqIFNvIHVzZSBodHRwIGluc3RlYWQgb2YgYXhpb3MuXHJcbiAqL1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5jb25zdCBjc3JmID0gZ2V0Q3NyZkZpZWxkcygpO1xyXG5jb25zdCBjc3JmTWV0aG9kcyA9IFsncG9zdCcsICdwdXQnLCAncGF0Y2gnLCAnZGVsZXRlJ107XHJcblxyXG5jb25zdCBodHRwID0gYXhpb3MuY3JlYXRlKHt9KTtcclxuXHJcbmNzcmZNZXRob2RzLm1hcChtZXRob2QgPT4ge1xyXG4gICAgT2JqZWN0LmtleXMoY3NyZikubWFwKGtleSA9PiB7XHJcbiAgICAgICAgaHR0cC5kZWZhdWx0cy5oZWFkZXJzW21ldGhvZF1ba2V5XSA9IGNzcmZba2V5XVxyXG4gICAgfSlcclxufSlcclxuXHJcbmh0dHAuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bJ0NvbnRlbnQtVHlwZSddID0gJ2FwcGxpY2F0aW9uL2pzb24nO1xyXG5odHRwLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWydYLVJlcXVlc3RlZC1XaXRoJ10gPSAnWE1MSHR0cFJlcXVlc3QnO1xyXG5cclxuLyoqXHJcbiAqIEdldCBDU1JGIGZpZWxkcy5cclxuICogXHJcbiAqIEByZXR1cm5zIG9iamVjdFxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0Q3NyZkZpZWxkcygpIHtcclxuICAgIGNvbnN0IGNzcmZOYW1lTWV0YSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21ldGEjY3NyZl9uYW1lJyk7XHJcbiAgICBjb25zdCBjc3JmVmFsdWVNZXRhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWV0YSNjc3JmX3ZhbHVlJyk7XHJcblxyXG4gICAgY29uc3QgY3NyZk5hbWVLZXkgPSBjc3JmTmFtZU1ldGEuZ2V0QXR0cmlidXRlKCduYW1lJyk7XHJcbiAgICBjb25zdCBjc3JmTmFtZSA9IGNzcmZOYW1lTWV0YS5jb250ZW50O1xyXG5cclxuICAgIGNvbnN0IGNzcmZWYWx1ZUtleSA9IGNzcmZWYWx1ZU1ldGEuZ2V0QXR0cmlidXRlKCduYW1lJyk7XHJcbiAgICBjb25zdCBjc3JmVmFsdWUgPSBjc3JmVmFsdWVNZXRhLmNvbnRlbnQ7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBbY3NyZk5hbWVLZXldOiBjc3JmTmFtZSxcclxuICAgICAgICBbY3NyZlZhbHVlS2V5XTogY3NyZlZhbHVlXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGh0dHA7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbImh0dHAiLCJjb25zb2xlIiwibG9nIiwiZGVmYXVsdHMiLCJoZWFkZXJzIiwiY29tbW9uIiwicG9zdCIsInRoZW4iLCJyZXNwIiwiZGF0YSIsImVyciIsImF4aW9zIiwiY3NyZiIsImdldENzcmZGaWVsZHMiLCJjc3JmTWV0aG9kcyIsImNyZWF0ZSIsIm1hcCIsIm1ldGhvZCIsIk9iamVjdCIsImtleXMiLCJrZXkiLCJjc3JmTmFtZU1ldGEiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjc3JmVmFsdWVNZXRhIiwiY3NyZk5hbWVLZXkiLCJnZXRBdHRyaWJ1dGUiLCJjc3JmTmFtZSIsImNvbnRlbnQiLCJjc3JmVmFsdWVLZXkiLCJjc3JmVmFsdWUiLCJfZGVmaW5lUHJvcGVydHkiXSwic291cmNlUm9vdCI6IiJ9
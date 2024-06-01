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
_http__WEBPACK_IMPORTED_MODULE_1__["default"].get('/test').then(function (res) {
  console.log(res.data);
});
_http__WEBPACK_IMPORTED_MODULE_1__["default"].post();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLjBlNjdiOTFmLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUF1QjtBQUNFO0FBRXpCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxlQUFlLEVBQUVGLDZDQUFJLENBQUNHLFFBQVEsQ0FBQ0MsT0FBTyxDQUFDO0FBRW5ESiw2Q0FBSSxDQUFDSyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQ1pDLElBQUksQ0FBQyxVQUFBQyxHQUFHLEVBQUk7RUFDVE4sT0FBTyxDQUFDQyxHQUFHLENBQUNLLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDO0FBQ3pCLENBQUMsQ0FBQztBQUVOUiw2Q0FBSSxDQUFDUyxJQUFJLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzBCO0FBRTFCLElBQU1FLElBQUksR0FBR0MsYUFBYSxDQUFDLENBQUM7QUFDNUIsSUFBTUMsV0FBVyxHQUFHLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsUUFBUSxDQUFDO0FBRXRELElBQU1iLElBQUksR0FBR1UsNkNBQUssQ0FBQ0ksTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBRTdCRCxXQUFXLENBQUNFLEdBQUcsQ0FBQyxVQUFBQyxNQUFNLEVBQUk7RUFDdEJDLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDUCxJQUFJLENBQUMsQ0FBQ0ksR0FBRyxDQUFDLFVBQUFJLEdBQUcsRUFBSTtJQUN6Qm5CLElBQUksQ0FBQ0csUUFBUSxDQUFDQyxPQUFPLENBQUNZLE1BQU0sQ0FBQyxDQUFDRyxHQUFHLENBQUMsR0FBR1IsSUFBSSxDQUFDUSxHQUFHLENBQUM7RUFDbEQsQ0FBQyxDQUFDO0FBQ04sQ0FBQyxDQUFDO0FBRUZuQixJQUFJLENBQUNHLFFBQVEsQ0FBQ0MsT0FBTyxDQUFDZ0IsTUFBTSxDQUFDLGNBQWMsQ0FBQyxHQUFHLGtCQUFrQjtBQUNqRXBCLElBQUksQ0FBQ0csUUFBUSxDQUFDQyxPQUFPLENBQUNnQixNQUFNLENBQUMsa0JBQWtCLENBQUMsR0FBRyxnQkFBZ0I7O0FBRW5FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTUixhQUFhQSxDQUFBLEVBQUc7RUFDckIsSUFBTVMsWUFBWSxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQztFQUM3RCxJQUFNQyxhQUFhLEdBQUdGLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGlCQUFpQixDQUFDO0VBRS9ELElBQU1FLFdBQVcsR0FBR0osWUFBWSxDQUFDSyxZQUFZLENBQUMsTUFBTSxDQUFDO0VBQ3JELElBQU1DLFFBQVEsR0FBR04sWUFBWSxDQUFDTyxPQUFPO0VBRXJDLElBQU1DLFlBQVksR0FBR0wsYUFBYSxDQUFDRSxZQUFZLENBQUMsTUFBTSxDQUFDO0VBQ3ZELElBQU1JLFNBQVMsR0FBR04sYUFBYSxDQUFDSSxPQUFPO0VBRXZDLE9BQUFHLGVBQUEsQ0FBQUEsZUFBQSxLQUNLTixXQUFXLEVBQUdFLFFBQVEsR0FDdEJFLFlBQVksRUFBR0MsU0FBUztBQUVqQztBQUVBLGlFQUFlOUIsSUFBSTs7Ozs7Ozs7Ozs7QUM1Q25CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3JhcGhlbmVmcmFtZXdvcmsvLi9yZXNvdXJjZXMvanMvYXBwLmpzIiwid2VicGFjazovL2dyYXBoZW5lZnJhbWV3b3JrLy4vcmVzb3VyY2VzL2pzL2h0dHAuanMiLCJ3ZWJwYWNrOi8vZ3JhcGhlbmVmcmFtZXdvcmsvLi9yZXNvdXJjZXMvY3NzL2FwcC5jc3MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9jc3MvYXBwLmNzcydcclxuaW1wb3J0IGh0dHAgZnJvbSAnLi9odHRwJ1xyXG5cclxuY29uc29sZS5sb2coJ0F4aW9zIGhlYWRlcnMnLCBodHRwLmRlZmF1bHRzLmhlYWRlcnMpXHJcblxyXG5odHRwLmdldCgnL3Rlc3QnKVxyXG4gICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSlcclxuICAgIH0pO1xyXG4gICAgXHJcbmh0dHAucG9zdCgpOyIsIi8qKlxyXG4gKiBJbXBvcnQgYXhpb3MgYW5kIHNldCBDU1JGIGZpZWxkcy5cclxuICogXHJcbiAqIEF4aW9zIHdpbGwgYmVjb21lIGh0dHAuXHJcbiAqIFxyXG4gKiBTbyB1c2UgaHR0cCBpbnN0ZWFkIG9mIGF4aW9zLlxyXG4gKi9cclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuY29uc3QgY3NyZiA9IGdldENzcmZGaWVsZHMoKTtcclxuY29uc3QgY3NyZk1ldGhvZHMgPSBbJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJywgJ2RlbGV0ZSddO1xyXG5cclxuY29uc3QgaHR0cCA9IGF4aW9zLmNyZWF0ZSh7fSk7XHJcblxyXG5jc3JmTWV0aG9kcy5tYXAobWV0aG9kID0+IHtcclxuICAgIE9iamVjdC5rZXlzKGNzcmYpLm1hcChrZXkgPT4ge1xyXG4gICAgICAgIGh0dHAuZGVmYXVsdHMuaGVhZGVyc1ttZXRob2RdW2tleV0gPSBjc3JmW2tleV1cclxuICAgIH0pXHJcbn0pXHJcblxyXG5odHRwLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWydDb250ZW50LVR5cGUnXSA9ICdhcHBsaWNhdGlvbi9qc29uJztcclxuaHR0cC5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnWC1SZXF1ZXN0ZWQtV2l0aCddID0gJ1hNTEh0dHBSZXF1ZXN0JztcclxuXHJcbi8qKlxyXG4gKiBHZXQgQ1NSRiBmaWVsZHMuXHJcbiAqIFxyXG4gKiBAcmV0dXJucyBvYmplY3RcclxuICovXHJcbmZ1bmN0aW9uIGdldENzcmZGaWVsZHMoKSB7XHJcbiAgICBjb25zdCBjc3JmTmFtZU1ldGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtZXRhI2NzcmZfbmFtZScpO1xyXG4gICAgY29uc3QgY3NyZlZhbHVlTWV0YSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21ldGEjY3NyZl92YWx1ZScpO1xyXG5cclxuICAgIGNvbnN0IGNzcmZOYW1lS2V5ID0gY3NyZk5hbWVNZXRhLmdldEF0dHJpYnV0ZSgnbmFtZScpO1xyXG4gICAgY29uc3QgY3NyZk5hbWUgPSBjc3JmTmFtZU1ldGEuY29udGVudDtcclxuXHJcbiAgICBjb25zdCBjc3JmVmFsdWVLZXkgPSBjc3JmVmFsdWVNZXRhLmdldEF0dHJpYnV0ZSgnbmFtZScpO1xyXG4gICAgY29uc3QgY3NyZlZhbHVlID0gY3NyZlZhbHVlTWV0YS5jb250ZW50O1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgW2NzcmZOYW1lS2V5XTogY3NyZk5hbWUsXHJcbiAgICAgICAgW2NzcmZWYWx1ZUtleV06IGNzcmZWYWx1ZVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBodHRwOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJodHRwIiwiY29uc29sZSIsImxvZyIsImRlZmF1bHRzIiwiaGVhZGVycyIsImdldCIsInRoZW4iLCJyZXMiLCJkYXRhIiwicG9zdCIsImF4aW9zIiwiY3NyZiIsImdldENzcmZGaWVsZHMiLCJjc3JmTWV0aG9kcyIsImNyZWF0ZSIsIm1hcCIsIm1ldGhvZCIsIk9iamVjdCIsImtleXMiLCJrZXkiLCJjb21tb24iLCJjc3JmTmFtZU1ldGEiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjc3JmVmFsdWVNZXRhIiwiY3NyZk5hbWVLZXkiLCJnZXRBdHRyaWJ1dGUiLCJjc3JmTmFtZSIsImNvbnRlbnQiLCJjc3JmVmFsdWVLZXkiLCJjc3JmVmFsdWUiLCJfZGVmaW5lUHJvcGVydHkiXSwic291cmNlUm9vdCI6IiJ9
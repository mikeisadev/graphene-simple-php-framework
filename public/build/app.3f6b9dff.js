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
_http__WEBPACK_IMPORTED_MODULE_1__["default"].post('/axios-post').then(function (res) {
  console.log(res.data);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLjNmNmI5ZGZmLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUF1QjtBQUNFO0FBRXpCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxlQUFlLEVBQUVGLDZDQUFJLENBQUNHLFFBQVEsQ0FBQ0MsT0FBTyxDQUFDO0FBRW5ESiw2Q0FBSSxDQUFDSyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQ2pCQyxJQUFJLENBQUMsVUFBQUMsR0FBRyxFQUFJO0VBQ1ROLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSyxHQUFHLENBQUNDLElBQUksQ0FBQztBQUN6QixDQUFDLENBQUM7QUFFTlIsNkNBQUksQ0FBQ1MsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUNuQkgsSUFBSSxDQUFDLFVBQUFDLEdBQUcsRUFBSTtFQUNUTixPQUFPLENBQUNDLEdBQUcsQ0FBQ0ssR0FBRyxDQUFDQyxJQUFJLENBQUM7QUFDekIsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYk47QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDMEI7QUFFMUIsSUFBTUcsSUFBSSxHQUFHQyxhQUFhLENBQUMsQ0FBQztBQUM1QixJQUFNQyxXQUFXLEdBQUcsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxRQUFRLENBQUM7QUFFdEQsSUFBTWIsSUFBSSxHQUFHVSw2Q0FBSyxDQUFDSSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFFN0JELFdBQVcsQ0FBQ0UsR0FBRyxDQUFDLFVBQUFDLE1BQU0sRUFBSTtFQUN0QkMsTUFBTSxDQUFDQyxJQUFJLENBQUNQLElBQUksQ0FBQyxDQUFDSSxHQUFHLENBQUMsVUFBQUksR0FBRyxFQUFJO0lBQ3pCbkIsSUFBSSxDQUFDRyxRQUFRLENBQUNDLE9BQU8sQ0FBQ1ksTUFBTSxDQUFDLENBQUNHLEdBQUcsQ0FBQyxHQUFHUixJQUFJLENBQUNRLEdBQUcsQ0FBQztFQUNsRCxDQUFDLENBQUM7QUFDTixDQUFDLENBQUM7QUFFRm5CLElBQUksQ0FBQ0csUUFBUSxDQUFDQyxPQUFPLENBQUNnQixNQUFNLENBQUMsY0FBYyxDQUFDLEdBQUcsa0JBQWtCO0FBQ2pFcEIsSUFBSSxDQUFDRyxRQUFRLENBQUNDLE9BQU8sQ0FBQ2dCLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLGdCQUFnQjs7QUFFbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVNSLGFBQWFBLENBQUEsRUFBRztFQUNyQixJQUFNUyxZQUFZLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGdCQUFnQixDQUFDO0VBQzdELElBQU1DLGFBQWEsR0FBR0YsUUFBUSxDQUFDQyxhQUFhLENBQUMsaUJBQWlCLENBQUM7RUFFL0QsSUFBTUUsV0FBVyxHQUFHSixZQUFZLENBQUNLLFlBQVksQ0FBQyxNQUFNLENBQUM7RUFDckQsSUFBTUMsUUFBUSxHQUFHTixZQUFZLENBQUNPLE9BQU87RUFFckMsSUFBTUMsWUFBWSxHQUFHTCxhQUFhLENBQUNFLFlBQVksQ0FBQyxNQUFNLENBQUM7RUFDdkQsSUFBTUksU0FBUyxHQUFHTixhQUFhLENBQUNJLE9BQU87RUFFdkMsT0FBQUcsZUFBQSxDQUFBQSxlQUFBLEtBQ0tOLFdBQVcsRUFBR0UsUUFBUSxHQUN0QkUsWUFBWSxFQUFHQyxTQUFTO0FBRWpDO0FBRUEsaUVBQWU5QixJQUFJOzs7Ozs7Ozs7OztBQzVDbkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ncmFwaGVuZWZyYW1ld29yay8uL3Jlc291cmNlcy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZ3JhcGhlbmVmcmFtZXdvcmsvLi9yZXNvdXJjZXMvanMvaHR0cC5qcyIsIndlYnBhY2s6Ly9ncmFwaGVuZWZyYW1ld29yay8uL3Jlc291cmNlcy9jc3MvYXBwLmNzcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL2Nzcy9hcHAuY3NzJ1xyXG5pbXBvcnQgaHR0cCBmcm9tICcuL2h0dHAnXHJcblxyXG5jb25zb2xlLmxvZygnQXhpb3MgaGVhZGVycycsIGh0dHAuZGVmYXVsdHMuaGVhZGVycylcclxuXHJcbmh0dHAuZ2V0KCcvYXhpb3MtZ2V0JylcclxuICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpXHJcbiAgICB9KTtcclxuXHJcbmh0dHAucG9zdCgnL2F4aW9zLXBvc3QnKVxyXG4gICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSlcclxuICAgIH0pOyIsIi8qKlxyXG4gKiBJbXBvcnQgYXhpb3MgYW5kIHNldCBDU1JGIGZpZWxkcy5cclxuICogXHJcbiAqIEF4aW9zIHdpbGwgYmVjb21lIGh0dHAuXHJcbiAqIFxyXG4gKiBTbyB1c2UgaHR0cCBpbnN0ZWFkIG9mIGF4aW9zLlxyXG4gKi9cclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuY29uc3QgY3NyZiA9IGdldENzcmZGaWVsZHMoKTtcclxuY29uc3QgY3NyZk1ldGhvZHMgPSBbJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJywgJ2RlbGV0ZSddO1xyXG5cclxuY29uc3QgaHR0cCA9IGF4aW9zLmNyZWF0ZSh7fSk7XHJcblxyXG5jc3JmTWV0aG9kcy5tYXAobWV0aG9kID0+IHtcclxuICAgIE9iamVjdC5rZXlzKGNzcmYpLm1hcChrZXkgPT4ge1xyXG4gICAgICAgIGh0dHAuZGVmYXVsdHMuaGVhZGVyc1ttZXRob2RdW2tleV0gPSBjc3JmW2tleV1cclxuICAgIH0pXHJcbn0pXHJcblxyXG5odHRwLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWydDb250ZW50LVR5cGUnXSA9ICdhcHBsaWNhdGlvbi9qc29uJztcclxuaHR0cC5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnWC1SZXF1ZXN0ZWQtV2l0aCddID0gJ1hNTEh0dHBSZXF1ZXN0JztcclxuXHJcbi8qKlxyXG4gKiBHZXQgQ1NSRiBmaWVsZHMuXHJcbiAqIFxyXG4gKiBAcmV0dXJucyBvYmplY3RcclxuICovXHJcbmZ1bmN0aW9uIGdldENzcmZGaWVsZHMoKSB7XHJcbiAgICBjb25zdCBjc3JmTmFtZU1ldGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtZXRhI2NzcmZfbmFtZScpO1xyXG4gICAgY29uc3QgY3NyZlZhbHVlTWV0YSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21ldGEjY3NyZl92YWx1ZScpO1xyXG5cclxuICAgIGNvbnN0IGNzcmZOYW1lS2V5ID0gY3NyZk5hbWVNZXRhLmdldEF0dHJpYnV0ZSgnbmFtZScpO1xyXG4gICAgY29uc3QgY3NyZk5hbWUgPSBjc3JmTmFtZU1ldGEuY29udGVudDtcclxuXHJcbiAgICBjb25zdCBjc3JmVmFsdWVLZXkgPSBjc3JmVmFsdWVNZXRhLmdldEF0dHJpYnV0ZSgnbmFtZScpO1xyXG4gICAgY29uc3QgY3NyZlZhbHVlID0gY3NyZlZhbHVlTWV0YS5jb250ZW50O1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgW2NzcmZOYW1lS2V5XTogY3NyZk5hbWUsXHJcbiAgICAgICAgW2NzcmZWYWx1ZUtleV06IGNzcmZWYWx1ZVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBodHRwOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJodHRwIiwiY29uc29sZSIsImxvZyIsImRlZmF1bHRzIiwiaGVhZGVycyIsImdldCIsInRoZW4iLCJyZXMiLCJkYXRhIiwicG9zdCIsImF4aW9zIiwiY3NyZiIsImdldENzcmZGaWVsZHMiLCJjc3JmTWV0aG9kcyIsImNyZWF0ZSIsIm1hcCIsIm1ldGhvZCIsIk9iamVjdCIsImtleXMiLCJrZXkiLCJjb21tb24iLCJjc3JmTmFtZU1ldGEiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjc3JmVmFsdWVNZXRhIiwiY3NyZk5hbWVLZXkiLCJnZXRBdHRyaWJ1dGUiLCJjc3JmTmFtZSIsImNvbnRlbnQiLCJjc3JmVmFsdWVLZXkiLCJjc3JmVmFsdWUiLCJfZGVmaW5lUHJvcGVydHkiXSwic291cmNlUm9vdCI6IiJ9
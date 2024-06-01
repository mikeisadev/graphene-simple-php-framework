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
  // transformRequest: [ function(data, headers) {
  //     Object.keys(csrf).map(key => {
  //         headers[key] = csrf[key];
  //     })

  //     return data;
  // } ]
});
var csrfMethods = new Set(['post', 'put', 'patch', 'delete']);
csrfMethods.map(function (method) {
  Object.keys(csrf).map(function (key) {
    http.defaults.headers[method];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLjMwOWVmZmRkLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUF1QjtBQUNFO0FBRXpCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsNkNBQUksQ0FBQ0csUUFBUSxDQUFDQyxPQUFPLENBQUNDLE1BQU0sQ0FBQztBQUV6Q0wsNkNBQUksQ0FBQ00sR0FBRyxDQUNKLE9BQ0osQ0FBQyxDQUNBQyxJQUFJLENBQUMsVUFBQUMsSUFBSSxFQUFJO0VBQ1ZQLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTSxJQUFJLENBQUNDLElBQUksQ0FBQztBQUMxQixDQUFDLENBQUMsU0FDSSxDQUFDLFVBQUFDLEdBQUcsRUFBSTtFQUNWVCxPQUFPLENBQUNDLEdBQUcsQ0FBQ1EsR0FBRyxDQUFDO0FBQ3BCLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2JGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzBCO0FBRTFCLElBQU1FLElBQUksR0FBR0MsYUFBYSxDQUFDLENBQUM7QUFFNUIsSUFBTWIsSUFBSSxHQUFHVyw2Q0FBSyxDQUFDRyxNQUFNLENBQUM7RUFDdEI7RUFDQTtFQUNBO0VBQ0E7O0VBRUE7RUFDQTtBQUFBLENBQ0gsQ0FBQztBQUVGLElBQU1DLFdBQVcsR0FBRyxJQUFJQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQztBQUUvREQsV0FBVyxDQUFDRSxHQUFHLENBQUMsVUFBQUMsTUFBTSxFQUFJO0VBQ3RCQyxNQUFNLENBQUNDLElBQUksQ0FBQ1IsSUFBSSxDQUFDLENBQUNLLEdBQUcsQ0FBQyxVQUFBSSxHQUFHLEVBQUk7SUFFekJyQixJQUFJLENBQUNHLFFBQVEsQ0FBQ0MsT0FBTyxDQUFDYyxNQUFNLENBQUM7RUFDakMsQ0FBQyxDQUFDO0FBQ04sQ0FBQyxDQUFDO0FBRUZsQixJQUFJLENBQUNHLFFBQVEsQ0FBQ0MsT0FBTyxDQUFDQyxNQUFNLENBQUMsY0FBYyxDQUFDLEdBQUcsa0JBQWtCO0FBQ2pFTCxJQUFJLENBQUNHLFFBQVEsQ0FBQ0MsT0FBTyxDQUFDQyxNQUFNLENBQUMsa0JBQWtCLENBQUMsR0FBRyxnQkFBZ0I7O0FBRW5FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTUSxhQUFhQSxDQUFBLEVBQUc7RUFDckIsSUFBTVMsWUFBWSxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQztFQUM3RCxJQUFNQyxhQUFhLEdBQUdGLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGlCQUFpQixDQUFDO0VBRS9ELElBQU1FLFdBQVcsR0FBR0osWUFBWSxDQUFDSyxZQUFZLENBQUMsTUFBTSxDQUFDO0VBQ3JELElBQU1DLFFBQVEsR0FBR04sWUFBWSxDQUFDTyxPQUFPO0VBRXJDLElBQU1DLFlBQVksR0FBR0wsYUFBYSxDQUFDRSxZQUFZLENBQUMsTUFBTSxDQUFDO0VBQ3ZELElBQU1JLFNBQVMsR0FBR04sYUFBYSxDQUFDSSxPQUFPO0VBRXZDLE9BQUFHLGVBQUEsQ0FBQUEsZUFBQSxLQUNLTixXQUFXLEVBQUdFLFFBQVEsR0FDdEJFLFlBQVksRUFBR0MsU0FBUztBQUVqQztBQUVBLGlFQUFlL0IsSUFBSTs7Ozs7Ozs7Ozs7QUN0RG5CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3JhcGhlbmVmcmFtZXdvcmsvLi9yZXNvdXJjZXMvanMvYXBwLmpzIiwid2VicGFjazovL2dyYXBoZW5lZnJhbWV3b3JrLy4vcmVzb3VyY2VzL2pzL2h0dHAuanMiLCJ3ZWJwYWNrOi8vZ3JhcGhlbmVmcmFtZXdvcmsvLi9yZXNvdXJjZXMvY3NzL2FwcC5jc3MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9jc3MvYXBwLmNzcydcclxuaW1wb3J0IGh0dHAgZnJvbSAnLi9odHRwJ1xyXG5cclxuY29uc29sZS5sb2coaHR0cC5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vbilcclxuXHJcbmh0dHAuZ2V0KFxyXG4gICAgJy90ZXN0J1xyXG4pXHJcbi50aGVuKHJlc3AgPT4ge1xyXG4gICAgY29uc29sZS5sb2cocmVzcC5kYXRhKVxyXG59KVxyXG4uY2F0Y2goZXJyID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGVycilcclxufSkiLCIvKipcclxuICogSW1wb3J0IGF4aW9zIGFuZCBzZXQgQ1NSRiBmaWVsZHMuXHJcbiAqIFxyXG4gKiBBeGlvcyB3aWxsIGJlY29tZSBodHRwLlxyXG4gKiBcclxuICogU28gdXNlIGh0dHAgaW5zdGVhZCBvZiBheGlvcy5cclxuICovXHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmNvbnN0IGNzcmYgPSBnZXRDc3JmRmllbGRzKCk7XHJcblxyXG5jb25zdCBodHRwID0gYXhpb3MuY3JlYXRlKHtcclxuICAgIC8vIHRyYW5zZm9ybVJlcXVlc3Q6IFsgZnVuY3Rpb24oZGF0YSwgaGVhZGVycykge1xyXG4gICAgLy8gICAgIE9iamVjdC5rZXlzKGNzcmYpLm1hcChrZXkgPT4ge1xyXG4gICAgLy8gICAgICAgICBoZWFkZXJzW2tleV0gPSBjc3JmW2tleV07XHJcbiAgICAvLyAgICAgfSlcclxuXHJcbiAgICAvLyAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAvLyB9IF1cclxufSk7XHJcblxyXG5jb25zdCBjc3JmTWV0aG9kcyA9IG5ldyBTZXQoWydwb3N0JywgJ3B1dCcsICdwYXRjaCcsICdkZWxldGUnXSk7XHJcblxyXG5jc3JmTWV0aG9kcy5tYXAobWV0aG9kID0+IHtcclxuICAgIE9iamVjdC5rZXlzKGNzcmYpLm1hcChrZXkgPT4ge1xyXG5cclxuICAgICAgICBodHRwLmRlZmF1bHRzLmhlYWRlcnNbbWV0aG9kXVxyXG4gICAgfSlcclxufSlcclxuXHJcbmh0dHAuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bJ0NvbnRlbnQtVHlwZSddID0gJ2FwcGxpY2F0aW9uL2pzb24nO1xyXG5odHRwLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWydYLVJlcXVlc3RlZC1XaXRoJ10gPSAnWE1MSHR0cFJlcXVlc3QnO1xyXG5cclxuLyoqXHJcbiAqIEdldCBDU1JGIGZpZWxkcy5cclxuICogXHJcbiAqIEByZXR1cm5zIG9iamVjdFxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0Q3NyZkZpZWxkcygpIHtcclxuICAgIGNvbnN0IGNzcmZOYW1lTWV0YSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21ldGEjY3NyZl9uYW1lJyk7XHJcbiAgICBjb25zdCBjc3JmVmFsdWVNZXRhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWV0YSNjc3JmX3ZhbHVlJyk7XHJcblxyXG4gICAgY29uc3QgY3NyZk5hbWVLZXkgPSBjc3JmTmFtZU1ldGEuZ2V0QXR0cmlidXRlKCduYW1lJyk7XHJcbiAgICBjb25zdCBjc3JmTmFtZSA9IGNzcmZOYW1lTWV0YS5jb250ZW50O1xyXG5cclxuICAgIGNvbnN0IGNzcmZWYWx1ZUtleSA9IGNzcmZWYWx1ZU1ldGEuZ2V0QXR0cmlidXRlKCduYW1lJyk7XHJcbiAgICBjb25zdCBjc3JmVmFsdWUgPSBjc3JmVmFsdWVNZXRhLmNvbnRlbnQ7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBbY3NyZk5hbWVLZXldOiBjc3JmTmFtZSxcclxuICAgICAgICBbY3NyZlZhbHVlS2V5XTogY3NyZlZhbHVlXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGh0dHA7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbImh0dHAiLCJjb25zb2xlIiwibG9nIiwiZGVmYXVsdHMiLCJoZWFkZXJzIiwiY29tbW9uIiwiZ2V0IiwidGhlbiIsInJlc3AiLCJkYXRhIiwiZXJyIiwiYXhpb3MiLCJjc3JmIiwiZ2V0Q3NyZkZpZWxkcyIsImNyZWF0ZSIsImNzcmZNZXRob2RzIiwiU2V0IiwibWFwIiwibWV0aG9kIiwiT2JqZWN0Iiwia2V5cyIsImtleSIsImNzcmZOYW1lTWV0YSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNzcmZWYWx1ZU1ldGEiLCJjc3JmTmFtZUtleSIsImdldEF0dHJpYnV0ZSIsImNzcmZOYW1lIiwiY29udGVudCIsImNzcmZWYWx1ZUtleSIsImNzcmZWYWx1ZSIsIl9kZWZpbmVQcm9wZXJ0eSJdLCJzb3VyY2VSb290IjoiIn0=
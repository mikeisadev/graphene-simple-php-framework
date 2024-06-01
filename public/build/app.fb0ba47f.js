(self["webpackChunkgrapheneframework"] = self["webpackChunkgrapheneframework"] || []).push([["app"],{

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: C:\\laragon\\www\\grapheneframework\\resources\\js\\http.js: Unexpected token (14:8)\n\n\u001b[0m \u001b[90m 12 |\u001b[39m \u001b[36mconst\u001b[39m http \u001b[33m=\u001b[39m axios\u001b[33m.\u001b[39mcreate({\n \u001b[90m 13 |\u001b[39m     transformRequest\u001b[33m:\u001b[39m [\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 14 |\u001b[39m         \u001b[36mreturn\u001b[39m data\u001b[33m;\u001b[39m\n \u001b[90m    |\u001b[39m         \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 15 |\u001b[39m     ]\n \u001b[90m 16 |\u001b[39m })\u001b[33m;\u001b[39m\n \u001b[90m 17 |\u001b[39m\u001b[0m\n    at constructor (C:\\laragon\\www\\grapheneframework\\node_modules\\@babel\\parser\\lib\\index.js:351:19)\n    at Parser.raise (C:\\laragon\\www\\grapheneframework\\node_modules\\@babel\\parser\\lib\\index.js:3233:19)\n    at Parser.unexpected (C:\\laragon\\www\\grapheneframework\\node_modules\\@babel\\parser\\lib\\index.js:3253:16)\n    at Parser.parseExprAtom (C:\\laragon\\www\\grapheneframework\\node_modules\\@babel\\parser\\lib\\index.js:10952:16)\n    at Parser.parseExprSubscripts (C:\\laragon\\www\\grapheneframework\\node_modules\\@babel\\parser\\lib\\index.js:10568:23)\n    at Parser.parseUpdate (C:\\laragon\\www\\grapheneframework\\node_modules\\@babel\\parser\\lib\\index.js:10551:21)\n    at Parser.parseMaybeUnary (C:\\laragon\\www\\grapheneframework\\node_modules\\@babel\\parser\\lib\\index.js:10529:23)\n    at Parser.parseMaybeUnaryOrPrivate (C:\\laragon\\www\\grapheneframework\\node_modules\\@babel\\parser\\lib\\index.js:10383:61)\n    at Parser.parseExprOps (C:\\laragon\\www\\grapheneframework\\node_modules\\@babel\\parser\\lib\\index.js:10388:23)\n    at Parser.parseMaybeConditional (C:\\laragon\\www\\grapheneframework\\node_modules\\@babel\\parser\\lib\\index.js:10365:23)\n    at Parser.parseMaybeAssign (C:\\laragon\\www\\grapheneframework\\node_modules\\@babel\\parser\\lib\\index.js:10326:21)\n    at C:\\laragon\\www\\grapheneframework\\node_modules\\@babel\\parser\\lib\\index.js:10296:39\n    at Parser.allowInAnd (C:\\laragon\\www\\grapheneframework\\node_modules\\@babel\\parser\\lib\\index.js:11918:12)\n    at Parser.parseMaybeAssignAllowIn (C:\\laragon\\www\\grapheneframework\\node_modules\\@babel\\parser\\lib\\index.js:10296:17)\n    at Parser.parseExprListItem (C:\\laragon\\www\\grapheneframework\\node_modules\\@babel\\parser\\lib\\index.js:11678:18)\n    at Parser.parseExprList (C:\\laragon\\www\\grapheneframework\\node_modules\\@babel\\parser\\lib\\index.js:11653:22)\n    at Parser.parseArrayLike (C:\\laragon\\www\\grapheneframework\\node_modules\\@babel\\parser\\lib\\index.js:11555:26)\n    at Parser.parseExprAtom (C:\\laragon\\www\\grapheneframework\\node_modules\\@babel\\parser\\lib\\index.js:10844:23)\n    at Parser.parseExprSubscripts (C:\\laragon\\www\\grapheneframework\\node_modules\\@babel\\parser\\lib\\index.js:10568:23)\n    at Parser.parseUpdate (C:\\laragon\\www\\grapheneframework\\node_modules\\@babel\\parser\\lib\\index.js:10551:21)\n    at Parser.parseMaybeUnary (C:\\laragon\\www\\grapheneframework\\node_modules\\@babel\\parser\\lib\\index.js:10529:23)\n    at Parser.parseMaybeUnaryOrPrivate (C:\\laragon\\www\\grapheneframework\\node_modules\\@babel\\parser\\lib\\index.js:10383:61)\n    at Parser.parseExprOps (C:\\laragon\\www\\grapheneframework\\node_modules\\@babel\\parser\\lib\\index.js:10388:23)\n    at Parser.parseMaybeConditional (C:\\laragon\\www\\grapheneframework\\node_modules\\@babel\\parser\\lib\\index.js:10365:23)\n    at Parser.parseMaybeAssign (C:\\laragon\\www\\grapheneframework\\node_modules\\@babel\\parser\\lib\\index.js:10326:21)\n    at C:\\laragon\\www\\grapheneframework\\node_modules\\@babel\\parser\\lib\\index.js:10296:39\n    at Parser.allowInAnd (C:\\laragon\\www\\grapheneframework\\node_modules\\@babel\\parser\\lib\\index.js:11918:12)\n    at Parser.parseMaybeAssignAllowIn (C:\\laragon\\www\\grapheneframework\\node_modules\\@babel\\parser\\lib\\index.js:10296:17)\n    at Parser.parseObjectProperty (C:\\laragon\\www\\grapheneframework\\node_modules\\@babel\\parser\\lib\\index.js:11452:83)\n    at Parser.parseObjPropValue (C:\\laragon\\www\\grapheneframework\\node_modules\\@babel\\parser\\lib\\index.js:11477:100)\n    at Parser.parsePropertyDefinition (C:\\laragon\\www\\grapheneframework\\node_modules\\@babel\\parser\\lib\\index.js:11417:17)\n    at Parser.parseObjectLike (C:\\laragon\\www\\grapheneframework\\node_modules\\@babel\\parser\\lib\\index.js:11334:21)\n    at Parser.parseExprAtom (C:\\laragon\\www\\grapheneframework\\node_modules\\@babel\\parser\\lib\\index.js:10853:23)\n    at Parser.parseExprSubscripts (C:\\laragon\\www\\grapheneframework\\node_modules\\@babel\\parser\\lib\\index.js:10568:23)\n    at Parser.parseUpdate (C:\\laragon\\www\\grapheneframework\\node_modules\\@babel\\parser\\lib\\index.js:10551:21)\n    at Parser.parseMaybeUnary (C:\\laragon\\www\\grapheneframework\\node_modules\\@babel\\parser\\lib\\index.js:10529:23)\n    at Parser.parseMaybeUnaryOrPrivate (C:\\laragon\\www\\grapheneframework\\node_modules\\@babel\\parser\\lib\\index.js:10383:61)\n    at Parser.parseExprOps (C:\\laragon\\www\\grapheneframework\\node_modules\\@babel\\parser\\lib\\index.js:10388:23)\n    at Parser.parseMaybeConditional (C:\\laragon\\www\\grapheneframework\\node_modules\\@babel\\parser\\lib\\index.js:10365:23)\n    at Parser.parseMaybeAssign (C:\\laragon\\www\\grapheneframework\\node_modules\\@babel\\parser\\lib\\index.js:10326:21)\n    at C:\\laragon\\www\\grapheneframework\\node_modules\\@babel\\parser\\lib\\index.js:10296:39\n    at Parser.allowInAnd (C:\\laragon\\www\\grapheneframework\\node_modules\\@babel\\parser\\lib\\index.js:11918:12)\n    at Parser.parseMaybeAssignAllowIn (C:\\laragon\\www\\grapheneframework\\node_modules\\@babel\\parser\\lib\\index.js:10296:17)\n    at Parser.parseExprListItem (C:\\laragon\\www\\grapheneframework\\node_modules\\@babel\\parser\\lib\\index.js:11678:18)\n    at Parser.parseCallExpressionArguments (C:\\laragon\\www\\grapheneframework\\node_modules\\@babel\\parser\\lib\\index.js:10754:22)\n    at Parser.parseCoverCallAndAsyncArrowHead (C:\\laragon\\www\\grapheneframework\\node_modules\\@babel\\parser\\lib\\index.js:10671:29)\n    at Parser.parseSubscript (C:\\laragon\\www\\grapheneframework\\node_modules\\@babel\\parser\\lib\\index.js:10608:19)\n    at Parser.parseSubscripts (C:\\laragon\\www\\grapheneframework\\node_modules\\@babel\\parser\\lib\\index.js:10581:19)\n    at Parser.parseExprSubscripts (C:\\laragon\\www\\grapheneframework\\node_modules\\@babel\\parser\\lib\\index.js:10572:17)\n    at Parser.parseUpdate (C:\\laragon\\www\\grapheneframework\\node_modules\\@babel\\parser\\lib\\index.js:10551:21)");

/***/ }),

/***/ "./resources/css/app.css":
/*!*******************************!*\
  !*** ./resources/css/app.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./resources/js/app.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmZiMGJhNDdmLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUF1QjtBQUNFO0FBRXpCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsNkNBQUksQ0FBQ0csUUFBUSxDQUFDQyxPQUFPLENBQUNDLE1BQU0sQ0FBQztBQUV6Q0wsNkNBQUksQ0FBQ00sR0FBRyxDQUNKLE9BQ0osQ0FBQyxDQUNBQyxJQUFJLENBQUMsVUFBQUMsSUFBSSxFQUFJO0VBQ1ZQLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTSxJQUFJLENBQUNDLElBQUksQ0FBQztBQUMxQixDQUFDLENBQUMsU0FDSSxDQUFDLFVBQUFDLEdBQUcsRUFBSTtFQUNWVCxPQUFPLENBQUNDLEdBQUcsQ0FBQ1EsR0FBRyxDQUFDO0FBQ3BCLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2JGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3JhcGhlbmVmcmFtZXdvcmsvLi9yZXNvdXJjZXMvanMvYXBwLmpzIiwid2VicGFjazovL2dyYXBoZW5lZnJhbWV3b3JrLy4vcmVzb3VyY2VzL2Nzcy9hcHAuY3NzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vY3NzL2FwcC5jc3MnXHJcbmltcG9ydCBodHRwIGZyb20gJy4vaHR0cCdcclxuXHJcbmNvbnNvbGUubG9nKGh0dHAuZGVmYXVsdHMuaGVhZGVycy5jb21tb24pXHJcblxyXG5odHRwLmdldChcclxuICAgICcvdGVzdCdcclxuKVxyXG4udGhlbihyZXNwID0+IHtcclxuICAgIGNvbnNvbGUubG9nKHJlc3AuZGF0YSlcclxufSlcclxuLmNhdGNoKGVyciA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnIpXHJcbn0pIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbImh0dHAiLCJjb25zb2xlIiwibG9nIiwiZGVmYXVsdHMiLCJoZWFkZXJzIiwiY29tbW9uIiwiZ2V0IiwidGhlbiIsInJlc3AiLCJkYXRhIiwiZXJyIl0sInNvdXJjZVJvb3QiOiIifQ==
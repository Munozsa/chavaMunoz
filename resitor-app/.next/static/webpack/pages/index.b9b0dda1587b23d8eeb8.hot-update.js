webpackHotUpdate_N_E("pages/index",{

/***/ "./services/apiCall.js":
/*!*****************************!*\
  !*** ./services/apiCall.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _interopRequireDefault = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"));

var _axios = _interopRequireDefault(__webpack_require__(/*! axios */ "./node_modules/axios/index.js"));

var config = __webpack_require__(/*! ../config/index */ "./config/index.js");

module.exports.calculateResistance = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(first, second, third, fourth) {
    var obj;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            obj = {
              first: first,
              second: second,
              third: third,
              fourth: fourth
            };
            return _context.abrupt("return", _axios["default"].post("".concat(config.api.url, "/api/calculateResistance"), obj, headers));

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}();

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2VydmljZXMvYXBpQ2FsbC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJyZXF1aXJlIiwibW9kdWxlIiwiZXhwb3J0cyIsImNhbGN1bGF0ZVJlc2lzdGFuY2UiLCJmaXJzdCIsInNlY29uZCIsInRoaXJkIiwiZm91cnRoIiwib2JqIiwiYXhpb3MiLCJwb3N0IiwiYXBpIiwidXJsIiwiaGVhZGVycyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0EsSUFBTUEsTUFBTSxHQUFHQyxtQkFBTyxDQUFDLDBDQUFELENBQXRCOztBQUNBQyxNQUFNLENBQUNDLE9BQVAsQ0FBZUMsbUJBQWY7QUFBQSwyRkFBcUMsaUJBQU9DLEtBQVAsRUFBY0MsTUFBZCxFQUFzQkMsS0FBdEIsRUFBNkJDLE1BQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUM3QkMsZUFENkIsR0FDdkI7QUFDVkosbUJBQUssRUFBRUEsS0FERztBQUVWQyxvQkFBTSxFQUFFQSxNQUZFO0FBR1ZDLG1CQUFLLEVBQUVBLEtBSEc7QUFJVkMsb0JBQU0sRUFBRUE7QUFKRSxhQUR1QjtBQUFBLDZDQU81QkUsa0JBQU1DLElBQU4sV0FBY1gsTUFBTSxDQUFDWSxHQUFQLENBQVdDLEdBQXpCLCtCQUF3REosR0FBeEQsRUFBNERLLE9BQTVELENBUDRCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQXJDOztBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmI5YjBkZGExNTg3YjIzZDhlZWI4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5jb25zdCBjb25maWcgPSByZXF1aXJlKCcuLi9jb25maWcvaW5kZXgnKTtcclxubW9kdWxlLmV4cG9ydHMuY2FsY3VsYXRlUmVzaXN0YW5jZSA9IGFzeW5jIChmaXJzdCwgc2Vjb25kLCB0aGlyZCwgZm91cnRoKSA9PiB7XHJcbiAgY29uc3Qgb2JqID0ge1xyXG4gICAgZmlyc3Q6IGZpcnN0LFxyXG4gICAgc2Vjb25kOiBzZWNvbmQsXHJcbiAgICB0aGlyZDogdGhpcmQsXHJcbiAgICBmb3VydGg6IGZvdXJ0aCxcclxuICB9O1xyXG4gIHJldHVybiBheGlvcy5wb3N0KGAke2NvbmZpZy5hcGkudXJsfS9hcGkvY2FsY3VsYXRlUmVzaXN0YW5jZWAsIG9iaixoZWFkZXJzKTtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
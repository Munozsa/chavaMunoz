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
            return _context.abrupt("return", _axios["default"].post("".concat(config.api.url, "/api/calculateResistance"), obj));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2VydmljZXMvYXBpQ2FsbC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJyZXF1aXJlIiwibW9kdWxlIiwiZXhwb3J0cyIsImNhbGN1bGF0ZVJlc2lzdGFuY2UiLCJmaXJzdCIsInNlY29uZCIsInRoaXJkIiwiZm91cnRoIiwib2JqIiwiYXhpb3MiLCJwb3N0IiwiYXBpIiwidXJsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQSxJQUFNQSxNQUFNLEdBQUdDLG1CQUFPLENBQUMsMENBQUQsQ0FBdEI7O0FBQ0FDLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlQyxtQkFBZjtBQUFBLDJGQUFxQyxpQkFBT0MsS0FBUCxFQUFjQyxNQUFkLEVBQXNCQyxLQUF0QixFQUE2QkMsTUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQzdCQyxlQUQ2QixHQUN2QjtBQUNWSixtQkFBSyxFQUFFQSxLQURHO0FBRVZDLG9CQUFNLEVBQUVBLE1BRkU7QUFHVkMsbUJBQUssRUFBRUEsS0FIRztBQUlWQyxvQkFBTSxFQUFFQTtBQUpFLGFBRHVCO0FBQUEsNkNBTzVCRSxrQkFBTUMsSUFBTixXQUFjWCxNQUFNLENBQUNZLEdBQVAsQ0FBV0MsR0FBekIsK0JBQXdESixHQUF4RCxDQVA0Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFyQzs7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC40YjAzOGM4MDMzYTRhODg5YzgzYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuY29uc3QgY29uZmlnID0gcmVxdWlyZSgnLi4vY29uZmlnL2luZGV4Jyk7XHJcbm1vZHVsZS5leHBvcnRzLmNhbGN1bGF0ZVJlc2lzdGFuY2UgPSBhc3luYyAoZmlyc3QsIHNlY29uZCwgdGhpcmQsIGZvdXJ0aCkgPT4ge1xyXG4gIGNvbnN0IG9iaiA9IHtcclxuICAgIGZpcnN0OiBmaXJzdCxcclxuICAgIHNlY29uZDogc2Vjb25kLFxyXG4gICAgdGhpcmQ6IHRoaXJkLFxyXG4gICAgZm91cnRoOiBmb3VydGgsXHJcbiAgfTtcclxuICByZXR1cm4gYXhpb3MucG9zdChgJHtjb25maWcuYXBpLnVybH0vYXBpL2NhbGN1bGF0ZVJlc2lzdGFuY2VgLCBvYmopO1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9
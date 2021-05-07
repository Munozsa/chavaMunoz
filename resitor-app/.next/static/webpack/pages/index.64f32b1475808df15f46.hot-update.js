webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/components/values.js":
/*!************************************!*\
  !*** ./pages/components/values.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _interopRequireDefault = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _jsxDevRuntime = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");

var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _Select = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/Select */ "./node_modules/@material-ui/core/esm/Select/index.js"));

var _core = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");

var _MenuItem = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/index.js"));

var _InputLabel = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/InputLabel */ "./node_modules/@material-ui/core/esm/InputLabel/index.js"));

var _reactstrap = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");

var _dropdwonValues = __webpack_require__(/*! ../../public/dropdwonValues */ "./public/dropdwonValues.js");

var _apiCall = __webpack_require__(/*! ../../services/apiCall */ "./services/apiCall.js");

var _jsxFileName = "C:\\Users\\samut\\Desktop\\resitor-app\\pages\\components\\values.js",
    _this = void 0,
    _s = $RefreshSig$();

module.exports.Values = _s(function (_ref) {
  _s();

  var Parentcallbackfirst = _ref.Parentcallbackfirst,
      Parentcallbackscnd = _ref.Parentcallbackscnd,
      Parentcallbackthrd = _ref.Parentcallbackthrd,
      Parentcallbackfrth = _ref.Parentcallbackfrth,
      parentResult = _ref.parentResult;

  var _useState = (0, _react.useState)('None'),
      firstVal = _useState[0],
      setFirstVal = _useState[1];

  var _useState2 = (0, _react.useState)('None'),
      scndVal = _useState2[0],
      setScndsVal = _useState2[1];

  var _useState3 = (0, _react.useState)('None'),
      thirdVal = _useState3[0],
      setThirdVal = _useState3[1];

  var _useState4 = (0, _react.useState)('None'),
      fourthVal = _useState4[0],
      setFourthVal = _useState4[1];

  var handleFirstDigitChange = function handleFirstDigitChange(event, index, value) {
    console.log();
    setFirstVal(e.target.value);
    Parentcallbackfirst(e.target.value);
  };

  var handleSecondDigitChange = function handleSecondDigitChange(e) {
    setScndsVal(e.target.value);
    Parentcallbackscnd(e.target.value);
  };

  var handleThirdDigitChange = function handleThirdDigitChange(e) {
    setThirdVal(e.target.value);
    Parentcallbackthrd(e.target.value);
  };

  var handleFourthDigitChange = function handleFourthDigitChange(e) {
    setFourthVal(e.target.value);
    Parentcallbackfrth(e.target.value);
  };

  var calculate = /*#__PURE__*/function () {
    var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(e) {
      var res;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return (0, _apiCall.calculateResistance)(firstVal, scndVal, thirdVal, fourthVal);

            case 2:
              res = _context.sent;
              console.log(res);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function calculate(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var resetValues = function resetValues(e) {
    console.log('here');
    setFirstVal('None');
    setScndsVal('None');
    setThirdVal('None');
    setFourthVal('None');
    Parentcallbackfirst('');
    Parentcallbackscnd('');
    Parentcallbackthrd('');
    Parentcallbackfrth('');
  };

  return /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_reactstrap.Container, {
    children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_reactstrap.Row, {
      children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_reactstrap.Col, {
        style: {
          padding: '15px'
        },
        xs: 6,
        sm: 6,
        md: 3,
        lg: 3,
        xl: 3,
        children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_InputLabel["default"], {
          id: "label",
          children: "1s Digit"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_Select["default"], {
          labelId: "label",
          id: "select",
          value: firstVal,
          onChange: handleFirstDigitChange,
          children: _dropdwonValues.dropVals.body.map(function (item, index) {
            return /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_MenuItem["default"], {
              value: item.value,
              children: item.text
            }, '1st' + index.toString(), false, {
              fileName: _jsxFileName,
              lineNumber: 74,
              columnNumber: 15
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_reactstrap.Col, {
        style: {
          padding: '15px'
        },
        xs: 6,
        sm: 6,
        md: 3,
        lg: 3,
        xl: 3,
        children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
          children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_InputLabel["default"], {
            id: "second-digit",
            children: "2nd Digit"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_Select["default"], {
            labelId: "label",
            id: "select",
            value: scndVal,
            onChange: handleSecondDigitChange,
            children: _dropdwonValues.dropVals.body.map(function (item, index) {
              return /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_MenuItem["default"], {
                value: item.value,
                children: item.text
              }, '2nd' + index.toString(), false, {
                fileName: _jsxFileName,
                lineNumber: 90,
                columnNumber: 17
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_reactstrap.Col, {
        style: {
          padding: '15px'
        },
        xs: 6,
        sm: 6,
        md: 3,
        lg: 3,
        xl: 3,
        children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_InputLabel["default"], {
          id: "third-digit",
          children: "Multiplier"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_Select["default"], {
          labelId: "label",
          id: "select",
          value: thirdVal,
          onChange: handleThirdDigitChange,
          children: _dropdwonValues.dropVals.body.map(function (item, index) {
            return /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_MenuItem["default"], {
              value: item.value,
              children: item.text
            }, '3rd' + index.toString(), false, {
              fileName: _jsxFileName,
              lineNumber: 106,
              columnNumber: 15
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_reactstrap.Col, {
        style: {
          padding: '15px'
        },
        xs: 6,
        sm: 6,
        md: 3,
        lg: 3,
        xl: 3,
        children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_InputLabel["default"], {
          id: "fourth-digit",
          children: "Tolerance"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_Select["default"], {
          labelId: "label",
          id: "select",
          value: fourthVal,
          onChange: handleFourthDigitChange,
          children: _dropdwonValues.dropVals.body.map(function (item, index) {
            return /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_MenuItem["default"], {
              value: item.value,
              children: item.text
            }, '4th' + index.toString(), false, {
              fileName: _jsxFileName,
              lineNumber: 121,
              columnNumber: 15
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_reactstrap.Row, {
      style: {
        marginTop: '30px'
      },
      children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_reactstrap.Col, {
        children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_core.Button, {
          variant: "contained",
          color: "primary",
          onClick: calculate,
          children: "Calcular"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_reactstrap.Col, {
        children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_core.Button, {
          variant: "contained",
          color: "secondary",
          onClick: resetValues,
          children: "Reset"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 63,
    columnNumber: 5
  }, _this);
}, "FxxJiRtK1HZtWdR+j7skRdIEUoE=");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy92YWx1ZXMuanMiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsIlZhbHVlcyIsIlBhcmVudGNhbGxiYWNrZmlyc3QiLCJQYXJlbnRjYWxsYmFja3NjbmQiLCJQYXJlbnRjYWxsYmFja3RocmQiLCJQYXJlbnRjYWxsYmFja2ZydGgiLCJwYXJlbnRSZXN1bHQiLCJmaXJzdFZhbCIsInNldEZpcnN0VmFsIiwic2NuZFZhbCIsInNldFNjbmRzVmFsIiwidGhpcmRWYWwiLCJzZXRUaGlyZFZhbCIsImZvdXJ0aFZhbCIsInNldEZvdXJ0aFZhbCIsImhhbmRsZUZpcnN0RGlnaXRDaGFuZ2UiLCJldmVudCIsImluZGV4IiwidmFsdWUiLCJjb25zb2xlIiwibG9nIiwiZSIsInRhcmdldCIsImhhbmRsZVNlY29uZERpZ2l0Q2hhbmdlIiwiaGFuZGxlVGhpcmREaWdpdENoYW5nZSIsImhhbmRsZUZvdXJ0aERpZ2l0Q2hhbmdlIiwiY2FsY3VsYXRlIiwicmVzIiwicmVzZXRWYWx1ZXMiLCJwYWRkaW5nIiwiZHJvcFZhbHMiLCJib2R5IiwibWFwIiwiaXRlbSIsInRleHQiLCJ0b1N0cmluZyIsIm1hcmdpblRvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7QUFFQUEsTUFBTSxDQUFDQyxPQUFQLENBQWVDLE1BQWYsTUFBd0IsZ0JBTWxCO0FBQUE7O0FBQUEsTUFMSkMsbUJBS0ksUUFMSkEsbUJBS0k7QUFBQSxNQUpKQyxrQkFJSSxRQUpKQSxrQkFJSTtBQUFBLE1BSEpDLGtCQUdJLFFBSEpBLGtCQUdJO0FBQUEsTUFGSkMsa0JBRUksUUFGSkEsa0JBRUk7QUFBQSxNQURKQyxZQUNJLFFBREpBLFlBQ0k7O0FBQUEsa0JBQzRCLHFCQUFTLE1BQVQsQ0FENUI7QUFBQSxNQUNHQyxRQURIO0FBQUEs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QUF2RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFqRUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFnRkQsQ0FwSUQiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNjRmMzJiMTQ3NTgwOGRmMTVmNDYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFNlbGVjdCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9TZWxlY3QnO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCBNZW51SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9NZW51SXRlbSc7XHJcbmltcG9ydCBJbnB1dExhYmVsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0lucHV0TGFiZWwnO1xyXG5pbXBvcnQgeyBDb2wsIENvbnRhaW5lciwgUm93IH0gZnJvbSAncmVhY3RzdHJhcCc7XHJcbmltcG9ydCB7IGRyb3BWYWxzIH0gZnJvbSAnLi4vLi4vcHVibGljL2Ryb3Bkd29uVmFsdWVzJztcclxuaW1wb3J0IHsgY2FsY3VsYXRlUmVzaXN0YW5jZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2FwaUNhbGwnO1xyXG5cclxubW9kdWxlLmV4cG9ydHMuVmFsdWVzID0gKHtcclxuICBQYXJlbnRjYWxsYmFja2ZpcnN0LFxyXG4gIFBhcmVudGNhbGxiYWNrc2NuZCxcclxuICBQYXJlbnRjYWxsYmFja3RocmQsXHJcbiAgUGFyZW50Y2FsbGJhY2tmcnRoLFxyXG4gIHBhcmVudFJlc3VsdCxcclxufSkgPT4ge1xyXG4gIGNvbnN0IFtmaXJzdFZhbCwgc2V0Rmlyc3RWYWxdID0gdXNlU3RhdGUoJ05vbmUnKTtcclxuICBjb25zdCBbc2NuZFZhbCwgc2V0U2NuZHNWYWxdID0gdXNlU3RhdGUoJ05vbmUnKTtcclxuICBjb25zdCBbdGhpcmRWYWwsIHNldFRoaXJkVmFsXSA9IHVzZVN0YXRlKCdOb25lJyk7XHJcbiAgY29uc3QgW2ZvdXJ0aFZhbCwgc2V0Rm91cnRoVmFsXSA9IHVzZVN0YXRlKCdOb25lJyk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUZpcnN0RGlnaXRDaGFuZ2UgPShldmVudCwgaW5kZXgsIHZhbHVlKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygpXHJcbiAgICBzZXRGaXJzdFZhbChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICBQYXJlbnRjYWxsYmFja2ZpcnN0KGUudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZVNlY29uZERpZ2l0Q2hhbmdlID0gZSA9PiB7XHJcbiAgICBzZXRTY25kc1ZhbChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICBQYXJlbnRjYWxsYmFja3NjbmQoZS50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlVGhpcmREaWdpdENoYW5nZSA9IGUgPT4ge1xyXG4gICAgc2V0VGhpcmRWYWwoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgUGFyZW50Y2FsbGJhY2t0aHJkKGUudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZUZvdXJ0aERpZ2l0Q2hhbmdlID0gZSA9PiB7XHJcbiAgICBzZXRGb3VydGhWYWwoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgUGFyZW50Y2FsbGJhY2tmcnRoKGUudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBjYWxjdWxhdGUgPSBhc3luYyBlID0+IHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGNhbGN1bGF0ZVJlc2lzdGFuY2UoXHJcbiAgICAgIGZpcnN0VmFsLFxyXG4gICAgICBzY25kVmFsLFxyXG4gICAgICB0aGlyZFZhbCxcclxuICAgICAgZm91cnRoVmFsLFxyXG4gICAgKTtcclxuICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVzZXRWYWx1ZXMgPSBlID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCdoZXJlJyk7XHJcbiAgICBzZXRGaXJzdFZhbCgnTm9uZScpO1xyXG4gICAgc2V0U2NuZHNWYWwoJ05vbmUnKTtcclxuICAgIHNldFRoaXJkVmFsKCdOb25lJyk7XHJcbiAgICBzZXRGb3VydGhWYWwoJ05vbmUnKTtcclxuICAgIFBhcmVudGNhbGxiYWNrZmlyc3QoJycpO1xyXG4gICAgUGFyZW50Y2FsbGJhY2tzY25kKCcnKTtcclxuICAgIFBhcmVudGNhbGxiYWNrdGhyZCgnJyk7XHJcbiAgICBQYXJlbnRjYWxsYmFja2ZydGgoJycpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyPlxyXG4gICAgICA8Um93PlxyXG4gICAgICAgIDxDb2wgc3R5bGU9e3sgcGFkZGluZzogJzE1cHgnIH19IHhzPXs2fSBzbT17Nn0gbWQ9ezN9IGxnPXszfSB4bD17M30+XHJcbiAgICAgICAgICA8SW5wdXRMYWJlbCBpZD1cImxhYmVsXCI+MXMgRGlnaXQ8L0lucHV0TGFiZWw+XHJcbiAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgIGxhYmVsSWQ9XCJsYWJlbFwiXHJcbiAgICAgICAgICAgIGlkPVwic2VsZWN0XCJcclxuICAgICAgICAgICAgdmFsdWU9e2ZpcnN0VmFsfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlRmlyc3REaWdpdENoYW5nZX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2Ryb3BWYWxzLmJvZHkubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgIDxNZW51SXRlbSBrZXk9eycxc3QnICsgaW5kZXgudG9TdHJpbmcoKX0gdmFsdWU9e2l0ZW0udmFsdWV9PlxyXG4gICAgICAgICAgICAgICAge2l0ZW0udGV4dH1cclxuICAgICAgICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDxDb2wgc3R5bGU9e3sgcGFkZGluZzogJzE1cHgnIH19IHhzPXs2fSBzbT17Nn0gbWQ9ezN9IGxnPXszfSB4bD17M30+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8SW5wdXRMYWJlbCBpZD1cInNlY29uZC1kaWdpdFwiPjJuZCBEaWdpdDwvSW5wdXRMYWJlbD5cclxuICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgIGxhYmVsSWQ9XCJsYWJlbFwiXHJcbiAgICAgICAgICAgICAgaWQ9XCJzZWxlY3RcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtzY25kVmFsfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVTZWNvbmREaWdpdENoYW5nZX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtkcm9wVmFscy5ib2R5Lm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgIDxNZW51SXRlbSBrZXk9eycybmQnICsgaW5kZXgudG9TdHJpbmcoKX0gdmFsdWU9e2l0ZW0udmFsdWV9PlxyXG4gICAgICAgICAgICAgICAgICB7aXRlbS50ZXh0fVxyXG4gICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgICA8Q29sIHN0eWxlPXt7IHBhZGRpbmc6ICcxNXB4JyB9fSB4cz17Nn0gc209ezZ9IG1kPXszfSBsZz17M30geGw9ezN9PlxyXG4gICAgICAgICAgPElucHV0TGFiZWwgaWQ9XCJ0aGlyZC1kaWdpdFwiPk11bHRpcGxpZXI8L0lucHV0TGFiZWw+XHJcbiAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgIGxhYmVsSWQ9XCJsYWJlbFwiXHJcbiAgICAgICAgICAgIGlkPVwic2VsZWN0XCJcclxuICAgICAgICAgICAgdmFsdWU9e3RoaXJkVmFsfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlVGhpcmREaWdpdENoYW5nZX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2Ryb3BWYWxzLmJvZHkubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgIDxNZW51SXRlbSBrZXk9eyczcmQnICsgaW5kZXgudG9TdHJpbmcoKX0gdmFsdWU9e2l0ZW0udmFsdWV9PlxyXG4gICAgICAgICAgICAgICAge2l0ZW0udGV4dH1cclxuICAgICAgICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDxDb2wgc3R5bGU9e3sgcGFkZGluZzogJzE1cHgnIH19IHhzPXs2fSBzbT17Nn0gbWQ9ezN9IGxnPXszfSB4bD17M30+XHJcbiAgICAgICAgICA8SW5wdXRMYWJlbCBpZD1cImZvdXJ0aC1kaWdpdFwiPlRvbGVyYW5jZTwvSW5wdXRMYWJlbD5cclxuICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgbGFiZWxJZD1cImxhYmVsXCJcclxuICAgICAgICAgICAgaWQ9XCJzZWxlY3RcIlxyXG4gICAgICAgICAgICB2YWx1ZT17Zm91cnRoVmFsfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlRm91cnRoRGlnaXRDaGFuZ2V9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtkcm9wVmFscy5ib2R5Lm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICA8TWVudUl0ZW0ga2V5PXsnNHRoJyArIGluZGV4LnRvU3RyaW5nKCl9IHZhbHVlPXtpdGVtLnZhbHVlfT5cclxuICAgICAgICAgICAgICAgIHtpdGVtLnRleHR9XHJcbiAgICAgICAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgPC9Sb3c+XHJcbiAgICAgIDxSb3cgc3R5bGU9e3sgbWFyZ2luVG9wOiAnMzBweCcgfX0+XHJcbiAgICAgICAgPENvbD5cclxuICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIGNvbG9yPVwicHJpbWFyeVwiIG9uQ2xpY2s9e2NhbGN1bGF0ZX0+XHJcbiAgICAgICAgICAgIENhbGN1bGFyXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgICA8Q29sPlxyXG4gICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgY29sb3I9XCJzZWNvbmRhcnlcIiBvbkNsaWNrPXtyZXNldFZhbHVlc30+XHJcbiAgICAgICAgICAgIFJlc2V0XHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgPC9Sb3c+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApO1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9
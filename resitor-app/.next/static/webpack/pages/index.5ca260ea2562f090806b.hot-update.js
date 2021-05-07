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

  var handleFirstDigitChange = function handleFirstDigitChange(e) {
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

  var findBandValue = function findBandValue(value) {
    var indxOfData = colorVals.body.find(function (item, i) {
      if (item.value === value) {
        return item.text;
      }
    });
  };

  var calculate = /*#__PURE__*/function () {
    var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(e) {
      var first, res;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              first = dropdwonValues.findBandValue();
              _context.next = 3;
              return (0, _apiCall.calculateResistance)(firstVal, scndVal, thirdVal, fourthVal);

            case 3:
              res = _context.sent;
              console.log(res);

            case 5:
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
          lineNumber: 73,
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
              lineNumber: 81,
              columnNumber: 15
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 72,
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
            lineNumber: 89,
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
                lineNumber: 97,
                columnNumber: 17
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 87,
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
          lineNumber: 105,
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
              lineNumber: 113,
              columnNumber: 15
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 104,
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
          lineNumber: 120,
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
              lineNumber: 128,
              columnNumber: 15
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 71,
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
          lineNumber: 137,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_reactstrap.Col, {
        children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_core.Button, {
          variant: "contained",
          color: "secondary",
          onClick: resetValues,
          children: "Reset"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 70,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy92YWx1ZXMuanMiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsIlZhbHVlcyIsIlBhcmVudGNhbGxiYWNrZmlyc3QiLCJQYXJlbnRjYWxsYmFja3NjbmQiLCJQYXJlbnRjYWxsYmFja3RocmQiLCJQYXJlbnRjYWxsYmFja2ZydGgiLCJwYXJlbnRSZXN1bHQiLCJmaXJzdFZhbCIsInNldEZpcnN0VmFsIiwic2NuZFZhbCIsInNldFNjbmRzVmFsIiwidGhpcmRWYWwiLCJzZXRUaGlyZFZhbCIsImZvdXJ0aFZhbCIsInNldEZvdXJ0aFZhbCIsImhhbmRsZUZpcnN0RGlnaXRDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVTZWNvbmREaWdpdENoYW5nZSIsImhhbmRsZVRoaXJkRGlnaXRDaGFuZ2UiLCJoYW5kbGVGb3VydGhEaWdpdENoYW5nZSIsImZpbmRCYW5kVmFsdWUiLCJpbmR4T2ZEYXRhIiwiY29sb3JWYWxzIiwiYm9keSIsImZpbmQiLCJpdGVtIiwiaSIsInRleHQiLCJjYWxjdWxhdGUiLCJmaXJzdCIsImRyb3Bkd29uVmFsdWVzIiwicmVzIiwiY29uc29sZSIsImxvZyIsInJlc2V0VmFsdWVzIiwicGFkZGluZyIsImRyb3BWYWxzIiwibWFwIiwiaW5kZXgiLCJ0b1N0cmluZyIsIm1hcmdpblRvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7QUFFQUEsTUFBTSxDQUFDQyxPQUFQLENBQWVDLE1BQWYsTUFBd0IsZ0JBTWxCO0FBQUE7O0FBQUEsTUFMSkMsbUJBS0ksUUFMSkEsbUJBS0k7QUFBQSxNQUpKQyxrQkFJSSxRQUpKQSxrQkFJSTtBQUFBLE1BSEpDLGtCQUdJLFFBSEpBLGtCQUdJO0FBQUEsTUFGSkMsa0JBRUksUUFGSkEsa0JBRUk7QUFBQSxNQURK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QUFDLGVBQUQ7QUFBQSwrQkFDRSwyQkFBQyxZQUFEO0FBQVEsaUJBQU8sRUFBQyxXQUFoQjtBQUE0QixlQUFLLEVBQUMsU0FBbEM7QUFBNEMsaUJBQU8sRUFBRVosU0FBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFNRSwyQkFBQyxlQUFEO0FBQUEsK0JBQ0UsMkJBQUMsWUFBRDtBQUFRLGlCQUFPLEVBQUMsV0FBaEI7QUFBNEIsZUFBSyxFQUFDLFdBQWxDO0FBQThDLGlCQUFPLEVBQUVNLFdBQXZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWpFRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWdGRCxDQTNJRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC41Y2EyNjBlYTI1NjJmMDkwODA2Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgU2VsZWN0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1NlbGVjdCc7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IE1lbnVJdGVtIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL01lbnVJdGVtJztcclxuaW1wb3J0IElucHV0TGFiZWwgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSW5wdXRMYWJlbCc7XHJcbmltcG9ydCB7IENvbCwgQ29udGFpbmVyLCBSb3cgfSBmcm9tICdyZWFjdHN0cmFwJztcclxuaW1wb3J0IHsgZHJvcFZhbHMgfSBmcm9tICcuLi8uLi9wdWJsaWMvZHJvcGR3b25WYWx1ZXMnO1xyXG5pbXBvcnQgeyBjYWxjdWxhdGVSZXNpc3RhbmNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYXBpQ2FsbCc7XHJcblxyXG5tb2R1bGUuZXhwb3J0cy5WYWx1ZXMgPSAoe1xyXG4gIFBhcmVudGNhbGxiYWNrZmlyc3QsXHJcbiAgUGFyZW50Y2FsbGJhY2tzY25kLFxyXG4gIFBhcmVudGNhbGxiYWNrdGhyZCxcclxuICBQYXJlbnRjYWxsYmFja2ZydGgsXHJcbiAgcGFyZW50UmVzdWx0LFxyXG59KSA9PiB7XHJcbiAgY29uc3QgW2ZpcnN0VmFsLCBzZXRGaXJzdFZhbF0gPSB1c2VTdGF0ZSgnTm9uZScpO1xyXG4gIGNvbnN0IFtzY25kVmFsLCBzZXRTY25kc1ZhbF0gPSB1c2VTdGF0ZSgnTm9uZScpO1xyXG4gIGNvbnN0IFt0aGlyZFZhbCwgc2V0VGhpcmRWYWxdID0gdXNlU3RhdGUoJ05vbmUnKTtcclxuICBjb25zdCBbZm91cnRoVmFsLCBzZXRGb3VydGhWYWxdID0gdXNlU3RhdGUoJ05vbmUnKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRmlyc3REaWdpdENoYW5nZSA9IGUgPT4ge1xyXG4gICAgc2V0Rmlyc3RWYWwoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgUGFyZW50Y2FsbGJhY2tmaXJzdChlLnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVTZWNvbmREaWdpdENoYW5nZSA9IGUgPT4ge1xyXG4gICAgc2V0U2NuZHNWYWwoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgUGFyZW50Y2FsbGJhY2tzY25kKGUudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZVRoaXJkRGlnaXRDaGFuZ2UgPSBlID0+IHtcclxuICAgIHNldFRoaXJkVmFsKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIFBhcmVudGNhbGxiYWNrdGhyZChlLnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVGb3VydGhEaWdpdENoYW5nZSA9IGUgPT4ge1xyXG4gICAgc2V0Rm91cnRoVmFsKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIFBhcmVudGNhbGxiYWNrZnJ0aChlLnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZmluZEJhbmRWYWx1ZSA9IHZhbHVlID0+IHtcclxuICAgIHZhciBpbmR4T2ZEYXRhID0gY29sb3JWYWxzLmJvZHkuZmluZChmdW5jdGlvbiAoaXRlbSwgaSkge1xyXG4gICAgICBpZiAoaXRlbS52YWx1ZSA9PT0gdmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gaXRlbS50ZXh0O1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBjYWxjdWxhdGUgPSBhc3luYyBlID0+IHtcclxuICAgIGNvbnN0IGZpcnN0ID0gZHJvcGR3b25WYWx1ZXMuZmluZEJhbmRWYWx1ZSgpO1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgY2FsY3VsYXRlUmVzaXN0YW5jZShcclxuICAgICAgZmlyc3RWYWwsXHJcbiAgICAgIHNjbmRWYWwsXHJcbiAgICAgIHRoaXJkVmFsLFxyXG4gICAgICBmb3VydGhWYWwsXHJcbiAgICApO1xyXG4gICAgY29uc29sZS5sb2cocmVzKTtcclxuICB9O1xyXG5cclxuICBjb25zdCByZXNldFZhbHVlcyA9IGUgPT4ge1xyXG4gICAgc2V0Rmlyc3RWYWwoJ05vbmUnKTtcclxuICAgIHNldFNjbmRzVmFsKCdOb25lJyk7XHJcbiAgICBzZXRUaGlyZFZhbCgnTm9uZScpO1xyXG4gICAgc2V0Rm91cnRoVmFsKCdOb25lJyk7XHJcbiAgICBQYXJlbnRjYWxsYmFja2ZpcnN0KCcnKTtcclxuICAgIFBhcmVudGNhbGxiYWNrc2NuZCgnJyk7XHJcbiAgICBQYXJlbnRjYWxsYmFja3RocmQoJycpO1xyXG4gICAgUGFyZW50Y2FsbGJhY2tmcnRoKCcnKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lcj5cclxuICAgICAgPFJvdz5cclxuICAgICAgICA8Q29sIHN0eWxlPXt7IHBhZGRpbmc6ICcxNXB4JyB9fSB4cz17Nn0gc209ezZ9IG1kPXszfSBsZz17M30geGw9ezN9PlxyXG4gICAgICAgICAgPElucHV0TGFiZWwgaWQ9XCJsYWJlbFwiPjFzIERpZ2l0PC9JbnB1dExhYmVsPlxyXG4gICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICBsYWJlbElkPVwibGFiZWxcIlxyXG4gICAgICAgICAgICBpZD1cInNlbGVjdFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtmaXJzdFZhbH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUZpcnN0RGlnaXRDaGFuZ2V9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtkcm9wVmFscy5ib2R5Lm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICA8TWVudUl0ZW0ga2V5PXsnMXN0JyArIGluZGV4LnRvU3RyaW5nKCl9IHZhbHVlPXtpdGVtLnZhbHVlfT5cclxuICAgICAgICAgICAgICAgIHtpdGVtLnRleHR9XHJcbiAgICAgICAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgICA8Q29sIHN0eWxlPXt7IHBhZGRpbmc6ICcxNXB4JyB9fSB4cz17Nn0gc209ezZ9IG1kPXszfSBsZz17M30geGw9ezN9PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPElucHV0TGFiZWwgaWQ9XCJzZWNvbmQtZGlnaXRcIj4ybmQgRGlnaXQ8L0lucHV0TGFiZWw+XHJcbiAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICBsYWJlbElkPVwibGFiZWxcIlxyXG4gICAgICAgICAgICAgIGlkPVwic2VsZWN0XCJcclxuICAgICAgICAgICAgICB2YWx1ZT17c2NuZFZhbH1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlU2Vjb25kRGlnaXRDaGFuZ2V9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7ZHJvcFZhbHMuYm9keS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8TWVudUl0ZW0ga2V5PXsnMm5kJyArIGluZGV4LnRvU3RyaW5nKCl9IHZhbHVlPXtpdGVtLnZhbHVlfT5cclxuICAgICAgICAgICAgICAgICAge2l0ZW0udGV4dH1cclxuICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPENvbCBzdHlsZT17eyBwYWRkaW5nOiAnMTVweCcgfX0geHM9ezZ9IHNtPXs2fSBtZD17M30gbGc9ezN9IHhsPXszfT5cclxuICAgICAgICAgIDxJbnB1dExhYmVsIGlkPVwidGhpcmQtZGlnaXRcIj5NdWx0aXBsaWVyPC9JbnB1dExhYmVsPlxyXG4gICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICBsYWJlbElkPVwibGFiZWxcIlxyXG4gICAgICAgICAgICBpZD1cInNlbGVjdFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXt0aGlyZFZhbH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVRoaXJkRGlnaXRDaGFuZ2V9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtkcm9wVmFscy5ib2R5Lm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICA8TWVudUl0ZW0ga2V5PXsnM3JkJyArIGluZGV4LnRvU3RyaW5nKCl9IHZhbHVlPXtpdGVtLnZhbHVlfT5cclxuICAgICAgICAgICAgICAgIHtpdGVtLnRleHR9XHJcbiAgICAgICAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgICA8Q29sIHN0eWxlPXt7IHBhZGRpbmc6ICcxNXB4JyB9fSB4cz17Nn0gc209ezZ9IG1kPXszfSBsZz17M30geGw9ezN9PlxyXG4gICAgICAgICAgPElucHV0TGFiZWwgaWQ9XCJmb3VydGgtZGlnaXRcIj5Ub2xlcmFuY2U8L0lucHV0TGFiZWw+XHJcbiAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgIGxhYmVsSWQ9XCJsYWJlbFwiXHJcbiAgICAgICAgICAgIGlkPVwic2VsZWN0XCJcclxuICAgICAgICAgICAgdmFsdWU9e2ZvdXJ0aFZhbH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUZvdXJ0aERpZ2l0Q2hhbmdlfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7ZHJvcFZhbHMuYm9keS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgPE1lbnVJdGVtIGtleT17JzR0aCcgKyBpbmRleC50b1N0cmluZygpfSB2YWx1ZT17aXRlbS52YWx1ZX0+XHJcbiAgICAgICAgICAgICAgICB7aXRlbS50ZXh0fVxyXG4gICAgICAgICAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgPC9Db2w+XHJcbiAgICAgIDwvUm93PlxyXG4gICAgICA8Um93IHN0eWxlPXt7IG1hcmdpblRvcDogJzMwcHgnIH19PlxyXG4gICAgICAgIDxDb2w+XHJcbiAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBjb2xvcj1cInByaW1hcnlcIiBvbkNsaWNrPXtjYWxjdWxhdGV9PlxyXG4gICAgICAgICAgICBDYWxjdWxhclxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPENvbD5cclxuICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIGNvbG9yPVwic2Vjb25kYXJ5XCIgb25DbGljaz17cmVzZXRWYWx1ZXN9PlxyXG4gICAgICAgICAgICBSZXNldFxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9Db2w+XHJcbiAgICAgIDwvUm93PlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
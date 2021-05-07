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
    console.log(e);
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
      var first, second, third, fourth;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              first = dropdwonValues.findBandValue(firstVal);
              second = dropdwonValues.findBandValue(scndVal);
              third = dropdwonValues.findBandValue(thirdVal);
              fourth = dropdwonValues.findBandValue(fourthVal); // const res = await calculateResistance(first, second, third, fourth);
              // console.log(res);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy92YWx1ZXMuanMiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsIlZhbHVlcyIsIlBhcmVudGNhbGxiYWNrZmlyc3QiLCJQYXJlbnRjYWxsYmFja3NjbmQiLCJQYXJlbnRjYWxsYmFja3RocmQiLCJQYXJlbnRjYWxsYmFja2ZydGgiLCJwYXJlbnRSZXN1bHQiLCJmaXJzdFZhbCIsInNldEZpcnN0VmFsIiwic2NuZFZhbCIsInNldFNjbmRzVmFsIiwidGhpcmRWYWwiLCJzZXRUaGlyZFZhbCIsImZvdXJ0aFZhbCIsInNldEZvdXJ0aFZhbCIsImhhbmRsZUZpcnN0RGlnaXRDaGFuZ2UiLCJlIiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlU2Vjb25kRGlnaXRDaGFuZ2UiLCJoYW5kbGVUaGlyZERpZ2l0Q2hhbmdlIiwiaGFuZGxlRm91cnRoRGlnaXRDaGFuZ2UiLCJmaW5kQmFuZFZhbHVlIiwiaW5keE9mRGF0YSIsImNvbG9yVmFscyIsImJvZHkiLCJmaW5kIiwiaXRlbSIsImkiLCJ0ZXh0IiwiY2FsY3VsYXRlIiwiZmlyc3QiLCJkcm9wZHdvblZhbHVlcyIsInNlY29uZCIsInRoaXJkIiwiZm91cnRoIiwicmVzZXRWYWx1ZXMiLCJwYWRkaW5nIiwiZHJvcFZhbHMiLCJtYXAiLCJpbmRleCIsInRvU3RyaW5nIiwibWFyZ2luVG9wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVBQSxNQUFNLENBQUNDLE9BQVAsQ0FBZUMsTUFBZixNQUF3QixnQkFNbEI7QUFBQTs7QUFBQSxNQUxKQyxtQkFLSSxRQUxKQSxtQkFLSTtBQUFBLE1BSkpDLGtCQUlJLFFBSkpBLGtCQUlJO0FBQUEsTUFISkMsa0JBR0ksUUFISkEsa0JBR0k7QUFBQSxNQUZKQyxrQkFFSSxR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O0FBQUEsZUFoREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFpRUUsMkJBQUMsZUFBRDtBQUFLLFdBQUssRUFBRTtBQUFFQyxpQkFBUyxFQUFFO0FBQWIsT0FBWjtBQUFBLDhCQUNFLDJCQUFDLGVBQUQ7QUFBQSwrQkFDRSwyQkFBQyxZQUFEO0FBQVEsaUJBQU8sRUFBQyxXQUFoQjtBQUE0QixlQUFLLEVBQUMsU0FBbEM7QUFBNEMsaUJBQU8sRUFBRVosU0FBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFNRSwyQkFBQyxlQUFEO0FBQUEsK0JBQ0UsMkJBQUMsWUFBRDtBQUFRLGlCQUFPLEVBQUMsV0FBaEI7QUFBNEIsZUFBSyxFQUFDLFdBQWxDO0FBQThDLGlCQUFPLEVBQUVNLFdBQXZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWpFRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWdGRCxDQTNJRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC45ZDRkODQ2ZWY2MjE5YTM5YjVlNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgU2VsZWN0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1NlbGVjdCc7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IE1lbnVJdGVtIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL01lbnVJdGVtJztcclxuaW1wb3J0IElucHV0TGFiZWwgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSW5wdXRMYWJlbCc7XHJcbmltcG9ydCB7IENvbCwgQ29udGFpbmVyLCBSb3cgfSBmcm9tICdyZWFjdHN0cmFwJztcclxuaW1wb3J0IHsgZHJvcFZhbHMgfSBmcm9tICcuLi8uLi9wdWJsaWMvZHJvcGR3b25WYWx1ZXMnO1xyXG5pbXBvcnQgeyBjYWxjdWxhdGVSZXNpc3RhbmNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYXBpQ2FsbCc7XHJcblxyXG5tb2R1bGUuZXhwb3J0cy5WYWx1ZXMgPSAoe1xyXG4gIFBhcmVudGNhbGxiYWNrZmlyc3QsXHJcbiAgUGFyZW50Y2FsbGJhY2tzY25kLFxyXG4gIFBhcmVudGNhbGxiYWNrdGhyZCxcclxuICBQYXJlbnRjYWxsYmFja2ZydGgsXHJcbiAgcGFyZW50UmVzdWx0LFxyXG59KSA9PiB7XHJcbiAgY29uc3QgW2ZpcnN0VmFsLCBzZXRGaXJzdFZhbF0gPSB1c2VTdGF0ZSgnTm9uZScpO1xyXG4gIGNvbnN0IFtzY25kVmFsLCBzZXRTY25kc1ZhbF0gPSB1c2VTdGF0ZSgnTm9uZScpO1xyXG4gIGNvbnN0IFt0aGlyZFZhbCwgc2V0VGhpcmRWYWxdID0gdXNlU3RhdGUoJ05vbmUnKTtcclxuICBjb25zdCBbZm91cnRoVmFsLCBzZXRGb3VydGhWYWxdID0gdXNlU3RhdGUoJ05vbmUnKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRmlyc3REaWdpdENoYW5nZSA9IGUgPT4ge1xyXG4gICAgY29uc29sZS5sb2coZSk7XHJcbiAgICBzZXRGaXJzdFZhbChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICBQYXJlbnRjYWxsYmFja2ZpcnN0KGUudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZVNlY29uZERpZ2l0Q2hhbmdlID0gZSA9PiB7XHJcbiAgICBzZXRTY25kc1ZhbChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICBQYXJlbnRjYWxsYmFja3NjbmQoZS50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlVGhpcmREaWdpdENoYW5nZSA9IGUgPT4ge1xyXG4gICAgc2V0VGhpcmRWYWwoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgUGFyZW50Y2FsbGJhY2t0aHJkKGUudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZUZvdXJ0aERpZ2l0Q2hhbmdlID0gZSA9PiB7XHJcbiAgICBzZXRGb3VydGhWYWwoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgUGFyZW50Y2FsbGJhY2tmcnRoKGUudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBmaW5kQmFuZFZhbHVlID0gdmFsdWUgPT4ge1xyXG4gICAgdmFyIGluZHhPZkRhdGEgPSBjb2xvclZhbHMuYm9keS5maW5kKGZ1bmN0aW9uIChpdGVtLCBpKSB7XHJcbiAgICAgIGlmIChpdGVtLnZhbHVlID09PSB2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiBpdGVtLnRleHQ7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNhbGN1bGF0ZSA9IGFzeW5jIGUgPT4ge1xyXG4gICAgY29uc3QgZmlyc3QgPSBkcm9wZHdvblZhbHVlcy5maW5kQmFuZFZhbHVlKGZpcnN0VmFsKTtcclxuICAgIGNvbnN0IHNlY29uZCA9IGRyb3Bkd29uVmFsdWVzLmZpbmRCYW5kVmFsdWUoc2NuZFZhbCk7XHJcbiAgICBjb25zdCB0aGlyZCA9IGRyb3Bkd29uVmFsdWVzLmZpbmRCYW5kVmFsdWUodGhpcmRWYWwpO1xyXG4gICAgY29uc3QgZm91cnRoID0gZHJvcGR3b25WYWx1ZXMuZmluZEJhbmRWYWx1ZShmb3VydGhWYWwpO1xyXG5cclxuICAgIC8vIGNvbnN0IHJlcyA9IGF3YWl0IGNhbGN1bGF0ZVJlc2lzdGFuY2UoZmlyc3QsIHNlY29uZCwgdGhpcmQsIGZvdXJ0aCk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhyZXMpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlc2V0VmFsdWVzID0gZSA9PiB7XHJcbiAgICBzZXRGaXJzdFZhbCgnTm9uZScpO1xyXG4gICAgc2V0U2NuZHNWYWwoJ05vbmUnKTtcclxuICAgIHNldFRoaXJkVmFsKCdOb25lJyk7XHJcbiAgICBzZXRGb3VydGhWYWwoJ05vbmUnKTtcclxuICAgIFBhcmVudGNhbGxiYWNrZmlyc3QoJycpO1xyXG4gICAgUGFyZW50Y2FsbGJhY2tzY25kKCcnKTtcclxuICAgIFBhcmVudGNhbGxiYWNrdGhyZCgnJyk7XHJcbiAgICBQYXJlbnRjYWxsYmFja2ZydGgoJycpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyPlxyXG4gICAgICA8Um93PlxyXG4gICAgICAgIDxDb2wgc3R5bGU9e3sgcGFkZGluZzogJzE1cHgnIH19IHhzPXs2fSBzbT17Nn0gbWQ9ezN9IGxnPXszfSB4bD17M30+XHJcbiAgICAgICAgICA8SW5wdXRMYWJlbCBpZD1cImxhYmVsXCI+MXMgRGlnaXQ8L0lucHV0TGFiZWw+XHJcbiAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgIGxhYmVsSWQ9XCJsYWJlbFwiXHJcbiAgICAgICAgICAgIGlkPVwic2VsZWN0XCJcclxuICAgICAgICAgICAgdmFsdWU9e2ZpcnN0VmFsfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlRmlyc3REaWdpdENoYW5nZX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2Ryb3BWYWxzLmJvZHkubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgIDxNZW51SXRlbSBrZXk9eycxc3QnICsgaW5kZXgudG9TdHJpbmcoKX0gdmFsdWU9e2l0ZW0udmFsdWV9PlxyXG4gICAgICAgICAgICAgICAge2l0ZW0udGV4dH1cclxuICAgICAgICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDxDb2wgc3R5bGU9e3sgcGFkZGluZzogJzE1cHgnIH19IHhzPXs2fSBzbT17Nn0gbWQ9ezN9IGxnPXszfSB4bD17M30+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8SW5wdXRMYWJlbCBpZD1cInNlY29uZC1kaWdpdFwiPjJuZCBEaWdpdDwvSW5wdXRMYWJlbD5cclxuICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgIGxhYmVsSWQ9XCJsYWJlbFwiXHJcbiAgICAgICAgICAgICAgaWQ9XCJzZWxlY3RcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtzY25kVmFsfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVTZWNvbmREaWdpdENoYW5nZX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtkcm9wVmFscy5ib2R5Lm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgIDxNZW51SXRlbSBrZXk9eycybmQnICsgaW5kZXgudG9TdHJpbmcoKX0gdmFsdWU9e2l0ZW0udmFsdWV9PlxyXG4gICAgICAgICAgICAgICAgICB7aXRlbS50ZXh0fVxyXG4gICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgICA8Q29sIHN0eWxlPXt7IHBhZGRpbmc6ICcxNXB4JyB9fSB4cz17Nn0gc209ezZ9IG1kPXszfSBsZz17M30geGw9ezN9PlxyXG4gICAgICAgICAgPElucHV0TGFiZWwgaWQ9XCJ0aGlyZC1kaWdpdFwiPk11bHRpcGxpZXI8L0lucHV0TGFiZWw+XHJcbiAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgIGxhYmVsSWQ9XCJsYWJlbFwiXHJcbiAgICAgICAgICAgIGlkPVwic2VsZWN0XCJcclxuICAgICAgICAgICAgdmFsdWU9e3RoaXJkVmFsfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlVGhpcmREaWdpdENoYW5nZX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2Ryb3BWYWxzLmJvZHkubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgIDxNZW51SXRlbSBrZXk9eyczcmQnICsgaW5kZXgudG9TdHJpbmcoKX0gdmFsdWU9e2l0ZW0udmFsdWV9PlxyXG4gICAgICAgICAgICAgICAge2l0ZW0udGV4dH1cclxuICAgICAgICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDxDb2wgc3R5bGU9e3sgcGFkZGluZzogJzE1cHgnIH19IHhzPXs2fSBzbT17Nn0gbWQ9ezN9IGxnPXszfSB4bD17M30+XHJcbiAgICAgICAgICA8SW5wdXRMYWJlbCBpZD1cImZvdXJ0aC1kaWdpdFwiPlRvbGVyYW5jZTwvSW5wdXRMYWJlbD5cclxuICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgbGFiZWxJZD1cImxhYmVsXCJcclxuICAgICAgICAgICAgaWQ9XCJzZWxlY3RcIlxyXG4gICAgICAgICAgICB2YWx1ZT17Zm91cnRoVmFsfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlRm91cnRoRGlnaXRDaGFuZ2V9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtkcm9wVmFscy5ib2R5Lm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICA8TWVudUl0ZW0ga2V5PXsnNHRoJyArIGluZGV4LnRvU3RyaW5nKCl9IHZhbHVlPXtpdGVtLnZhbHVlfT5cclxuICAgICAgICAgICAgICAgIHtpdGVtLnRleHR9XHJcbiAgICAgICAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgPC9Sb3c+XHJcbiAgICAgIDxSb3cgc3R5bGU9e3sgbWFyZ2luVG9wOiAnMzBweCcgfX0+XHJcbiAgICAgICAgPENvbD5cclxuICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIGNvbG9yPVwicHJpbWFyeVwiIG9uQ2xpY2s9e2NhbGN1bGF0ZX0+XHJcbiAgICAgICAgICAgIENhbGN1bGFyXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgICA8Q29sPlxyXG4gICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgY29sb3I9XCJzZWNvbmRhcnlcIiBvbkNsaWNrPXtyZXNldFZhbHVlc30+XHJcbiAgICAgICAgICAgIFJlc2V0XHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgPC9Sb3c+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApO1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9
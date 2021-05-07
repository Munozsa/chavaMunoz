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
    var indxOfData = dropdwonValues.body.find(function (item, i) {
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
              first = findBandValue(firstVal);
              second = findBandValue(scndVal);
              third = dropdwonValues.findBandValue(thirdVal);
              fourth = dropdwonValues.findBandValue(fourthVal);
              console.log(first); // const res = await calculateResistance(first, second, third, fourth);
              // console.log(res);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy92YWx1ZXMuanMiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsIlZhbHVlcyIsIlBhcmVudGNhbGxiYWNrZmlyc3QiLCJQYXJlbnRjYWxsYmFja3NjbmQiLCJQYXJlbnRjYWxsYmFja3RocmQiLCJQYXJlbnRjYWxsYmFja2ZydGgiLCJwYXJlbnRSZXN1bHQiLCJmaXJzdFZhbCIsInNldEZpcnN0VmFsIiwic2NuZFZhbCIsInNldFNjbmRzVmFsIiwidGhpcmRWYWwiLCJzZXRUaGlyZFZhbCIsImZvdXJ0aFZhbCIsInNldEZvdXJ0aFZhbCIsImhhbmRsZUZpcnN0RGlnaXRDaGFuZ2UiLCJlIiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlU2Vjb25kRGlnaXRDaGFuZ2UiLCJoYW5kbGVUaGlyZERpZ2l0Q2hhbmdlIiwiaGFuZGxlRm91cnRoRGlnaXRDaGFuZ2UiLCJmaW5kQmFuZFZhbHVlIiwiaW5keE9mRGF0YSIsImRyb3Bkd29uVmFsdWVzIiwiYm9keSIsImZpbmQiLCJpdGVtIiwiaSIsInRleHQiLCJjYWxjdWxhdGUiLCJmaXJzdCIsInNlY29uZCIsInRoaXJkIiwiZm91cnRoIiwicmVzZXRWYWx1ZXMiLCJwYWRkaW5nIiwiZHJvcFZhbHMiLCJtYXAiLCJpbmRleCIsInRvU3RyaW5nIiwibWFyZ2luVG9wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVBQSxNQUFNLENBQUNDLE9BQVAsQ0FBZUMsTUFBZixNQUF3QixnQkFNbEI7QUFBQTs7QUFBQSxNQUxKQyxtQkFLSSxRQUxKQSxtQkFLSTtBQUFBLE1BSkpDLGtCQUlJLFFBSkpBLGtCQUlJO0FBQUEsTUFISkMsa0JBR0ksUUFISkEsa0JBR0k7QUFBQSxNQUZKQyxrQkFFSSxRQUZKQSxrQkFFSTtB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QUFBQTtBQUFBLGVBaERGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBaUVFLDJCQUFDLGVBQUQ7QUFBSyxXQUFLLEVBQUU7QUFBRUMsaUJBQVMsRUFBRTtBQUFiLE9BQVo7QUFBQSw4QkFDRSwyQkFBQyxlQUFEO0FBQUEsK0JBQ0UsMkJBQUMsWUFBRDtBQUFRLGlCQUFPLEVBQUMsV0FBaEI7QUFBNEIsZUFBSyxFQUFDLFNBQWxDO0FBQTRDLGlCQUFPLEVBQUVYLFNBQXJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBTUUsMkJBQUMsZUFBRDtBQUFBLCtCQUNFLDJCQUFDLFlBQUQ7QUFBUSxpQkFBTyxFQUFDLFdBQWhCO0FBQTRCLGVBQUssRUFBQyxXQUFsQztBQUE4QyxpQkFBTyxFQUFFSyxXQUF2RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFqRUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFnRkQsQ0EzSUQiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNWE1ZDZjZDNmMDhjNWNlMjM1YmEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFNlbGVjdCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9TZWxlY3QnO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCBNZW51SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9NZW51SXRlbSc7XHJcbmltcG9ydCBJbnB1dExhYmVsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0lucHV0TGFiZWwnO1xyXG5pbXBvcnQgeyBDb2wsIENvbnRhaW5lciwgUm93IH0gZnJvbSAncmVhY3RzdHJhcCc7XHJcbmltcG9ydCB7IGRyb3BWYWxzIH0gZnJvbSAnLi4vLi4vcHVibGljL2Ryb3Bkd29uVmFsdWVzJztcclxuaW1wb3J0IHsgY2FsY3VsYXRlUmVzaXN0YW5jZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2FwaUNhbGwnO1xyXG5cclxubW9kdWxlLmV4cG9ydHMuVmFsdWVzID0gKHtcclxuICBQYXJlbnRjYWxsYmFja2ZpcnN0LFxyXG4gIFBhcmVudGNhbGxiYWNrc2NuZCxcclxuICBQYXJlbnRjYWxsYmFja3RocmQsXHJcbiAgUGFyZW50Y2FsbGJhY2tmcnRoLFxyXG4gIHBhcmVudFJlc3VsdCxcclxufSkgPT4ge1xyXG4gIGNvbnN0IFtmaXJzdFZhbCwgc2V0Rmlyc3RWYWxdID0gdXNlU3RhdGUoJ05vbmUnKTtcclxuICBjb25zdCBbc2NuZFZhbCwgc2V0U2NuZHNWYWxdID0gdXNlU3RhdGUoJ05vbmUnKTtcclxuICBjb25zdCBbdGhpcmRWYWwsIHNldFRoaXJkVmFsXSA9IHVzZVN0YXRlKCdOb25lJyk7XHJcbiAgY29uc3QgW2ZvdXJ0aFZhbCwgc2V0Rm91cnRoVmFsXSA9IHVzZVN0YXRlKCdOb25lJyk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUZpcnN0RGlnaXRDaGFuZ2UgPSBlID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgc2V0Rmlyc3RWYWwoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgUGFyZW50Y2FsbGJhY2tmaXJzdChlLnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVTZWNvbmREaWdpdENoYW5nZSA9IGUgPT4ge1xyXG4gICAgc2V0U2NuZHNWYWwoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgUGFyZW50Y2FsbGJhY2tzY25kKGUudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZVRoaXJkRGlnaXRDaGFuZ2UgPSBlID0+IHtcclxuICAgIHNldFRoaXJkVmFsKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIFBhcmVudGNhbGxiYWNrdGhyZChlLnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVGb3VydGhEaWdpdENoYW5nZSA9IGUgPT4ge1xyXG4gICAgc2V0Rm91cnRoVmFsKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIFBhcmVudGNhbGxiYWNrZnJ0aChlLnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZmluZEJhbmRWYWx1ZSA9IHZhbHVlID0+IHtcclxuICAgIHZhciBpbmR4T2ZEYXRhID0gZHJvcGR3b25WYWx1ZXMuYm9keS5maW5kKGZ1bmN0aW9uIChpdGVtLCBpKSB7XHJcbiAgICAgIGlmIChpdGVtLnZhbHVlID09PSB2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiBpdGVtLnRleHQ7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNhbGN1bGF0ZSA9IGFzeW5jIGUgPT4ge1xyXG4gICAgY29uc3QgZmlyc3QgPSBmaW5kQmFuZFZhbHVlKGZpcnN0VmFsKTtcclxuICAgIGNvbnN0IHNlY29uZCA9IGZpbmRCYW5kVmFsdWUoc2NuZFZhbCk7XHJcbiAgICBjb25zdCB0aGlyZCA9IGRyb3Bkd29uVmFsdWVzLmZpbmRCYW5kVmFsdWUodGhpcmRWYWwpO1xyXG4gICAgY29uc3QgZm91cnRoID0gZHJvcGR3b25WYWx1ZXMuZmluZEJhbmRWYWx1ZShmb3VydGhWYWwpO1xyXG4gICAgY29uc29sZS5sb2coZmlyc3QpO1xyXG4gICAgLy8gY29uc3QgcmVzID0gYXdhaXQgY2FsY3VsYXRlUmVzaXN0YW5jZShmaXJzdCwgc2Vjb25kLCB0aGlyZCwgZm91cnRoKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVzZXRWYWx1ZXMgPSBlID0+IHtcclxuICAgIHNldEZpcnN0VmFsKCdOb25lJyk7XHJcbiAgICBzZXRTY25kc1ZhbCgnTm9uZScpO1xyXG4gICAgc2V0VGhpcmRWYWwoJ05vbmUnKTtcclxuICAgIHNldEZvdXJ0aFZhbCgnTm9uZScpO1xyXG4gICAgUGFyZW50Y2FsbGJhY2tmaXJzdCgnJyk7XHJcbiAgICBQYXJlbnRjYWxsYmFja3NjbmQoJycpO1xyXG4gICAgUGFyZW50Y2FsbGJhY2t0aHJkKCcnKTtcclxuICAgIFBhcmVudGNhbGxiYWNrZnJ0aCgnJyk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXI+XHJcbiAgICAgIDxSb3c+XHJcbiAgICAgICAgPENvbCBzdHlsZT17eyBwYWRkaW5nOiAnMTVweCcgfX0geHM9ezZ9IHNtPXs2fSBtZD17M30gbGc9ezN9IHhsPXszfT5cclxuICAgICAgICAgIDxJbnB1dExhYmVsIGlkPVwibGFiZWxcIj4xcyBEaWdpdDwvSW5wdXRMYWJlbD5cclxuICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgbGFiZWxJZD1cImxhYmVsXCJcclxuICAgICAgICAgICAgaWQ9XCJzZWxlY3RcIlxyXG4gICAgICAgICAgICB2YWx1ZT17Zmlyc3RWYWx9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVGaXJzdERpZ2l0Q2hhbmdlfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7ZHJvcFZhbHMuYm9keS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgPE1lbnVJdGVtIGtleT17JzFzdCcgKyBpbmRleC50b1N0cmluZygpfSB2YWx1ZT17aXRlbS52YWx1ZX0+XHJcbiAgICAgICAgICAgICAgICB7aXRlbS50ZXh0fVxyXG4gICAgICAgICAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPENvbCBzdHlsZT17eyBwYWRkaW5nOiAnMTVweCcgfX0geHM9ezZ9IHNtPXs2fSBtZD17M30gbGc9ezN9IHhsPXszfT5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxJbnB1dExhYmVsIGlkPVwic2Vjb25kLWRpZ2l0XCI+Mm5kIERpZ2l0PC9JbnB1dExhYmVsPlxyXG4gICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgbGFiZWxJZD1cImxhYmVsXCJcclxuICAgICAgICAgICAgICBpZD1cInNlbGVjdFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3NjbmRWYWx9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVNlY29uZERpZ2l0Q2hhbmdlfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge2Ryb3BWYWxzLmJvZHkubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPE1lbnVJdGVtIGtleT17JzJuZCcgKyBpbmRleC50b1N0cmluZygpfSB2YWx1ZT17aXRlbS52YWx1ZX0+XHJcbiAgICAgICAgICAgICAgICAgIHtpdGVtLnRleHR9XHJcbiAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDxDb2wgc3R5bGU9e3sgcGFkZGluZzogJzE1cHgnIH19IHhzPXs2fSBzbT17Nn0gbWQ9ezN9IGxnPXszfSB4bD17M30+XHJcbiAgICAgICAgICA8SW5wdXRMYWJlbCBpZD1cInRoaXJkLWRpZ2l0XCI+TXVsdGlwbGllcjwvSW5wdXRMYWJlbD5cclxuICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgbGFiZWxJZD1cImxhYmVsXCJcclxuICAgICAgICAgICAgaWQ9XCJzZWxlY3RcIlxyXG4gICAgICAgICAgICB2YWx1ZT17dGhpcmRWYWx9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVUaGlyZERpZ2l0Q2hhbmdlfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7ZHJvcFZhbHMuYm9keS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgPE1lbnVJdGVtIGtleT17JzNyZCcgKyBpbmRleC50b1N0cmluZygpfSB2YWx1ZT17aXRlbS52YWx1ZX0+XHJcbiAgICAgICAgICAgICAgICB7aXRlbS50ZXh0fVxyXG4gICAgICAgICAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPENvbCBzdHlsZT17eyBwYWRkaW5nOiAnMTVweCcgfX0geHM9ezZ9IHNtPXs2fSBtZD17M30gbGc9ezN9IHhsPXszfT5cclxuICAgICAgICAgIDxJbnB1dExhYmVsIGlkPVwiZm91cnRoLWRpZ2l0XCI+VG9sZXJhbmNlPC9JbnB1dExhYmVsPlxyXG4gICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICBsYWJlbElkPVwibGFiZWxcIlxyXG4gICAgICAgICAgICBpZD1cInNlbGVjdFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtmb3VydGhWYWx9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVGb3VydGhEaWdpdENoYW5nZX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2Ryb3BWYWxzLmJvZHkubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgIDxNZW51SXRlbSBrZXk9eyc0dGgnICsgaW5kZXgudG9TdHJpbmcoKX0gdmFsdWU9e2l0ZW0udmFsdWV9PlxyXG4gICAgICAgICAgICAgICAge2l0ZW0udGV4dH1cclxuICAgICAgICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgICA8L1Jvdz5cclxuICAgICAgPFJvdyBzdHlsZT17eyBtYXJnaW5Ub3A6ICczMHB4JyB9fT5cclxuICAgICAgICA8Q29sPlxyXG4gICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgY29sb3I9XCJwcmltYXJ5XCIgb25DbGljaz17Y2FsY3VsYXRlfT5cclxuICAgICAgICAgICAgQ2FsY3VsYXJcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDxDb2w+XHJcbiAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBjb2xvcj1cInNlY29uZGFyeVwiIG9uQ2xpY2s9e3Jlc2V0VmFsdWVzfT5cclxuICAgICAgICAgICAgUmVzZXRcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgICA8L1Jvdz5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICk7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
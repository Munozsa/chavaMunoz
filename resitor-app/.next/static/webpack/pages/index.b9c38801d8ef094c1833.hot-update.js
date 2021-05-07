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

function findBandValue(value) {
  var indxOfData = _dropdwonValues.dropVals.body.find(function (item, i) {
    if (item.value === value) {
      return item.text;
    }
  });

  return indxOfData;
}

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

  var calculate = /*#__PURE__*/function () {
    var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(e) {
      var first, second, third, fourth, res;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              first = findBandValue(firstVal);
              second = findBandValue(scndVal);
              third = findBandValue(thirdVal);
              fourth = findBandValue(fourthVal);

              try {} catch (error) {}

              _context.next = 7;
              return (0, _apiCall.calculateResistance)(first, second, third, fourth);

            case 7:
              res = _context.sent;

            case 8:
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
          lineNumber: 75,
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
              lineNumber: 83,
              columnNumber: 15
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 74,
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
            lineNumber: 91,
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
                lineNumber: 99,
                columnNumber: 17
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 89,
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
          lineNumber: 107,
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
              lineNumber: 115,
              columnNumber: 15
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 106,
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
          lineNumber: 122,
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
              lineNumber: 130,
              columnNumber: 15
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 73,
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
          lineNumber: 139,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_reactstrap.Col, {
        children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_core.Button, {
          variant: "contained",
          color: "secondary",
          onClick: resetValues,
          children: "Reset"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 72,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy92YWx1ZXMuanMiXSwibmFtZXMiOlsiZmluZEJhbmRWYWx1ZSIsInZhbHVlIiwiaW5keE9mRGF0YSIsImRyb3BWYWxzIiwiYm9keSIsImZpbmQiLCJpdGVtIiwiaSIsInRleHQiLCJtb2R1bGUiLCJleHBvcnRzIiwiVmFsdWVzIiwiUGFyZW50Y2FsbGJhY2tmaXJzdCIsIlBhcmVudGNhbGxiYWNrc2NuZCIsIlBhcmVudGNhbGxiYWNrdGhyZCIsIlBhcmVudGNhbGxiYWNrZnJ0aCIsInBhcmVudFJlc3VsdCIsImZpcnN0VmFsIiwic2V0Rmlyc3RWYWwiLCJzY25kVmFsIiwic2V0U2NuZHNWYWwiLCJ0aGlyZFZhbCIsInNldFRoaXJkVmFsIiwiZm91cnRoVmFsIiwic2V0Rm91cnRoVmFsIiwiaGFuZGxlRmlyc3REaWdpdENoYW5nZSIsImUiLCJ0YXJnZXQiLCJoYW5kbGVTZWNvbmREaWdpdENoYW5nZSIsImhhbmRsZVRoaXJkRGlnaXRDaGFuZ2UiLCJoYW5kbGVGb3VydGhEaWdpdENoYW5nZSIsImNhbGN1bGF0ZSIsImZpcnN0Iiwic2Vjb25kIiwidGhpcmQiLCJmb3VydGgiLCJlcnJvciIsInJlcyIsInJlc2V0VmFsdWVzIiwicGFkZGluZyIsIm1hcCIsImluZGV4IiwidG9TdHJpbmciLCJtYXJnaW5Ub3AiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7O0FBRUEsU0FBU0EsYUFBVCxDQUF1QkMsS0FBdkIsRUFBOEI7QUFDNUIsTUFBSUMsVUFBVSxHQUFHQyx5QkFBU0MsSUFBVCxDQUFjQyxJQUFkLENBQW1CLFVBQVVDLElBQVYsRUFBZ0JDLENBQWhCLEVBQW1CO0FBQ3JELFFBQUlELElBQUksQ0FBQ0wsS0FBTCxLQUFlQSxLQUFuQixFQUEwQjtBQUN4QixhQUFPSyxJQUFJLENBQUNFLElB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QTtBQUFBO0FBQUEsaUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBaERGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBaUVFLDJCQUFDLGVBQUQ7QUFBSyxXQUFLLEVBQUU7QUFBRUMsaUJBQVMsRUFBRTtBQUFiLE9BQVo7QUFBQSw4QkFDRSwyQkFBQyxlQUFEO0FBQUEsK0JBQ0UsMkJBQUMsWUFBRDtBQUFRLGlCQUFPLEVBQUMsV0FBaEI7QUFBNEIsZUFBSyxFQUFDLFNBQWxDO0FBQTRDLGlCQUFPLEVBQUVaLFNBQXJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBTUUsMkJBQUMsZUFBRDtBQUFBLCtCQUNFLDJCQUFDLFlBQUQ7QUFBUSxpQkFBTyxFQUFDLFdBQWhCO0FBQTRCLGVBQUssRUFBQyxXQUFsQztBQUE4QyxpQkFBTyxFQUFFTyxXQUF2RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFqRUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFnRkQsQ0FySUQiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYjljMzg4MDFkOGVmMDk0YzE4MzMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFNlbGVjdCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9TZWxlY3QnO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCBNZW51SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9NZW51SXRlbSc7XHJcbmltcG9ydCBJbnB1dExhYmVsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0lucHV0TGFiZWwnO1xyXG5pbXBvcnQgeyBDb2wsIENvbnRhaW5lciwgUm93IH0gZnJvbSAncmVhY3RzdHJhcCc7XHJcbmltcG9ydCB7IGRyb3BWYWxzIH0gZnJvbSAnLi4vLi4vcHVibGljL2Ryb3Bkd29uVmFsdWVzJztcclxuaW1wb3J0IHsgY2FsY3VsYXRlUmVzaXN0YW5jZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2FwaUNhbGwnO1xyXG5cclxuZnVuY3Rpb24gZmluZEJhbmRWYWx1ZSh2YWx1ZSkge1xyXG4gIHZhciBpbmR4T2ZEYXRhID0gZHJvcFZhbHMuYm9keS5maW5kKGZ1bmN0aW9uIChpdGVtLCBpKSB7XHJcbiAgICBpZiAoaXRlbS52YWx1ZSA9PT0gdmFsdWUpIHtcclxuICAgICAgcmV0dXJuIGl0ZW0udGV4dDtcclxuICAgIH1cclxuICB9KTtcclxuICByZXR1cm4gaW5keE9mRGF0YTtcclxufVxyXG5tb2R1bGUuZXhwb3J0cy5WYWx1ZXMgPSAoe1xyXG4gIFBhcmVudGNhbGxiYWNrZmlyc3QsXHJcbiAgUGFyZW50Y2FsbGJhY2tzY25kLFxyXG4gIFBhcmVudGNhbGxiYWNrdGhyZCxcclxuICBQYXJlbnRjYWxsYmFja2ZydGgsXHJcbiAgcGFyZW50UmVzdWx0LFxyXG59KSA9PiB7XHJcbiAgY29uc3QgW2ZpcnN0VmFsLCBzZXRGaXJzdFZhbF0gPSB1c2VTdGF0ZSgnTm9uZScpO1xyXG4gIGNvbnN0IFtzY25kVmFsLCBzZXRTY25kc1ZhbF0gPSB1c2VTdGF0ZSgnTm9uZScpO1xyXG4gIGNvbnN0IFt0aGlyZFZhbCwgc2V0VGhpcmRWYWxdID0gdXNlU3RhdGUoJ05vbmUnKTtcclxuICBjb25zdCBbZm91cnRoVmFsLCBzZXRGb3VydGhWYWxdID0gdXNlU3RhdGUoJ05vbmUnKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRmlyc3REaWdpdENoYW5nZSA9IGUgPT4ge1xyXG4gICAgc2V0Rmlyc3RWYWwoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgUGFyZW50Y2FsbGJhY2tmaXJzdChlLnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVTZWNvbmREaWdpdENoYW5nZSA9IGUgPT4ge1xyXG4gICAgc2V0U2NuZHNWYWwoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgUGFyZW50Y2FsbGJhY2tzY25kKGUudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZVRoaXJkRGlnaXRDaGFuZ2UgPSBlID0+IHtcclxuICAgIHNldFRoaXJkVmFsKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIFBhcmVudGNhbGxiYWNrdGhyZChlLnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVGb3VydGhEaWdpdENoYW5nZSA9IGUgPT4ge1xyXG4gICAgc2V0Rm91cnRoVmFsKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIFBhcmVudGNhbGxiYWNrZnJ0aChlLnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY2FsY3VsYXRlID0gYXN5bmMgZSA9PiB7XHJcbiAgICBjb25zdCBmaXJzdCA9IGZpbmRCYW5kVmFsdWUoZmlyc3RWYWwpO1xyXG4gICAgY29uc3Qgc2Vjb25kID0gZmluZEJhbmRWYWx1ZShzY25kVmFsKTtcclxuICAgIGNvbnN0IHRoaXJkID0gZmluZEJhbmRWYWx1ZSh0aGlyZFZhbCk7XHJcbiAgICBjb25zdCBmb3VydGggPSBmaW5kQmFuZFZhbHVlKGZvdXJ0aFZhbCk7XHJcbiAgICB0cnkge1xyXG4gICAgICBcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIFxyXG4gICAgfVxyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgY2FsY3VsYXRlUmVzaXN0YW5jZShmaXJzdCwgc2Vjb25kLCB0aGlyZCwgZm91cnRoKTtcclxuICB9O1xyXG5cclxuICBjb25zdCByZXNldFZhbHVlcyA9IGUgPT4ge1xyXG4gICAgc2V0Rmlyc3RWYWwoJ05vbmUnKTtcclxuICAgIHNldFNjbmRzVmFsKCdOb25lJyk7XHJcbiAgICBzZXRUaGlyZFZhbCgnTm9uZScpO1xyXG4gICAgc2V0Rm91cnRoVmFsKCdOb25lJyk7XHJcbiAgICBQYXJlbnRjYWxsYmFja2ZpcnN0KCcnKTtcclxuICAgIFBhcmVudGNhbGxiYWNrc2NuZCgnJyk7XHJcbiAgICBQYXJlbnRjYWxsYmFja3RocmQoJycpO1xyXG4gICAgUGFyZW50Y2FsbGJhY2tmcnRoKCcnKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lcj5cclxuICAgICAgPFJvdz5cclxuICAgICAgICA8Q29sIHN0eWxlPXt7IHBhZGRpbmc6ICcxNXB4JyB9fSB4cz17Nn0gc209ezZ9IG1kPXszfSBsZz17M30geGw9ezN9PlxyXG4gICAgICAgICAgPElucHV0TGFiZWwgaWQ9XCJsYWJlbFwiPjFzIERpZ2l0PC9JbnB1dExhYmVsPlxyXG4gICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICBsYWJlbElkPVwibGFiZWxcIlxyXG4gICAgICAgICAgICBpZD1cInNlbGVjdFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtmaXJzdFZhbH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUZpcnN0RGlnaXRDaGFuZ2V9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtkcm9wVmFscy5ib2R5Lm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICA8TWVudUl0ZW0ga2V5PXsnMXN0JyArIGluZGV4LnRvU3RyaW5nKCl9IHZhbHVlPXtpdGVtLnZhbHVlfT5cclxuICAgICAgICAgICAgICAgIHtpdGVtLnRleHR9XHJcbiAgICAgICAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgICA8Q29sIHN0eWxlPXt7IHBhZGRpbmc6ICcxNXB4JyB9fSB4cz17Nn0gc209ezZ9IG1kPXszfSBsZz17M30geGw9ezN9PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPElucHV0TGFiZWwgaWQ9XCJzZWNvbmQtZGlnaXRcIj4ybmQgRGlnaXQ8L0lucHV0TGFiZWw+XHJcbiAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICBsYWJlbElkPVwibGFiZWxcIlxyXG4gICAgICAgICAgICAgIGlkPVwic2VsZWN0XCJcclxuICAgICAgICAgICAgICB2YWx1ZT17c2NuZFZhbH1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlU2Vjb25kRGlnaXRDaGFuZ2V9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7ZHJvcFZhbHMuYm9keS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8TWVudUl0ZW0ga2V5PXsnMm5kJyArIGluZGV4LnRvU3RyaW5nKCl9IHZhbHVlPXtpdGVtLnZhbHVlfT5cclxuICAgICAgICAgICAgICAgICAge2l0ZW0udGV4dH1cclxuICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPENvbCBzdHlsZT17eyBwYWRkaW5nOiAnMTVweCcgfX0geHM9ezZ9IHNtPXs2fSBtZD17M30gbGc9ezN9IHhsPXszfT5cclxuICAgICAgICAgIDxJbnB1dExhYmVsIGlkPVwidGhpcmQtZGlnaXRcIj5NdWx0aXBsaWVyPC9JbnB1dExhYmVsPlxyXG4gICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICBsYWJlbElkPVwibGFiZWxcIlxyXG4gICAgICAgICAgICBpZD1cInNlbGVjdFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXt0aGlyZFZhbH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVRoaXJkRGlnaXRDaGFuZ2V9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtkcm9wVmFscy5ib2R5Lm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICA8TWVudUl0ZW0ga2V5PXsnM3JkJyArIGluZGV4LnRvU3RyaW5nKCl9IHZhbHVlPXtpdGVtLnZhbHVlfT5cclxuICAgICAgICAgICAgICAgIHtpdGVtLnRleHR9XHJcbiAgICAgICAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgICA8Q29sIHN0eWxlPXt7IHBhZGRpbmc6ICcxNXB4JyB9fSB4cz17Nn0gc209ezZ9IG1kPXszfSBsZz17M30geGw9ezN9PlxyXG4gICAgICAgICAgPElucHV0TGFiZWwgaWQ9XCJmb3VydGgtZGlnaXRcIj5Ub2xlcmFuY2U8L0lucHV0TGFiZWw+XHJcbiAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgIGxhYmVsSWQ9XCJsYWJlbFwiXHJcbiAgICAgICAgICAgIGlkPVwic2VsZWN0XCJcclxuICAgICAgICAgICAgdmFsdWU9e2ZvdXJ0aFZhbH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUZvdXJ0aERpZ2l0Q2hhbmdlfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7ZHJvcFZhbHMuYm9keS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgPE1lbnVJdGVtIGtleT17JzR0aCcgKyBpbmRleC50b1N0cmluZygpfSB2YWx1ZT17aXRlbS52YWx1ZX0+XHJcbiAgICAgICAgICAgICAgICB7aXRlbS50ZXh0fVxyXG4gICAgICAgICAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgPC9Db2w+XHJcbiAgICAgIDwvUm93PlxyXG4gICAgICA8Um93IHN0eWxlPXt7IG1hcmdpblRvcDogJzMwcHgnIH19PlxyXG4gICAgICAgIDxDb2w+XHJcbiAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBjb2xvcj1cInByaW1hcnlcIiBvbkNsaWNrPXtjYWxjdWxhdGV9PlxyXG4gICAgICAgICAgICBDYWxjdWxhclxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPENvbD5cclxuICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIGNvbG9yPVwic2Vjb25kYXJ5XCIgb25DbGljaz17cmVzZXRWYWx1ZXN9PlxyXG4gICAgICAgICAgICBSZXNldFxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9Db2w+XHJcbiAgICAgIDwvUm93PlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
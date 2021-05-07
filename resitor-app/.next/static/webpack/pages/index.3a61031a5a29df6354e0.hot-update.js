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
    console.log;
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
      var first, second, third, fourth, res;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              first = dropdwonValues.findBandValue(firstVal);
              second = dropdwonValues.findBandValue(scndVal);
              third = dropdwonValues.findBandValue(thirdVal);
              fourth = dropdwonValues.findBandValue(fourthVal);
              _context.next = 6;
              return (0, _apiCall.calculateResistance)(first, second, third, fourth);

            case 6:
              res = _context.sent;
              console.log(res);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy92YWx1ZXMuanMiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsIlZhbHVlcyIsIlBhcmVudGNhbGxiYWNrZmlyc3QiLCJQYXJlbnRjYWxsYmFja3NjbmQiLCJQYXJlbnRjYWxsYmFja3RocmQiLCJQYXJlbnRjYWxsYmFja2ZydGgiLCJwYXJlbnRSZXN1bHQiLCJmaXJzdFZhbCIsInNldEZpcnN0VmFsIiwic2NuZFZhbCIsInNldFNjbmRzVmFsIiwidGhpcmRWYWwiLCJzZXRUaGlyZFZhbCIsImZvdXJ0aFZhbCIsInNldEZvdXJ0aFZhbCIsImhhbmRsZUZpcnN0RGlnaXRDaGFuZ2UiLCJlIiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlU2Vjb25kRGlnaXRDaGFuZ2UiLCJoYW5kbGVUaGlyZERpZ2l0Q2hhbmdlIiwiaGFuZGxlRm91cnRoRGlnaXRDaGFuZ2UiLCJmaW5kQmFuZFZhbHVlIiwiaW5keE9mRGF0YSIsImNvbG9yVmFscyIsImJvZHkiLCJmaW5kIiwiaXRlbSIsImkiLCJ0ZXh0IiwiY2FsY3VsYXRlIiwiZmlyc3QiLCJkcm9wZHdvblZhbHVlcyIsInNlY29uZCIsInRoaXJkIiwiZm91cnRoIiwicmVzIiwicmVzZXRWYWx1ZXMiLCJwYWRkaW5nIiwiZHJvcFZhbHMiLCJtYXAiLCJpbmRleCIsInRvU3RyaW5nIiwibWFyZ2luVG9wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVBQSxNQUFNLENBQUNDLE9BQVAsQ0FBZUMsTUFBZixNQUF3QixnQkFNbEI7QUFBQTs7QUFBQSxNQUxKQyxtQkFLSSxRQUxKQSxtQkFLSTtBQUFBLE1BSkpDLGtCQUlJLFFBSkpBLGtCQUlJO0FBQUEsTUFISkMsa0JBR0ksUUFISkEsa0JBR0k7QUFBQSxNQUZKQyxr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UVksS0FBSyxDQUFDQyxRQUFOLEVBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRGlCO0FBQUEsV0FBbEI7QUFOSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWhERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQWlFRSwyQkFBQyxlQUFEO0FBQUssV0FBSyxFQUFFO0FBQUVDLGlCQUFTLEVBQUU7QUFBYixPQUFaO0FBQUEsOEJBQ0UsMkJBQUMsZUFBRDtBQUFBLCtCQUNFLDJCQUFDLFlBQUQ7QUFBUSxpQkFBTyxFQUFDLFdBQWhCO0FBQTRCLGVBQUssRUFBQyxTQUFsQztBQUE0QyxpQkFBTyxFQUFFYixTQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQU1FLDJCQUFDLGVBQUQ7QUFBQSwrQkFDRSwyQkFBQyxZQUFEO0FBQVEsaUJBQU8sRUFBQyxXQUFoQjtBQUE0QixlQUFLLEVBQUMsV0FBbEM7QUFBOEMsaUJBQU8sRUFBRU8sV0FBdkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBakVGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBZ0ZELENBM0lEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjNhNjEwMzFhNWEyOWRmNjM1NGUwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBTZWxlY3QgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU2VsZWN0JztcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgTWVudUl0ZW0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTWVudUl0ZW0nO1xyXG5pbXBvcnQgSW5wdXRMYWJlbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JbnB1dExhYmVsJztcclxuaW1wb3J0IHsgQ29sLCBDb250YWluZXIsIFJvdyB9IGZyb20gJ3JlYWN0c3RyYXAnO1xyXG5pbXBvcnQgeyBkcm9wVmFscyB9IGZyb20gJy4uLy4uL3B1YmxpYy9kcm9wZHdvblZhbHVlcyc7XHJcbmltcG9ydCB7IGNhbGN1bGF0ZVJlc2lzdGFuY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hcGlDYWxsJztcclxuXHJcbm1vZHVsZS5leHBvcnRzLlZhbHVlcyA9ICh7XHJcbiAgUGFyZW50Y2FsbGJhY2tmaXJzdCxcclxuICBQYXJlbnRjYWxsYmFja3NjbmQsXHJcbiAgUGFyZW50Y2FsbGJhY2t0aHJkLFxyXG4gIFBhcmVudGNhbGxiYWNrZnJ0aCxcclxuICBwYXJlbnRSZXN1bHQsXHJcbn0pID0+IHtcclxuICBjb25zdCBbZmlyc3RWYWwsIHNldEZpcnN0VmFsXSA9IHVzZVN0YXRlKCdOb25lJyk7XHJcbiAgY29uc3QgW3NjbmRWYWwsIHNldFNjbmRzVmFsXSA9IHVzZVN0YXRlKCdOb25lJyk7XHJcbiAgY29uc3QgW3RoaXJkVmFsLCBzZXRUaGlyZFZhbF0gPSB1c2VTdGF0ZSgnTm9uZScpO1xyXG4gIGNvbnN0IFtmb3VydGhWYWwsIHNldEZvdXJ0aFZhbF0gPSB1c2VTdGF0ZSgnTm9uZScpO1xyXG5cclxuICBjb25zdCBoYW5kbGVGaXJzdERpZ2l0Q2hhbmdlID0gZSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZ1xyXG4gICAgc2V0Rmlyc3RWYWwoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgUGFyZW50Y2FsbGJhY2tmaXJzdChlLnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVTZWNvbmREaWdpdENoYW5nZSA9IGUgPT4ge1xyXG4gICAgc2V0U2NuZHNWYWwoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgUGFyZW50Y2FsbGJhY2tzY25kKGUudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZVRoaXJkRGlnaXRDaGFuZ2UgPSBlID0+IHtcclxuICAgIHNldFRoaXJkVmFsKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIFBhcmVudGNhbGxiYWNrdGhyZChlLnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVGb3VydGhEaWdpdENoYW5nZSA9IGUgPT4ge1xyXG4gICAgc2V0Rm91cnRoVmFsKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIFBhcmVudGNhbGxiYWNrZnJ0aChlLnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZmluZEJhbmRWYWx1ZSA9IHZhbHVlID0+IHtcclxuICAgIHZhciBpbmR4T2ZEYXRhID0gY29sb3JWYWxzLmJvZHkuZmluZChmdW5jdGlvbiAoaXRlbSwgaSkge1xyXG4gICAgICBpZiAoaXRlbS52YWx1ZSA9PT0gdmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gaXRlbS50ZXh0O1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBjYWxjdWxhdGUgPSBhc3luYyBlID0+IHtcclxuICAgIGNvbnN0IGZpcnN0ID0gZHJvcGR3b25WYWx1ZXMuZmluZEJhbmRWYWx1ZShmaXJzdFZhbCk7XHJcbiAgICBjb25zdCBzZWNvbmQgPSBkcm9wZHdvblZhbHVlcy5maW5kQmFuZFZhbHVlKHNjbmRWYWwpO1xyXG4gICAgY29uc3QgdGhpcmQgPSBkcm9wZHdvblZhbHVlcy5maW5kQmFuZFZhbHVlKHRoaXJkVmFsKTtcclxuICAgIGNvbnN0IGZvdXJ0aCA9IGRyb3Bkd29uVmFsdWVzLmZpbmRCYW5kVmFsdWUoZm91cnRoVmFsKTtcclxuXHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBjYWxjdWxhdGVSZXNpc3RhbmNlKGZpcnN0LCBzZWNvbmQsIHRoaXJkLCBmb3VydGgpO1xyXG4gICAgY29uc29sZS5sb2cocmVzKTtcclxuICB9O1xyXG5cclxuICBjb25zdCByZXNldFZhbHVlcyA9IGUgPT4ge1xyXG4gICAgc2V0Rmlyc3RWYWwoJ05vbmUnKTtcclxuICAgIHNldFNjbmRzVmFsKCdOb25lJyk7XHJcbiAgICBzZXRUaGlyZFZhbCgnTm9uZScpO1xyXG4gICAgc2V0Rm91cnRoVmFsKCdOb25lJyk7XHJcbiAgICBQYXJlbnRjYWxsYmFja2ZpcnN0KCcnKTtcclxuICAgIFBhcmVudGNhbGxiYWNrc2NuZCgnJyk7XHJcbiAgICBQYXJlbnRjYWxsYmFja3RocmQoJycpO1xyXG4gICAgUGFyZW50Y2FsbGJhY2tmcnRoKCcnKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lcj5cclxuICAgICAgPFJvdz5cclxuICAgICAgICA8Q29sIHN0eWxlPXt7IHBhZGRpbmc6ICcxNXB4JyB9fSB4cz17Nn0gc209ezZ9IG1kPXszfSBsZz17M30geGw9ezN9PlxyXG4gICAgICAgICAgPElucHV0TGFiZWwgaWQ9XCJsYWJlbFwiPjFzIERpZ2l0PC9JbnB1dExhYmVsPlxyXG4gICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICBsYWJlbElkPVwibGFiZWxcIlxyXG4gICAgICAgICAgICBpZD1cInNlbGVjdFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtmaXJzdFZhbH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUZpcnN0RGlnaXRDaGFuZ2V9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtkcm9wVmFscy5ib2R5Lm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICA8TWVudUl0ZW0ga2V5PXsnMXN0JyArIGluZGV4LnRvU3RyaW5nKCl9IHZhbHVlPXtpdGVtLnZhbHVlfT5cclxuICAgICAgICAgICAgICAgIHtpdGVtLnRleHR9XHJcbiAgICAgICAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgICA8Q29sIHN0eWxlPXt7IHBhZGRpbmc6ICcxNXB4JyB9fSB4cz17Nn0gc209ezZ9IG1kPXszfSBsZz17M30geGw9ezN9PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPElucHV0TGFiZWwgaWQ9XCJzZWNvbmQtZGlnaXRcIj4ybmQgRGlnaXQ8L0lucHV0TGFiZWw+XHJcbiAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICBsYWJlbElkPVwibGFiZWxcIlxyXG4gICAgICAgICAgICAgIGlkPVwic2VsZWN0XCJcclxuICAgICAgICAgICAgICB2YWx1ZT17c2NuZFZhbH1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlU2Vjb25kRGlnaXRDaGFuZ2V9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7ZHJvcFZhbHMuYm9keS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8TWVudUl0ZW0ga2V5PXsnMm5kJyArIGluZGV4LnRvU3RyaW5nKCl9IHZhbHVlPXtpdGVtLnZhbHVlfT5cclxuICAgICAgICAgICAgICAgICAge2l0ZW0udGV4dH1cclxuICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPENvbCBzdHlsZT17eyBwYWRkaW5nOiAnMTVweCcgfX0geHM9ezZ9IHNtPXs2fSBtZD17M30gbGc9ezN9IHhsPXszfT5cclxuICAgICAgICAgIDxJbnB1dExhYmVsIGlkPVwidGhpcmQtZGlnaXRcIj5NdWx0aXBsaWVyPC9JbnB1dExhYmVsPlxyXG4gICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICBsYWJlbElkPVwibGFiZWxcIlxyXG4gICAgICAgICAgICBpZD1cInNlbGVjdFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXt0aGlyZFZhbH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVRoaXJkRGlnaXRDaGFuZ2V9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtkcm9wVmFscy5ib2R5Lm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICA8TWVudUl0ZW0ga2V5PXsnM3JkJyArIGluZGV4LnRvU3RyaW5nKCl9IHZhbHVlPXtpdGVtLnZhbHVlfT5cclxuICAgICAgICAgICAgICAgIHtpdGVtLnRleHR9XHJcbiAgICAgICAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgICA8Q29sIHN0eWxlPXt7IHBhZGRpbmc6ICcxNXB4JyB9fSB4cz17Nn0gc209ezZ9IG1kPXszfSBsZz17M30geGw9ezN9PlxyXG4gICAgICAgICAgPElucHV0TGFiZWwgaWQ9XCJmb3VydGgtZGlnaXRcIj5Ub2xlcmFuY2U8L0lucHV0TGFiZWw+XHJcbiAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgIGxhYmVsSWQ9XCJsYWJlbFwiXHJcbiAgICAgICAgICAgIGlkPVwic2VsZWN0XCJcclxuICAgICAgICAgICAgdmFsdWU9e2ZvdXJ0aFZhbH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUZvdXJ0aERpZ2l0Q2hhbmdlfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7ZHJvcFZhbHMuYm9keS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgPE1lbnVJdGVtIGtleT17JzR0aCcgKyBpbmRleC50b1N0cmluZygpfSB2YWx1ZT17aXRlbS52YWx1ZX0+XHJcbiAgICAgICAgICAgICAgICB7aXRlbS50ZXh0fVxyXG4gICAgICAgICAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgPC9Db2w+XHJcbiAgICAgIDwvUm93PlxyXG4gICAgICA8Um93IHN0eWxlPXt7IG1hcmdpblRvcDogJzMwcHgnIH19PlxyXG4gICAgICAgIDxDb2w+XHJcbiAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBjb2xvcj1cInByaW1hcnlcIiBvbkNsaWNrPXtjYWxjdWxhdGV9PlxyXG4gICAgICAgICAgICBDYWxjdWxhclxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPENvbD5cclxuICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIGNvbG9yPVwic2Vjb25kYXJ5XCIgb25DbGljaz17cmVzZXRWYWx1ZXN9PlxyXG4gICAgICAgICAgICBSZXNldFxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9Db2w+XHJcbiAgICAgIDwvUm93PlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
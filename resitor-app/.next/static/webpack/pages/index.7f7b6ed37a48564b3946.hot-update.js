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
              console.log(first);
              _context.prev = 5;
              _context.next = 8;
              return (0, _apiCall.calculateResistance)(first.text, second.text, third.text, fourth.text);

            case 8:
              res = _context.sent;
              _context.next = 14;
              break;

            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](5);
              console.log(_context.t0);

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[5, 11]]);
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
          lineNumber: 80,
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
              lineNumber: 88,
              columnNumber: 15
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 79,
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
            lineNumber: 96,
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
                lineNumber: 104,
                columnNumber: 17
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 94,
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
          lineNumber: 112,
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
              lineNumber: 120,
              columnNumber: 15
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 111,
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
          lineNumber: 127,
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
              lineNumber: 135,
              columnNumber: 15
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 78,
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
          lineNumber: 144,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_reactstrap.Col, {
        children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_core.Button, {
          variant: "contained",
          color: "secondary",
          onClick: resetValues,
          children: "Reset"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 77,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy92YWx1ZXMuanMiXSwibmFtZXMiOlsiZmluZEJhbmRWYWx1ZSIsInZhbHVlIiwiaW5keE9mRGF0YSIsImRyb3BWYWxzIiwiYm9keSIsImZpbmQiLCJpdGVtIiwiaSIsInRleHQiLCJtb2R1bGUiLCJleHBvcnRzIiwiVmFsdWVzIiwiUGFyZW50Y2FsbGJhY2tmaXJzdCIsIlBhcmVudGNhbGxiYWNrc2NuZCIsIlBhcmVudGNhbGxiYWNrdGhyZCIsIlBhcmVudGNhbGxiYWNrZnJ0aCIsInBhcmVudFJlc3VsdCIsImZpcnN0VmFsIiwic2V0Rmlyc3RWYWwiLCJzY25kVmFsIiwic2V0U2NuZHNWYWwiLCJ0aGlyZFZhbCIsInNldFRoaXJkVmFsIiwiZm91cnRoVmFsIiwic2V0Rm91cnRoVmFsIiwiaGFuZGxlRmlyc3REaWdpdENoYW5nZSIsImUiLCJ0YXJnZXQiLCJoYW5kbGVTZWNvbmREaWdpdENoYW5nZSIsImhhbmRsZVRoaXJkRGlnaXRDaGFuZ2UiLCJoYW5kbGVGb3VydGhEaWdpdENoYW5nZSIsImNhbGN1bGF0ZSIsImZpcnN0Iiwic2Vjb25kIiwidGhpcmQiLCJmb3VydGgiLCJjb25zb2xlIiwibG9nIiwicmVzIiwicmVzZXRWYWx1ZXMiLCJwYWRkaW5nIiwibWFwIiwiaW5kZXgiLCJ0b1N0cmluZyIsIm1hcmdpblRvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7QUFFQSxTQUFTQSxhQUFULENBQXVCQyxLQUF2QixFQUE4QjtBQUM1QixNQUFJQyxVQUFVLEdBQUdDLHlCQUFTQyxJQUFULENBQWNDLElBQWQsQ0FBbUIsVUFBVUMsSUFBVixFQUFnQkMsQ0FBaEIsRUFBbUI7QUFDckQsUUFBSUQsSUFBSSxDQUFDTCxLQUFMLEtBQWVBLEtBQW5CLEVBQTBCO0FBQ3hCLGFBQU9LLElBQUks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LENBQUNFO0FBRFIsZUFBZSxRQUFRa0MsS0FBSyxDQUFDQyxRQUFOLEVBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRGlCO0FBQUEsV0FBbEI7QUFOSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWhERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQWlFRSwyQkFBQyxlQUFEO0FBQUssV0FBSyxFQUFFO0FBQUVDLGlCQUFTLEVBQUU7QUFBYixPQUFaO0FBQUEsOEJBQ0UsMkJBQUMsZUFBRDtBQUFBLCtCQUNFLDJCQUFDLFlBQUQ7QUFBUSxpQkFBTyxFQUFDLFdBQWhCO0FBQTRCLGVBQUssRUFBQyxTQUFsQztBQUE0QyxpQkFBTyxFQUFFYixTQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQU1FLDJCQUFDLGVBQUQ7QUFBQSwrQkFDRSwyQkFBQyxZQUFEO0FBQVEsaUJBQU8sRUFBQyxXQUFoQjtBQUE0QixlQUFLLEVBQUMsV0FBbEM7QUFBOEMsaUJBQU8sRUFBRVEsV0FBdkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBakVGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBZ0ZELENBMUlEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjdmN2I2ZWQzN2E0ODU2NGIzOTQ2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBTZWxlY3QgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU2VsZWN0JztcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgTWVudUl0ZW0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTWVudUl0ZW0nO1xyXG5pbXBvcnQgSW5wdXRMYWJlbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JbnB1dExhYmVsJztcclxuaW1wb3J0IHsgQ29sLCBDb250YWluZXIsIFJvdyB9IGZyb20gJ3JlYWN0c3RyYXAnO1xyXG5pbXBvcnQgeyBkcm9wVmFscyB9IGZyb20gJy4uLy4uL3B1YmxpYy9kcm9wZHdvblZhbHVlcyc7XHJcbmltcG9ydCB7IGNhbGN1bGF0ZVJlc2lzdGFuY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hcGlDYWxsJztcclxuXHJcbmZ1bmN0aW9uIGZpbmRCYW5kVmFsdWUodmFsdWUpIHtcclxuICB2YXIgaW5keE9mRGF0YSA9IGRyb3BWYWxzLmJvZHkuZmluZChmdW5jdGlvbiAoaXRlbSwgaSkge1xyXG4gICAgaWYgKGl0ZW0udmFsdWUgPT09IHZhbHVlKSB7XHJcbiAgICAgIHJldHVybiBpdGVtLnRleHQ7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgcmV0dXJuIGluZHhPZkRhdGE7XHJcbn1cclxubW9kdWxlLmV4cG9ydHMuVmFsdWVzID0gKHtcclxuICBQYXJlbnRjYWxsYmFja2ZpcnN0LFxyXG4gIFBhcmVudGNhbGxiYWNrc2NuZCxcclxuICBQYXJlbnRjYWxsYmFja3RocmQsXHJcbiAgUGFyZW50Y2FsbGJhY2tmcnRoLFxyXG4gIHBhcmVudFJlc3VsdCxcclxufSkgPT4ge1xyXG4gIGNvbnN0IFtmaXJzdFZhbCwgc2V0Rmlyc3RWYWxdID0gdXNlU3RhdGUoJ05vbmUnKTtcclxuICBjb25zdCBbc2NuZFZhbCwgc2V0U2NuZHNWYWxdID0gdXNlU3RhdGUoJ05vbmUnKTtcclxuICBjb25zdCBbdGhpcmRWYWwsIHNldFRoaXJkVmFsXSA9IHVzZVN0YXRlKCdOb25lJyk7XHJcbiAgY29uc3QgW2ZvdXJ0aFZhbCwgc2V0Rm91cnRoVmFsXSA9IHVzZVN0YXRlKCdOb25lJyk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUZpcnN0RGlnaXRDaGFuZ2UgPSBlID0+IHtcclxuICAgIHNldEZpcnN0VmFsKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIFBhcmVudGNhbGxiYWNrZmlyc3QoZS50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlU2Vjb25kRGlnaXRDaGFuZ2UgPSBlID0+IHtcclxuICAgIHNldFNjbmRzVmFsKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIFBhcmVudGNhbGxiYWNrc2NuZChlLnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVUaGlyZERpZ2l0Q2hhbmdlID0gZSA9PiB7XHJcbiAgICBzZXRUaGlyZFZhbChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICBQYXJlbnRjYWxsYmFja3RocmQoZS50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlRm91cnRoRGlnaXRDaGFuZ2UgPSBlID0+IHtcclxuICAgIHNldEZvdXJ0aFZhbChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICBQYXJlbnRjYWxsYmFja2ZydGgoZS50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNhbGN1bGF0ZSA9IGFzeW5jIGUgPT4ge1xyXG4gICAgY29uc3QgZmlyc3QgPSBmaW5kQmFuZFZhbHVlKGZpcnN0VmFsKTtcclxuICAgIGNvbnN0IHNlY29uZCA9IGZpbmRCYW5kVmFsdWUoc2NuZFZhbCk7XHJcbiAgICBjb25zdCB0aGlyZCA9IGZpbmRCYW5kVmFsdWUodGhpcmRWYWwpO1xyXG4gICAgY29uc3QgZm91cnRoID0gZmluZEJhbmRWYWx1ZShmb3VydGhWYWwpO1xyXG4gICAgY29uc29sZS5sb2coZmlyc3QpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgY2FsY3VsYXRlUmVzaXN0YW5jZShcclxuICAgICAgICBmaXJzdC50ZXh0LFxyXG4gICAgICAgIHNlY29uZC50ZXh0LFxyXG4gICAgICAgIHRoaXJkLnRleHQsXHJcbiAgICAgICAgZm91cnRoLnRleHQsXHJcbiAgICAgICk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVzZXRWYWx1ZXMgPSBlID0+IHtcclxuICAgIHNldEZpcnN0VmFsKCdOb25lJyk7XHJcbiAgICBzZXRTY25kc1ZhbCgnTm9uZScpO1xyXG4gICAgc2V0VGhpcmRWYWwoJ05vbmUnKTtcclxuICAgIHNldEZvdXJ0aFZhbCgnTm9uZScpO1xyXG4gICAgUGFyZW50Y2FsbGJhY2tmaXJzdCgnJyk7XHJcbiAgICBQYXJlbnRjYWxsYmFja3NjbmQoJycpO1xyXG4gICAgUGFyZW50Y2FsbGJhY2t0aHJkKCcnKTtcclxuICAgIFBhcmVudGNhbGxiYWNrZnJ0aCgnJyk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXI+XHJcbiAgICAgIDxSb3c+XHJcbiAgICAgICAgPENvbCBzdHlsZT17eyBwYWRkaW5nOiAnMTVweCcgfX0geHM9ezZ9IHNtPXs2fSBtZD17M30gbGc9ezN9IHhsPXszfT5cclxuICAgICAgICAgIDxJbnB1dExhYmVsIGlkPVwibGFiZWxcIj4xcyBEaWdpdDwvSW5wdXRMYWJlbD5cclxuICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgbGFiZWxJZD1cImxhYmVsXCJcclxuICAgICAgICAgICAgaWQ9XCJzZWxlY3RcIlxyXG4gICAgICAgICAgICB2YWx1ZT17Zmlyc3RWYWx9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVGaXJzdERpZ2l0Q2hhbmdlfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7ZHJvcFZhbHMuYm9keS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgPE1lbnVJdGVtIGtleT17JzFzdCcgKyBpbmRleC50b1N0cmluZygpfSB2YWx1ZT17aXRlbS52YWx1ZX0+XHJcbiAgICAgICAgICAgICAgICB7aXRlbS50ZXh0fVxyXG4gICAgICAgICAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPENvbCBzdHlsZT17eyBwYWRkaW5nOiAnMTVweCcgfX0geHM9ezZ9IHNtPXs2fSBtZD17M30gbGc9ezN9IHhsPXszfT5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxJbnB1dExhYmVsIGlkPVwic2Vjb25kLWRpZ2l0XCI+Mm5kIERpZ2l0PC9JbnB1dExhYmVsPlxyXG4gICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgbGFiZWxJZD1cImxhYmVsXCJcclxuICAgICAgICAgICAgICBpZD1cInNlbGVjdFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3NjbmRWYWx9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVNlY29uZERpZ2l0Q2hhbmdlfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge2Ryb3BWYWxzLmJvZHkubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPE1lbnVJdGVtIGtleT17JzJuZCcgKyBpbmRleC50b1N0cmluZygpfSB2YWx1ZT17aXRlbS52YWx1ZX0+XHJcbiAgICAgICAgICAgICAgICAgIHtpdGVtLnRleHR9XHJcbiAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDxDb2wgc3R5bGU9e3sgcGFkZGluZzogJzE1cHgnIH19IHhzPXs2fSBzbT17Nn0gbWQ9ezN9IGxnPXszfSB4bD17M30+XHJcbiAgICAgICAgICA8SW5wdXRMYWJlbCBpZD1cInRoaXJkLWRpZ2l0XCI+TXVsdGlwbGllcjwvSW5wdXRMYWJlbD5cclxuICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgbGFiZWxJZD1cImxhYmVsXCJcclxuICAgICAgICAgICAgaWQ9XCJzZWxlY3RcIlxyXG4gICAgICAgICAgICB2YWx1ZT17dGhpcmRWYWx9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVUaGlyZERpZ2l0Q2hhbmdlfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7ZHJvcFZhbHMuYm9keS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgPE1lbnVJdGVtIGtleT17JzNyZCcgKyBpbmRleC50b1N0cmluZygpfSB2YWx1ZT17aXRlbS52YWx1ZX0+XHJcbiAgICAgICAgICAgICAgICB7aXRlbS50ZXh0fVxyXG4gICAgICAgICAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPENvbCBzdHlsZT17eyBwYWRkaW5nOiAnMTVweCcgfX0geHM9ezZ9IHNtPXs2fSBtZD17M30gbGc9ezN9IHhsPXszfT5cclxuICAgICAgICAgIDxJbnB1dExhYmVsIGlkPVwiZm91cnRoLWRpZ2l0XCI+VG9sZXJhbmNlPC9JbnB1dExhYmVsPlxyXG4gICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICBsYWJlbElkPVwibGFiZWxcIlxyXG4gICAgICAgICAgICBpZD1cInNlbGVjdFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtmb3VydGhWYWx9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVGb3VydGhEaWdpdENoYW5nZX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2Ryb3BWYWxzLmJvZHkubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgIDxNZW51SXRlbSBrZXk9eyc0dGgnICsgaW5kZXgudG9TdHJpbmcoKX0gdmFsdWU9e2l0ZW0udmFsdWV9PlxyXG4gICAgICAgICAgICAgICAge2l0ZW0udGV4dH1cclxuICAgICAgICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgICA8L1Jvdz5cclxuICAgICAgPFJvdyBzdHlsZT17eyBtYXJnaW5Ub3A6ICczMHB4JyB9fT5cclxuICAgICAgICA8Q29sPlxyXG4gICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgY29sb3I9XCJwcmltYXJ5XCIgb25DbGljaz17Y2FsY3VsYXRlfT5cclxuICAgICAgICAgICAgQ2FsY3VsYXJcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDxDb2w+XHJcbiAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBjb2xvcj1cInNlY29uZGFyeVwiIG9uQ2xpY2s9e3Jlc2V0VmFsdWVzfT5cclxuICAgICAgICAgICAgUmVzZXRcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgICA8L1Jvdz5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICk7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
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
      var f, second, third, fourth;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              f = findBandValue(firstVal);
              second = findBandValue(scndVal);
              third = findBandValue(thirdVal);
              fourth = findBandValue(fourthVal);
              console.log(f); //const res = await calculateResistance(first, second, third, fourth);

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
          lineNumber: 71,
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
              lineNumber: 79,
              columnNumber: 15
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 70,
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
            lineNumber: 87,
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
                lineNumber: 95,
                columnNumber: 17
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
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
          lineNumber: 103,
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
              lineNumber: 111,
              columnNumber: 15
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 102,
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
          lineNumber: 118,
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
              lineNumber: 126,
              columnNumber: 15
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 69,
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
          lineNumber: 135,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_reactstrap.Col, {
        children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_core.Button, {
          variant: "contained",
          color: "secondary",
          onClick: resetValues,
          children: "Reset"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 68,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy92YWx1ZXMuanMiXSwibmFtZXMiOlsiZmluZEJhbmRWYWx1ZSIsInZhbHVlIiwiaW5keE9mRGF0YSIsImRyb3BWYWxzIiwiYm9keSIsImZpbmQiLCJpdGVtIiwiaSIsInRleHQiLCJtb2R1bGUiLCJleHBvcnRzIiwiVmFsdWVzIiwiUGFyZW50Y2FsbGJhY2tmaXJzdCIsIlBhcmVudGNhbGxiYWNrc2NuZCIsIlBhcmVudGNhbGxiYWNrdGhyZCIsIlBhcmVudGNhbGxiYWNrZnJ0aCIsInBhcmVudFJlc3VsdCIsImZpcnN0VmFsIiwic2V0Rmlyc3RWYWwiLCJzY25kVmFsIiwic2V0U2NuZHNWYWwiLCJ0aGlyZFZhbCIsInNldFRoaXJkVmFsIiwiZm91cnRoVmFsIiwic2V0Rm91cnRoVmFsIiwiaGFuZGxlRmlyc3REaWdpdENoYW5nZSIsImUiLCJ0YXJnZXQiLCJoYW5kbGVTZWNvbmREaWdpdENoYW5nZSIsImhhbmRsZVRoaXJkRGlnaXRDaGFuZ2UiLCJoYW5kbGVGb3VydGhEaWdpdENoYW5nZSIsImNhbGN1bGF0ZSIsImYiLCJzZWNvbmQiLCJ0aGlyZCIsImZvdXJ0aCIsImNvbnNvbGUiLCJsb2ciLCJyZXNldFZhbHVlcyIsInBhZGRpbmciLCJtYXAiLCJpbmRleCIsInRvU3RyaW5nIiwibWFyZ2luVG9wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVBLFNBQVNBLGFBQVQsQ0FBdUJDLEtBQXZCLEVBQThCO0FBQzVCLE1BQUlDLFVBQVUsR0FBR0MseUJBQVNDLElBQVQsQ0FBY0MsSUFBZCxDQUFtQixVQUFVQyxJQUFWLEVBQWdCQyxDQUFoQixFQUFtQjtBQUNyRCxRQUFJRCxJQUFJLENBQUNMLEtBQUwsS0FBZUEsS0FBbkIsRUFBMEI7QUFDeEIsYUFBT0ssSUFBSSxDQUFDRSxJQUFa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QUFLLFdBQUssRUFBRTtBQUFFQyxpQkFBUyxFQUFFO0FBQWIsT0FBWjtBQUFBLDhCQUNFLDJCQUFDLGVBQUQ7QUFBQSwrQkFDRSwyQkFBQyxZQUFEO0FBQVEsaUJBQU8sRUFBQyxXQUFoQjtBQUE0QixlQUFLLEVBQUMsU0FBbEM7QUFBNEMsaUJBQU8sRUFBRVosU0FBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFNRSwyQkFBQyxlQUFEO0FBQUEsK0JBQ0UsMkJBQUMsWUFBRDtBQUFRLGlCQUFPLEVBQUMsV0FBaEI7QUFBNEIsZUFBSyxFQUFDLFdBQWxDO0FBQThDLGlCQUFPLEVBQUVPLFdBQXZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWpFRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWdGRCxDQWpJRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4xYzMzMjZjMTAyNDlkY2MyNGVlYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgU2VsZWN0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1NlbGVjdCc7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IE1lbnVJdGVtIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL01lbnVJdGVtJztcclxuaW1wb3J0IElucHV0TGFiZWwgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSW5wdXRMYWJlbCc7XHJcbmltcG9ydCB7IENvbCwgQ29udGFpbmVyLCBSb3cgfSBmcm9tICdyZWFjdHN0cmFwJztcclxuaW1wb3J0IHsgZHJvcFZhbHMgfSBmcm9tICcuLi8uLi9wdWJsaWMvZHJvcGR3b25WYWx1ZXMnO1xyXG5pbXBvcnQgeyBjYWxjdWxhdGVSZXNpc3RhbmNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYXBpQ2FsbCc7XHJcblxyXG5mdW5jdGlvbiBmaW5kQmFuZFZhbHVlKHZhbHVlKSB7XHJcbiAgdmFyIGluZHhPZkRhdGEgPSBkcm9wVmFscy5ib2R5LmZpbmQoZnVuY3Rpb24gKGl0ZW0sIGkpIHtcclxuICAgIGlmIChpdGVtLnZhbHVlID09PSB2YWx1ZSkge1xyXG4gICAgICByZXR1cm4gaXRlbS50ZXh0O1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIHJldHVybiBpbmR4T2ZEYXRhO1xyXG59XHJcbm1vZHVsZS5leHBvcnRzLlZhbHVlcyA9ICh7XHJcbiAgUGFyZW50Y2FsbGJhY2tmaXJzdCxcclxuICBQYXJlbnRjYWxsYmFja3NjbmQsXHJcbiAgUGFyZW50Y2FsbGJhY2t0aHJkLFxyXG4gIFBhcmVudGNhbGxiYWNrZnJ0aCxcclxuICBwYXJlbnRSZXN1bHQsXHJcbn0pID0+IHtcclxuICBjb25zdCBbZmlyc3RWYWwsIHNldEZpcnN0VmFsXSA9IHVzZVN0YXRlKCdOb25lJyk7XHJcbiAgY29uc3QgW3NjbmRWYWwsIHNldFNjbmRzVmFsXSA9IHVzZVN0YXRlKCdOb25lJyk7XHJcbiAgY29uc3QgW3RoaXJkVmFsLCBzZXRUaGlyZFZhbF0gPSB1c2VTdGF0ZSgnTm9uZScpO1xyXG4gIGNvbnN0IFtmb3VydGhWYWwsIHNldEZvdXJ0aFZhbF0gPSB1c2VTdGF0ZSgnTm9uZScpO1xyXG5cclxuICBjb25zdCBoYW5kbGVGaXJzdERpZ2l0Q2hhbmdlID0gZSA9PiB7XHJcbiAgICBzZXRGaXJzdFZhbChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICBQYXJlbnRjYWxsYmFja2ZpcnN0KGUudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZVNlY29uZERpZ2l0Q2hhbmdlID0gZSA9PiB7XHJcbiAgICBzZXRTY25kc1ZhbChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICBQYXJlbnRjYWxsYmFja3NjbmQoZS50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlVGhpcmREaWdpdENoYW5nZSA9IGUgPT4ge1xyXG4gICAgc2V0VGhpcmRWYWwoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgUGFyZW50Y2FsbGJhY2t0aHJkKGUudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZUZvdXJ0aERpZ2l0Q2hhbmdlID0gZSA9PiB7XHJcbiAgICBzZXRGb3VydGhWYWwoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgUGFyZW50Y2FsbGJhY2tmcnRoKGUudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBjYWxjdWxhdGUgPSBhc3luYyBlID0+IHtcclxuICAgIGNvbnN0IGYgPSBmaW5kQmFuZFZhbHVlKGZpcnN0VmFsKTtcclxuICAgIGNvbnN0IHNlY29uZCA9IGZpbmRCYW5kVmFsdWUoc2NuZFZhbCk7XHJcbiAgICBjb25zdCB0aGlyZCA9IGZpbmRCYW5kVmFsdWUodGhpcmRWYWwpO1xyXG4gICAgY29uc3QgZm91cnRoID0gZmluZEJhbmRWYWx1ZShmb3VydGhWYWwpO1xyXG4gICAgY29uc29sZS5sb2coZik7XHJcbiAgICAvL2NvbnN0IHJlcyA9IGF3YWl0IGNhbGN1bGF0ZVJlc2lzdGFuY2UoZmlyc3QsIHNlY29uZCwgdGhpcmQsIGZvdXJ0aCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVzZXRWYWx1ZXMgPSBlID0+IHtcclxuICAgIHNldEZpcnN0VmFsKCdOb25lJyk7XHJcbiAgICBzZXRTY25kc1ZhbCgnTm9uZScpO1xyXG4gICAgc2V0VGhpcmRWYWwoJ05vbmUnKTtcclxuICAgIHNldEZvdXJ0aFZhbCgnTm9uZScpO1xyXG4gICAgUGFyZW50Y2FsbGJhY2tmaXJzdCgnJyk7XHJcbiAgICBQYXJlbnRjYWxsYmFja3NjbmQoJycpO1xyXG4gICAgUGFyZW50Y2FsbGJhY2t0aHJkKCcnKTtcclxuICAgIFBhcmVudGNhbGxiYWNrZnJ0aCgnJyk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXI+XHJcbiAgICAgIDxSb3c+XHJcbiAgICAgICAgPENvbCBzdHlsZT17eyBwYWRkaW5nOiAnMTVweCcgfX0geHM9ezZ9IHNtPXs2fSBtZD17M30gbGc9ezN9IHhsPXszfT5cclxuICAgICAgICAgIDxJbnB1dExhYmVsIGlkPVwibGFiZWxcIj4xcyBEaWdpdDwvSW5wdXRMYWJlbD5cclxuICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgbGFiZWxJZD1cImxhYmVsXCJcclxuICAgICAgICAgICAgaWQ9XCJzZWxlY3RcIlxyXG4gICAgICAgICAgICB2YWx1ZT17Zmlyc3RWYWx9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVGaXJzdERpZ2l0Q2hhbmdlfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7ZHJvcFZhbHMuYm9keS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgPE1lbnVJdGVtIGtleT17JzFzdCcgKyBpbmRleC50b1N0cmluZygpfSB2YWx1ZT17aXRlbS52YWx1ZX0+XHJcbiAgICAgICAgICAgICAgICB7aXRlbS50ZXh0fVxyXG4gICAgICAgICAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPENvbCBzdHlsZT17eyBwYWRkaW5nOiAnMTVweCcgfX0geHM9ezZ9IHNtPXs2fSBtZD17M30gbGc9ezN9IHhsPXszfT5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxJbnB1dExhYmVsIGlkPVwic2Vjb25kLWRpZ2l0XCI+Mm5kIERpZ2l0PC9JbnB1dExhYmVsPlxyXG4gICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgbGFiZWxJZD1cImxhYmVsXCJcclxuICAgICAgICAgICAgICBpZD1cInNlbGVjdFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3NjbmRWYWx9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVNlY29uZERpZ2l0Q2hhbmdlfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge2Ryb3BWYWxzLmJvZHkubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPE1lbnVJdGVtIGtleT17JzJuZCcgKyBpbmRleC50b1N0cmluZygpfSB2YWx1ZT17aXRlbS52YWx1ZX0+XHJcbiAgICAgICAgICAgICAgICAgIHtpdGVtLnRleHR9XHJcbiAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDxDb2wgc3R5bGU9e3sgcGFkZGluZzogJzE1cHgnIH19IHhzPXs2fSBzbT17Nn0gbWQ9ezN9IGxnPXszfSB4bD17M30+XHJcbiAgICAgICAgICA8SW5wdXRMYWJlbCBpZD1cInRoaXJkLWRpZ2l0XCI+TXVsdGlwbGllcjwvSW5wdXRMYWJlbD5cclxuICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgbGFiZWxJZD1cImxhYmVsXCJcclxuICAgICAgICAgICAgaWQ9XCJzZWxlY3RcIlxyXG4gICAgICAgICAgICB2YWx1ZT17dGhpcmRWYWx9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVUaGlyZERpZ2l0Q2hhbmdlfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7ZHJvcFZhbHMuYm9keS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgPE1lbnVJdGVtIGtleT17JzNyZCcgKyBpbmRleC50b1N0cmluZygpfSB2YWx1ZT17aXRlbS52YWx1ZX0+XHJcbiAgICAgICAgICAgICAgICB7aXRlbS50ZXh0fVxyXG4gICAgICAgICAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPENvbCBzdHlsZT17eyBwYWRkaW5nOiAnMTVweCcgfX0geHM9ezZ9IHNtPXs2fSBtZD17M30gbGc9ezN9IHhsPXszfT5cclxuICAgICAgICAgIDxJbnB1dExhYmVsIGlkPVwiZm91cnRoLWRpZ2l0XCI+VG9sZXJhbmNlPC9JbnB1dExhYmVsPlxyXG4gICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICBsYWJlbElkPVwibGFiZWxcIlxyXG4gICAgICAgICAgICBpZD1cInNlbGVjdFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtmb3VydGhWYWx9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVGb3VydGhEaWdpdENoYW5nZX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2Ryb3BWYWxzLmJvZHkubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgIDxNZW51SXRlbSBrZXk9eyc0dGgnICsgaW5kZXgudG9TdHJpbmcoKX0gdmFsdWU9e2l0ZW0udmFsdWV9PlxyXG4gICAgICAgICAgICAgICAge2l0ZW0udGV4dH1cclxuICAgICAgICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgICA8L1Jvdz5cclxuICAgICAgPFJvdyBzdHlsZT17eyBtYXJnaW5Ub3A6ICczMHB4JyB9fT5cclxuICAgICAgICA8Q29sPlxyXG4gICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgY29sb3I9XCJwcmltYXJ5XCIgb25DbGljaz17Y2FsY3VsYXRlfT5cclxuICAgICAgICAgICAgQ2FsY3VsYXJcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDxDb2w+XHJcbiAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBjb2xvcj1cInNlY29uZGFyeVwiIG9uQ2xpY2s9e3Jlc2V0VmFsdWVzfT5cclxuICAgICAgICAgICAgUmVzZXRcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgICA8L1Jvdz5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICk7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
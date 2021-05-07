module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./config/index.js":
/*!*************************!*\
  !*** ./config/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Override http config
module.exports.api = {
  url: 'http://localhost:8080'
};

/***/ }),

/***/ "./pages/components/resistor.js":
/*!**************************************!*\
  !*** ./pages/components/resistor.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/TextField */ "@material-ui/core/TextField");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _values__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./values */ "./pages/components/values.js");
/* harmony import */ var _values__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_values__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "C:\\Users\\samut\\Desktop\\resitor-app\\pages\\components\\resistor.js";






function Resistor() {
  const {
    0: first,
    1: setCallFirst
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const {
    0: scnd,
    1: setCallScnd
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const {
    0: thrd,
    1: setCallThrd
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const {
    0: frth,
    1: setCallForth
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const {
    0: result,
    1: setResult
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');

  const callFirst = e => {
    setCallFirst(e);
  };

  const callScnd = e => {
    setCallScnd(e);
  };

  const callThrd = e => {
    setCallThrd(e);
  };

  const callForth = e => {
    setCallForth(e);
  };

  const printResult = e => {
    setResult(e);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
      style: {
        marginBottom: '50px',
        paddingLeft: '20px'
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        lg: 12,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4___default.a, {
          disabled: true,
          id: "outlined-disabled",
          label: result,
          defaultValue: result,
          variant: "outlined"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("rect", {
          x: 0,
          y: 26,
          rx: 5,
          width: 300,
          height: 7,
          fill: "#d1d1d1"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("rect", {
          x: 50,
          y: 0,
          rx: 15,
          width: 200,
          height: 57,
          fill: "#FDF7EB"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("rect", {
          x: 70,
          width: 7,
          height: 57,
          fill: first
        }, 1, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("rect", {
          x: 100,
          width: 7,
          height: 57,
          fill: scnd
        }, 2, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("rect", {
          x: 130,
          width: 7,
          height: 57,
          fill: thrd
        }, 3, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("rect", {
          x: 160,
          width: 7,
          height: 57,
          fill: frth
        }, 4, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_values__WEBPACK_IMPORTED_MODULE_5__["Values"], {
        Parentcallbackfirst: callFirst,
        Parentcallbackscnd: callScnd,
        Parentcallbackthrd: callThrd,
        Parentcallbackfrth: callForth,
        parentResult: printResult
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Resistor);

/***/ }),

/***/ "./pages/components/values.js":
/*!************************************!*\
  !*** ./pages/components/values.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jsxDevRuntime = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _Select = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/Select */ "@material-ui/core/Select"));

var _core = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");

var _MenuItem = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/MenuItem */ "@material-ui/core/MenuItem"));

var _InputLabel = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/InputLabel */ "@material-ui/core/InputLabel"));

var _reactstrap = __webpack_require__(/*! reactstrap */ "reactstrap");

var _dropdwonValues = __webpack_require__(/*! ../../public/dropdwonValues */ "./public/dropdwonValues.js");

var _apiCall = __webpack_require__(/*! ../../services/apiCall */ "./services/apiCall.js");

var _jsxFileName = "C:\\Users\\samut\\Desktop\\resitor-app\\pages\\components\\values.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function findBandValue(value) {
  var indxOfData = _dropdwonValues.dropVals.body.find(function (item, i) {
    if (item.value === value) {
      return item.text;
    }
  });

  return indxOfData;
}

module.exports.Values = ({
  Parentcallbackfirst,
  Parentcallbackscnd,
  Parentcallbackthrd,
  Parentcallbackfrth,
  parentResult
}) => {
  const {
    0: firstVal,
    1: setFirstVal
  } = (0, _react.useState)('None');
  const {
    0: scndVal,
    1: setScndsVal
  } = (0, _react.useState)('None');
  const {
    0: thirdVal,
    1: setThirdVal
  } = (0, _react.useState)('None');
  const {
    0: fourthVal,
    1: setFourthVal
  } = (0, _react.useState)('None');

  const handleFirstDigitChange = e => {
    setFirstVal(e.target.value);
    Parentcallbackfirst(e.target.value);
  };

  const handleSecondDigitChange = e => {
    setScndsVal(e.target.value);
    Parentcallbackscnd(e.target.value);
  };

  const handleThirdDigitChange = e => {
    setThirdVal(e.target.value);
    Parentcallbackthrd(e.target.value);
  };

  const handleFourthDigitChange = e => {
    setFourthVal(e.target.value);
    Parentcallbackfrth(e.target.value);
  };

  const calculate = async e => {
    const first = findBandValue(firstVal);
    const second = findBandValue(scndVal);
    const third = findBandValue(thirdVal);
    const fourth = findBandValue(fourthVal);

    try {
      const res = await (0, _apiCall.calculateResistance)(first.text, second.text, third.text, fourth.text);
      if (res.status === 200) parentResult(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const resetValues = e => {
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
        children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_InputLabel.default, {
          id: "label",
          children: "1s Digit"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 11
        }, void 0), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_Select.default, {
          labelId: "label",
          id: "select",
          value: firstVal,
          onChange: handleFirstDigitChange,
          children: _dropdwonValues.dropVals.body.map((item, index) => /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_MenuItem.default, {
            value: item.value,
            children: item.text
          }, '1st' + index.toString(), false, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 15
          }, void 0))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 11
        }, void 0)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 9
      }, void 0), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_reactstrap.Col, {
        style: {
          padding: '15px'
        },
        xs: 6,
        sm: 6,
        md: 3,
        lg: 3,
        xl: 3,
        children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
          children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_InputLabel.default, {
            id: "second-digit",
            children: "2nd Digit"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 13
          }, void 0), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_Select.default, {
            labelId: "label",
            id: "select",
            value: scndVal,
            onChange: handleSecondDigitChange,
            children: _dropdwonValues.dropVals.body.map((item, index) => /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_MenuItem.default, {
              value: item.value,
              children: item.text
            }, '2nd' + index.toString(), false, {
              fileName: _jsxFileName,
              lineNumber: 104,
              columnNumber: 17
            }, void 0))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 13
          }, void 0)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 11
        }, void 0)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 9
      }, void 0), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_reactstrap.Col, {
        style: {
          padding: '15px'
        },
        xs: 6,
        sm: 6,
        md: 3,
        lg: 3,
        xl: 3,
        children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_InputLabel.default, {
          id: "third-digit",
          children: "Multiplier"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 11
        }, void 0), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_Select.default, {
          labelId: "label",
          id: "select",
          value: thirdVal,
          onChange: handleThirdDigitChange,
          children: _dropdwonValues.dropVals.body.map((item, index) => /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_MenuItem.default, {
            value: item.value,
            children: item.text
          }, '3rd' + index.toString(), false, {
            fileName: _jsxFileName,
            lineNumber: 120,
            columnNumber: 15
          }, void 0))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 11
        }, void 0)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 9
      }, void 0), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_reactstrap.Col, {
        style: {
          padding: '15px'
        },
        xs: 6,
        sm: 6,
        md: 3,
        lg: 3,
        xl: 3,
        children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_InputLabel.default, {
          id: "fourth-digit",
          children: "Tolerance"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 11
        }, void 0), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_Select.default, {
          labelId: "label",
          id: "select",
          value: fourthVal,
          onChange: handleFourthDigitChange,
          children: _dropdwonValues.dropVals.body.map((item, index) => /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_MenuItem.default, {
            value: item.value,
            children: item.text
          }, '4th' + index.toString(), false, {
            fileName: _jsxFileName,
            lineNumber: 135,
            columnNumber: 15
          }, void 0))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 11
        }, void 0)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 9
      }, void 0)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 7
    }, void 0), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_reactstrap.Row, {
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
        }, void 0)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 9
      }, void 0), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_reactstrap.Col, {
        children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_core.Button, {
          variant: "contained",
          color: "secondary",
          onClick: resetValues,
          children: "Reset"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 11
        }, void 0)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 9
      }, void 0)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 7
    }, void 0)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 77,
    columnNumber: 5
  }, void 0);
};

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_resistor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/resistor */ "./pages/components/resistor.js");

var _jsxFileName = "C:\\Users\\samut\\Desktop\\resitor-app\\pages\\index.js";




function Home() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.container,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "Resistor App"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.main,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_resistor__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("footer", {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.footer
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./public/dropdwonValues.js":
/*!**********************************!*\
  !*** ./public/dropdwonValues.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports.dropVals = {
  body: [{
    value: 'None',
    text: 'None'
  }, {
    value: '#000000',
    text: 'Black'
  }, {
    value: '#683001',
    text: 'Brown'
  }, {
    value: '#F10909 ',
    text: 'Red'
  }, {
    value: '#F17609',
    text: 'Orange'
  }, {
    value: '#F9F501 ',
    text: 'Yellow'
  }, {
    value: '#13F901',
    text: 'Green'
  }, {
    value: '#0AAAFF ',
    text: 'Blue'
  }, {
    value: '#BD32F1',
    text: 'Violet'
  }, {
    value: '#8B8B8B',
    text: 'Grey'
  }, {
    value: '#FFFFFF',
    text: 'White'
  }, {
    value: '#CC9A0B',
    text: 'Gold'
  }, {
    value: '#DEDEDE',
    text: 'Silver'
  }, {
    value: '#FFC0CB',
    text: 'Pink'
  }]
};

/***/ }),

/***/ "./services/apiCall.js":
/*!*****************************!*\
  !*** ./services/apiCall.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _axios = _interopRequireDefault(__webpack_require__(/*! axios */ "axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const config = __webpack_require__(/*! ../config/index */ "./config/index.js");

module.exports.calculateResistance = async (first, second, third, fourth) => {
  const obj = {
    first: first,
    second: second,
    third: third,
    fourth: fourth
  };
  const headers = {
    'Content-Type': 'application/json; charset=utf-8'
  };
  return _axios.default.post(`${config.api.url}/api/calculateResistance`, obj, headers);
};

/***/ }),

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "Home_container__1EcsU",
	"main": "Home_main__1x8gC",
	"footer": "Home_footer__1WdhD",
	"title": "Home_title__3DjR7",
	"description": "Home_description__17Z4F",
	"code": "Home_code__axx2Y",
	"grid": "Home_grid__2Ei2F",
	"card": "Home_card__2SdtB",
	"logo": "Home_logo__1YbrH"
};


/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "@material-ui/core/InputLabel":
/*!***********************************************!*\
  !*** external "@material-ui/core/InputLabel" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/InputLabel");

/***/ }),

/***/ "@material-ui/core/MenuItem":
/*!*********************************************!*\
  !*** external "@material-ui/core/MenuItem" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/MenuItem");

/***/ }),

/***/ "@material-ui/core/Select":
/*!*******************************************!*\
  !*** external "@material-ui/core/Select" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Select");

/***/ }),

/***/ "@material-ui/core/TextField":
/*!**********************************************!*\
  !*** external "@material-ui/core/TextField" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TextField");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "reactstrap":
/*!*****************************!*\
  !*** external "reactstrap" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29uZmlnL2luZGV4LmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2NvbXBvbmVudHMvcmVzaXN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvY29tcG9uZW50cy92YWx1ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2Ryb3Bkd29uVmFsdWVzLmpzIiwid2VicGFjazovLy8uL3NlcnZpY2VzL2FwaUNhbGwuanMiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0lucHV0TGFiZWxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9NZW51SXRlbVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1NlbGVjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdHN0cmFwXCIiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsImFwaSIsInVybCIsIlJlc2lzdG9yIiwiZmlyc3QiLCJzZXRDYWxsRmlyc3QiLCJ1c2VTdGF0ZSIsInNjbmQiLCJzZXRDYWxsU2NuZCIsInRocmQiLCJzZXRDYWxsVGhyZCIsImZydGgiLCJzZXRDYWxsRm9ydGgiLCJyZXN1bHQiLCJzZXRSZXN1bHQiLCJjYWxsRmlyc3QiLCJlIiwiY2FsbFNjbmQiLCJjYWxsVGhyZCIsImNhbGxGb3J0aCIsInByaW50UmVzdWx0IiwibWFyZ2luQm90dG9tIiwicGFkZGluZ0xlZnQiLCJmaW5kQmFuZFZhbHVlIiwidmFsdWUiLCJpbmR4T2ZEYXRhIiwiZHJvcFZhbHMiLCJib2R5IiwiZmluZCIsIml0ZW0iLCJpIiwidGV4dCIsIlZhbHVlcyIsIlBhcmVudGNhbGxiYWNrZmlyc3QiLCJQYXJlbnRjYWxsYmFja3NjbmQiLCJQYXJlbnRjYWxsYmFja3RocmQiLCJQYXJlbnRjYWxsYmFja2ZydGgiLCJwYXJlbnRSZXN1bHQiLCJmaXJzdFZhbCIsInNldEZpcnN0VmFsIiwic2NuZFZhbCIsInNldFNjbmRzVmFsIiwidGhpcmRWYWwiLCJzZXRUaGlyZFZhbCIsImZvdXJ0aFZhbCIsInNldEZvdXJ0aFZhbCIsImhhbmRsZUZpcnN0RGlnaXRDaGFuZ2UiLCJ0YXJnZXQiLCJoYW5kbGVTZWNvbmREaWdpdENoYW5nZSIsImhhbmRsZVRoaXJkRGlnaXRDaGFuZ2UiLCJoYW5kbGVGb3VydGhEaWdpdENoYW5nZSIsImNhbGN1bGF0ZSIsInNlY29uZCIsInRoaXJkIiwiZm91cnRoIiwicmVzIiwic3RhdHVzIiwiZGF0YSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInJlc2V0VmFsdWVzIiwicGFkZGluZyIsIm1hcCIsImluZGV4IiwidG9TdHJpbmciLCJtYXJnaW5Ub3AiLCJIb21lIiwic3R5bGVzIiwiY29udGFpbmVyIiwibWFpbiIsImZvb3RlciIsImNvbmZpZyIsInJlcXVpcmUiLCJjYWxjdWxhdGVSZXNpc3RhbmNlIiwib2JqIiwiaGVhZGVycyIsImF4aW9zIiwicG9zdCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1hBLDhDOzs7Ozs7Ozs7OztBQ0FBLHlEOzs7Ozs7Ozs7OztBQ0FBLHVEOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLHdEOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLHVDIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9pbmRleC5qc1wiKTtcbiIsIi8vIE92ZXJyaWRlIGh0dHAgY29uZmlnXHJcbm1vZHVsZS5leHBvcnRzLmFwaSA9IHtcclxuICB1cmw6ICdodHRwOi8vbG9jYWxob3N0OjgwODAnLFxyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IENvbCwgUm93IH0gZnJvbSAncmVhY3RzdHJhcCc7XHJcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGQnO1xyXG5pbXBvcnQgeyBWYWx1ZXMgfSBmcm9tICcuL3ZhbHVlcyc7XHJcblxyXG5mdW5jdGlvbiBSZXNpc3RvcigpIHtcclxuICBjb25zdCBbZmlyc3QsIHNldENhbGxGaXJzdF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3NjbmQsIHNldENhbGxTY25kXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbdGhyZCwgc2V0Q2FsbFRocmRdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtmcnRoLCBzZXRDYWxsRm9ydGhdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtyZXN1bHQsIHNldFJlc3VsdF0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gIGNvbnN0IGNhbGxGaXJzdCA9IGUgPT4ge1xyXG4gICAgc2V0Q2FsbEZpcnN0KGUpO1xyXG4gIH07XHJcbiAgY29uc3QgY2FsbFNjbmQgPSBlID0+IHtcclxuICAgIHNldENhbGxTY25kKGUpO1xyXG4gIH07XHJcbiAgY29uc3QgY2FsbFRocmQgPSBlID0+IHtcclxuICAgIHNldENhbGxUaHJkKGUpO1xyXG4gIH07XHJcbiAgY29uc3QgY2FsbEZvcnRoID0gZSA9PiB7XHJcbiAgICBzZXRDYWxsRm9ydGgoZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcHJpbnRSZXN1bHQgPSBlID0+IHtcclxuICAgIHNldFJlc3VsdChlKTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyPlxyXG4gICAgICA8Um93IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogJzUwcHgnLCBwYWRkaW5nTGVmdDogJzIwcHgnIH19PlxyXG4gICAgICAgIDxDb2wgbGc9ezEyfT5cclxuICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgZGlzYWJsZWRcclxuICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1kaXNhYmxlZFwiXHJcbiAgICAgICAgICAgIGxhYmVsPXtyZXN1bHR9XHJcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17cmVzdWx0fVxyXG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgPC9Sb3c+XHJcbiAgICAgIDxSb3c+XHJcbiAgICAgICAgPHN2ZyB2ZXJzaW9uPVwiMS4xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG4gICAgICAgICAgPHJlY3QgeD17MH0geT17MjZ9IHJ4PXs1fSB3aWR0aD17MzAwfSBoZWlnaHQ9ezd9IGZpbGw9XCIjZDFkMWQxXCIgLz5cclxuICAgICAgICAgIDxyZWN0IHg9ezUwfSB5PXswfSByeD17MTV9IHdpZHRoPXsyMDB9IGhlaWdodD17NTd9IGZpbGw9XCIjRkRGN0VCXCIgLz5cclxuICAgICAgICAgIDxyZWN0IGtleT17MX0geD17NzB9IHdpZHRoPXs3fSBoZWlnaHQ9ezU3fSBmaWxsPXtmaXJzdH0gLz5cclxuICAgICAgICAgIDxyZWN0IGtleT17Mn0geD17MTAwfSB3aWR0aD17N30gaGVpZ2h0PXs1N30gZmlsbD17c2NuZH0gLz5cclxuICAgICAgICAgIDxyZWN0IGtleT17M30geD17MTMwfSB3aWR0aD17N30gaGVpZ2h0PXs1N30gZmlsbD17dGhyZH0gLz5cclxuICAgICAgICAgIDxyZWN0IGtleT17NH0geD17MTYwfSB3aWR0aD17N30gaGVpZ2h0PXs1N30gZmlsbD17ZnJ0aH0gLz5cclxuICAgICAgICA8L3N2Zz5cclxuICAgICAgPC9Sb3c+XHJcbiAgICAgIDxSb3c+XHJcbiAgICAgICAgPFZhbHVlc1xyXG4gICAgICAgICAgUGFyZW50Y2FsbGJhY2tmaXJzdD17Y2FsbEZpcnN0fVxyXG4gICAgICAgICAgUGFyZW50Y2FsbGJhY2tzY25kPXtjYWxsU2NuZH1cclxuICAgICAgICAgIFBhcmVudGNhbGxiYWNrdGhyZD17Y2FsbFRocmR9XHJcbiAgICAgICAgICBQYXJlbnRjYWxsYmFja2ZydGg9e2NhbGxGb3J0aH1cclxuICAgICAgICAgIHBhcmVudFJlc3VsdD17cHJpbnRSZXN1bHR9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9Sb3c+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFJlc2lzdG9yO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBTZWxlY3QgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU2VsZWN0JztcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgTWVudUl0ZW0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTWVudUl0ZW0nO1xyXG5pbXBvcnQgSW5wdXRMYWJlbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JbnB1dExhYmVsJztcclxuaW1wb3J0IHsgQ29sLCBDb250YWluZXIsIFJvdyB9IGZyb20gJ3JlYWN0c3RyYXAnO1xyXG5pbXBvcnQgeyBkcm9wVmFscyB9IGZyb20gJy4uLy4uL3B1YmxpYy9kcm9wZHdvblZhbHVlcyc7XHJcbmltcG9ydCB7IGNhbGN1bGF0ZVJlc2lzdGFuY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hcGlDYWxsJztcclxuXHJcbmZ1bmN0aW9uIGZpbmRCYW5kVmFsdWUodmFsdWUpIHtcclxuICB2YXIgaW5keE9mRGF0YSA9IGRyb3BWYWxzLmJvZHkuZmluZChmdW5jdGlvbiAoaXRlbSwgaSkge1xyXG4gICAgaWYgKGl0ZW0udmFsdWUgPT09IHZhbHVlKSB7XHJcbiAgICAgIHJldHVybiBpdGVtLnRleHQ7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgcmV0dXJuIGluZHhPZkRhdGE7XHJcbn1cclxubW9kdWxlLmV4cG9ydHMuVmFsdWVzID0gKHtcclxuICBQYXJlbnRjYWxsYmFja2ZpcnN0LFxyXG4gIFBhcmVudGNhbGxiYWNrc2NuZCxcclxuICBQYXJlbnRjYWxsYmFja3RocmQsXHJcbiAgUGFyZW50Y2FsbGJhY2tmcnRoLFxyXG4gIHBhcmVudFJlc3VsdCxcclxufSkgPT4ge1xyXG4gIGNvbnN0IFtmaXJzdFZhbCwgc2V0Rmlyc3RWYWxdID0gdXNlU3RhdGUoJ05vbmUnKTtcclxuICBjb25zdCBbc2NuZFZhbCwgc2V0U2NuZHNWYWxdID0gdXNlU3RhdGUoJ05vbmUnKTtcclxuICBjb25zdCBbdGhpcmRWYWwsIHNldFRoaXJkVmFsXSA9IHVzZVN0YXRlKCdOb25lJyk7XHJcbiAgY29uc3QgW2ZvdXJ0aFZhbCwgc2V0Rm91cnRoVmFsXSA9IHVzZVN0YXRlKCdOb25lJyk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUZpcnN0RGlnaXRDaGFuZ2UgPSBlID0+IHtcclxuICAgIHNldEZpcnN0VmFsKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIFBhcmVudGNhbGxiYWNrZmlyc3QoZS50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlU2Vjb25kRGlnaXRDaGFuZ2UgPSBlID0+IHtcclxuICAgIHNldFNjbmRzVmFsKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIFBhcmVudGNhbGxiYWNrc2NuZChlLnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVUaGlyZERpZ2l0Q2hhbmdlID0gZSA9PiB7XHJcbiAgICBzZXRUaGlyZFZhbChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICBQYXJlbnRjYWxsYmFja3RocmQoZS50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlRm91cnRoRGlnaXRDaGFuZ2UgPSBlID0+IHtcclxuICAgIHNldEZvdXJ0aFZhbChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICBQYXJlbnRjYWxsYmFja2ZydGgoZS50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNhbGN1bGF0ZSA9IGFzeW5jIGUgPT4ge1xyXG4gICAgY29uc3QgZmlyc3QgPSBmaW5kQmFuZFZhbHVlKGZpcnN0VmFsKTtcclxuICAgIGNvbnN0IHNlY29uZCA9IGZpbmRCYW5kVmFsdWUoc2NuZFZhbCk7XHJcbiAgICBjb25zdCB0aGlyZCA9IGZpbmRCYW5kVmFsdWUodGhpcmRWYWwpO1xyXG4gICAgY29uc3QgZm91cnRoID0gZmluZEJhbmRWYWx1ZShmb3VydGhWYWwpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgY2FsY3VsYXRlUmVzaXN0YW5jZShcclxuICAgICAgICBmaXJzdC50ZXh0LFxyXG4gICAgICAgIHNlY29uZC50ZXh0LFxyXG4gICAgICAgIHRoaXJkLnRleHQsXHJcbiAgICAgICAgZm91cnRoLnRleHQsXHJcbiAgICAgICk7XHJcbiAgICAgIGlmIChyZXMuc3RhdHVzID09PSAyMDApIHBhcmVudFJlc3VsdChyZXMuZGF0YSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVzZXRWYWx1ZXMgPSBlID0+IHtcclxuICAgIHNldEZpcnN0VmFsKCdOb25lJyk7XHJcbiAgICBzZXRTY25kc1ZhbCgnTm9uZScpO1xyXG4gICAgc2V0VGhpcmRWYWwoJ05vbmUnKTtcclxuICAgIHNldEZvdXJ0aFZhbCgnTm9uZScpO1xyXG4gICAgUGFyZW50Y2FsbGJhY2tmaXJzdCgnJyk7XHJcbiAgICBQYXJlbnRjYWxsYmFja3NjbmQoJycpO1xyXG4gICAgUGFyZW50Y2FsbGJhY2t0aHJkKCcnKTtcclxuICAgIFBhcmVudGNhbGxiYWNrZnJ0aCgnJyk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXI+XHJcbiAgICAgIDxSb3c+XHJcbiAgICAgICAgPENvbCBzdHlsZT17eyBwYWRkaW5nOiAnMTVweCcgfX0geHM9ezZ9IHNtPXs2fSBtZD17M30gbGc9ezN9IHhsPXszfT5cclxuICAgICAgICAgIDxJbnB1dExhYmVsIGlkPVwibGFiZWxcIj4xcyBEaWdpdDwvSW5wdXRMYWJlbD5cclxuICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgbGFiZWxJZD1cImxhYmVsXCJcclxuICAgICAgICAgICAgaWQ9XCJzZWxlY3RcIlxyXG4gICAgICAgICAgICB2YWx1ZT17Zmlyc3RWYWx9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVGaXJzdERpZ2l0Q2hhbmdlfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7ZHJvcFZhbHMuYm9keS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgPE1lbnVJdGVtIGtleT17JzFzdCcgKyBpbmRleC50b1N0cmluZygpfSB2YWx1ZT17aXRlbS52YWx1ZX0+XHJcbiAgICAgICAgICAgICAgICB7aXRlbS50ZXh0fVxyXG4gICAgICAgICAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPENvbCBzdHlsZT17eyBwYWRkaW5nOiAnMTVweCcgfX0geHM9ezZ9IHNtPXs2fSBtZD17M30gbGc9ezN9IHhsPXszfT5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxJbnB1dExhYmVsIGlkPVwic2Vjb25kLWRpZ2l0XCI+Mm5kIERpZ2l0PC9JbnB1dExhYmVsPlxyXG4gICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgbGFiZWxJZD1cImxhYmVsXCJcclxuICAgICAgICAgICAgICBpZD1cInNlbGVjdFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3NjbmRWYWx9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVNlY29uZERpZ2l0Q2hhbmdlfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge2Ryb3BWYWxzLmJvZHkubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPE1lbnVJdGVtIGtleT17JzJuZCcgKyBpbmRleC50b1N0cmluZygpfSB2YWx1ZT17aXRlbS52YWx1ZX0+XHJcbiAgICAgICAgICAgICAgICAgIHtpdGVtLnRleHR9XHJcbiAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDxDb2wgc3R5bGU9e3sgcGFkZGluZzogJzE1cHgnIH19IHhzPXs2fSBzbT17Nn0gbWQ9ezN9IGxnPXszfSB4bD17M30+XHJcbiAgICAgICAgICA8SW5wdXRMYWJlbCBpZD1cInRoaXJkLWRpZ2l0XCI+TXVsdGlwbGllcjwvSW5wdXRMYWJlbD5cclxuICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgbGFiZWxJZD1cImxhYmVsXCJcclxuICAgICAgICAgICAgaWQ9XCJzZWxlY3RcIlxyXG4gICAgICAgICAgICB2YWx1ZT17dGhpcmRWYWx9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVUaGlyZERpZ2l0Q2hhbmdlfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7ZHJvcFZhbHMuYm9keS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgPE1lbnVJdGVtIGtleT17JzNyZCcgKyBpbmRleC50b1N0cmluZygpfSB2YWx1ZT17aXRlbS52YWx1ZX0+XHJcbiAgICAgICAgICAgICAgICB7aXRlbS50ZXh0fVxyXG4gICAgICAgICAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPENvbCBzdHlsZT17eyBwYWRkaW5nOiAnMTVweCcgfX0geHM9ezZ9IHNtPXs2fSBtZD17M30gbGc9ezN9IHhsPXszfT5cclxuICAgICAgICAgIDxJbnB1dExhYmVsIGlkPVwiZm91cnRoLWRpZ2l0XCI+VG9sZXJhbmNlPC9JbnB1dExhYmVsPlxyXG4gICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICBsYWJlbElkPVwibGFiZWxcIlxyXG4gICAgICAgICAgICBpZD1cInNlbGVjdFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtmb3VydGhWYWx9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVGb3VydGhEaWdpdENoYW5nZX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2Ryb3BWYWxzLmJvZHkubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgIDxNZW51SXRlbSBrZXk9eyc0dGgnICsgaW5kZXgudG9TdHJpbmcoKX0gdmFsdWU9e2l0ZW0udmFsdWV9PlxyXG4gICAgICAgICAgICAgICAge2l0ZW0udGV4dH1cclxuICAgICAgICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgICA8L1Jvdz5cclxuICAgICAgPFJvdyBzdHlsZT17eyBtYXJnaW5Ub3A6ICczMHB4JyB9fT5cclxuICAgICAgICA8Q29sPlxyXG4gICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgY29sb3I9XCJwcmltYXJ5XCIgb25DbGljaz17Y2FsY3VsYXRlfT5cclxuICAgICAgICAgICAgQ2FsY3VsYXJcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDxDb2w+XHJcbiAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBjb2xvcj1cInNlY29uZGFyeVwiIG9uQ2xpY2s9e3Jlc2V0VmFsdWVzfT5cclxuICAgICAgICAgICAgUmVzZXRcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgICA8L1Jvdz5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICk7XHJcbn07XHJcbiIsImltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnO1xuaW1wb3J0IFJlc2lzdG9yIGZyb20gJy4vY29tcG9uZW50cy9yZXNpc3Rvcic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5SZXNpc3RvciBBcHA8L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgICA8UmVzaXN0b3IgLz5cbiAgICAgIDwvbWFpbj5cblxuICAgICAgPGZvb3RlciBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJ9PjwvZm9vdGVyPlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwibW9kdWxlLmV4cG9ydHMuZHJvcFZhbHMgPSB7XHJcbiAgYm9keTogW1xyXG4gICAgeyB2YWx1ZTogJ05vbmUnLCB0ZXh0OiAnTm9uZScgfSxcclxuICAgIHsgdmFsdWU6ICcjMDAwMDAwJywgdGV4dDogJ0JsYWNrJyB9LFxyXG4gICAgeyB2YWx1ZTogJyM2ODMwMDEnLCB0ZXh0OiAnQnJvd24nIH0sXHJcbiAgICB7IHZhbHVlOiAnI0YxMDkwOSAnLCB0ZXh0OiAnUmVkJyB9LFxyXG4gICAgeyB2YWx1ZTogJyNGMTc2MDknLCB0ZXh0OiAnT3JhbmdlJyB9LFxyXG4gICAgeyB2YWx1ZTogJyNGOUY1MDEgJywgdGV4dDogJ1llbGxvdycgfSxcclxuICAgIHsgdmFsdWU6ICcjMTNGOTAxJywgdGV4dDogJ0dyZWVuJyB9LFxyXG4gICAgeyB2YWx1ZTogJyMwQUFBRkYgJywgdGV4dDogJ0JsdWUnIH0sXHJcbiAgICB7IHZhbHVlOiAnI0JEMzJGMScsIHRleHQ6ICdWaW9sZXQnIH0sXHJcbiAgICB7IHZhbHVlOiAnIzhCOEI4QicsIHRleHQ6ICdHcmV5JyB9LFxyXG4gICAgeyB2YWx1ZTogJyNGRkZGRkYnLCB0ZXh0OiAnV2hpdGUnIH0sXHJcbiAgICB7IHZhbHVlOiAnI0NDOUEwQicsIHRleHQ6ICdHb2xkJyB9LFxyXG4gICAgeyB2YWx1ZTogJyNERURFREUnLCB0ZXh0OiAnU2lsdmVyJyB9LFxyXG4gICAgeyB2YWx1ZTogJyNGRkMwQ0InLCB0ZXh0OiAnUGluaycgfSxcclxuICBdLFxyXG59O1xyXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5jb25zdCBjb25maWcgPSByZXF1aXJlKCcuLi9jb25maWcvaW5kZXgnKTtcclxubW9kdWxlLmV4cG9ydHMuY2FsY3VsYXRlUmVzaXN0YW5jZSA9IGFzeW5jIChmaXJzdCwgc2Vjb25kLCB0aGlyZCwgZm91cnRoKSA9PiB7XHJcbiAgY29uc3Qgb2JqID0ge1xyXG4gICAgZmlyc3Q6IGZpcnN0LFxyXG4gICAgc2Vjb25kOiBzZWNvbmQsXHJcbiAgICB0aGlyZDogdGhpcmQsXHJcbiAgICBmb3VydGg6IGZvdXJ0aCxcclxuICB9O1xyXG4gIGNvbnN0IGhlYWRlcnMgPSB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOCcgfTtcclxuICByZXR1cm4gYXhpb3MucG9zdChgJHtjb25maWcuYXBpLnVybH0vYXBpL2NhbGN1bGF0ZVJlc2lzdGFuY2VgLCBvYmosIGhlYWRlcnMpO1xyXG59O1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJIb21lX2NvbnRhaW5lcl9fMUVjc1VcIixcblx0XCJtYWluXCI6IFwiSG9tZV9tYWluX18xeDhnQ1wiLFxuXHRcImZvb3RlclwiOiBcIkhvbWVfZm9vdGVyX18xV2RoRFwiLFxuXHRcInRpdGxlXCI6IFwiSG9tZV90aXRsZV9fM0RqUjdcIixcblx0XCJkZXNjcmlwdGlvblwiOiBcIkhvbWVfZGVzY3JpcHRpb25fXzE3WjRGXCIsXG5cdFwiY29kZVwiOiBcIkhvbWVfY29kZV9fYXh4MllcIixcblx0XCJncmlkXCI6IFwiSG9tZV9ncmlkX18yRWkyRlwiLFxuXHRcImNhcmRcIjogXCJIb21lX2NhcmRfXzJTZHRCXCIsXG5cdFwibG9nb1wiOiBcIkhvbWVfbG9nb19fMVlickhcIlxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0lucHV0TGFiZWxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvTWVudUl0ZW1cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvU2VsZWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0c3RyYXBcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==
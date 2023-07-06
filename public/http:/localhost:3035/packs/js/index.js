"use strict";
(self["webpackChunkreact_ruby"] = self["webpackChunkreact_ruby"] || []).push([["index"],{

/***/ "./app/javascript/components/App.js":
/*!******************************************!*\
  !*** ./app/javascript/components/App.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/eritheialabs/Documents/eritheiaProjects/reactRuby/reactRuby/app/javascript/components/App.js",
  _this = undefined;

var App = function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, "hello world sdasdasdas d sad asasddasass");
};
/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./app/javascript/index.jsx":
/*!**********************************!*\
  !*** ./app/javascript/index.jsx ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/App */ "./app/javascript/components/App.js");
var _jsxFileName = "/Users/eritheialabs/Documents/eritheiaProjects/reactRuby/reactRuby/app/javascript/index.jsx",
  _this = undefined;
// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.




// import { CardanoWallet } from '@meshsdk/react'


// const MeshProvider = import('@meshsdk/react').then(module => module.MeshProvider);
// const plutusScript = import('@meshsdk/core').then(module =>module.PlutusScript);
// const resolvePlutusScriptAddress = import('@meshsdk/core').then(module => {
//   module.resolvePlutusScriptAddress()
//   console.log("sdssddssddsdsdsds-----  ",module)
// });

// const script = {
//   code: '4e4d01000033222220051200120011',
//   version: 'V1',
// };
// const scriptAddress = resolvePlutusScriptAddress(script, 0);

document.addEventListener('DOMContentLoaded', function () {
  react_dom__WEBPACK_IMPORTED_MODULE_1__.render(
  /*#__PURE__*/
  // <MeshProvider>
  react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_App__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }),
  // {/* </MeshProvider>, */}

  document.body.appendChild(document.createElement('div')));
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendors-node_modules_react-dom_index_js"], function() { return __webpack_exec__("./app/javascript/index.jsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map
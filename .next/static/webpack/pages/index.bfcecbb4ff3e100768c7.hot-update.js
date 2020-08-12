webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var xstate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! xstate */ \"./node_modules/xstate/es/index.js\");\nvar _jsxFileName = \"/Users/lucas/developments/reactjs/todomvccopy/pages/index.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n// import React, { Component } from \"react\";\n// import Form from \"../components/form\";\n// import Footer from \"../components/footer\";\n// class Home extends Component {\n//   constructor(props) {\n//     super(props);\n//     this.state = {};\n//   }\n//   render() {\n//     return (\n//       <div>\n//         <Form />\n//         <Footer />\n//       </div>\n//     );\n//   }\n// }\n// export default Home;\n\n\nconst stateMachine = Object(xstate__WEBPACK_IMPORTED_MODULE_1__[\"Machine\"])({\n  initial: \"idle\",\n  states: {\n    idle: {\n      on: {\n        SUBMIT: [{\n          target: \"loading\",\n          cond: (context, event) => event.data.name !== \"\" && event.data.card !== \"\"\n        }]\n      }\n    },\n    loading: {\n      on: {\n        PAYMENT_RECEIVED: \"success\",\n        PAYMENT_FAILED: \"error\"\n      }\n    },\n    error: {\n      on: {\n        SUBMIT: \"loading\"\n      }\n    },\n    success: {\n      type: \"final\"\n    }\n  }\n});\n\nconst App = () => {\n  return __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 7\n    }\n  }, __jsx(\"h2\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 9\n    }\n  }, \"State Machine Payment\")), __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 7\n    }\n  }, __jsx(\"form\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 11\n    }\n  }, __jsx(\"label\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 13\n    }\n  }, \"name on card\"), __jsx(\"input\", {\n    type: \"text\",\n    id: \"nameOnCard\",\n    maxLength: \"255\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 13\n    }\n  })), __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 11\n    }\n  }, __jsx(\"label\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 13\n    }\n  }, \"card number\"), __jsx(\"input\", {\n    type: \"text\",\n    id: \"creditCardNumber\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 13\n    }\n  })), __jsx(\"button\", {\n    type: \"submit\",\n    id: \"payButton\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 11\n    }\n  }, __jsx(\"span\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 13\n    }\n  }, \"pay now\")))));\n};\n\n_c = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\nvar _c;\n\n$RefreshReg$(_c, \"App\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJzdGF0ZU1hY2hpbmUiLCJNYWNoaW5lIiwiaW5pdGlhbCIsInN0YXRlcyIsImlkbGUiLCJvbiIsIlNVQk1JVCIsInRhcmdldCIsImNvbmQiLCJjb250ZXh0IiwiZXZlbnQiLCJkYXRhIiwibmFtZSIsImNhcmQiLCJsb2FkaW5nIiwiUEFZTUVOVF9SRUNFSVZFRCIsIlBBWU1FTlRfRkFJTEVEIiwiZXJyb3IiLCJzdWNjZXNzIiwidHlwZSIsIkFwcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBLE1BQU1BLFlBQVksR0FBR0Msc0RBQU8sQ0FBQztBQUMzQkMsU0FBTyxFQUFFLE1BRGtCO0FBRTNCQyxRQUFNLEVBQUU7QUFDTkMsUUFBSSxFQUFFO0FBQ0pDLFFBQUUsRUFBRTtBQUNGQyxjQUFNLEVBQUUsQ0FDTjtBQUNFQyxnQkFBTSxFQUFFLFNBRFY7QUFFRUMsY0FBSSxFQUFFLENBQUNDLE9BQUQsRUFBVUMsS0FBVixLQUNKQSxLQUFLLENBQUNDLElBQU4sQ0FBV0MsSUFBWCxLQUFvQixFQUFwQixJQUEwQkYsS0FBSyxDQUFDQyxJQUFOLENBQVdFLElBQVgsS0FBb0I7QUFIbEQsU0FETTtBQUROO0FBREEsS0FEQTtBQVlOQyxXQUFPLEVBQUU7QUFDUFQsUUFBRSxFQUFFO0FBQ0ZVLHdCQUFnQixFQUFFLFNBRGhCO0FBRUZDLHNCQUFjLEVBQUU7QUFGZDtBQURHLEtBWkg7QUFrQk5DLFNBQUssRUFBRTtBQUNMWixRQUFFLEVBQUU7QUFDRkMsY0FBTSxFQUFFO0FBRE47QUFEQyxLQWxCRDtBQXVCTlksV0FBTyxFQUFFO0FBQ1BDLFVBQUksRUFBRTtBQURDO0FBdkJIO0FBRm1CLENBQUQsQ0FBNUI7O0FBK0JBLE1BQU1DLEdBQUcsR0FBRyxNQUFNO0FBQ2hCLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQURGLENBREYsRUFLRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLEVBRUU7QUFBTyxRQUFJLEVBQUMsTUFBWjtBQUFtQixNQUFFLEVBQUMsWUFBdEI7QUFBbUMsYUFBUyxFQUFDLEtBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQURGLEVBS0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsRUFFRTtBQUFPLFFBQUksRUFBQyxNQUFaO0FBQW1CLE1BQUUsRUFBQyxrQkFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBTEYsRUFTRTtBQUFRLFFBQUksRUFBQyxRQUFiO0FBQXNCLE1BQUUsRUFBQyxXQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLENBVEYsQ0FERixDQUxGLENBREY7QUF1QkQsQ0F4QkQ7O0tBQU1BLEc7QUEwQlNBLGtFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG4vLyBpbXBvcnQgRm9ybSBmcm9tIFwiLi4vY29tcG9uZW50cy9mb3JtXCI7XG4vLyBpbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9jb21wb25lbnRzL2Zvb3RlclwiO1xuXG4vLyBjbGFzcyBIb21lIGV4dGVuZHMgQ29tcG9uZW50IHtcbi8vICAgY29uc3RydWN0b3IocHJvcHMpIHtcbi8vICAgICBzdXBlcihwcm9wcyk7XG4vLyAgICAgdGhpcy5zdGF0ZSA9IHt9O1xuLy8gICB9XG5cbi8vICAgcmVuZGVyKCkge1xuLy8gICAgIHJldHVybiAoXG4vLyAgICAgICA8ZGl2PlxuLy8gICAgICAgICA8Rm9ybSAvPlxuLy8gICAgICAgICA8Rm9vdGVyIC8+XG4vLyAgICAgICA8L2Rpdj5cbi8vICAgICApO1xuLy8gICB9XG4vLyB9XG5cbi8vIGV4cG9ydCBkZWZhdWx0IEhvbWU7XG5cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IE1hY2hpbmUgfSBmcm9tIFwieHN0YXRlXCI7XG5cbmNvbnN0IHN0YXRlTWFjaGluZSA9IE1hY2hpbmUoe1xuICBpbml0aWFsOiBcImlkbGVcIixcbiAgc3RhdGVzOiB7XG4gICAgaWRsZToge1xuICAgICAgb246IHtcbiAgICAgICAgU1VCTUlUOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGFyZ2V0OiBcImxvYWRpbmdcIixcbiAgICAgICAgICAgIGNvbmQ6IChjb250ZXh0LCBldmVudCkgPT5cbiAgICAgICAgICAgICAgZXZlbnQuZGF0YS5uYW1lICE9PSBcIlwiICYmIGV2ZW50LmRhdGEuY2FyZCAhPT0gXCJcIixcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGxvYWRpbmc6IHtcbiAgICAgIG9uOiB7XG4gICAgICAgIFBBWU1FTlRfUkVDRUlWRUQ6IFwic3VjY2Vzc1wiLFxuICAgICAgICBQQVlNRU5UX0ZBSUxFRDogXCJlcnJvclwiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGVycm9yOiB7XG4gICAgICBvbjoge1xuICAgICAgICBTVUJNSVQ6IFwibG9hZGluZ1wiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHN1Y2Nlc3M6IHtcbiAgICAgIHR5cGU6IFwiZmluYWxcIixcbiAgICB9LFxuICB9LFxufSk7XG5cbmNvbnN0IEFwcCA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGgyPlN0YXRlIE1hY2hpbmUgUGF5bWVudDwvaDI+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdj5cbiAgICAgICAgPGZvcm0+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxsYWJlbD5uYW1lIG9uIGNhcmQ8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJuYW1lT25DYXJkXCIgbWF4TGVuZ3RoPVwiMjU1XCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsPmNhcmQgbnVtYmVyPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiY3JlZGl0Q2FyZE51bWJlclwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgaWQ9XCJwYXlCdXR0b25cIj5cbiAgICAgICAgICAgIDxzcGFuPnBheSBub3c8L3NwYW4+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})
webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var xstate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! xstate */ \"./node_modules/xstate/es/index.js\");\n\nvar _jsxFileName = \"/Users/lucas/developments/reactjs/todomvccopy/pages/index.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n// import React, { Component } from \"react\";\n// import Form from \"../components/form\";\n// import Footer from \"../components/footer\";\n// class Home extends Component {\n//   constructor(props) {\n//     super(props);\n//     this.state = {};\n//   }\n//   render() {\n//     return (\n//       <div>\n//         <Form />\n//         <Footer />\n//       </div>\n//     );\n//   }\n// }\n// export default Home;\n\n\nconst promiseMachine = Object(xstate__WEBPACK_IMPORTED_MODULE_2__[\"Machine\"])({\n  id: \"promise\",\n  initial: \"pending\",\n  state: {\n    pending: {\n      on: {\n        RESOLVE: \"resolved\",\n        REJECT: \"rejected\"\n      }\n    },\n    resolved: {\n      type: \"final\"\n    },\n    rejected: {\n      type: \"final\"\n    }\n  }\n});\nconst promiseService = Object(xstate__WEBPACK_IMPORTED_MODULE_2__[\"interpret\"])(promiseMachine).onTransition(state => console.log(state.value));\n\nclass Home extends react__WEBPACK_IMPORTED_MODULE_1__[\"Component\"] {\n  constructor(...args) {\n    super(...args);\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, \"start\", () => {\n      console.log(\"start\");\n      promiseService.start();\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, \"send\", () => {\n      console.log(\"send\");\n      promiseService.send(\"RESOLVE\");\n    });\n  }\n\n  render() {\n    return __jsx(\"div\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 71,\n        columnNumber: 7\n      }\n    }, __jsx(\"button\", {\n      type: \"button\",\n      onClick: () => this.start,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 72,\n        columnNumber: 9\n      }\n    }, \"Start\"), __jsx(\"button\", {\n      type: \"button\",\n      onClick: () => this.send,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 75,\n        columnNumber: 9\n      }\n    }, \"Send\"));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJwcm9taXNlTWFjaGluZSIsIk1hY2hpbmUiLCJpZCIsImluaXRpYWwiLCJzdGF0ZSIsInBlbmRpbmciLCJvbiIsIlJFU09MVkUiLCJSRUpFQ1QiLCJyZXNvbHZlZCIsInR5cGUiLCJyZWplY3RlZCIsInByb21pc2VTZXJ2aWNlIiwiaW50ZXJwcmV0Iiwib25UcmFuc2l0aW9uIiwiY29uc29sZSIsImxvZyIsInZhbHVlIiwiSG9tZSIsIkNvbXBvbmVudCIsInN0YXJ0Iiwic2VuZCIsInJlbmRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBV0EsTUFBTUEsY0FBYyxHQUFHQyxzREFBTyxDQUFDO0FBQzdCQyxJQUFFLEVBQUUsU0FEeUI7QUFFN0JDLFNBQU8sRUFBRSxTQUZvQjtBQUc3QkMsT0FBSyxFQUFFO0FBQ0xDLFdBQU8sRUFBRTtBQUNQQyxRQUFFLEVBQUU7QUFDRkMsZUFBTyxFQUFFLFVBRFA7QUFFRkMsY0FBTSxFQUFFO0FBRk47QUFERyxLQURKO0FBT0xDLFlBQVEsRUFBRTtBQUNSQyxVQUFJLEVBQUU7QUFERSxLQVBMO0FBVUxDLFlBQVEsRUFBRTtBQUNSRCxVQUFJLEVBQUU7QUFERTtBQVZMO0FBSHNCLENBQUQsQ0FBOUI7QUFtQkEsTUFBTUUsY0FBYyxHQUFHQyx3REFBUyxDQUFDYixjQUFELENBQVQsQ0FBMEJjLFlBQTFCLENBQXdDVixLQUFELElBQzVEVyxPQUFPLENBQUNDLEdBQVIsQ0FBWVosS0FBSyxDQUFDYSxLQUFsQixDQURxQixDQUF2Qjs7QUFJQSxNQUFNQyxJQUFOLFNBQW1CQywrQ0FBbkIsQ0FBNkI7QUFBQTtBQUFBOztBQUFBLDZHQUNuQixNQUFNO0FBQ1pKLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVo7QUFDQUosb0JBQWMsQ0FBQ1EsS0FBZjtBQUNELEtBSjBCOztBQUFBLDRHQU1wQixNQUFNO0FBQ1hMLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLE1BQVo7QUFDQUosb0JBQWMsQ0FBQ1MsSUFBZixDQUFvQixTQUFwQjtBQUNELEtBVDBCO0FBQUE7O0FBVzNCQyxRQUFNLEdBQUc7QUFDUCxXQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFRLFVBQUksRUFBQyxRQUFiO0FBQXNCLGFBQU8sRUFBRSxNQUFNLEtBQUtGLEtBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixFQUlFO0FBQVEsVUFBSSxFQUFDLFFBQWI7QUFBc0IsYUFBTyxFQUFFLE1BQU0sS0FBS0MsSUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpGLENBREY7QUFVRDs7QUF0QjBCOztBQXlCZEgsbUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbi8vIGltcG9ydCBGb3JtIGZyb20gXCIuLi9jb21wb25lbnRzL2Zvcm1cIjtcbi8vIGltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvZm9vdGVyXCI7XG5cbi8vIGNsYXNzIEhvbWUgZXh0ZW5kcyBDb21wb25lbnQge1xuLy8gICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuLy8gICAgIHN1cGVyKHByb3BzKTtcbi8vICAgICB0aGlzLnN0YXRlID0ge307XG4vLyAgIH1cblxuLy8gICByZW5kZXIoKSB7XG4vLyAgICAgcmV0dXJuIChcbi8vICAgICAgIDxkaXY+XG4vLyAgICAgICAgIDxGb3JtIC8+XG4vLyAgICAgICAgIDxGb290ZXIgLz5cbi8vICAgICAgIDwvZGl2PlxuLy8gICAgICk7XG4vLyAgIH1cbi8vIH1cblxuLy8gZXhwb3J0IGRlZmF1bHQgSG9tZTtcblxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgTWFjaGluZSxcbiAgU3RhdGUsXG4gIGFjdGlvbnMsXG4gIGFzc2lnbixcbiAgc2VuZCxcbiAgc2VuZFBhcmVudCxcbiAgaW50ZXJwcmV0LFxuICBzcGF3bixcbn0gZnJvbSBcInhzdGF0ZVwiO1xuXG5jb25zdCBwcm9taXNlTWFjaGluZSA9IE1hY2hpbmUoe1xuICBpZDogXCJwcm9taXNlXCIsXG4gIGluaXRpYWw6IFwicGVuZGluZ1wiLFxuICBzdGF0ZToge1xuICAgIHBlbmRpbmc6IHtcbiAgICAgIG9uOiB7XG4gICAgICAgIFJFU09MVkU6IFwicmVzb2x2ZWRcIixcbiAgICAgICAgUkVKRUNUOiBcInJlamVjdGVkXCIsXG4gICAgICB9LFxuICAgIH0sXG4gICAgcmVzb2x2ZWQ6IHtcbiAgICAgIHR5cGU6IFwiZmluYWxcIixcbiAgICB9LFxuICAgIHJlamVjdGVkOiB7XG4gICAgICB0eXBlOiBcImZpbmFsXCIsXG4gICAgfSxcbiAgfSxcbn0pO1xuXG5jb25zdCBwcm9taXNlU2VydmljZSA9IGludGVycHJldChwcm9taXNlTWFjaGluZSkub25UcmFuc2l0aW9uKChzdGF0ZSkgPT5cbiAgY29uc29sZS5sb2coc3RhdGUudmFsdWUpXG4pO1xuXG5jbGFzcyBIb21lIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhcnQgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJzdGFydFwiKTtcbiAgICBwcm9taXNlU2VydmljZS5zdGFydCgpO1xuICB9O1xuXG4gIHNlbmQgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJzZW5kXCIpO1xuICAgIHByb21pc2VTZXJ2aWNlLnNlbmQoXCJSRVNPTFZFXCIpO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KCkgPT4gdGhpcy5zdGFydH0+XG4gICAgICAgICAgU3RhcnRcbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHRoaXMuc2VuZH0+XG4gICAgICAgICAgU2VuZFxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})
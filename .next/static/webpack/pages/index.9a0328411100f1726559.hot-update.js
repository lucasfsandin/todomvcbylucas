webpackHotUpdate_N_E("pages/index",{

/***/ "./components/footer/index.js":
false,

/***/ "./components/form/index.js":
false,

/***/ "./components/todo/index.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
false,

/***/ "./node_modules/next/dist/build/polyfills/object-assign.js":
false,

/***/ "./node_modules/prop-types/checkPropTypes.js":
false,

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
false,

/***/ "./node_modules/react/cjs/react.development.js":
false,

/***/ "./node_modules/react/index.js":
false,

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var xstate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! xstate */ \"./node_modules/xstate/es/index.js\");\n// import React, { Component } from \"react\";\n// import Form from \"../components/form\";\n// import Footer from \"../components/footer\";\n// class Home extends Component {\n//   constructor(props) {\n//     super(props);\n//     this.state = {};\n//   }\n//   render() {\n//     return (\n//       <div>\n//         <Form />\n//         <Footer />\n//       </div>\n//     );\n//   }\n// }\n// export default Home;\n // Stateless machine definition\n// machine.transition(...) is a pure function used by the interpreter.\n\nconst toggleMachine = Object(xstate__WEBPACK_IMPORTED_MODULE_0__[\"createMachine\"])({\n  id: \"toggle\",\n  initial: \"inactive\",\n  states: {\n    inactive: {\n      on: {\n        TOGGLE: \"active\"\n      }\n    },\n    active: {\n      on: {\n        TOGGLE: \"inactive\"\n      }\n    }\n  }\n}); // Machine instance with internal state\n\nconst toggleService = Object(xstate__WEBPACK_IMPORTED_MODULE_0__[\"interpret\"])(toggleMachine).onTransition(state => console.log(state.value)).start(); // => 'inactive'\n\ntoggleService.send(\"TOGGLE\"); // => 'active'\n\ntoggleService.send(\"TOGGLE\"); // => 'inactive'\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJ0b2dnbGVNYWNoaW5lIiwiY3JlYXRlTWFjaGluZSIsImlkIiwiaW5pdGlhbCIsInN0YXRlcyIsImluYWN0aXZlIiwib24iLCJUT0dHTEUiLCJhY3RpdmUiLCJ0b2dnbGVTZXJ2aWNlIiwiaW50ZXJwcmV0Iiwib25UcmFuc2l0aW9uIiwic3RhdGUiLCJjb25zb2xlIiwibG9nIiwidmFsdWUiLCJzdGFydCIsInNlbmQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Q0FJQTtBQUNBOztBQUNBLE1BQU1BLGFBQWEsR0FBR0MsNERBQWEsQ0FBQztBQUNsQ0MsSUFBRSxFQUFFLFFBRDhCO0FBRWxDQyxTQUFPLEVBQUUsVUFGeUI7QUFHbENDLFFBQU0sRUFBRTtBQUNOQyxZQUFRLEVBQUU7QUFBRUMsUUFBRSxFQUFFO0FBQUVDLGNBQU0sRUFBRTtBQUFWO0FBQU4sS0FESjtBQUVOQyxVQUFNLEVBQUU7QUFBRUYsUUFBRSxFQUFFO0FBQUVDLGNBQU0sRUFBRTtBQUFWO0FBQU47QUFGRjtBQUgwQixDQUFELENBQW5DLEMsQ0FTQTs7QUFDQSxNQUFNRSxhQUFhLEdBQUdDLHdEQUFTLENBQUNWLGFBQUQsQ0FBVCxDQUNuQlcsWUFEbUIsQ0FDTEMsS0FBRCxJQUFXQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBSyxDQUFDRyxLQUFsQixDQURMLEVBRW5CQyxLQUZtQixFQUF0QixDLENBR0E7O0FBRUFQLGFBQWEsQ0FBQ1EsSUFBZCxDQUFtQixRQUFuQixFLENBQ0E7O0FBRUFSLGFBQWEsQ0FBQ1EsSUFBZCxDQUFtQixRQUFuQixFLENBQ0EiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbi8vIGltcG9ydCBGb3JtIGZyb20gXCIuLi9jb21wb25lbnRzL2Zvcm1cIjtcbi8vIGltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvZm9vdGVyXCI7XG5cbi8vIGNsYXNzIEhvbWUgZXh0ZW5kcyBDb21wb25lbnQge1xuLy8gICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuLy8gICAgIHN1cGVyKHByb3BzKTtcbi8vICAgICB0aGlzLnN0YXRlID0ge307XG4vLyAgIH1cblxuLy8gICByZW5kZXIoKSB7XG4vLyAgICAgcmV0dXJuIChcbi8vICAgICAgIDxkaXY+XG4vLyAgICAgICAgIDxGb3JtIC8+XG4vLyAgICAgICAgIDxGb290ZXIgLz5cbi8vICAgICAgIDwvZGl2PlxuLy8gICAgICk7XG4vLyAgIH1cbi8vIH1cblxuLy8gZXhwb3J0IGRlZmF1bHQgSG9tZTtcblxuaW1wb3J0IHsgY3JlYXRlTWFjaGluZSwgaW50ZXJwcmV0IH0gZnJvbSBcInhzdGF0ZVwiO1xuXG4vLyBTdGF0ZWxlc3MgbWFjaGluZSBkZWZpbml0aW9uXG4vLyBtYWNoaW5lLnRyYW5zaXRpb24oLi4uKSBpcyBhIHB1cmUgZnVuY3Rpb24gdXNlZCBieSB0aGUgaW50ZXJwcmV0ZXIuXG5jb25zdCB0b2dnbGVNYWNoaW5lID0gY3JlYXRlTWFjaGluZSh7XG4gIGlkOiBcInRvZ2dsZVwiLFxuICBpbml0aWFsOiBcImluYWN0aXZlXCIsXG4gIHN0YXRlczoge1xuICAgIGluYWN0aXZlOiB7IG9uOiB7IFRPR0dMRTogXCJhY3RpdmVcIiB9IH0sXG4gICAgYWN0aXZlOiB7IG9uOiB7IFRPR0dMRTogXCJpbmFjdGl2ZVwiIH0gfSxcbiAgfSxcbn0pO1xuXG4vLyBNYWNoaW5lIGluc3RhbmNlIHdpdGggaW50ZXJuYWwgc3RhdGVcbmNvbnN0IHRvZ2dsZVNlcnZpY2UgPSBpbnRlcnByZXQodG9nZ2xlTWFjaGluZSlcbiAgLm9uVHJhbnNpdGlvbigoc3RhdGUpID0+IGNvbnNvbGUubG9nKHN0YXRlLnZhbHVlKSlcbiAgLnN0YXJ0KCk7XG4vLyA9PiAnaW5hY3RpdmUnXG5cbnRvZ2dsZVNlcnZpY2Uuc2VuZChcIlRPR0dMRVwiKTtcbi8vID0+ICdhY3RpdmUnXG5cbnRvZ2dsZVNlcnZpY2Uuc2VuZChcIlRPR0dMRVwiKTtcbi8vID0+ICdpbmFjdGl2ZSdcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})
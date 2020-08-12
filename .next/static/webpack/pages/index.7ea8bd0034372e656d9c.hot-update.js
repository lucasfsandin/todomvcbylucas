webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var xstate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! xstate */ \"./node_modules/xstate/es/index.js\");\n\n\nvar _s = $RefreshSig$(),\n    _jsxFileName = \"/Users/lucas/developments/reactjs/todomvccopy/pages/index.js\",\n    _s2 = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n// import React, { Component } from \"react\";\n// import Form from \"../components/form\";\n// import Footer from \"../components/footer\";\n// class Home extends Component {\n//   constructor(props) {\n//     super(props);\n//     this.state = {};\n//   }\n//   render() {\n//     return (\n//       <div>\n//         <Form />\n//         <Footer />\n//       </div>\n//     );\n//   }\n// }\n// export default Home;\n\n\n\nfunction useMachine(machine) {\n  _s();\n\n  const {\n    0: current,\n    1: setCurrent\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(machine.initialState);\n  const service = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useMemo\"])(() => Object(xstate__WEBPACK_IMPORTED_MODULE_2__[\"interpret\"])(machine).onTransition(state => {\n    if (state.changed) {\n      setCurrent(state);\n    }\n  }).start(), []);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    return () => service.stop();\n  }, []);\n  return [current, service.send];\n}\n\n_s(useMachine, \"N8luULfBWGYCeClt5AuKgM0ZvFA=\");\n\nfunction fakePayment() {\n  return new Promise((resolve, reject) => {\n    setTimeout(() => {\n      resolve(\"yay\");\n    }, 2500);\n  });\n}\n\nconst stateMachine = Object(xstate__WEBPACK_IMPORTED_MODULE_2__[\"Machine\"])({\n  initial: \"idle\",\n  states: {\n    idle: {\n      on: {\n        SUBMIT: [{\n          target: \"loading\",\n          cond: (context, event) => {\n            return event.data.name !== \"\" && event.data.card !== \"\";\n          }\n        }, {\n          target: \"error\"\n        }]\n      }\n    },\n    loading: {\n      invoke: {\n        id: \"doPayment\",\n        src: () => fakePayment(),\n        onDone: {\n          target: \"success\"\n        },\n        onError: {\n          target: \"error\"\n        }\n      }\n    },\n    error: {\n      on: {\n        SUBMIT: [{\n          target: \"loading\",\n          cond: (context, event) => {\n            return event.data.name !== \"\" && event.data.card !== \"\";\n          }\n        }]\n      }\n    },\n    success: {\n      type: \"final\"\n    }\n  }\n});\n\nconst App = () => {\n  _s2();\n\n  const [machine, send] = useMachine(stateMachine);\n  const {\n    0: form,\n    1: updateForm\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({\n    name: \"\",\n    card: \"\"\n  });\n  console.log(machine.value);\n  return __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 114,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 115,\n      columnNumber: 7\n    }\n  }, __jsx(\"h2\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 116,\n      columnNumber: 9\n    }\n  }, \"State Machine Payment\")), __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 119,\n      columnNumber: 7\n    }\n  }, __jsx(\"form\", {\n    onSubmit: e => {\n      e.preventDefault();\n      send({\n        type: \"SUBMIT\",\n        data: _objectSpread({}, form)\n      });\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 120,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 126,\n      columnNumber: 11\n    }\n  }, __jsx(\"label\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 127,\n      columnNumber: 13\n    }\n  }, \"name on card\"), __jsx(\"input\", {\n    type: \"text\",\n    id: \"nameOnCard\",\n    maxLength: \"255\",\n    value: form.name,\n    onChange: e => updateForm(_objectSpread(_objectSpread({}, form), {}, {\n      name: e.target.value\n    })),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 128,\n      columnNumber: 13\n    }\n  })), __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 136,\n      columnNumber: 11\n    }\n  }, __jsx(\"label\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 137,\n      columnNumber: 13\n    }\n  }, \"card number\"), __jsx(\"input\", {\n    type: \"text\",\n    id: \"creditCardNumber\",\n    value: form.card,\n    onChange: e => updateForm(_objectSpread(_objectSpread({}, form), {}, {\n      card: e.target.value\n    })),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 138,\n      columnNumber: 13\n    }\n  })), __jsx(\"button\", {\n    type: \"submit\",\n    id: \"payButton\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 145,\n      columnNumber: 11\n    }\n  }, __jsx(\"span\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 146,\n      columnNumber: 13\n    }\n  }, \"pay now\")))));\n};\n\n_s2(App, \"iogDaXWqQ1sp5IFhTC/2KVjMWCs=\", false, function () {\n  return [useMachine];\n});\n\n_c = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\nvar _c;\n\n$RefreshReg$(_c, \"App\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJ1c2VNYWNoaW5lIiwibWFjaGluZSIsImN1cnJlbnQiLCJzZXRDdXJyZW50IiwidXNlU3RhdGUiLCJpbml0aWFsU3RhdGUiLCJzZXJ2aWNlIiwidXNlTWVtbyIsImludGVycHJldCIsIm9uVHJhbnNpdGlvbiIsInN0YXRlIiwiY2hhbmdlZCIsInN0YXJ0IiwidXNlRWZmZWN0Iiwic3RvcCIsInNlbmQiLCJmYWtlUGF5bWVudCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwic2V0VGltZW91dCIsInN0YXRlTWFjaGluZSIsIk1hY2hpbmUiLCJpbml0aWFsIiwic3RhdGVzIiwiaWRsZSIsIm9uIiwiU1VCTUlUIiwidGFyZ2V0IiwiY29uZCIsImNvbnRleHQiLCJldmVudCIsImRhdGEiLCJuYW1lIiwiY2FyZCIsImxvYWRpbmciLCJpbnZva2UiLCJpZCIsInNyYyIsIm9uRG9uZSIsIm9uRXJyb3IiLCJlcnJvciIsInN1Y2Nlc3MiLCJ0eXBlIiwiQXBwIiwiZm9ybSIsInVwZGF0ZUZvcm0iLCJjb25zb2xlIiwibG9nIiwidmFsdWUiLCJlIiwicHJldmVudERlZmF1bHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTs7QUFFQSxTQUFTQSxVQUFULENBQW9CQyxPQUFwQixFQUE2QjtBQUFBOztBQUMzQixRQUFNO0FBQUEsT0FBQ0MsT0FBRDtBQUFBLE9BQVVDO0FBQVYsTUFBd0JDLHNEQUFRLENBQUNILE9BQU8sQ0FBQ0ksWUFBVCxDQUF0QztBQUVBLFFBQU1DLE9BQU8sR0FBR0MscURBQU8sQ0FDckIsTUFDRUMsd0RBQVMsQ0FBQ1AsT0FBRCxDQUFULENBQ0dRLFlBREgsQ0FDaUJD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dUNELENBaEREOztJQUFNTCxHO1VBQ29CNUMsVTs7O0tBRHBCNEMsRztBQWtEU0Esa0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbi8vIGltcG9ydCBGb3JtIGZyb20gXCIuLi9jb21wb25lbnRzL2Zvcm1cIjtcbi8vIGltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvZm9vdGVyXCI7XG5cbi8vIGNsYXNzIEhvbWUgZXh0ZW5kcyBDb21wb25lbnQge1xuLy8gICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuLy8gICAgIHN1cGVyKHByb3BzKTtcbi8vICAgICB0aGlzLnN0YXRlID0ge307XG4vLyAgIH1cblxuLy8gICByZW5kZXIoKSB7XG4vLyAgICAgcmV0dXJuIChcbi8vICAgICAgIDxkaXY+XG4vLyAgICAgICAgIDxGb3JtIC8+XG4vLyAgICAgICAgIDxGb290ZXIgLz5cbi8vICAgICAgIDwvZGl2PlxuLy8gICAgICk7XG4vLyAgIH1cbi8vIH1cblxuLy8gZXhwb3J0IGRlZmF1bHQgSG9tZTtcblxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VNZW1vLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IE1hY2hpbmUsIGludGVycHJldCB9IGZyb20gXCJ4c3RhdGVcIjtcblxuZnVuY3Rpb24gdXNlTWFjaGluZShtYWNoaW5lKSB7XG4gIGNvbnN0IFtjdXJyZW50LCBzZXRDdXJyZW50XSA9IHVzZVN0YXRlKG1hY2hpbmUuaW5pdGlhbFN0YXRlKTtcblxuICBjb25zdCBzZXJ2aWNlID0gdXNlTWVtbyhcbiAgICAoKSA9PlxuICAgICAgaW50ZXJwcmV0KG1hY2hpbmUpXG4gICAgICAgIC5vblRyYW5zaXRpb24oKHN0YXRlKSA9PiB7XG4gICAgICAgICAgaWYgKHN0YXRlLmNoYW5nZWQpIHtcbiAgICAgICAgICAgIHNldEN1cnJlbnQoc3RhdGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLnN0YXJ0KCksXG4gICAgW11cbiAgKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHJldHVybiAoKSA9PiBzZXJ2aWNlLnN0b3AoKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiBbY3VycmVudCwgc2VydmljZS5zZW5kXTtcbn1cblxuZnVuY3Rpb24gZmFrZVBheW1lbnQoKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICByZXNvbHZlKFwieWF5XCIpO1xuICAgIH0sIDI1MDApO1xuICB9KTtcbn1cblxuY29uc3Qgc3RhdGVNYWNoaW5lID0gTWFjaGluZSh7XG4gIGluaXRpYWw6IFwiaWRsZVwiLFxuICBzdGF0ZXM6IHtcbiAgICBpZGxlOiB7XG4gICAgICBvbjoge1xuICAgICAgICBTVUJNSVQ6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0YXJnZXQ6IFwibG9hZGluZ1wiLFxuICAgICAgICAgICAgY29uZDogKGNvbnRleHQsIGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiBldmVudC5kYXRhLm5hbWUgIT09IFwiXCIgJiYgZXZlbnQuZGF0YS5jYXJkICE9PSBcIlwiO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRhcmdldDogXCJlcnJvclwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgIH0sXG4gICAgbG9hZGluZzoge1xuICAgICAgaW52b2tlOiB7XG4gICAgICAgIGlkOiBcImRvUGF5bWVudFwiLFxuICAgICAgICBzcmM6ICgpID0+IGZha2VQYXltZW50KCksXG4gICAgICAgIG9uRG9uZToge1xuICAgICAgICAgIHRhcmdldDogXCJzdWNjZXNzXCIsXG4gICAgICAgIH0sXG4gICAgICAgIG9uRXJyb3I6IHtcbiAgICAgICAgICB0YXJnZXQ6IFwiZXJyb3JcIixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBlcnJvcjoge1xuICAgICAgb246IHtcbiAgICAgICAgU1VCTUlUOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGFyZ2V0OiBcImxvYWRpbmdcIixcbiAgICAgICAgICAgIGNvbmQ6IChjb250ZXh0LCBldmVudCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gZXZlbnQuZGF0YS5uYW1lICE9PSBcIlwiICYmIGV2ZW50LmRhdGEuY2FyZCAhPT0gXCJcIjtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBzdWNjZXNzOiB7XG4gICAgICB0eXBlOiBcImZpbmFsXCIsXG4gICAgfSxcbiAgfSxcbn0pO1xuXG5jb25zdCBBcHAgPSAoKSA9PiB7XG4gIGNvbnN0IFttYWNoaW5lLCBzZW5kXSA9IHVzZU1hY2hpbmUoc3RhdGVNYWNoaW5lKTtcbiAgY29uc3QgW2Zvcm0sIHVwZGF0ZUZvcm1dID0gdXNlU3RhdGUoe1xuICAgIG5hbWU6IFwiXCIsXG4gICAgY2FyZDogXCJcIixcbiAgfSk7XG5cbiAgY29uc29sZS5sb2cobWFjaGluZS52YWx1ZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGgyPlN0YXRlIE1hY2hpbmUgUGF5bWVudDwvaDI+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdj5cbiAgICAgICAgPGZvcm1cbiAgICAgICAgICBvblN1Ym1pdD17KGUpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHNlbmQoeyB0eXBlOiBcIlNVQk1JVFwiLCBkYXRhOiB7IC4uLmZvcm0gfSB9KTtcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxsYWJlbD5uYW1lIG9uIGNhcmQ8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgaWQ9XCJuYW1lT25DYXJkXCJcbiAgICAgICAgICAgICAgbWF4TGVuZ3RoPVwiMjU1XCJcbiAgICAgICAgICAgICAgdmFsdWU9e2Zvcm0ubmFtZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB1cGRhdGVGb3JtKHsgLi4uZm9ybSwgbmFtZTogZS50YXJnZXQudmFsdWUgfSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWw+Y2FyZCBudW1iZXI8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgaWQ9XCJjcmVkaXRDYXJkTnVtYmVyXCJcbiAgICAgICAgICAgICAgdmFsdWU9e2Zvcm0uY2FyZH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB1cGRhdGVGb3JtKHsgLi4uZm9ybSwgY2FyZDogZS50YXJnZXQudmFsdWUgfSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGlkPVwicGF5QnV0dG9uXCI+XG4gICAgICAgICAgICA8c3Bhbj5wYXkgbm93PC9zcGFuPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})
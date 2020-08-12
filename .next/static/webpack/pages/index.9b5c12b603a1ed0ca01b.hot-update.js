webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var xstate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! xstate */ \"./node_modules/xstate/es/index.js\");\n\n\nvar _s = $RefreshSig$(),\n    _jsxFileName = \"/Users/lucas/developments/reactjs/todomvccopy/pages/index.js\",\n    _s2 = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n// import React, { Component } from \"react\";\n// import Form from \"../components/form\";\n// import Footer from \"../components/footer\";\n// class Home extends Component {\n//   constructor(props) {\n//     super(props);\n//     this.state = {};\n//   }\n//   render() {\n//     return (\n//       <div>\n//         <Form />\n//         <Footer />\n//       </div>\n//     );\n//   }\n// }\n// export default Home;\n\n\n\nfunction useMachine(machine) {\n  _s();\n\n  const {\n    0: current,\n    1: setCurrent\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(machine.initialState);\n  const service = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useMemo\"])(() => Object(xstate__WEBPACK_IMPORTED_MODULE_2__[\"interpret\"])(machine).onTransition(state => {\n    if (state.changed) {\n      setCurrent(state);\n    }\n  }).start(), []);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    return () => service.stop();\n  }, []);\n  return [current, service.send];\n}\n\n_s(useMachine, \"N8luULfBWGYCeClt5AuKgM0ZvFA=\");\n\nfunction fakePayment() {\n  return new Promise((resolve, reject) => {\n    setTimeout(() => resolve(\"pagamento realizado\"), 2500);\n  });\n}\n\nconst stateMachine = Object(xstate__WEBPACK_IMPORTED_MODULE_2__[\"Machine\"])({\n  initial: \"idle\",\n  context: {\n    msg: \"\"\n  },\n  states: {\n    idle: {\n      on: {\n        SUBMIT: [{\n          target: \"loading\",\n          cond: (context, event) => {\n            return event.data.name !== \"\" && event.data.card !== \"\";\n          }\n        }, {\n          target: \"error\"\n        }]\n      }\n    },\n    loading: {\n      invoke: {\n        id: \"doPayment\",\n        src: () => fakePayment(),\n        onDone: {\n          target: \"success\",\n          action: Object(xstate__WEBPACK_IMPORTED_MODULE_2__[\"assign\"])({\n            msg: (ctx, event) => {\n              console.log(event);\n              return event.data;\n            }\n          })\n        },\n        onError: {\n          target: \"error\",\n          action: Object(xstate__WEBPACK_IMPORTED_MODULE_2__[\"assign\"])({\n            msg: (ctx, event) => {\n              console.log(event);\n              return event.data;\n            }\n          })\n        }\n      }\n    },\n    error: {\n      on: {\n        SUBMIT: [{\n          target: \"loading\",\n          cond: (context, event) => {\n            return event.data.name !== \"\" && event.data.card !== \"\";\n          }\n        }]\n      }\n    },\n    success: {\n      type: \"final\"\n    }\n  }\n});\n\nconst App = () => {\n  _s2();\n\n  const [machine, send] = useMachine(stateMachine);\n  const {\n    0: form,\n    1: updateForm\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({\n    name: \"\",\n    card: \"\"\n  });\n  console.log(machine.value);\n  return __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 127,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 128,\n      columnNumber: 7\n    }\n  }, __jsx(\"h2\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 129,\n      columnNumber: 9\n    }\n  }, \"State Machine Payment\")), machine.matches(\"success\") ? __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 133,\n      columnNumber: 9\n    }\n  }, machine.context.msg ? machine.context.msg : \"oh no! no error message.\") : null, __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 140,\n      columnNumber: 7\n    }\n  }, __jsx(\"form\", {\n    onSubmit: e => {\n      e.preventDefault();\n      send({\n        type: \"SUBMIT\",\n        data: _objectSpread({}, form)\n      });\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 141,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 147,\n      columnNumber: 11\n    }\n  }, __jsx(\"label\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 148,\n      columnNumber: 13\n    }\n  }, \"name on card\"), __jsx(\"input\", {\n    type: \"text\",\n    id: \"nameOnCard\",\n    maxLength: \"255\",\n    value: form.name,\n    onChange: e => updateForm(_objectSpread(_objectSpread({}, form), {}, {\n      name: e.target.value\n    })),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 149,\n      columnNumber: 13\n    }\n  })), __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 157,\n      columnNumber: 11\n    }\n  }, __jsx(\"label\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 158,\n      columnNumber: 13\n    }\n  }, \"card number\"), __jsx(\"input\", {\n    type: \"text\",\n    id: \"creditCardNumber\",\n    value: form.card,\n    onChange: e => updateForm(_objectSpread(_objectSpread({}, form), {}, {\n      card: e.target.value\n    })),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 159,\n      columnNumber: 13\n    }\n  })), __jsx(\"button\", {\n    type: \"submit\",\n    id: \"payButton\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 166,\n      columnNumber: 11\n    }\n  }, __jsx(\"span\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 167,\n      columnNumber: 13\n    }\n  }, \"pay now\")))));\n};\n\n_s2(App, \"iogDaXWqQ1sp5IFhTC/2KVjMWCs=\", false, function () {\n  return [useMachine];\n});\n\n_c = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\nvar _c;\n\n$RefreshReg$(_c, \"App\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJ1c2VNYWNoaW5lIiwibWFjaGluZSIsImN1cnJlbnQiLCJzZXRDdXJyZW50IiwidXNlU3RhdGUiLCJpbml0aWFsU3RhdGUiLCJzZXJ2aWNlIiwidXNlTWVtbyIsImludGVycHJldCIsIm9uVHJhbnNpdGlvbiIsInN0YXRlIiwiY2hhbmdlZCIsInN0YXJ0IiwidXNlRWZmZWN0Iiwic3RvcCIsInNlbmQiLCJmYWtlUGF5bWVudCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwic2V0VGltZW91dCIsInN0YXRlTWFjaGluZSIsIk1hY2hpbmUiLCJpbml0aWFsIiwiY29udGV4dCIsIm1zZyIsInN0YXRlcyIsImlkbGUiLCJvbiIsIlNVQk1JVCIsInRhcmdldCIsImNvbmQiLCJldmVudCIsImRhdGEiLCJuYW1lIiwiY2FyZCIsImxvYWRpbmciLCJpbnZva2UiLCJpZCIsInNyYyIsIm9uRG9uZSIsImFjdGlvbiIsImFzc2lnbiIsImN0eCIsImNvbnNvbGUiLCJsb2ciLCJvbkVycm9yIiwiZXJyb3IiLCJzdWNjZXNzIiwidHlwZSIsIkFwcCIsImZvcm0iLCJ1cGRhdGVGb3JtIiwidmFsdWUiLCJtYXRjaGVzIiwiZSIsInByZXZlbnREZWZhdWx0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7O0FBRUEsU0FBU0EsVUFBVCxDQUFvQkMsT0FBcEIsRUFBNkI7QUFBQTs7QUFDM0IsUUFBTTtBQUFBLE9BQUNDLE9BQUQ7QUFBQSxPQUFVQztBQUFWLE1BQXdCQyxzREFBUSxDQUFDSCxPQUFPLENBQUNJLFlBQVQsQ0FBdEM7QUFFQSxRQUFNQyxPQUFPLEdBQUdDLHFEQUFPLENBQ3JCLE1BQ0VD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QUFNRCxJQUFOO0FBQVlqQixVQUFJLEVBQUVxQixDQUFDLENBQUN6QixNQUFGLENBQVN1QjtBQUEzQixPQUw3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FORixFQWdCRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixFQUVFO0FBQ0UsUUFBSSxFQUFDLE1BRFA7QUFFRSxNQUFFLEVBQUMsa0JBRkw7QUFHRSxTQUFLLEVBQUVGLElBQUksQ0FBQ2hCLElBSGQ7QUFJRSxZQUFRLEVBQUdvQixDQUFELElBQU9ILFVBQVUsaUNBQU1ELElBQU47QUFBWWhCLFVBQUksRUFBRW9CLENBQUMsQ0FBQ3pCLE1BQUYsQ0FBU3VCO0FBQTNCLE9BSjdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQWhCRixFQXlCRTtBQUFRLFFBQUksRUFBQyxRQUFiO0FBQXNCLE1BQUUsRUFBQyxXQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLENBekJGLENBREYsQ0FiRixDQURGO0FBK0NELENBeEREOztJQUFNSCxHO1VBQ29CbEQsVTs7O0tBRHBCa0QsRztBQTBEU0Esa0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbi8vIGltcG9ydCBGb3JtIGZyb20gXCIuLi9jb21wb25lbnRzL2Zvcm1cIjtcbi8vIGltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvZm9vdGVyXCI7XG5cbi8vIGNsYXNzIEhvbWUgZXh0ZW5kcyBDb21wb25lbnQge1xuLy8gICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuLy8gICAgIHN1cGVyKHByb3BzKTtcbi8vICAgICB0aGlzLnN0YXRlID0ge307XG4vLyAgIH1cblxuLy8gICByZW5kZXIoKSB7XG4vLyAgICAgcmV0dXJuIChcbi8vICAgICAgIDxkaXY+XG4vLyAgICAgICAgIDxGb3JtIC8+XG4vLyAgICAgICAgIDxGb290ZXIgLz5cbi8vICAgICAgIDwvZGl2PlxuLy8gICAgICk7XG4vLyAgIH1cbi8vIH1cblxuLy8gZXhwb3J0IGRlZmF1bHQgSG9tZTtcblxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VNZW1vLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IE1hY2hpbmUsIGludGVycHJldCwgYXNzaWduIH0gZnJvbSBcInhzdGF0ZVwiO1xuXG5mdW5jdGlvbiB1c2VNYWNoaW5lKG1hY2hpbmUpIHtcbiAgY29uc3QgW2N1cnJlbnQsIHNldEN1cnJlbnRdID0gdXNlU3RhdGUobWFjaGluZS5pbml0aWFsU3RhdGUpO1xuXG4gIGNvbnN0IHNlcnZpY2UgPSB1c2VNZW1vKFxuICAgICgpID0+XG4gICAgICBpbnRlcnByZXQobWFjaGluZSlcbiAgICAgICAgLm9uVHJhbnNpdGlvbigoc3RhdGUpID0+IHtcbiAgICAgICAgICBpZiAoc3RhdGUuY2hhbmdlZCkge1xuICAgICAgICAgICAgc2V0Q3VycmVudChzdGF0ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAuc3RhcnQoKSxcbiAgICBbXVxuICApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgcmV0dXJuICgpID0+IHNlcnZpY2Uuc3RvcCgpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIFtjdXJyZW50LCBzZXJ2aWNlLnNlbmRdO1xufVxuXG5mdW5jdGlvbiBmYWtlUGF5bWVudCgpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHJlc29sdmUoXCJwYWdhbWVudG8gcmVhbGl6YWRvXCIpLCAyNTAwKTtcbiAgfSk7XG59XG5cbmNvbnN0IHN0YXRlTWFjaGluZSA9IE1hY2hpbmUoe1xuICBpbml0aWFsOiBcImlkbGVcIixcbiAgY29udGV4dDoge1xuICAgIG1zZzogXCJcIixcbiAgfSxcbiAgc3RhdGVzOiB7XG4gICAgaWRsZToge1xuICAgICAgb246IHtcbiAgICAgICAgU1VCTUlUOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGFyZ2V0OiBcImxvYWRpbmdcIixcbiAgICAgICAgICAgIGNvbmQ6IChjb250ZXh0LCBldmVudCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gZXZlbnQuZGF0YS5uYW1lICE9PSBcIlwiICYmIGV2ZW50LmRhdGEuY2FyZCAhPT0gXCJcIjtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0YXJnZXQ6IFwiZXJyb3JcIixcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGxvYWRpbmc6IHtcbiAgICAgIGludm9rZToge1xuICAgICAgICBpZDogXCJkb1BheW1lbnRcIixcbiAgICAgICAgc3JjOiAoKSA9PiBmYWtlUGF5bWVudCgpLFxuICAgICAgICBvbkRvbmU6IHtcbiAgICAgICAgICB0YXJnZXQ6IFwic3VjY2Vzc1wiLFxuICAgICAgICAgIGFjdGlvbjogYXNzaWduKHtcbiAgICAgICAgICAgIG1zZzogKGN0eCwgZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZXZlbnQpO1xuICAgICAgICAgICAgICByZXR1cm4gZXZlbnQuZGF0YTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSksXG4gICAgICAgIH0sXG4gICAgICAgIG9uRXJyb3I6IHtcbiAgICAgICAgICB0YXJnZXQ6IFwiZXJyb3JcIixcbiAgICAgICAgICBhY3Rpb246IGFzc2lnbih7XG4gICAgICAgICAgICBtc2c6IChjdHgsIGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGV2ZW50KTtcbiAgICAgICAgICAgICAgcmV0dXJuIGV2ZW50LmRhdGE7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0pLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICAgIGVycm9yOiB7XG4gICAgICBvbjoge1xuICAgICAgICBTVUJNSVQ6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0YXJnZXQ6IFwibG9hZGluZ1wiLFxuICAgICAgICAgICAgY29uZDogKGNvbnRleHQsIGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiBldmVudC5kYXRhLm5hbWUgIT09IFwiXCIgJiYgZXZlbnQuZGF0YS5jYXJkICE9PSBcIlwiO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHN1Y2Nlc3M6IHtcbiAgICAgIHR5cGU6IFwiZmluYWxcIixcbiAgICB9LFxuICB9LFxufSk7XG5cbmNvbnN0IEFwcCA9ICgpID0+IHtcbiAgY29uc3QgW21hY2hpbmUsIHNlbmRdID0gdXNlTWFjaGluZShzdGF0ZU1hY2hpbmUpO1xuICBjb25zdCBbZm9ybSwgdXBkYXRlRm9ybV0gPSB1c2VTdGF0ZSh7XG4gICAgbmFtZTogXCJcIixcbiAgICBjYXJkOiBcIlwiLFxuICB9KTtcblxuICBjb25zb2xlLmxvZyhtYWNoaW5lLnZhbHVlKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICA8aDI+U3RhdGUgTWFjaGluZSBQYXltZW50PC9oMj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7bWFjaGluZS5tYXRjaGVzKFwic3VjY2Vzc1wiKSA/IChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICB7bWFjaGluZS5jb250ZXh0Lm1zZ1xuICAgICAgICAgICAgPyBtYWNoaW5lLmNvbnRleHQubXNnXG4gICAgICAgICAgICA6IFwib2ggbm8hIG5vIGVycm9yIG1lc3NhZ2UuXCJ9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IG51bGx9XG5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxmb3JtXG4gICAgICAgICAgb25TdWJtaXQ9eyhlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBzZW5kKHsgdHlwZTogXCJTVUJNSVRcIiwgZGF0YTogeyAuLi5mb3JtIH0gfSk7XG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWw+bmFtZSBvbiBjYXJkPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIGlkPVwibmFtZU9uQ2FyZFwiXG4gICAgICAgICAgICAgIG1heExlbmd0aD1cIjI1NVwiXG4gICAgICAgICAgICAgIHZhbHVlPXtmb3JtLm5hbWV9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdXBkYXRlRm9ybSh7IC4uLmZvcm0sIG5hbWU6IGUudGFyZ2V0LnZhbHVlIH0pfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsPmNhcmQgbnVtYmVyPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIGlkPVwiY3JlZGl0Q2FyZE51bWJlclwiXG4gICAgICAgICAgICAgIHZhbHVlPXtmb3JtLmNhcmR9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdXBkYXRlRm9ybSh7IC4uLmZvcm0sIGNhcmQ6IGUudGFyZ2V0LnZhbHVlIH0pfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBpZD1cInBheUJ1dHRvblwiPlxuICAgICAgICAgICAgPHNwYW4+cGF5IG5vdzwvc3Bhbj5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})
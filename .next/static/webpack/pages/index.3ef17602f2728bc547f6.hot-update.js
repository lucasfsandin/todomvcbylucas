webpackHotUpdate_N_E("pages/index",{

/***/ "./components/todos/index.js":
/*!***********************************!*\
  !*** ./components/todos/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var xstate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! xstate */ \"./node_modules/xstate/es/index.js\");\nvar _s = $RefreshSig$(),\n    _jsxFileName = \"/Users/lucas/developments/reactjs/todomvccopy/components/todos/index.js\",\n    _s2 = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nconst useMachine = machine => {\n  _s();\n\n  const {\n    0: current,\n    1: setCurrent\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(machine.initialState);\n  const service = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useMemo\"])(() => Object(xstate__WEBPACK_IMPORTED_MODULE_1__[\"interpret\"])(machine).onTransition(state => {\n    if (state.changed) {\n      setCurrent(state);\n    }\n  }).start(), []);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    return () => service.stop();\n  }, []);\n  return [current, service.send];\n};\n\n_s(useMachine, \"N8luULfBWGYCeClt5AuKgM0ZvFA=\");\n\nconst todoMachine = Object(xstate__WEBPACK_IMPORTED_MODULE_1__[\"Machine\"])({\n  initial: \"all\",\n  states: {\n    all: {// all\n    },\n    active: {// actives\n    },\n    complete: {// completes\n    }\n  }\n});\n\nconst Todos = () => {\n  _s2();\n\n  const [machine, send] = useMachine(todoMachine);\n  const {\n    0: todos,\n    1: setTodos\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({\n    list: [{\n      id: 1,\n      value: \"task 1\",\n      complete: false\n    }, {\n      id: 2,\n      value: \"task 2\",\n      complete: false\n    }, {\n      id: 3,\n      value: \"task 3\",\n      complete: false\n    }, {\n      id: 4,\n      value: \"task 4\",\n      complete: false\n    }]\n  });\n  return __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 5\n    }\n  }, __jsx(\"form\", {\n    onSubmit: e => {\n      e.preventDefault();\n      const formlary = [...todos.list, {\n        id: Math.floor(Math.random() * 1000 + 1),\n        value: e.target.value,\n        complete: false\n      }];\n      console.log(formlary);\n      setTodos(formlary);\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 7\n    }\n  }, __jsx(\"input\", {\n    type: \"text\",\n    id: \"todo\",\n    name: \"todo\",\n    placeholder: \"Task here\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 9\n    }\n  }), __jsx(\"button\", {\n    type: \"submit\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 9\n    }\n  }, \"save\")), todos.list && todos.list.map(t => __jsx(\"li\", {\n    key: t.id,\n    style: t.styled,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 11\n    }\n  }, __jsx(\"input\", {\n    type: \"checkbox\",\n    id: t.id,\n    name: \"register\",\n    value: t.value,\n    onChange: e => undefined.props.change(e),\n    checked: t.complete,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 13\n    }\n  }), t.value)), __jsx(\"button\", {\n    type: \"button\",\n    onClick: {},\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 7\n    }\n  }, \"All\"), __jsx(\"button\", {\n    type: \"button\",\n    onClick: {},\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 7\n    }\n  }, \"Active\"), __jsx(\"button\", {\n    type: \"button\",\n    onClick: {},\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 7\n    }\n  }, \"Complete\"));\n};\n\n_s2(Todos, \"VaPzmxBsjJ/mktGAN2Bkp1gZ4EU=\", false, function () {\n  return [useMachine];\n});\n\n_c = Todos;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Todos);\n\nvar _c;\n\n$RefreshReg$(_c, \"Todos\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90b2Rvcy9pbmRleC5qcz9kZWUyIl0sIm5hbWVzIjpbInVzZU1hY2hpbmUiLCJtYWNoaW5lIiwiY3VycmVudCIsInNldEN1cnJlbnQiLCJ1c2VTdGF0ZSIsImluaXRpYWxTdGF0ZSIsInNlcnZpY2UiLCJ1c2VNZW1vIiwiaW50ZXJwcmV0Iiwib25UcmFuc2l0aW9uIiwic3RhdGUiLCJjaGFuZ2VkIiwic3RhcnQiLCJ1c2VFZmZlY3QiLCJzdG9wIiwic2VuZCIsInRvZG9NYWNoaW5lIiwiTWFjaGluZSIsImluaXRpYWwiLCJzdGF0ZXMiLCJhbGwiLCJhY3RpdmUiLCJjb21wbGV0ZSIsIlRvZG9zIiwidG9kb3MiLCJzZXRUb2RvcyIsImxpc3QiLCJpZCIsInZhbHVlIiwiZSIsInByZXZlbnREZWZhdWx0IiwiZm9ybWxhcnkiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJ0YXJnZXQiLCJjb25zb2xlIiwibG9nIiwibWFwIiwidCIsInN0eWxlZCIsInByb3BzIiwiY2hhbmdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLE1BQU1BLFVBQVUsR0FBSUMsT0FBRCxJQUFhO0FBQUE7O0FBQzlCLFFBQU07QUFBQSxPQUFDQyxPQUFEO0FBQUEsT0FBVUM7QUFBVixNQUF3QkMsc0RBQVEsQ0FBQ0gsT0FBTyxDQUFDSSxZQUFULENBQXRDO0FBRUEsUUFBTUMsT0FBTyxHQUFHQyxxREFBTyxDQUNyQixNQUNFQyx3REFBUyxDQUFDUCxPQUFELENBQVQsQ0FDR1EsWUFESCxDQUNpQkMsS0FBRCxJQUFXO0FBQ3ZCLFFBQUlBLEtBQUssQ0FBQ0MsT0FBVixFQUFtQjtBQUNqQlIsZ0JBQVUsQ0FBQ08sS0FBRCxDQUFWO0FBQ0Q7QUFDRixHQUxILEVBTUdFLEtBTkgsRUFGbUIsRUFTckIsRUFUcUIsQ0FBdkI7QUFZQUMseURBQVMsQ0FBQyxNQUFNO0FBQ2QsV0FBTyxNQUFNUCxPQUFPLENBQUNRLElBQVIs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O0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQVNHaUIsQ0FBQyxDQUFDWCxLQVRMLENBREYsQ0EzQkosRUF5Q0U7QUFBUSxRQUFJLEVBQUMsUUFBYjtBQUFzQixXQUFPLEVBQUUsRUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQXpDRixFQTRDRTtBQUFRLFFBQUksRUFBQyxRQUFiO0FBQXNCLFdBQU8sRUFBRSxFQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBNUNGLEVBK0NFO0FBQVEsUUFBSSxFQUFDLFFBQWI7QUFBc0IsV0FBTyxFQUFFLEVBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBL0NGLENBREY7QUFxREQsQ0FoRUQ7O0lBQU1MLEs7VUFDb0J2QixVOzs7S0FEcEJ1QixLO0FBa0VTQSxvRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvdG9kb3MvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZU1lbW8sIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTWFjaGluZSwgaW50ZXJwcmV0IH0gZnJvbSBcInhzdGF0ZVwiO1xuXG5jb25zdCB1c2VNYWNoaW5lID0gKG1hY2hpbmUpID0+IHtcbiAgY29uc3QgW2N1cnJlbnQsIHNldEN1cnJlbnRdID0gdXNlU3RhdGUobWFjaGluZS5pbml0aWFsU3RhdGUpO1xuXG4gIGNvbnN0IHNlcnZpY2UgPSB1c2VNZW1vKFxuICAgICgpID0+XG4gICAgICBpbnRlcnByZXQobWFjaGluZSlcbiAgICAgICAgLm9uVHJhbnNpdGlvbigoc3RhdGUpID0+IHtcbiAgICAgICAgICBpZiAoc3RhdGUuY2hhbmdlZCkge1xuICAgICAgICAgICAgc2V0Q3VycmVudChzdGF0ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAuc3RhcnQoKSxcbiAgICBbXVxuICApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgcmV0dXJuICgpID0+IHNlcnZpY2Uuc3RvcCgpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIFtjdXJyZW50LCBzZXJ2aWNlLnNlbmRdO1xufTtcblxuY29uc3QgdG9kb01hY2hpbmUgPSBNYWNoaW5lKHtcbiAgaW5pdGlhbDogXCJhbGxcIixcbiAgc3RhdGVzOiB7XG4gICAgYWxsOiB7XG4gICAgICAvLyBhbGxcbiAgICB9LFxuICAgIGFjdGl2ZToge1xuICAgICAgLy8gYWN0aXZlc1xuICAgIH0sXG4gICAgY29tcGxldGU6IHtcbiAgICAgIC8vIGNvbXBsZXRlc1xuICAgIH0sXG4gIH0sXG59KTtcblxuY29uc3QgVG9kb3MgPSAoKSA9PiB7XG4gIGNvbnN0IFttYWNoaW5lLCBzZW5kXSA9IHVzZU1hY2hpbmUodG9kb01hY2hpbmUpO1xuICBjb25zdCBbdG9kb3MsIHNldFRvZG9zXSA9IHVzZVN0YXRlKHtcbiAgICBsaXN0OiBbXG4gICAgICB7IGlkOiAxLCB2YWx1ZTogXCJ0YXNrIDFcIiwgY29tcGxldGU6IGZhbHNlIH0sXG4gICAgICB7IGlkOiAyLCB2YWx1ZTogXCJ0YXNrIDJcIiwgY29tcGxldGU6IGZhbHNlIH0sXG4gICAgICB7IGlkOiAzLCB2YWx1ZTogXCJ0YXNrIDNcIiwgY29tcGxldGU6IGZhbHNlIH0sXG4gICAgICB7IGlkOiA0LCB2YWx1ZTogXCJ0YXNrIDRcIiwgY29tcGxldGU6IGZhbHNlIH0sXG4gICAgXSxcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGZvcm1cbiAgICAgICAgb25TdWJtaXQ9eyhlKSA9PiB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIGNvbnN0IGZvcm1sYXJ5ID0gW1xuICAgICAgICAgICAgLi4udG9kb3MubGlzdCxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaWQ6IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDAgKyAxKSxcbiAgICAgICAgICAgICAgdmFsdWU6IGUudGFyZ2V0LnZhbHVlLFxuICAgICAgICAgICAgICBjb21wbGV0ZTogZmFsc2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF07XG5cbiAgICAgICAgICBjb25zb2xlLmxvZyhmb3JtbGFyeSk7XG4gICAgICAgICAgc2V0VG9kb3MoZm9ybWxhcnkpO1xuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgaWQ9XCJ0b2RvXCJcbiAgICAgICAgICBuYW1lPVwidG9kb1wiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJUYXNrIGhlcmVcIlxuICAgICAgICA+PC9pbnB1dD5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+c2F2ZTwvYnV0dG9uPlxuICAgICAgPC9mb3JtPlxuXG4gICAgICB7dG9kb3MubGlzdCAmJlxuICAgICAgICB0b2Rvcy5saXN0Lm1hcCgodCkgPT4gKFxuICAgICAgICAgIDxsaSBrZXk9e3QuaWR9IHN0eWxlPXt0LnN0eWxlZH0+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgaWQ9e3QuaWR9XG4gICAgICAgICAgICAgIG5hbWU9XCJyZWdpc3RlclwiXG4gICAgICAgICAgICAgIHZhbHVlPXt0LnZhbHVlfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMucHJvcHMuY2hhbmdlKGUpfVxuICAgICAgICAgICAgICBjaGVja2VkPXt0LmNvbXBsZXRlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIHt0LnZhbHVlfVxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICkpfVxuXG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXt7fX0+XG4gICAgICAgIEFsbFxuICAgICAgPC9idXR0b24+XG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXt7fX0+XG4gICAgICAgIEFjdGl2ZVxuICAgICAgPC9idXR0b24+XG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXt7fX0+XG4gICAgICAgIENvbXBsZXRlXG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRvZG9zO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/todos/index.js\n");

/***/ })

})
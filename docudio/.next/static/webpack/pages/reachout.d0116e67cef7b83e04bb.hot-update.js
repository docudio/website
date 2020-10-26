webpackHotUpdate_N_E("pages/reachout",{

/***/ "./pages/reachout.js":
/*!***************************!*\
  !*** ./pages/reachout.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n\n\nvar _s = $RefreshSig$();\n\n\n\nvar useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"makeStyles\"])(function (theme) {\n  return {\n    root: {\n      flexGrow: 1,\n      padding: theme.spacing(3),\n      marginBottom: '10px'\n    }\n  };\n});\nfunction Home() {\n  _s();\n\n  var classes = useStyles();\n\n  var handleSubmit = function handleSubmit() {\n    setsubmitted(!submitted);\n    setemail('');\n  };\n\n  var handleEmail = function handleEmail(event) {\n    setemail(event.target.value);\n  };\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),\n      _React$useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_React$useState, 2),\n      submitted = _React$useState2[0],\n      setsubmitted = _React$useState2[1];\n\n  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(''),\n      _React$useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_React$useState3, 2),\n      email = _React$useState4[0],\n      setemail = _React$useState4[1];\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Card\"], {\n    className: classes.root\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"CardHeader\"], {\n    title: \"Welcome to Docudio!\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"CardContent\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Typography\"], {\n    align: \"center\",\n    variant: \"h3\"\n  }, \"Docudio Slack\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Link\"], {\n    align: \"center\",\n    color: \"inherit\",\n    target: \"_blank\",\n    rel: \"noreferrer\",\n    href: \"https://join.slack.com/t/docudio/shared_invite/zt-io1hneog-SX2sVVmRTtf2jh7jybvcKA\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Typography\"], {\n    align: \"center\",\n    variant: \"h5\",\n    style: {\n      marginBottom: '30px'\n    }\n  }, \"Join our slack and ask questions/ask to join! \"), \" \"), ' '));\n}\n\n_s(Home, \"iPXF7oUxhtNnR9dzx1D6sG2dHOU=\", false, function () {\n  return [useStyles];\n});\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVhY2hvdXQuanM/MTQ0NSJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJyb290IiwiZmxleEdyb3ciLCJwYWRkaW5nIiwic3BhY2luZyIsIm1hcmdpbkJvdHRvbSIsIkhvbWUiLCJjbGFzc2VzIiwiaGFuZGxlU3VibWl0Iiwic2V0c3VibWl0dGVkIiwic3VibWl0dGVkIiwic2V0ZW1haWwiLCJoYW5kbGVFbWFpbCIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJSZWFjdCIsInVzZVN0YXRlIiwiZW1haWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0Msb0VBQVUsQ0FBQyxVQUFBQyxLQUFLO0FBQUEsU0FBSztBQUNyQ0MsUUFBSSxFQUFFO0FBQ0pDLGNBQVEsRUFBRSxDQUROO0FBRUpDLGFBQU8sRUFBRUgsS0FBSyxDQUFDSSxPQUFOLENBQWMsQ0FBZCxDQUZMO0FBR0pDLGtCQUFZLEVBQUU7QUFIVjtBQUQrQixHQUFMO0FBQUEsQ0FBTixDQUE1QjtBQVFlLFNBQVNDLElBQVQsR0FBaUI7QUFBQTs7QUFDOUIsTUFBTUMsT0FBTyxHQUFHVCxTQUFTLEVBQXpCOztBQUVBLE1BQU1VLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFDekJDLGdCQUFZLENBQUMsQ0FBQ0MsU0FBRixDQUFaO0FBQ0FDLFlBQVEsQ0FBQyxFQUFELENBQVI7QUFDRCxHQUhEOztBQUtBLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLEtBQUQsRUFBVztBQUM3QkYsWUFBUSxDQUFDRSxLQUFLLENBQUNDLE1BQU4sQ0FBYUMsS0FBZCxDQUFSO0FBQ0QsR0FGRDs7QUFSOEIsd0JBWUlDLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxLQUFmLENBWko7QUFBQTtBQUFBLE1BWXZCUCxTQVp1QjtBQUFBLE1BWVpELFlBWlk7O0FBQUEseUJBYUpPLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxFQUFmLENBYkk7QUFBQTtBQUFBLE1BYXZCQyxLQWJ1QjtBQUFBLE1BYWhCUCxRQWJnQjs7QUFlOUIsc0JBQ0UsMkRBQUMsc0RBQUQ7QUFBTSxhQUFTLEVBQUVKLE9BQU8sQ0FBQ047QUFBekIsa0JBQ0UsMkRBQUMsNERBQUQ7QUFBWSxTQUFLLEVBQUM7QUFBbEIsSUFERixlQUVFLDJEQUFDLDZEQUFELHFCQUNFLDJEQUFDLDREQUFEO0FBQVksU0FBSyxFQUFDLFFBQWxCO0FBQTJCLFdBQU8sRUFBQztBQUFuQyxxQkFERixlQUtFLDJEQUFDLHNEQUFEO0FBQU0sU0FBSyxFQUFDLFFBQVo7QUFBcUIsU0FBSyxFQUFDLFNBQTNCO0FBQXFDLFVBQU0sRUFBQyxRQUE1QztBQUFxRCxPQUFHLEVBQUMsWUFBekQ7QUFBc0UsUUFBSSxFQUFDO0FBQTNFLGtCQUNFLDJEQUFDLDREQUFEO0FBQVksU0FBSyxFQUFDLFFBQWxCO0FBQTJCLFdBQU8sRUFBQyxJQUFuQztBQUF3QyxTQUFLLEVBQUU7QUFBRUksa0JBQVksRUFBRTtBQUFoQjtBQUEvQyxzREFERixNQUxGLEVBTzhELEdBUDlELENBRkYsQ0FERjtBQWVEOztHQTlCdUJDLEk7VUFDTlIsUzs7O0tBRE1RLEkiLCJmaWxlIjoiLi9wYWdlcy9yZWFjaG91dC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IENhcmQsIG1ha2VTdHlsZXMsIExpbmssIENhcmRIZWFkZXIsIENhcmRDb250ZW50LCBUeXBvZ3JhcGh5IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcbiAgcm9vdDoge1xuICAgIGZsZXhHcm93OiAxLFxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMyksXG4gICAgbWFyZ2luQm90dG9tOiAnMTBweCdcbiAgfVxufSkpXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUgKCkge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKClcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoKSA9PiB7XG4gICAgc2V0c3VibWl0dGVkKCFzdWJtaXR0ZWQpXG4gICAgc2V0ZW1haWwoJycpXG4gIH1cblxuICBjb25zdCBoYW5kbGVFbWFpbCA9IChldmVudCkgPT4ge1xuICAgIHNldGVtYWlsKGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgfVxuXG4gIGNvbnN0IFtzdWJtaXR0ZWQsIHNldHN1Ym1pdHRlZF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW2VtYWlsLCBzZXRlbWFpbF0gPSBSZWFjdC51c2VTdGF0ZSgnJylcblxuICByZXR1cm4gKFxuICAgIDxDYXJkIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cbiAgICAgIDxDYXJkSGVhZGVyIHRpdGxlPSdXZWxjb21lIHRvIERvY3VkaW8hJyAvPlxuICAgICAgPENhcmRDb250ZW50PlxuICAgICAgICA8VHlwb2dyYXBoeSBhbGlnbj0nY2VudGVyJyB2YXJpYW50PSdoMyc+XG4gICAgICAgICAgRG9jdWRpbyBTbGFja1xuICAgICAgICA8L1R5cG9ncmFwaHk+XG5cbiAgICAgICAgPExpbmsgYWxpZ249J2NlbnRlcicgY29sb3I9J2luaGVyaXQnIHRhcmdldD0nX2JsYW5rJyByZWw9J25vcmVmZXJyZXInIGhyZWY9J2h0dHBzOi8vam9pbi5zbGFjay5jb20vdC9kb2N1ZGlvL3NoYXJlZF9pbnZpdGUvenQtaW8xaG5lb2ctU1gyc1ZWbVJUdGYyamg3anlidmNLQSc+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgYWxpZ249J2NlbnRlcicgdmFyaWFudD0naDUnIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogJzMwcHgnIH19PlxuSm9pbiBvdXIgc2xhY2sgYW5kIGFzayBxdWVzdGlvbnMvYXNrIHRvIGpvaW4hIDwvVHlwb2dyYXBoeT4gPC9MaW5rPnsnICd9XG5cbiAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgPC9DYXJkPlxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/reachout.js\n");

/***/ })

})
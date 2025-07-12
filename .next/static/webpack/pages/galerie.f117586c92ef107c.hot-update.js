/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/galerie",{

/***/ "./pages/components/Header.jsx":
/*!*************************************!*\
  !*** ./pages/components/Header.jsx ***!
  \*************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
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
                // @ts-ignore importMeta is replaced in the loader
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
    })();


/***/ }),

/***/ "./pages/galerie.js":
/*!**************************!*\
  !*** ./pages/galerie.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Footer */ \"./pages/components/Footer.jsx\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Header */ \"./pages/components/Header.jsx\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_Header__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Pannier_Liv__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Pannier/Liv */ \"./pages/Pannier/Liv.jsx\");\n/* harmony import */ var _Galerie_Galerie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Galerie/Galerie */ \"./pages/Galerie/Galerie.jsx\");\n/* harmony import */ var _Galerie_Acc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Galerie/Acc */ \"./pages/Galerie/Acc.jsx\");\n/* harmony import */ var _Galerie_Plante__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Galerie/Plante */ \"./pages/Galerie/Plante.jsx\");\n/* harmony import */ var _Galerie_Choix__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Galerie/Choix */ \"./pages/Galerie/Choix.jsx\");\n/* harmony import */ var _Galerie_Choix2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Galerie/Choix2 */ \"./pages/Galerie/Choix2.jsx\");\n/* harmony import */ var _Galerie_Choix3__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Galerie/Choix3 */ \"./pages/Galerie/Choix3.jsx\");\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\n\n\nvar galerie = function() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_components_Header__WEBPACK_IMPORTED_MODULE_3___default()), {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\abdel\\\\OneDrive\\\\Desktop\\\\Fproject\\\\FlowerShop\\\\pages\\\\galerie.js\",\n                lineNumber: 16,\n                columnNumber: 10\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Galerie_Galerie__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\abdel\\\\OneDrive\\\\Desktop\\\\Fproject\\\\FlowerShop\\\\pages\\\\galerie.js\",\n                lineNumber: 17,\n                columnNumber: 11\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Galerie_Acc__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\abdel\\\\OneDrive\\\\Desktop\\\\Fproject\\\\FlowerShop\\\\pages\\\\galerie.js\",\n                lineNumber: 18,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Galerie_Plante__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\abdel\\\\OneDrive\\\\Desktop\\\\Fproject\\\\FlowerShop\\\\pages\\\\galerie.js\",\n                lineNumber: 19,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Galerie_Choix__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\abdel\\\\OneDrive\\\\Desktop\\\\Fproject\\\\FlowerShop\\\\pages\\\\galerie.js\",\n                lineNumber: 20,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Galerie_Choix2__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\abdel\\\\OneDrive\\\\Desktop\\\\Fproject\\\\FlowerShop\\\\pages\\\\galerie.js\",\n                lineNumber: 21,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Galerie_Choix3__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\abdel\\\\OneDrive\\\\Desktop\\\\Fproject\\\\FlowerShop\\\\pages\\\\galerie.js\",\n                lineNumber: 22,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Pannier_Liv__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\abdel\\\\OneDrive\\\\Desktop\\\\Fproject\\\\FlowerShop\\\\pages\\\\galerie.js\",\n                lineNumber: 23,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\abdel\\\\OneDrive\\\\Desktop\\\\Fproject\\\\FlowerShop\\\\pages\\\\galerie.js\",\n                lineNumber: 24,\n                columnNumber: 11\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\abdel\\\\OneDrive\\\\Desktop\\\\Fproject\\\\FlowerShop\\\\pages\\\\galerie.js\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, _this);\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (galerie);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9nYWxlcmllLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUEwQjtBQUNlO0FBQ0E7QUFDVDtBQUNRO0FBQ1I7QUFDTTtBQUNGO0FBQ0U7QUFDQTtBQUV0QyxJQUFNVSxPQUFPLEdBQUcsV0FBTTtJQUNwQixxQkFDRSw4REFBQ0MsS0FBRzs7MEJBRUMsOERBQUNULDJEQUFNOzs7O3FCQUFFOzBCQUNSLDhEQUFDRSx3REFBTzs7OztxQkFBRTswQkFDUiw4REFBQ0Msb0RBQUc7Ozs7cUJBQUU7MEJBQ04sOERBQUNDLHVEQUFNOzs7O3FCQUFFOzBCQUNULDhEQUFDQyxzREFBSzs7OztxQkFBRTswQkFDUiw4REFBQ0MsdURBQU07Ozs7cUJBQUU7MEJBQ1QsOERBQUNDLHdEQUFNOzs7O3FCQUFFOzBCQUNULDhEQUFDTixvREFBRzs7OztxQkFBRTswQkFDUiw4REFBQ0YsMERBQU07Ozs7cUJBQUU7Ozs7OzthQUVULENBQ047Q0FDSDtBQUVELCtEQUFlUyxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZ2FsZXJpZS5qcz8xNDc5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9jb21wb25lbnRzL0Zvb3Rlcic7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9jb21wb25lbnRzL0hlYWRlcic7XHJcbmltcG9ydCBMaXYgZnJvbSAnLi9QYW5uaWVyL0xpdic7XHJcbmltcG9ydCBHYWxlcmllIGZyb20gJy4vR2FsZXJpZS9HYWxlcmllJztcclxuaW1wb3J0IEFjYyBmcm9tICcuL0dhbGVyaWUvQWNjJztcclxuaW1wb3J0IFBsYW50ZSBmcm9tICcuL0dhbGVyaWUvUGxhbnRlJztcclxuaW1wb3J0IENob2l4IGZyb20gJy4vR2FsZXJpZS9DaG9peCc7XHJcbmltcG9ydCBDaG9peDIgZnJvbSAnLi9HYWxlcmllL0Nob2l4Mic7XHJcbmltcG9ydCBDaG9peDMgZnJvbSAnLi9HYWxlcmllL0Nob2l4Myc7XHJcblxyXG5jb25zdCBnYWxlcmllID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgIFxyXG4gICAgICAgICA8SGVhZGVyLz5cclxuICAgICAgICAgIDxHYWxlcmllLz5cclxuICAgICAgICAgICAgPEFjYy8+XHJcbiAgICAgICAgICAgIDxQbGFudGUvPlxyXG4gICAgICAgICAgICA8Q2hvaXgvPlxyXG4gICAgICAgICAgICA8Q2hvaXgyLz5cclxuICAgICAgICAgICAgPENob2l4My8+XHJcbiAgICAgICAgICAgIDxMaXYvPlxyXG4gICAgICAgICAgPEZvb3Rlci8+XHJcbiAgICAgICAgICBcclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnYWxlcmllO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJGb290ZXIiLCJIZWFkZXIiLCJMaXYiLCJHYWxlcmllIiwiQWNjIiwiUGxhbnRlIiwiQ2hvaXgiLCJDaG9peDIiLCJDaG9peDMiLCJnYWxlcmllIiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/galerie.js\n"));

/***/ })

});
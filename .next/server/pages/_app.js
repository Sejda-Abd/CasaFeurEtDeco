"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_AuthContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/AuthContext */ \"./pages/components/AuthContext.js\");\n\n // Adjust the path as needed\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AuthContext__WEBPACK_IMPORTED_MODULE_1__.AuthProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\abdel\\\\OneDrive\\\\Desktop\\\\Fproject\\\\FlowerShop\\\\pages\\\\_app.js\",\n            lineNumber: 6,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\abdel\\\\OneDrive\\\\Desktop\\\\Fproject\\\\FlowerShop\\\\pages\\\\_app.js\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUF3RCxDQUFDLDRCQUE0QjtBQUVyRixTQUFTQyxLQUFLLENBQUMsRUFBRUMsU0FBUyxHQUFFQyxTQUFTLEdBQUUsRUFBRTtJQUN2QyxxQkFDRSw4REFBQ0gsaUVBQVk7a0JBQ1gsNEVBQUNFLFNBQVM7WUFBRSxHQUFHQyxTQUFTOzs7OztnQkFBSTs7Ozs7WUFDZixDQUNmO0NBQ0g7QUFFRCxpRUFBZUYsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGl6emFzaG9wLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEF1dGhQcm92aWRlciB9IGZyb20gJy4vY29tcG9uZW50cy9BdXRoQ29udGV4dCc7IC8vIEFkanVzdCB0aGUgcGF0aCBhcyBuZWVkZWRcclxuXHJcbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8QXV0aFByb3ZpZGVyPlxyXG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICA8L0F1dGhQcm92aWRlcj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcclxuIl0sIm5hbWVzIjpbIkF1dGhQcm92aWRlciIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./pages/components/AuthContext.js":
/*!*****************************************!*\
  !*** ./pages/components/AuthContext.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthProvider\": () => (/* binding */ AuthProvider),\n/* harmony export */   \"useAuth\": () => (/* binding */ useAuth)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n// Create a Context for authentication\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\n// Create a Provider component\nfunction AuthProvider({ children  }) {\n    const { 0: isLoggedIn , 1: setIsLoggedIn  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const login = ()=>setIsLoggedIn(true);\n    const logout = ()=>setIsLoggedIn(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            isLoggedIn,\n            login,\n            logout\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\abdel\\\\OneDrive\\\\Desktop\\\\Fproject\\\\FlowerShop\\\\pages\\\\components\\\\AuthContext.js\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this);\n}\n// Custom hook to use the AuthContext\nfunction useAuth() {\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AuthContext);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL0F1dGhDb250ZXh0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQTREO0FBRTVELHNDQUFzQztBQUN0QyxNQUFNRyxXQUFXLGlCQUFHSCxvREFBYSxFQUFFO0FBRW5DLDhCQUE4QjtBQUN2QixTQUFTSSxZQUFZLENBQUMsRUFBRUMsUUFBUSxHQUFFLEVBQUU7SUFDekMsTUFBTSxLQUFDQyxVQUFVLE1BQUVDLGFBQWEsTUFBSUwsK0NBQVEsQ0FBQyxLQUFLLENBQUM7SUFFbkQsTUFBTU0sS0FBSyxHQUFHLElBQU1ELGFBQWEsQ0FBQyxJQUFJLENBQUM7SUFDdkMsTUFBTUUsTUFBTSxHQUFHLElBQU1GLGFBQWEsQ0FBQyxLQUFLLENBQUM7SUFFekMscUJBQ0UsOERBQUNKLFdBQVcsQ0FBQ08sUUFBUTtRQUFDQyxLQUFLLEVBQUU7WUFBRUwsVUFBVTtZQUFFRSxLQUFLO1lBQUVDLE1BQU07U0FBRTtrQkFDdkRKLFFBQVE7Ozs7O1lBQ1ksQ0FDdkI7Q0FDSDtBQUVELHFDQUFxQztBQUM5QixTQUFTTyxPQUFPLEdBQUc7SUFDeEIsT0FBT1gsaURBQVUsQ0FBQ0UsV0FBVyxDQUFDLENBQUM7Q0FDaEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9waXp6YXNob3AvLi9wYWdlcy9jb21wb25lbnRzL0F1dGhDb250ZXh0LmpzPzFkN2MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG4vLyBDcmVhdGUgYSBDb250ZXh0IGZvciBhdXRoZW50aWNhdGlvblxyXG5jb25zdCBBdXRoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbi8vIENyZWF0ZSBhIFByb3ZpZGVyIGNvbXBvbmVudFxyXG5leHBvcnQgZnVuY3Rpb24gQXV0aFByb3ZpZGVyKHsgY2hpbGRyZW4gfSkge1xyXG4gIGNvbnN0IFtpc0xvZ2dlZEluLCBzZXRJc0xvZ2dlZEluXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgbG9naW4gPSAoKSA9PiBzZXRJc0xvZ2dlZEluKHRydWUpO1xyXG4gIGNvbnN0IGxvZ291dCA9ICgpID0+IHNldElzTG9nZ2VkSW4oZmFsc2UpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEF1dGhDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IGlzTG9nZ2VkSW4sIGxvZ2luLCBsb2dvdXQgfX0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvQXV0aENvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufVxyXG5cclxuLy8gQ3VzdG9tIGhvb2sgdG8gdXNlIHRoZSBBdXRoQ29udGV4dFxyXG5leHBvcnQgZnVuY3Rpb24gdXNlQXV0aCgpIHtcclxuICByZXR1cm4gdXNlQ29udGV4dChBdXRoQ29udGV4dCk7XHJcbn1cclxuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJBdXRoQ29udGV4dCIsIkF1dGhQcm92aWRlciIsImNoaWxkcmVuIiwiaXNMb2dnZWRJbiIsInNldElzTG9nZ2VkSW4iLCJsb2dpbiIsImxvZ291dCIsIlByb3ZpZGVyIiwidmFsdWUiLCJ1c2VBdXRoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/components/AuthContext.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();
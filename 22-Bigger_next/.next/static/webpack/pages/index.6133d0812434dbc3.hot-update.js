"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/meetups/MeetupList */ \"./components/meetups/MeetupList.js\");\n\n\nvar DUMMY_MEETUPS = [\n    {\n        id: \"m1\",\n        title: \"A First Meetup\",\n        image: \"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1024px-Stadtbild_M%C3%BCnchen.jpg\",\n        address: \"Some adress 5, 12345 Some City\",\n        description: \"This is a first meetup!\"\n    },\n    {\n        id: \"m2\",\n        title: \"A Second Meetup\",\n        image: \"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1024px-Stadtbild_M%C3%BCnchen.jpg\",\n        address: \"Some adress 10, 12345 Some City\",\n        description: \"This is a second meetup!\"\n    }, \n];\nfunction HomePage(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        meetups: props.meetups\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\KJ399YC\\\\Documents\\\\React-course\\\\22-Bigger_next\\\\pages\\\\index.js\",\n        lineNumber: 23,\n        columnNumber: 10\n    }, this);\n}\n_c = HomePage;\nvar __N_SSP = true;\n// export async function getStaticProps() { \n//     //reserved name, runs before the actual page\n//     //next will wait for the promises here to be resolved\n//     //this code will run only during the build process\n//     //not on the server or the visitor's machines\n//     //examples:\n//     //fetch data from an API\n//     //read files from a file system\n//     return { //you always need to return an object\n//         props: {\n//             meetups: DUMMY_MEETUPS\n//         },\n//         revalidate: 10\n//     };\n// }\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFBMEQ7QUFFMUQsSUFBTUMsYUFBYSxHQUFHO0lBQ3BCO1FBQ0VDLEVBQUUsRUFBRSxJQUFJO1FBQ1JDLEtBQUssRUFBRSxnQkFBZ0I7UUFDdkJDLEtBQUssRUFDSCx3SEFBd0g7UUFDMUhDLE9BQU8sRUFBRSxnQ0FBZ0M7UUFDekNDLFdBQVcsRUFBRSx5QkFBeUI7S0FDdkM7SUFDRDtRQUNFSixFQUFFLEVBQUUsSUFBSTtRQUNSQyxLQUFLLEVBQUUsaUJBQWlCO1FBQ3hCQyxLQUFLLEVBQ0gsd0hBQXdIO1FBQzFIQyxPQUFPLEVBQUUsaUNBQWlDO1FBQzFDQyxXQUFXLEVBQUUsMEJBQTBCO0tBQ3hDO0NBQ0Y7QUFFRCxTQUFTQyxRQUFRLENBQUNDLEtBQUssRUFBRTtJQUN2QixxQkFBTyw4REFBQ1Isc0VBQVU7UUFBQ1MsT0FBTyxFQUFFRCxLQUFLLENBQUNDLE9BQU87Ozs7O1lBQUksQ0FBQztBQUNoRCxDQUFDO0FBRlFGLEtBQUFBLFFBQVE7O0FBY2pCLDRDQUE0QztBQUM1QyxtREFBbUQ7QUFDbkQsNERBQTREO0FBQzVELHlEQUF5RDtBQUN6RCxvREFBb0Q7QUFDcEQsa0JBQWtCO0FBQ2xCLCtCQUErQjtBQUMvQixzQ0FBc0M7QUFDdEMscURBQXFEO0FBQ3JELG1CQUFtQjtBQUNuQixxQ0FBcUM7QUFDckMsYUFBYTtBQUNiLHlCQUF5QjtBQUN6QixTQUFTO0FBQ1QsSUFBSTtBQUVKLCtEQUFlQSxRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTWVldHVwTGlzdCBmcm9tIFwiLi4vY29tcG9uZW50cy9tZWV0dXBzL01lZXR1cExpc3RcIjtcclxuXHJcbmNvbnN0IERVTU1ZX01FRVRVUFMgPSBbXHJcbiAge1xyXG4gICAgaWQ6IFwibTFcIixcclxuICAgIHRpdGxlOiBcIkEgRmlyc3QgTWVldHVwXCIsXHJcbiAgICBpbWFnZTpcclxuICAgICAgXCJodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL3RodW1iL2QvZDMvU3RhZHRiaWxkX00lQzMlQkNuY2hlbi5qcGcvMTAyNHB4LVN0YWR0YmlsZF9NJUMzJUJDbmNoZW4uanBnXCIsXHJcbiAgICBhZGRyZXNzOiBcIlNvbWUgYWRyZXNzIDUsIDEyMzQ1IFNvbWUgQ2l0eVwiLFxyXG4gICAgZGVzY3JpcHRpb246IFwiVGhpcyBpcyBhIGZpcnN0IG1lZXR1cCFcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiBcIm0yXCIsXHJcbiAgICB0aXRsZTogXCJBIFNlY29uZCBNZWV0dXBcIixcclxuICAgIGltYWdlOlxyXG4gICAgICBcImh0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvdGh1bWIvZC9kMy9TdGFkdGJpbGRfTSVDMyVCQ25jaGVuLmpwZy8xMDI0cHgtU3RhZHRiaWxkX00lQzMlQkNuY2hlbi5qcGdcIixcclxuICAgIGFkZHJlc3M6IFwiU29tZSBhZHJlc3MgMTAsIDEyMzQ1IFNvbWUgQ2l0eVwiLFxyXG4gICAgZGVzY3JpcHRpb246IFwiVGhpcyBpcyBhIHNlY29uZCBtZWV0dXAhXCIsXHJcbiAgfSxcclxuXTtcclxuXHJcbmZ1bmN0aW9uIEhvbWVQYWdlKHByb3BzKSB7XHJcbiAgcmV0dXJuIDxNZWV0dXBMaXN0IG1lZXR1cHM9e3Byb3BzLm1lZXR1cHN9IC8+O1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCkge1xyXG4gICAgLy9mZXRjaCBkYXRhIGZyb20gYW4gQVBJXHJcbiAgICAvL3RoaXMgd2lsbCBydW4gb24gdGhlIHNlcnZlcixcclxuICAgIC8vc28geW91IGNhbiBldmVuIHVzZSBjcmVkZW50aWFscyBvciB0aGluZ3NcclxuICAgIC8veW91IGRvbid0IHdhbnQgZXhwb3NlZFxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczogRFVNTVlfXHJcbiAgICB9O1xyXG59XHJcblxyXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7IFxyXG4vLyAgICAgLy9yZXNlcnZlZCBuYW1lLCBydW5zIGJlZm9yZSB0aGUgYWN0dWFsIHBhZ2VcclxuLy8gICAgIC8vbmV4dCB3aWxsIHdhaXQgZm9yIHRoZSBwcm9taXNlcyBoZXJlIHRvIGJlIHJlc29sdmVkXHJcbi8vICAgICAvL3RoaXMgY29kZSB3aWxsIHJ1biBvbmx5IGR1cmluZyB0aGUgYnVpbGQgcHJvY2Vzc1xyXG4vLyAgICAgLy9ub3Qgb24gdGhlIHNlcnZlciBvciB0aGUgdmlzaXRvcidzIG1hY2hpbmVzXHJcbi8vICAgICAvL2V4YW1wbGVzOlxyXG4vLyAgICAgLy9mZXRjaCBkYXRhIGZyb20gYW4gQVBJXHJcbi8vICAgICAvL3JlYWQgZmlsZXMgZnJvbSBhIGZpbGUgc3lzdGVtXHJcbi8vICAgICByZXR1cm4geyAvL3lvdSBhbHdheXMgbmVlZCB0byByZXR1cm4gYW4gb2JqZWN0XHJcbi8vICAgICAgICAgcHJvcHM6IHtcclxuLy8gICAgICAgICAgICAgbWVldHVwczogRFVNTVlfTUVFVFVQU1xyXG4vLyAgICAgICAgIH0sXHJcbi8vICAgICAgICAgcmV2YWxpZGF0ZTogMTBcclxuLy8gICAgIH07XHJcbi8vIH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlO1xyXG4iXSwibmFtZXMiOlsiTWVldHVwTGlzdCIsIkRVTU1ZX01FRVRVUFMiLCJpZCIsInRpdGxlIiwiaW1hZ2UiLCJhZGRyZXNzIiwiZGVzY3JpcHRpb24iLCJIb21lUGFnZSIsInByb3BzIiwibWVldHVwcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});
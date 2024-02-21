"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/products/page",{

/***/ "(app-pages-browser)/./app/components/ProductCard.jsx":
/*!****************************************!*\
  !*** ./app/components/ProductCard.jsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction ProductCard(param) {\n    let { product } = param;\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        async function fetchProduct() {\n            if (product.id) {\n                try {\n                    const productResponse = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"http://localhost:8000/products/\".concat(product.id, \"/\"));\n                    const brandResponse = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"http://localhost:8000/sorting/brands/\".concat(productResponse.data.brandID, \"/\"));\n                    const brandName1 = brandResponse.data.brandName;\n                } catch (error) {\n                    console.error(\"Error fetching product:\", error);\n                }\n            }\n        }\n        fetchProduct();\n    }, [\n        product.id\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mt-5 grid grid-cols-2 gap-4 bg-base-100 hover:shadow-lg rounded-2xl border-solid border-2 border-primary max-h-64\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"figure\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    className: \"p-2 max-h-64\",\n                    src: product.image,\n                    alt: product.name\n                }, void 0, false, {\n                    fileName: \"/Users/nessaa/Documents/PibuProject/pibu/app/components/ProductCard.jsx\",\n                    lineNumber: 26,\n                    columnNumber: 15\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/nessaa/Documents/PibuProject/pibu/app/components/ProductCard.jsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"card-body\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"card-title\",\n                        children: brandName\n                    }, void 0, false, {\n                        fileName: \"/Users/nessaa/Documents/PibuProject/pibu/app/components/ProductCard.jsx\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: product.ProductDescription\n                    }, void 0, false, {\n                        fileName: \"/Users/nessaa/Documents/PibuProject/pibu/app/components/ProductCard.jsx\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: product.RetailPrice\n                    }, void 0, false, {\n                        fileName: \"/Users/nessaa/Documents/PibuProject/pibu/app/components/ProductCard.jsx\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"card-actions justify-end\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            href: \"/products/[id]\",\n                            as: \"/products/\".concat(product.id),\n                            className: \"btn btn-secondary\",\n                            children: \"More Details\"\n                        }, void 0, false, {\n                            fileName: \"/Users/nessaa/Documents/PibuProject/pibu/app/components/ProductCard.jsx\",\n                            lineNumber: 37,\n                            columnNumber: 9\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/nessaa/Documents/PibuProject/pibu/app/components/ProductCard.jsx\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nessaa/Documents/PibuProject/pibu/app/components/ProductCard.jsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nessaa/Documents/PibuProject/pibu/app/components/ProductCard.jsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n}\n_s(ProductCard, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = ProductCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductCard);\nvar _c;\n$RefreshReg$(_c, \"ProductCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL1Byb2R1Y3RDYXJkLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUEwQjtBQUNHO0FBQ0g7QUFDa0I7QUFFNUMsU0FBU0ssWUFBWSxLQUFXO1FBQVgsRUFBRUMsT0FBTyxFQUFFLEdBQVg7O0lBQ25CSCxnREFBU0EsQ0FBQztRQUNSLGVBQWVJO1lBQ1gsSUFBSUQsUUFBUUUsRUFBRSxFQUFFO2dCQUNaLElBQUk7b0JBQ0EsTUFBTUMsa0JBQWtCLE1BQU1QLDZDQUFLQSxDQUFDUSxHQUFHLENBQUMsa0NBQTZDLE9BQVhKLFFBQVFFLEVBQUUsRUFBQztvQkFDckYsTUFBTUcsZ0JBQWdCLE1BQU1ULDZDQUFLQSxDQUFDUSxHQUFHLENBQUMsd0NBQXFFLE9BQTdCRCxnQkFBZ0JHLElBQUksQ0FBQ0MsT0FBTyxFQUFDO29CQUMzRyxNQUFNQyxhQUFZSCxjQUFjQyxJQUFJLENBQUNFLFNBQVM7Z0JBQ2xELEVBQUUsT0FBT0MsT0FBTztvQkFDWkMsUUFBUUQsS0FBSyxDQUFDLDJCQUEyQkE7Z0JBQzdDO1lBQ0o7UUFDSjtRQUVFUjtJQUNKLEdBQUc7UUFBQ0QsUUFBUUUsRUFBRTtLQUFDO0lBR2YscUJBQ0UsOERBQUNTO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQzswQkFBTyw0RUFBQ0M7b0JBQUlGLFdBQVU7b0JBQWVHLEtBQUtmLFFBQVFnQixLQUFLO29CQUFFQyxLQUFLakIsUUFBUWtCLElBQUk7Ozs7Ozs7Ozs7OzBCQUMzRSw4REFBQ1A7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDTzt3QkFBR1AsV0FBVTtrQ0FBY0o7Ozs7OztrQ0FDNUIsOERBQUNZO2tDQUFHcEIsUUFBUXFCLGtCQUFrQjs7Ozs7O2tDQU05Qiw4REFBQ0Q7a0NBQUdwQixRQUFRc0IsV0FBVzs7Ozs7O2tDQUN2Qiw4REFBQ1g7d0JBQUlDLFdBQVU7a0NBQ2YsNEVBQUNqQixpREFBSUE7NEJBQUM0QixNQUFPOzRCQUFpQkMsSUFBSSxhQUF3QixPQUFYeEIsUUFBUUUsRUFBRTs0QkFBSVUsV0FBVTtzQ0FBb0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT25HO0dBdENTYjtLQUFBQTtBQXdDVCwrREFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9Qcm9kdWN0Q2FyZC5qc3g/Y2Q4NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5mdW5jdGlvbiBQcm9kdWN0Q2FyZCh7IHByb2R1Y3QgfSkge1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoUHJvZHVjdCgpIHtcbiAgICAgICAgaWYgKHByb2R1Y3QuaWQpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJvZHVjdFJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KGBodHRwOi8vbG9jYWxob3N0OjgwMDAvcHJvZHVjdHMvJHtwcm9kdWN0LmlkfS9gKTtcbiAgICAgICAgICAgICAgICBjb25zdCBicmFuZFJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KGBodHRwOi8vbG9jYWxob3N0OjgwMDAvc29ydGluZy9icmFuZHMvJHtwcm9kdWN0UmVzcG9uc2UuZGF0YS5icmFuZElEfS9gKTtcbiAgICAgICAgICAgICAgICBjb25zdCBicmFuZE5hbWUgPSBicmFuZFJlc3BvbnNlLmRhdGEuYnJhbmROYW1lO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBwcm9kdWN0OicsIGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgICAgZmV0Y2hQcm9kdWN0KCk7XG4gIH0sIFtwcm9kdWN0LmlkXSk7XG5cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNSBncmlkIGdyaWQtY29scy0yIGdhcC00IGJnLWJhc2UtMTAwIGhvdmVyOnNoYWRvdy1sZyByb3VuZGVkLTJ4bCBib3JkZXItc29saWQgYm9yZGVyLTIgYm9yZGVyLXByaW1hcnkgbWF4LWgtNjRcIj5cbiAgICAgIDxmaWd1cmU+PGltZyBjbGFzc05hbWU9XCJwLTIgbWF4LWgtNjRcIiBzcmM9e3Byb2R1Y3QuaW1hZ2V9IGFsdD17cHJvZHVjdC5uYW1lfSAvPjwvZmlndXJlPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj57YnJhbmROYW1lfTwvaDI+XG4gICAgICAgIDxwPntwcm9kdWN0LlByb2R1Y3REZXNjcmlwdGlvbn08L3A+XG4gICAgICAgIHsvKiA8dWw+XG4gICAgICAgICAge3Byb2R1Y3QuUHJvZHVjdEZlYXR1cmVzLm1hcCgoZmVhdHVyZSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT57ZmVhdHVyZX08L2xpPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPiAqL31cbiAgICAgICAgPHA+e3Byb2R1Y3QuUmV0YWlsUHJpY2V9PC9wPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYWN0aW9ucyBqdXN0aWZ5LWVuZFwiPlxuICAgICAgICA8TGluayBocmVmPXtgL3Byb2R1Y3RzL1tpZF1gfSBhcz17YC9wcm9kdWN0cy8ke3Byb2R1Y3QuaWR9YH0gY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIj5cbiAgICAgICAgICBNb3JlIERldGFpbHNcbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0Q2FyZDsiXSwibmFtZXMiOlsiUmVhY3QiLCJMaW5rIiwiYXhpb3MiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlByb2R1Y3RDYXJkIiwicHJvZHVjdCIsImZldGNoUHJvZHVjdCIsImlkIiwicHJvZHVjdFJlc3BvbnNlIiwiZ2V0IiwiYnJhbmRSZXNwb25zZSIsImRhdGEiLCJicmFuZElEIiwiYnJhbmROYW1lIiwiZXJyb3IiLCJjb25zb2xlIiwiZGl2IiwiY2xhc3NOYW1lIiwiZmlndXJlIiwiaW1nIiwic3JjIiwiaW1hZ2UiLCJhbHQiLCJuYW1lIiwiaDIiLCJwIiwiUHJvZHVjdERlc2NyaXB0aW9uIiwiUmV0YWlsUHJpY2UiLCJocmVmIiwiYXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/ProductCard.jsx\n"));

/***/ })

});
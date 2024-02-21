"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/SkincareQuiz/[id]/page",{

/***/ "(app-pages-browser)/./app/SkincareQuiz/[id]/page.jsx":
/*!****************************************!*\
  !*** ./app/SkincareQuiz/[id]/page.jsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ QuizRecommendations; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction QuizRecommendations() {\n    _s();\n    // State to store quiz results and product list\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname)();\n    const id = pathname.split(\"/\").pop(); // Extract id from pathname\n    const [quizResults, setQuizResults] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [productList, setProductList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    // Fetch quiz results from API\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"http://localhost:8000/skinquiz/\".concat(id)).then((response)=>{\n            console.log(\"Quiz results:\", response.data);\n            setQuizResults(response.data);\n        }).catch((error)=>{\n            console.error(\"Error fetching quiz results:\", error);\n        });\n    }, []);\n    // Fetch product list from API\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"http://localhost:8000/products/list\").then((response)=>{\n            console.log(\"Product list:\", response.data);\n            setProductList(response.data);\n        }).catch((error)=>{\n            console.error(\"Error fetching product list:\", error);\n        });\n    }, []);\n    // Filter product list based on quiz results\n    const filterProducts = ()=>{\n        if (!quizResults || !quizResults.skin_type || quizResults.skin_type.length === 0) {\n            return []; // Return an empty array if quiz results are not available or no skin types are selected\n        }\n        const lowerCaseSkinTypes = quizResults.skin_type.map((skinType)=>skinType.toLowerCase());\n        // Filter products based on selected skin types\n        let filteredProducts1 = productList.filter((product)=>{\n            const productSkinTypes = product.skintypes.toLowerCase().split(\",\");\n            return lowerCaseSkinTypes.some((selectedSkinType)=>productSkinTypes.includes(selectedSkinType));\n        });\n        if (quizResults.skincare_routine.length > 0) {\n            filteredProducts1 = filteredProducts1.filter((product)=>{\n                return product.category && quizResults.skincare_routine.some((selectedRoutine)=>product.category.includes(selectedRoutine));\n            });\n        }\n        return filteredProducts1;\n    };\n    // Render the recommendation page\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Product Recommendations\"\n            }, void 0, false, {\n                fileName: \"/Users/nessaa/Documents/PibuProject/pibu/app/SkincareQuiz/[id]/page.jsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this),\n            quizResults && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: \"Quiz Results\"\n                }, void 0, false, {\n                    fileName: \"/Users/nessaa/Documents/PibuProject/pibu/app/SkincareQuiz/[id]/page.jsx\",\n                    lineNumber: 65,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/nessaa/Documents/PibuProject/pibu/app/SkincareQuiz/[id]/page.jsx\",\n                lineNumber: 64,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Filtered Products\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nessaa/Documents/PibuProject/pibu/app/SkincareQuiz/[id]/page.jsx\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"xl:col-end-6 xl:col-span-4 grid xl:grid-cols-2 gap-5\",\n                        children: filteredProducts.length > 0 ? filteredProducts.map((product)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProductCard, {\n                                product: product\n                            }, product.id, false, {\n                                fileName: \"/Users/nessaa/Documents/PibuProject/pibu/app/SkincareQuiz/[id]/page.jsx\",\n                                lineNumber: 74,\n                                columnNumber: 17\n                            }, this)) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            style: {\n                                marginTop: \"20px\"\n                            },\n                            children: \"There are no products found.\"\n                        }, void 0, false, {\n                            fileName: \"/Users/nessaa/Documents/PibuProject/pibu/app/SkincareQuiz/[id]/page.jsx\",\n                            lineNumber: 77,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/nessaa/Documents/PibuProject/pibu/app/SkincareQuiz/[id]/page.jsx\",\n                        lineNumber: 71,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"product-list\",\n                        children: filterProducts().map((product)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProductCard, {\n                                product: product\n                            }, product.id, false, {\n                                fileName: \"/Users/nessaa/Documents/PibuProject/pibu/app/SkincareQuiz/[id]/page.jsx\",\n                                lineNumber: 82,\n                                columnNumber: 17\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/Users/nessaa/Documents/PibuProject/pibu/app/SkincareQuiz/[id]/page.jsx\",\n                        lineNumber: 80,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nessaa/Documents/PibuProject/pibu/app/SkincareQuiz/[id]/page.jsx\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nessaa/Documents/PibuProject/pibu/app/SkincareQuiz/[id]/page.jsx\",\n        lineNumber: 61,\n        columnNumber: 5\n    }, this);\n}\n_s(QuizRecommendations, \"TIMbT9AEYUmmV9PyOLE8MMbAaWU=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname\n    ];\n});\n_c = QuizRecommendations;\nvar _c;\n$RefreshReg$(_c, \"QuizRecommendations\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9Ta2luY2FyZVF1aXovW2lkXS9wYWdlLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNtRDtBQUNMO0FBQ3BCO0FBRVgsU0FBU0s7O0lBQ3RCLCtDQUErQztJQUMvQyxNQUFNQyxXQUFXSCw0REFBV0E7SUFDNUIsTUFBTUksS0FBS0QsU0FBU0UsS0FBSyxDQUFDLEtBQUtDLEdBQUcsSUFBSSwyQkFBMkI7SUFFakUsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdWLCtDQUFRQSxDQUFDO0lBQy9DLE1BQU0sQ0FBQ1csYUFBYUMsZUFBZSxHQUFHWiwrQ0FBUUEsQ0FBQyxFQUFFO0lBRWpELDhCQUE4QjtJQUM5QkMsZ0RBQVNBLENBQUM7UUFDUkUsNkNBQUtBLENBQUNVLEdBQUcsQ0FBQyxrQ0FBcUMsT0FBSFAsS0FDekNRLElBQUksQ0FBQ0MsQ0FBQUE7WUFDSkMsUUFBUUMsR0FBRyxDQUFDLGlCQUFpQkYsU0FBU0csSUFBSTtZQUMxQ1IsZUFBZUssU0FBU0csSUFBSTtRQUM5QixHQUNDQyxLQUFLLENBQUNDLENBQUFBO1lBQ0xKLFFBQVFJLEtBQUssQ0FBQyxnQ0FBZ0NBO1FBQ2hEO0lBQ0osR0FBRyxFQUFFO0lBRUwsOEJBQThCO0lBQzlCbkIsZ0RBQVNBLENBQUM7UUFDUkUsNkNBQUtBLENBQUNVLEdBQUcsQ0FBRSx1Q0FDUkMsSUFBSSxDQUFDQyxDQUFBQTtZQUNKQyxRQUFRQyxHQUFHLENBQUMsaUJBQWlCRixTQUFTRyxJQUFJO1lBQzFDTixlQUFlRyxTQUFTRyxJQUFJO1FBQzlCLEdBQ0NDLEtBQUssQ0FBQ0MsQ0FBQUE7WUFDTEosUUFBUUksS0FBSyxDQUFDLGdDQUFnQ0E7UUFDaEQ7SUFDSixHQUFHLEVBQUU7SUFFTCw0Q0FBNEM7SUFDNUMsTUFBTUMsaUJBQWlCO1FBQ3JCLElBQUksQ0FBQ1osZUFBZSxDQUFDQSxZQUFZYSxTQUFTLElBQUliLFlBQVlhLFNBQVMsQ0FBQ0MsTUFBTSxLQUFLLEdBQUc7WUFDOUUsT0FBTyxFQUFFLEVBQUUsd0ZBQXdGO1FBQ3ZHO1FBRUEsTUFBTUMscUJBQXFCZixZQUFZYSxTQUFTLENBQUNHLEdBQUcsQ0FBQ0MsQ0FBQUEsV0FBWUEsU0FBU0MsV0FBVztRQUVyRiwrQ0FBK0M7UUFDL0MsSUFBSUMsb0JBQW1CakIsWUFBWWtCLE1BQU0sQ0FBQ0MsQ0FBQUE7WUFDeEMsTUFBTUMsbUJBQW1CRCxRQUFRRSxTQUFTLENBQUNMLFdBQVcsR0FBR3BCLEtBQUssQ0FBQztZQUMvRCxPQUFPaUIsbUJBQW1CUyxJQUFJLENBQUNDLENBQUFBLG1CQUFvQkgsaUJBQWlCSSxRQUFRLENBQUNEO1FBQy9FO1FBRUEsSUFBSXpCLFlBQVkyQixnQkFBZ0IsQ0FBQ2IsTUFBTSxHQUFHLEdBQUc7WUFDM0NLLG9CQUFtQkEsa0JBQWlCQyxNQUFNLENBQUNDLENBQUFBO2dCQUN6QyxPQUFPQSxRQUFRTyxRQUFRLElBQUk1QixZQUFZMkIsZ0JBQWdCLENBQUNILElBQUksQ0FBQ0ssQ0FBQUEsa0JBQW1CUixRQUFRTyxRQUFRLENBQUNGLFFBQVEsQ0FBQ0c7WUFDNUc7UUFDRjtRQUNFLE9BQU9WO0lBQ1Q7SUFDRixpQ0FBaUM7SUFDakMscUJBQ0UsOERBQUNXOzswQkFDQyw4REFBQ0M7MEJBQUc7Ozs7OztZQUNIL0IsNkJBQ0MsOERBQUM4QjswQkFDQyw0RUFBQ0U7OEJBQUc7Ozs7Ozs7Ozs7OzBCQUlSLDhEQUFDRjs7a0NBQ0MsOERBQUNFO2tDQUFHOzs7Ozs7a0NBQ0osOERBQUNGO3dCQUFJRyxXQUFVO2tDQUNWZCxpQkFBaUJMLE1BQU0sR0FBRyxJQUMzQkssaUJBQWlCSCxHQUFHLENBQUNLLENBQUFBLHdCQUNqQiw4REFBQ2E7Z0NBQTZCYixTQUFTQTsrQkFBckJBLFFBQVF4QixFQUFFOzs7O3NEQUdoQyw4REFBQ3NDOzRCQUFFQyxPQUFPO2dDQUFFQyxXQUFXOzRCQUFPO3NDQUFHOzs7Ozs7Ozs7OztrQ0FHckMsOERBQUNQO3dCQUFJRyxXQUFVO2tDQUNackIsaUJBQWlCSSxHQUFHLENBQUNLLENBQUFBLHdCQUNoQiw4REFBQ2E7Z0NBQTZCYixTQUFTQTsrQkFBckJBLFFBQVF4QixFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTTVDO0dBbEZ3QkY7O1FBRUxGLHdEQUFXQTs7O0tBRk5FIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9Ta2luY2FyZVF1aXovW2lkXS9wYWdlLmpzeD85MWE3Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUGF0aG5hbWUgfSBmcm9tICduZXh0L25hdmlnYXRpb24nO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUXVpelJlY29tbWVuZGF0aW9ucygpIHtcbiAgLy8gU3RhdGUgdG8gc3RvcmUgcXVpeiByZXN1bHRzIGFuZCBwcm9kdWN0IGxpc3RcbiAgY29uc3QgcGF0aG5hbWUgPSB1c2VQYXRobmFtZSgpO1xuICBjb25zdCBpZCA9IHBhdGhuYW1lLnNwbGl0KCcvJykucG9wKCk7IC8vIEV4dHJhY3QgaWQgZnJvbSBwYXRobmFtZVxuXG4gIGNvbnN0IFtxdWl6UmVzdWx0cywgc2V0UXVpelJlc3VsdHNdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtwcm9kdWN0TGlzdCwgc2V0UHJvZHVjdExpc3RdID0gdXNlU3RhdGUoW10pO1xuXG4gIC8vIEZldGNoIHF1aXogcmVzdWx0cyBmcm9tIEFQSVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGF4aW9zLmdldChgaHR0cDovL2xvY2FsaG9zdDo4MDAwL3NraW5xdWl6LyR7aWR9YClcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ1F1aXogcmVzdWx0czonLCByZXNwb25zZS5kYXRhKTtcbiAgICAgICAgc2V0UXVpelJlc3VsdHMocmVzcG9uc2UuZGF0YSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgcXVpeiByZXN1bHRzOicsIGVycm9yKTtcbiAgICAgIH0pO1xuICB9LCBbXSk7XG5cbiAgLy8gRmV0Y2ggcHJvZHVjdCBsaXN0IGZyb20gQVBJXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXhpb3MuZ2V0KGBodHRwOi8vbG9jYWxob3N0OjgwMDAvcHJvZHVjdHMvbGlzdGApXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdQcm9kdWN0IGxpc3Q6JywgcmVzcG9uc2UuZGF0YSk7XG4gICAgICAgIHNldFByb2R1Y3RMaXN0KHJlc3BvbnNlLmRhdGEpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHByb2R1Y3QgbGlzdDonLCBlcnJvcik7XG4gICAgICB9KTtcbiAgfSwgW10pO1xuXG4gIC8vIEZpbHRlciBwcm9kdWN0IGxpc3QgYmFzZWQgb24gcXVpeiByZXN1bHRzXG4gIGNvbnN0IGZpbHRlclByb2R1Y3RzID0gKCkgPT4ge1xuICAgIGlmICghcXVpelJlc3VsdHMgfHwgIXF1aXpSZXN1bHRzLnNraW5fdHlwZSB8fCBxdWl6UmVzdWx0cy5za2luX3R5cGUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiBbXTsgLy8gUmV0dXJuIGFuIGVtcHR5IGFycmF5IGlmIHF1aXogcmVzdWx0cyBhcmUgbm90IGF2YWlsYWJsZSBvciBubyBza2luIHR5cGVzIGFyZSBzZWxlY3RlZFxuICAgIH1cblxuICAgIGNvbnN0IGxvd2VyQ2FzZVNraW5UeXBlcyA9IHF1aXpSZXN1bHRzLnNraW5fdHlwZS5tYXAoc2tpblR5cGUgPT4gc2tpblR5cGUudG9Mb3dlckNhc2UoKSk7XG5cbiAgICAvLyBGaWx0ZXIgcHJvZHVjdHMgYmFzZWQgb24gc2VsZWN0ZWQgc2tpbiB0eXBlc1xuICAgIGxldCBmaWx0ZXJlZFByb2R1Y3RzID0gcHJvZHVjdExpc3QuZmlsdGVyKHByb2R1Y3QgPT4ge1xuICAgICAgY29uc3QgcHJvZHVjdFNraW5UeXBlcyA9IHByb2R1Y3Quc2tpbnR5cGVzLnRvTG93ZXJDYXNlKCkuc3BsaXQoJywnKTtcbiAgICAgIHJldHVybiBsb3dlckNhc2VTa2luVHlwZXMuc29tZShzZWxlY3RlZFNraW5UeXBlID0+IHByb2R1Y3RTa2luVHlwZXMuaW5jbHVkZXMoc2VsZWN0ZWRTa2luVHlwZSkpO1xuICAgIH0pO1xuXG4gICAgaWYgKHF1aXpSZXN1bHRzLnNraW5jYXJlX3JvdXRpbmUubGVuZ3RoID4gMCkge1xuICAgICAgZmlsdGVyZWRQcm9kdWN0cyA9IGZpbHRlcmVkUHJvZHVjdHMuZmlsdGVyKHByb2R1Y3QgPT4ge1xuICAgICAgICByZXR1cm4gcHJvZHVjdC5jYXRlZ29yeSAmJiBxdWl6UmVzdWx0cy5za2luY2FyZV9yb3V0aW5lLnNvbWUoc2VsZWN0ZWRSb3V0aW5lID0+IHByb2R1Y3QuY2F0ZWdvcnkuaW5jbHVkZXMoc2VsZWN0ZWRSb3V0aW5lKSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgICByZXR1cm4gZmlsdGVyZWRQcm9kdWN0cztcbiAgICB9O1xuICAvLyBSZW5kZXIgdGhlIHJlY29tbWVuZGF0aW9uIHBhZ2VcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxPlByb2R1Y3QgUmVjb21tZW5kYXRpb25zPC9oMT5cbiAgICAgIHtxdWl6UmVzdWx0cyAmJiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGgyPlF1aXogUmVzdWx0czwvaDI+XG4gICAgICAgICAgey8qIERpc3BsYXkgcXVpeiByZXN1bHRzIGhlcmUgKi99XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMj5GaWx0ZXJlZCBQcm9kdWN0czwvaDI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwieGw6Y29sLWVuZC02IHhsOmNvbC1zcGFuLTQgZ3JpZCB4bDpncmlkLWNvbHMtMiBnYXAtNVwiPlxuICAgICAgICAgICAge2ZpbHRlcmVkUHJvZHVjdHMubGVuZ3RoID4gMCA/IChcbiAgICAgICAgICAgIGZpbHRlcmVkUHJvZHVjdHMubWFwKHByb2R1Y3QgPT4gKFxuICAgICAgICAgICAgICAgIDxQcm9kdWN0Q2FyZCBrZXk9e3Byb2R1Y3QuaWR9IHByb2R1Y3Q9e3Byb2R1Y3R9IC8+XG4gICAgICAgICAgICApKVxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxwIHN0eWxlPXt7IG1hcmdpblRvcDogJzIwcHgnIH19PlRoZXJlIGFyZSBubyBwcm9kdWN0cyBmb3VuZC48L3A+XG4gICAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWxpc3RcIj5cbiAgICAgICAgICB7ZmlsdGVyUHJvZHVjdHMoKS5tYXAocHJvZHVjdCA9PiAoXG4gICAgICAgICAgICAgICAgPFByb2R1Y3RDYXJkIGtleT17cHJvZHVjdC5pZH0gcHJvZHVjdD17cHJvZHVjdH0gLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUGF0aG5hbWUiLCJheGlvcyIsIlF1aXpSZWNvbW1lbmRhdGlvbnMiLCJwYXRobmFtZSIsImlkIiwic3BsaXQiLCJwb3AiLCJxdWl6UmVzdWx0cyIsInNldFF1aXpSZXN1bHRzIiwicHJvZHVjdExpc3QiLCJzZXRQcm9kdWN0TGlzdCIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwiY2F0Y2giLCJlcnJvciIsImZpbHRlclByb2R1Y3RzIiwic2tpbl90eXBlIiwibGVuZ3RoIiwibG93ZXJDYXNlU2tpblR5cGVzIiwibWFwIiwic2tpblR5cGUiLCJ0b0xvd2VyQ2FzZSIsImZpbHRlcmVkUHJvZHVjdHMiLCJmaWx0ZXIiLCJwcm9kdWN0IiwicHJvZHVjdFNraW5UeXBlcyIsInNraW50eXBlcyIsInNvbWUiLCJzZWxlY3RlZFNraW5UeXBlIiwiaW5jbHVkZXMiLCJza2luY2FyZV9yb3V0aW5lIiwiY2F0ZWdvcnkiLCJzZWxlY3RlZFJvdXRpbmUiLCJkaXYiLCJoMSIsImgyIiwiY2xhc3NOYW1lIiwiUHJvZHVjdENhcmQiLCJwIiwic3R5bGUiLCJtYXJnaW5Ub3AiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/SkincareQuiz/[id]/page.jsx\n"));

/***/ })

});
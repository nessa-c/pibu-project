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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ QuizRecommendations; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction QuizRecommendations() {\n    _s();\n    // State to store quiz results and product list\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname)();\n    const id = pathname.split(\"/\").pop(); // Extract id from pathname\n    const [quizResults, setQuizResults] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [productList, setProductList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    // Fetch quiz results from API\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"http://localhost:8000/skinquiz/\".concat(id)).then((response)=>{\n            console.log(\"Quiz results:\", response.data);\n            setQuizResults(response.data);\n        }).catch((error)=>{\n            console.error(\"Error fetching quiz results:\", error);\n        });\n    }, []);\n    // Fetch product list from API\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"http://localhost:8000/products/list\").then((response)=>{\n            console.log(\"Product list:\", response.data);\n            setProductList(response.data);\n        }).catch((error)=>{\n            console.error(\"Error fetching product list:\", error);\n        });\n    }, []);\n    // Filter product list based on quiz results\n    const filterProducts = ()=>{\n        if (!quizResults || !quizResults.skin_type || quizResults.skin_type.length === 0) {\n            return []; // Return an empty array if quiz results are not available or no skin types are selected\n        }\n        const lowerCaseSkinTypes = quizResults.skin_type.map((skinType)=>skinType.toLowerCase());\n        // Filter products based on selected skin types\n        let filteredProducts = productList.filter((product)=>{\n            const productSkinTypes = product.skintypes.toLowerCase().split(\",\");\n            return lowerCaseSkinTypes.some((selectedSkinType)=>productSkinTypes.includes(selectedSkinType));\n        });\n        console.log(\"FILTERED PRODUCTS 1: \", filteredProducts);\n        if (quizResults.skincare_routine) {\n            filteredProducts = filteredProducts.filter((product)=>{\n                // Check if all of the selected skincare routines are present in the product's categories\n                return quizResults.skincare_routine.every((selectedRoutine)=>product.product_category.includes(selectedRoutine));\n            });\n        }\n        return filteredProducts;\n    };\n    console.log(\"FILTERED PRODUCTS\", filterProducts());\n    // Render the recommendation page\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Product Recommendations\"\n            }, void 0, false, {\n                fileName: \"/Users/nessaa/Documents/PibuProject/pibu/app/SkincareQuiz/[id]/page.jsx\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, this),\n            quizResults && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: \"Quiz Results\"\n                }, void 0, false, {\n                    fileName: \"/Users/nessaa/Documents/PibuProject/pibu/app/SkincareQuiz/[id]/page.jsx\",\n                    lineNumber: 69,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/nessaa/Documents/PibuProject/pibu/app/SkincareQuiz/[id]/page.jsx\",\n                lineNumber: 68,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Filtered Products\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nessaa/Documents/PibuProject/pibu/app/SkincareQuiz/[id]/page.jsx\",\n                        lineNumber: 74,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"product-list\",\n                        children: filterProducts().map((product)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"product-item\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: product.image,\n                                        alt: product.name\n                                    }, void 0, false, {\n                                        fileName: \"/Users/nessaa/Documents/PibuProject/pibu/app/SkincareQuiz/[id]/page.jsx\",\n                                        lineNumber: 79,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        children: product.name\n                                    }, void 0, false, {\n                                        fileName: \"/Users/nessaa/Documents/PibuProject/pibu/app/SkincareQuiz/[id]/page.jsx\",\n                                        lineNumber: 80,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, product.id, true, {\n                                fileName: \"/Users/nessaa/Documents/PibuProject/pibu/app/SkincareQuiz/[id]/page.jsx\",\n                                lineNumber: 77,\n                                columnNumber: 13\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/Users/nessaa/Documents/PibuProject/pibu/app/SkincareQuiz/[id]/page.jsx\",\n                        lineNumber: 75,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nessaa/Documents/PibuProject/pibu/app/SkincareQuiz/[id]/page.jsx\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nessaa/Documents/PibuProject/pibu/app/SkincareQuiz/[id]/page.jsx\",\n        lineNumber: 65,\n        columnNumber: 5\n    }, this);\n}\n_s(QuizRecommendations, \"TIMbT9AEYUmmV9PyOLE8MMbAaWU=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname\n    ];\n});\n_c = QuizRecommendations;\nvar _c;\n$RefreshReg$(_c, \"QuizRecommendations\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9Ta2luY2FyZVF1aXovW2lkXS9wYWdlLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNtRDtBQUNMO0FBQ3BCO0FBRVgsU0FBU0s7O0lBQ3RCLCtDQUErQztJQUMvQyxNQUFNQyxXQUFXSCw0REFBV0E7SUFDNUIsTUFBTUksS0FBS0QsU0FBU0UsS0FBSyxDQUFDLEtBQUtDLEdBQUcsSUFBSSwyQkFBMkI7SUFFakUsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdWLCtDQUFRQSxDQUFDO0lBQy9DLE1BQU0sQ0FBQ1csYUFBYUMsZUFBZSxHQUFHWiwrQ0FBUUEsQ0FBQyxFQUFFO0lBRWpELDhCQUE4QjtJQUM5QkMsZ0RBQVNBLENBQUM7UUFDUkUsNkNBQUtBLENBQUNVLEdBQUcsQ0FBQyxrQ0FBcUMsT0FBSFAsS0FDekNRLElBQUksQ0FBQ0MsQ0FBQUE7WUFDSkMsUUFBUUMsR0FBRyxDQUFDLGlCQUFpQkYsU0FBU0csSUFBSTtZQUMxQ1IsZUFBZUssU0FBU0csSUFBSTtRQUM5QixHQUNDQyxLQUFLLENBQUNDLENBQUFBO1lBQ0xKLFFBQVFJLEtBQUssQ0FBQyxnQ0FBZ0NBO1FBQ2hEO0lBQ0osR0FBRyxFQUFFO0lBRUwsOEJBQThCO0lBQzlCbkIsZ0RBQVNBLENBQUM7UUFDUkUsNkNBQUtBLENBQUNVLEdBQUcsQ0FBRSx1Q0FDUkMsSUFBSSxDQUFDQyxDQUFBQTtZQUNKQyxRQUFRQyxHQUFHLENBQUMsaUJBQWlCRixTQUFTRyxJQUFJO1lBQzFDTixlQUFlRyxTQUFTRyxJQUFJO1FBQzlCLEdBQ0NDLEtBQUssQ0FBQ0MsQ0FBQUE7WUFDTEosUUFBUUksS0FBSyxDQUFDLGdDQUFnQ0E7UUFDaEQ7SUFDSixHQUFHLEVBQUU7SUFFTCw0Q0FBNEM7SUFDNUMsTUFBTUMsaUJBQWlCO1FBQ3JCLElBQUksQ0FBQ1osZUFBZSxDQUFDQSxZQUFZYSxTQUFTLElBQUliLFlBQVlhLFNBQVMsQ0FBQ0MsTUFBTSxLQUFLLEdBQUc7WUFDOUUsT0FBTyxFQUFFLEVBQUUsd0ZBQXdGO1FBQ3ZHO1FBRUEsTUFBTUMscUJBQXFCZixZQUFZYSxTQUFTLENBQUNHLEdBQUcsQ0FBQ0MsQ0FBQUEsV0FBWUEsU0FBU0MsV0FBVztRQUVyRiwrQ0FBK0M7UUFDL0MsSUFBSUMsbUJBQW1CakIsWUFBWWtCLE1BQU0sQ0FBQ0MsQ0FBQUE7WUFDeEMsTUFBTUMsbUJBQW1CRCxRQUFRRSxTQUFTLENBQUNMLFdBQVcsR0FBR3BCLEtBQUssQ0FBQztZQUMvRCxPQUFPaUIsbUJBQW1CUyxJQUFJLENBQUNDLENBQUFBLG1CQUFvQkgsaUJBQWlCSSxRQUFRLENBQUNEO1FBQy9FO1FBQ0FsQixRQUFRQyxHQUFHLENBQUMseUJBQXlCVztRQUdyQyxJQUFJbkIsWUFBWTJCLGdCQUFnQixFQUFFO1lBQ2hDUixtQkFBbUJBLGlCQUFpQkMsTUFBTSxDQUFDQyxDQUFBQTtnQkFDdkMseUZBQXlGO2dCQUN6RixPQUFPckIsWUFBWTJCLGdCQUFnQixDQUFDQyxLQUFLLENBQUNDLENBQUFBLGtCQUFtQlIsUUFBUVMsZ0JBQWdCLENBQUNKLFFBQVEsQ0FBQ0c7WUFDbkc7UUFDSjtRQUNJLE9BQU9WO0lBQ1Q7SUFDRlosUUFBUUMsR0FBRyxDQUFDLHFCQUFxQkk7SUFDakMsaUNBQWlDO0lBQ2pDLHFCQUNFLDhEQUFDbUI7OzBCQUNDLDhEQUFDQzswQkFBRzs7Ozs7O1lBQ0hoQyw2QkFDQyw4REFBQytCOzBCQUNDLDRFQUFDRTs4QkFBRzs7Ozs7Ozs7Ozs7MEJBSVIsOERBQUNGOztrQ0FDQyw4REFBQ0U7a0NBQUc7Ozs7OztrQ0FDSiw4REFBQ0Y7d0JBQUlHLFdBQVU7a0NBQ1p0QixpQkFBaUJJLEdBQUcsQ0FBQ0ssQ0FBQUEsd0JBQ3BCLDhEQUFDVTtnQ0FBcUJHLFdBQVU7O2tEQUU5Qiw4REFBQ0M7d0NBQUlDLEtBQUtmLFFBQVFnQixLQUFLO3dDQUFFQyxLQUFLakIsUUFBUWtCLElBQUk7Ozs7OztrREFDMUMsOERBQUNDO2tEQUFJbkIsUUFBUWtCLElBQUk7Ozs7Ozs7K0JBSFRsQixRQUFReEIsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVdoQztHQWxGd0JGOztRQUVMRix3REFBV0E7OztLQUZORSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvU2tpbmNhcmVRdWl6L1tpZF0vcGFnZS5qc3g/OTFhNyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVBhdGhuYW1lIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFF1aXpSZWNvbW1lbmRhdGlvbnMoKSB7XG4gIC8vIFN0YXRlIHRvIHN0b3JlIHF1aXogcmVzdWx0cyBhbmQgcHJvZHVjdCBsaXN0XG4gIGNvbnN0IHBhdGhuYW1lID0gdXNlUGF0aG5hbWUoKTtcbiAgY29uc3QgaWQgPSBwYXRobmFtZS5zcGxpdCgnLycpLnBvcCgpOyAvLyBFeHRyYWN0IGlkIGZyb20gcGF0aG5hbWVcblxuICBjb25zdCBbcXVpelJlc3VsdHMsIHNldFF1aXpSZXN1bHRzXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbcHJvZHVjdExpc3QsIHNldFByb2R1Y3RMaXN0XSA9IHVzZVN0YXRlKFtdKTtcblxuICAvLyBGZXRjaCBxdWl6IHJlc3VsdHMgZnJvbSBBUElcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBheGlvcy5nZXQoYGh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9za2lucXVpei8ke2lkfWApXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdRdWl6IHJlc3VsdHM6JywgcmVzcG9uc2UuZGF0YSk7XG4gICAgICAgIHNldFF1aXpSZXN1bHRzKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHF1aXogcmVzdWx0czonLCBlcnJvcik7XG4gICAgICB9KTtcbiAgfSwgW10pO1xuXG4gIC8vIEZldGNoIHByb2R1Y3QgbGlzdCBmcm9tIEFQSVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGF4aW9zLmdldChgaHR0cDovL2xvY2FsaG9zdDo4MDAwL3Byb2R1Y3RzL2xpc3RgKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnUHJvZHVjdCBsaXN0OicsIHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICBzZXRQcm9kdWN0TGlzdChyZXNwb25zZS5kYXRhKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBwcm9kdWN0IGxpc3Q6JywgZXJyb3IpO1xuICAgICAgfSk7XG4gIH0sIFtdKTtcblxuICAvLyBGaWx0ZXIgcHJvZHVjdCBsaXN0IGJhc2VkIG9uIHF1aXogcmVzdWx0c1xuICBjb25zdCBmaWx0ZXJQcm9kdWN0cyA9ICgpID0+IHtcbiAgICBpZiAoIXF1aXpSZXN1bHRzIHx8ICFxdWl6UmVzdWx0cy5za2luX3R5cGUgfHwgcXVpelJlc3VsdHMuc2tpbl90eXBlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gW107IC8vIFJldHVybiBhbiBlbXB0eSBhcnJheSBpZiBxdWl6IHJlc3VsdHMgYXJlIG5vdCBhdmFpbGFibGUgb3Igbm8gc2tpbiB0eXBlcyBhcmUgc2VsZWN0ZWRcbiAgICB9XG5cbiAgICBjb25zdCBsb3dlckNhc2VTa2luVHlwZXMgPSBxdWl6UmVzdWx0cy5za2luX3R5cGUubWFwKHNraW5UeXBlID0+IHNraW5UeXBlLnRvTG93ZXJDYXNlKCkpO1xuXG4gICAgLy8gRmlsdGVyIHByb2R1Y3RzIGJhc2VkIG9uIHNlbGVjdGVkIHNraW4gdHlwZXNcbiAgICBsZXQgZmlsdGVyZWRQcm9kdWN0cyA9IHByb2R1Y3RMaXN0LmZpbHRlcihwcm9kdWN0ID0+IHtcbiAgICAgIGNvbnN0IHByb2R1Y3RTa2luVHlwZXMgPSBwcm9kdWN0LnNraW50eXBlcy50b0xvd2VyQ2FzZSgpLnNwbGl0KCcsJyk7XG4gICAgICByZXR1cm4gbG93ZXJDYXNlU2tpblR5cGVzLnNvbWUoc2VsZWN0ZWRTa2luVHlwZSA9PiBwcm9kdWN0U2tpblR5cGVzLmluY2x1ZGVzKHNlbGVjdGVkU2tpblR5cGUpKTtcbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZyhcIkZJTFRFUkVEIFBST0RVQ1RTIDE6IFwiLCBmaWx0ZXJlZFByb2R1Y3RzKTtcblxuXG4gICAgaWYgKHF1aXpSZXN1bHRzLnNraW5jYXJlX3JvdXRpbmUpIHtcbiAgICAgIGZpbHRlcmVkUHJvZHVjdHMgPSBmaWx0ZXJlZFByb2R1Y3RzLmZpbHRlcihwcm9kdWN0ID0+IHtcbiAgICAgICAgICAvLyBDaGVjayBpZiBhbGwgb2YgdGhlIHNlbGVjdGVkIHNraW5jYXJlIHJvdXRpbmVzIGFyZSBwcmVzZW50IGluIHRoZSBwcm9kdWN0J3MgY2F0ZWdvcmllc1xuICAgICAgICAgIHJldHVybiBxdWl6UmVzdWx0cy5za2luY2FyZV9yb3V0aW5lLmV2ZXJ5KHNlbGVjdGVkUm91dGluZSA9PiBwcm9kdWN0LnByb2R1Y3RfY2F0ZWdvcnkuaW5jbHVkZXMoc2VsZWN0ZWRSb3V0aW5lKSk7XG4gICAgICB9KTtcbiAgfVxuICAgICAgcmV0dXJuIGZpbHRlcmVkUHJvZHVjdHM7XG4gICAgfTtcbiAgY29uc29sZS5sb2coXCJGSUxURVJFRCBQUk9EVUNUU1wiLCBmaWx0ZXJQcm9kdWN0cygpKTtcbiAgLy8gUmVuZGVyIHRoZSByZWNvbW1lbmRhdGlvbiBwYWdlXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT5Qcm9kdWN0IFJlY29tbWVuZGF0aW9uczwvaDE+XG4gICAgICB7cXVpelJlc3VsdHMgJiYgKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoMj5RdWl6IFJlc3VsdHM8L2gyPlxuICAgICAgICAgIHsvKiBEaXNwbGF5IHF1aXogcmVzdWx0cyBoZXJlICovfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgICA8ZGl2PlxuICAgICAgICA8aDI+RmlsdGVyZWQgUHJvZHVjdHM8L2gyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtbGlzdFwiPlxuICAgICAgICAgIHtmaWx0ZXJQcm9kdWN0cygpLm1hcChwcm9kdWN0ID0+IChcbiAgICAgICAgICAgIDxkaXYga2V5PXtwcm9kdWN0LmlkfSBjbGFzc05hbWU9XCJwcm9kdWN0LWl0ZW1cIj5cbiAgICAgICAgICAgICAgey8qIERpc3BsYXkgcHJvZHVjdCBpbmZvcm1hdGlvbiBoZXJlICovfVxuICAgICAgICAgICAgICA8aW1nIHNyYz17cHJvZHVjdC5pbWFnZX0gYWx0PXtwcm9kdWN0Lm5hbWV9IC8+XG4gICAgICAgICAgICAgIDxoMz57cHJvZHVjdC5uYW1lfTwvaDM+XG4gICAgICAgICAgICAgIHsvKiBBZGQgbW9yZSBwcm9kdWN0IGRldGFpbHMgYXMgbmVlZGVkICovfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVBhdGhuYW1lIiwiYXhpb3MiLCJRdWl6UmVjb21tZW5kYXRpb25zIiwicGF0aG5hbWUiLCJpZCIsInNwbGl0IiwicG9wIiwicXVpelJlc3VsdHMiLCJzZXRRdWl6UmVzdWx0cyIsInByb2R1Y3RMaXN0Iiwic2V0UHJvZHVjdExpc3QiLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImNhdGNoIiwiZXJyb3IiLCJmaWx0ZXJQcm9kdWN0cyIsInNraW5fdHlwZSIsImxlbmd0aCIsImxvd2VyQ2FzZVNraW5UeXBlcyIsIm1hcCIsInNraW5UeXBlIiwidG9Mb3dlckNhc2UiLCJmaWx0ZXJlZFByb2R1Y3RzIiwiZmlsdGVyIiwicHJvZHVjdCIsInByb2R1Y3RTa2luVHlwZXMiLCJza2ludHlwZXMiLCJzb21lIiwic2VsZWN0ZWRTa2luVHlwZSIsImluY2x1ZGVzIiwic2tpbmNhcmVfcm91dGluZSIsImV2ZXJ5Iiwic2VsZWN0ZWRSb3V0aW5lIiwicHJvZHVjdF9jYXRlZ29yeSIsImRpdiIsImgxIiwiaDIiLCJjbGFzc05hbWUiLCJpbWciLCJzcmMiLCJpbWFnZSIsImFsdCIsIm5hbWUiLCJoMyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/SkincareQuiz/[id]/page.jsx\n"));

/***/ })

});
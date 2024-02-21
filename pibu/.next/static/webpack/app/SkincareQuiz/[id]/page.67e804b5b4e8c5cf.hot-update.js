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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ QuizRecommendations; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction QuizRecommendations() {\n    _s();\n    // State to store quiz results and product list\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname)();\n    const id = pathname.split(\"/\").pop(); // Extract id from pathname\n    const [quizResults, setQuizResults] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [productList, setProductList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    // Fetch quiz results from API\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"http://localhost:8000/skinquiz/\".concat(id)).then((response)=>{\n            console.log(\"Quiz results:\", response.data);\n            setQuizResults(response.data);\n        }).catch((error)=>{\n            console.error(\"Error fetching quiz results:\", error);\n        });\n    }, []);\n    // Fetch product list from API\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"http://localhost:8000/products/list\").then((response)=>{\n            console.log(\"Product list:\", response.data);\n            setProductList(response.data);\n        }).catch((error)=>{\n            console.error(\"Error fetching product list:\", error);\n        });\n    }, []);\n    // Filter product list based on quiz results\n    const filterProducts = ()=>{\n        if (!quizResults || !quizResults.skin_type || quizResults.skin_type.length === 0) {\n            return []; // Return an empty array if quiz results are not available or no skin types are selected\n        }\n        const lowerCaseSkinTypes = quizResults.skin_type.map((skinType)=>skinType.toLowerCase());\n        // Filter products based on selected skin types\n        let filteredProducts = productList.filter((product)=>{\n            const productSkinTypes = product.skintypes.toLowerCase().split(\",\");\n            return lowerCaseSkinTypes.some((selectedSkinType)=>productSkinTypes.includes(selectedSkinType));\n        });\n        console.log(\"FILTERED PRODUCTS 1: \", filteredProducts);\n        if (quizResults.skincare_routine.length > 0) {\n            filteredProducts = filteredProducts.filter((product)=>{\n                // Check if any of the product's categories match any of the selected skincare routines\n                return quizResults.skincare_routine.some((selectedRoutine)=>product.product_category === selectedRoutine);\n            });\n        }\n        return filteredProducts;\n    };\n    console.log(\"FILTERED PRODUCTS\", filterProducts());\n    // Render the recommendation page\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Product Recommendations\"\n            }, void 0, false, {\n                fileName: \"/Users/nessaa/Documents/PibuProject/pibu/app/SkincareQuiz/[id]/page.jsx\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, this),\n            quizResults && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: \"Quiz Results\"\n                }, void 0, false, {\n                    fileName: \"/Users/nessaa/Documents/PibuProject/pibu/app/SkincareQuiz/[id]/page.jsx\",\n                    lineNumber: 70,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/nessaa/Documents/PibuProject/pibu/app/SkincareQuiz/[id]/page.jsx\",\n                lineNumber: 69,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Filtered Products\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nessaa/Documents/PibuProject/pibu/app/SkincareQuiz/[id]/page.jsx\",\n                        lineNumber: 75,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"product-list\",\n                        children: filterProducts().map((product)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"product-item\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: product.image,\n                                        alt: product.name\n                                    }, void 0, false, {\n                                        fileName: \"/Users/nessaa/Documents/PibuProject/pibu/app/SkincareQuiz/[id]/page.jsx\",\n                                        lineNumber: 80,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        children: product.name\n                                    }, void 0, false, {\n                                        fileName: \"/Users/nessaa/Documents/PibuProject/pibu/app/SkincareQuiz/[id]/page.jsx\",\n                                        lineNumber: 81,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, product.id, true, {\n                                fileName: \"/Users/nessaa/Documents/PibuProject/pibu/app/SkincareQuiz/[id]/page.jsx\",\n                                lineNumber: 78,\n                                columnNumber: 13\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/Users/nessaa/Documents/PibuProject/pibu/app/SkincareQuiz/[id]/page.jsx\",\n                        lineNumber: 76,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nessaa/Documents/PibuProject/pibu/app/SkincareQuiz/[id]/page.jsx\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nessaa/Documents/PibuProject/pibu/app/SkincareQuiz/[id]/page.jsx\",\n        lineNumber: 66,\n        columnNumber: 5\n    }, this);\n}\n_s(QuizRecommendations, \"TIMbT9AEYUmmV9PyOLE8MMbAaWU=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname\n    ];\n});\n_c = QuizRecommendations;\nvar _c;\n$RefreshReg$(_c, \"QuizRecommendations\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9Ta2luY2FyZVF1aXovW2lkXS9wYWdlLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNtRDtBQUNMO0FBQ3BCO0FBRVgsU0FBU0s7O0lBQ3RCLCtDQUErQztJQUMvQyxNQUFNQyxXQUFXSCw0REFBV0E7SUFDNUIsTUFBTUksS0FBS0QsU0FBU0UsS0FBSyxDQUFDLEtBQUtDLEdBQUcsSUFBSSwyQkFBMkI7SUFFakUsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdWLCtDQUFRQSxDQUFDO0lBQy9DLE1BQU0sQ0FBQ1csYUFBYUMsZUFBZSxHQUFHWiwrQ0FBUUEsQ0FBQyxFQUFFO0lBRWpELDhCQUE4QjtJQUM5QkMsZ0RBQVNBLENBQUM7UUFDUkUsNkNBQUtBLENBQUNVLEdBQUcsQ0FBQyxrQ0FBcUMsT0FBSFAsS0FDekNRLElBQUksQ0FBQ0MsQ0FBQUE7WUFDSkMsUUFBUUMsR0FBRyxDQUFDLGlCQUFpQkYsU0FBU0csSUFBSTtZQUMxQ1IsZUFBZUssU0FBU0csSUFBSTtRQUM5QixHQUNDQyxLQUFLLENBQUNDLENBQUFBO1lBQ0xKLFFBQVFJLEtBQUssQ0FBQyxnQ0FBZ0NBO1FBQ2hEO0lBQ0osR0FBRyxFQUFFO0lBRUwsOEJBQThCO0lBQzlCbkIsZ0RBQVNBLENBQUM7UUFDUkUsNkNBQUtBLENBQUNVLEdBQUcsQ0FBRSx1Q0FDUkMsSUFBSSxDQUFDQyxDQUFBQTtZQUNKQyxRQUFRQyxHQUFHLENBQUMsaUJBQWlCRixTQUFTRyxJQUFJO1lBQzFDTixlQUFlRyxTQUFTRyxJQUFJO1FBQzlCLEdBQ0NDLEtBQUssQ0FBQ0MsQ0FBQUE7WUFDTEosUUFBUUksS0FBSyxDQUFDLGdDQUFnQ0E7UUFDaEQ7SUFDSixHQUFHLEVBQUU7SUFFTCw0Q0FBNEM7SUFDNUMsTUFBTUMsaUJBQWlCO1FBQ3JCLElBQUksQ0FBQ1osZUFBZSxDQUFDQSxZQUFZYSxTQUFTLElBQUliLFlBQVlhLFNBQVMsQ0FBQ0MsTUFBTSxLQUFLLEdBQUc7WUFDOUUsT0FBTyxFQUFFLEVBQUUsd0ZBQXdGO1FBQ3ZHO1FBRUEsTUFBTUMscUJBQXFCZixZQUFZYSxTQUFTLENBQUNHLEdBQUcsQ0FBQ0MsQ0FBQUEsV0FBWUEsU0FBU0MsV0FBVztRQUVyRiwrQ0FBK0M7UUFDL0MsSUFBSUMsbUJBQW1CakIsWUFBWWtCLE1BQU0sQ0FBQ0MsQ0FBQUE7WUFDeEMsTUFBTUMsbUJBQW1CRCxRQUFRRSxTQUFTLENBQUNMLFdBQVcsR0FBR3BCLEtBQUssQ0FBQztZQUMvRCxPQUFPaUIsbUJBQW1CUyxJQUFJLENBQUNDLENBQUFBLG1CQUFvQkgsaUJBQWlCSSxRQUFRLENBQUNEO1FBQy9FO1FBQ0FsQixRQUFRQyxHQUFHLENBQUMseUJBQXlCVztRQUVyQyxJQUFJbkIsWUFBWTJCLGdCQUFnQixDQUFDYixNQUFNLEdBQUcsR0FBRztZQUMzQ0ssbUJBQW1CQSxpQkFBaUJDLE1BQU0sQ0FBQ0MsQ0FBQUE7Z0JBQ3pDLHVGQUF1RjtnQkFDdkYsT0FBT3JCLFlBQVkyQixnQkFBZ0IsQ0FBQ0gsSUFBSSxDQUFDSSxDQUFBQSxrQkFDdkNQLFFBQVFRLGdCQUFnQixLQUFLRDtZQUVqQztRQUNGO1FBQ0UsT0FBT1Q7SUFDVDtJQUNGWixRQUFRQyxHQUFHLENBQUMscUJBQXFCSTtJQUNqQyxpQ0FBaUM7SUFDakMscUJBQ0UsOERBQUNrQjs7MEJBQ0MsOERBQUNDOzBCQUFHOzs7Ozs7WUFDSC9CLDZCQUNDLDhEQUFDOEI7MEJBQ0MsNEVBQUNFOzhCQUFHOzs7Ozs7Ozs7OzswQkFJUiw4REFBQ0Y7O2tDQUNDLDhEQUFDRTtrQ0FBRzs7Ozs7O2tDQUNKLDhEQUFDRjt3QkFBSUcsV0FBVTtrQ0FDWnJCLGlCQUFpQkksR0FBRyxDQUFDSyxDQUFBQSx3QkFDcEIsOERBQUNTO2dDQUFxQkcsV0FBVTs7a0RBRTlCLDhEQUFDQzt3Q0FBSUMsS0FBS2QsUUFBUWUsS0FBSzt3Q0FBRUMsS0FBS2hCLFFBQVFpQixJQUFJOzs7Ozs7a0RBQzFDLDhEQUFDQztrREFBSWxCLFFBQVFpQixJQUFJOzs7Ozs7OytCQUhUakIsUUFBUXhCLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFXaEM7R0FuRndCRjs7UUFFTEYsd0RBQVdBOzs7S0FGTkUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL1NraW5jYXJlUXVpei9baWRdL3BhZ2UuanN4PzkxYTciXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VQYXRobmFtZSB9IGZyb20gJ25leHQvbmF2aWdhdGlvbic7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBRdWl6UmVjb21tZW5kYXRpb25zKCkge1xuICAvLyBTdGF0ZSB0byBzdG9yZSBxdWl6IHJlc3VsdHMgYW5kIHByb2R1Y3QgbGlzdFxuICBjb25zdCBwYXRobmFtZSA9IHVzZVBhdGhuYW1lKCk7XG4gIGNvbnN0IGlkID0gcGF0aG5hbWUuc3BsaXQoJy8nKS5wb3AoKTsgLy8gRXh0cmFjdCBpZCBmcm9tIHBhdGhuYW1lXG5cbiAgY29uc3QgW3F1aXpSZXN1bHRzLCBzZXRRdWl6UmVzdWx0c10gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW3Byb2R1Y3RMaXN0LCBzZXRQcm9kdWN0TGlzdF0gPSB1c2VTdGF0ZShbXSk7XG5cbiAgLy8gRmV0Y2ggcXVpeiByZXN1bHRzIGZyb20gQVBJXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXhpb3MuZ2V0KGBodHRwOi8vbG9jYWxob3N0OjgwMDAvc2tpbnF1aXovJHtpZH1gKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnUXVpeiByZXN1bHRzOicsIHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICBzZXRRdWl6UmVzdWx0cyhyZXNwb25zZS5kYXRhKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBxdWl6IHJlc3VsdHM6JywgZXJyb3IpO1xuICAgICAgfSk7XG4gIH0sIFtdKTtcblxuICAvLyBGZXRjaCBwcm9kdWN0IGxpc3QgZnJvbSBBUElcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBheGlvcy5nZXQoYGh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9wcm9kdWN0cy9saXN0YClcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ1Byb2R1Y3QgbGlzdDonLCByZXNwb25zZS5kYXRhKTtcbiAgICAgICAgc2V0UHJvZHVjdExpc3QocmVzcG9uc2UuZGF0YSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgcHJvZHVjdCBsaXN0OicsIGVycm9yKTtcbiAgICAgIH0pO1xuICB9LCBbXSk7XG5cbiAgLy8gRmlsdGVyIHByb2R1Y3QgbGlzdCBiYXNlZCBvbiBxdWl6IHJlc3VsdHNcbiAgY29uc3QgZmlsdGVyUHJvZHVjdHMgPSAoKSA9PiB7XG4gICAgaWYgKCFxdWl6UmVzdWx0cyB8fCAhcXVpelJlc3VsdHMuc2tpbl90eXBlIHx8IHF1aXpSZXN1bHRzLnNraW5fdHlwZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIFtdOyAvLyBSZXR1cm4gYW4gZW1wdHkgYXJyYXkgaWYgcXVpeiByZXN1bHRzIGFyZSBub3QgYXZhaWxhYmxlIG9yIG5vIHNraW4gdHlwZXMgYXJlIHNlbGVjdGVkXG4gICAgfVxuXG4gICAgY29uc3QgbG93ZXJDYXNlU2tpblR5cGVzID0gcXVpelJlc3VsdHMuc2tpbl90eXBlLm1hcChza2luVHlwZSA9PiBza2luVHlwZS50b0xvd2VyQ2FzZSgpKTtcblxuICAgIC8vIEZpbHRlciBwcm9kdWN0cyBiYXNlZCBvbiBzZWxlY3RlZCBza2luIHR5cGVzXG4gICAgbGV0IGZpbHRlcmVkUHJvZHVjdHMgPSBwcm9kdWN0TGlzdC5maWx0ZXIocHJvZHVjdCA9PiB7XG4gICAgICBjb25zdCBwcm9kdWN0U2tpblR5cGVzID0gcHJvZHVjdC5za2ludHlwZXMudG9Mb3dlckNhc2UoKS5zcGxpdCgnLCcpO1xuICAgICAgcmV0dXJuIGxvd2VyQ2FzZVNraW5UeXBlcy5zb21lKHNlbGVjdGVkU2tpblR5cGUgPT4gcHJvZHVjdFNraW5UeXBlcy5pbmNsdWRlcyhzZWxlY3RlZFNraW5UeXBlKSk7XG4gICAgfSk7XG4gICAgY29uc29sZS5sb2coXCJGSUxURVJFRCBQUk9EVUNUUyAxOiBcIiwgZmlsdGVyZWRQcm9kdWN0cyk7XG5cbiAgICBpZiAocXVpelJlc3VsdHMuc2tpbmNhcmVfcm91dGluZS5sZW5ndGggPiAwKSB7XG4gICAgICBmaWx0ZXJlZFByb2R1Y3RzID0gZmlsdGVyZWRQcm9kdWN0cy5maWx0ZXIocHJvZHVjdCA9PiB7XG4gICAgICAgIC8vIENoZWNrIGlmIGFueSBvZiB0aGUgcHJvZHVjdCdzIGNhdGVnb3JpZXMgbWF0Y2ggYW55IG9mIHRoZSBzZWxlY3RlZCBza2luY2FyZSByb3V0aW5lc1xuICAgICAgICByZXR1cm4gcXVpelJlc3VsdHMuc2tpbmNhcmVfcm91dGluZS5zb21lKHNlbGVjdGVkUm91dGluZSA9PlxuICAgICAgICAgIHByb2R1Y3QucHJvZHVjdF9jYXRlZ29yeSA9PT0gc2VsZWN0ZWRSb3V0aW5lXG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgICByZXR1cm4gZmlsdGVyZWRQcm9kdWN0cztcbiAgICB9O1xuICBjb25zb2xlLmxvZyhcIkZJTFRFUkVEIFBST0RVQ1RTXCIsIGZpbHRlclByb2R1Y3RzKCkpO1xuICAvLyBSZW5kZXIgdGhlIHJlY29tbWVuZGF0aW9uIHBhZ2VcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxPlByb2R1Y3QgUmVjb21tZW5kYXRpb25zPC9oMT5cbiAgICAgIHtxdWl6UmVzdWx0cyAmJiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGgyPlF1aXogUmVzdWx0czwvaDI+XG4gICAgICAgICAgey8qIERpc3BsYXkgcXVpeiByZXN1bHRzIGhlcmUgKi99XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMj5GaWx0ZXJlZCBQcm9kdWN0czwvaDI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1saXN0XCI+XG4gICAgICAgICAge2ZpbHRlclByb2R1Y3RzKCkubWFwKHByb2R1Y3QgPT4gKFxuICAgICAgICAgICAgPGRpdiBrZXk9e3Byb2R1Y3QuaWR9IGNsYXNzTmFtZT1cInByb2R1Y3QtaXRlbVwiPlxuICAgICAgICAgICAgICB7LyogRGlzcGxheSBwcm9kdWN0IGluZm9ybWF0aW9uIGhlcmUgKi99XG4gICAgICAgICAgICAgIDxpbWcgc3JjPXtwcm9kdWN0LmltYWdlfSBhbHQ9e3Byb2R1Y3QubmFtZX0gLz5cbiAgICAgICAgICAgICAgPGgzPntwcm9kdWN0Lm5hbWV9PC9oMz5cbiAgICAgICAgICAgICAgey8qIEFkZCBtb3JlIHByb2R1Y3QgZGV0YWlscyBhcyBuZWVkZWQgKi99XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUGF0aG5hbWUiLCJheGlvcyIsIlF1aXpSZWNvbW1lbmRhdGlvbnMiLCJwYXRobmFtZSIsImlkIiwic3BsaXQiLCJwb3AiLCJxdWl6UmVzdWx0cyIsInNldFF1aXpSZXN1bHRzIiwicHJvZHVjdExpc3QiLCJzZXRQcm9kdWN0TGlzdCIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwiY2F0Y2giLCJlcnJvciIsImZpbHRlclByb2R1Y3RzIiwic2tpbl90eXBlIiwibGVuZ3RoIiwibG93ZXJDYXNlU2tpblR5cGVzIiwibWFwIiwic2tpblR5cGUiLCJ0b0xvd2VyQ2FzZSIsImZpbHRlcmVkUHJvZHVjdHMiLCJmaWx0ZXIiLCJwcm9kdWN0IiwicHJvZHVjdFNraW5UeXBlcyIsInNraW50eXBlcyIsInNvbWUiLCJzZWxlY3RlZFNraW5UeXBlIiwiaW5jbHVkZXMiLCJza2luY2FyZV9yb3V0aW5lIiwic2VsZWN0ZWRSb3V0aW5lIiwicHJvZHVjdF9jYXRlZ29yeSIsImRpdiIsImgxIiwiaDIiLCJjbGFzc05hbWUiLCJpbWciLCJzcmMiLCJpbWFnZSIsImFsdCIsIm5hbWUiLCJoMyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/SkincareQuiz/[id]/page.jsx\n"));

/***/ })

});
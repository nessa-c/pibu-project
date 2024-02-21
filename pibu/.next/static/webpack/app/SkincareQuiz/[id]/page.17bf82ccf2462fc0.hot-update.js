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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ QuizRecommendations; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _components_ProductCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/ProductCard */ \"(app-pages-browser)/./app/components/ProductCard.jsx\");\n/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/NavBar */ \"(app-pages-browser)/./app/components/NavBar.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction QuizRecommendations() {\n    _s();\n    // State to store quiz results and product list\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname)();\n    const id = pathname.split(\"/\").pop(); // Extract id from pathname\n    const [quizResults, setQuizResults] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [productList, setProductList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    // Fetch quiz results from API\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(\"http://localhost:8000/skinquiz/\".concat(id)).then((response)=>{\n            console.log(\"Quiz results:\", response.data);\n            setQuizResults(response.data);\n        }).catch((error)=>{\n            console.error(\"Error fetching quiz results:\", error);\n        });\n    }, []);\n    // Fetch product list from API\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(\"http://localhost:8000/products/list\").then((response)=>{\n            console.log(\"Product list:\", response.data);\n            setProductList(response.data);\n        }).catch((error)=>{\n            console.error(\"Error fetching product list:\", error);\n        });\n    }, []);\n    // Filter product list based on quiz results\n    const filterProducts = ()=>{\n        if (!quizResults || !quizResults.skin_type || quizResults.skin_type.length === 0) {\n            return []; // Return an empty array if quiz results are not available or no skin types are selected\n        }\n        const lowerCaseSkinTypes = quizResults.skin_type.map((skinType)=>skinType.toLowerCase());\n        // Filter products based on selected skin types\n        let filteredProducts = productList.filter((product)=>{\n            const productSkinTypes = product.skintypes.toLowerCase().split(\",\");\n            return lowerCaseSkinTypes.some((selectedSkinType)=>productSkinTypes.includes(selectedSkinType));\n        });\n        if (quizResults.skincare_routine.length > 0) {\n            filteredProducts = filteredProducts.filter((product)=>{\n                return product.category && quizResults.skincare_routine.some((selectedRoutine)=>product.category.includes(selectedRoutine));\n            });\n        }\n        // Sort filtered products by category\n        filteredProducts.sort((a, b)=>a.category.localeCompare(b.category));\n        return filteredProducts;\n    };\n    // Group filtered products by category\n    const groupedProducts = filterProducts().reduce((groups, product)=>{\n        const category = product.category;\n        if (!groups[category]) {\n            groups[category] = [];\n        }\n        groups[category].push(product);\n        return groups;\n    }, {});\n    // Render the recommendation page\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NavBar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/nessaa/Documents/PibuProject/pibu/app/SkincareQuiz/[id]/page.jsx\",\n                lineNumber: 79,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-2xl font-medium text-secondary text-center mb-5\",\n                children: \"Quiz Results\"\n            }, void 0, false, {\n                fileName: \"/Users/nessaa/Documents/PibuProject/pibu/app/SkincareQuiz/[id]/page.jsx\",\n                lineNumber: 80,\n                columnNumber: 7\n            }, this),\n            quizResults && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Your skin type: \",\n                            quizResults.skin_type.join(\", \")\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nessaa/Documents/PibuProject/pibu/app/SkincareQuiz/[id]/page.jsx\",\n                        lineNumber: 83,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Your skincare routine: \",\n                            quizResults.skincare_routine.join(\", \")\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nessaa/Documents/PibuProject/pibu/app/SkincareQuiz/[id]/page.jsx\",\n                        lineNumber: 84,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nessaa/Documents/PibuProject/pibu/app/SkincareQuiz/[id]/page.jsx\",\n                lineNumber: 82,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"my-10\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-2xl font-medium text-secondary text-center\",\n                        children: \"Recommended Products\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nessaa/Documents/PibuProject/pibu/app/SkincareQuiz/[id]/page.jsx\",\n                        lineNumber: 88,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: Object.entries(groupedProducts).map((param)=>{\n                            let [category, products] = param;\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        className: \"text-2xl font-medium text-accent py-5 text-center px-5\",\n                                        children: [\n                                            category,\n                                            \"s\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/nessaa/Documents/PibuProject/pibu/app/SkincareQuiz/[id]/page.jsx\",\n                                        lineNumber: 92,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex overflow-x-auto\",\n                                        children: products.map((product)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"flex-none w-1/3 mr-5\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProductCard__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                                    product: product\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/nessaa/Documents/PibuProject/pibu/app/SkincareQuiz/[id]/page.jsx\",\n                                                    lineNumber: 96,\n                                                    columnNumber: 21\n                                                }, this)\n                                            }, product.id, false, {\n                                                fileName: \"/Users/nessaa/Documents/PibuProject/pibu/app/SkincareQuiz/[id]/page.jsx\",\n                                                lineNumber: 95,\n                                                columnNumber: 19\n                                            }, this))\n                                    }, void 0, false, {\n                                        fileName: \"/Users/nessaa/Documents/PibuProject/pibu/app/SkincareQuiz/[id]/page.jsx\",\n                                        lineNumber: 93,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, category, true, {\n                                fileName: \"/Users/nessaa/Documents/PibuProject/pibu/app/SkincareQuiz/[id]/page.jsx\",\n                                lineNumber: 91,\n                                columnNumber: 13\n                            }, this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/nessaa/Documents/PibuProject/pibu/app/SkincareQuiz/[id]/page.jsx\",\n                        lineNumber: 89,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nessaa/Documents/PibuProject/pibu/app/SkincareQuiz/[id]/page.jsx\",\n                lineNumber: 87,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nessaa/Documents/PibuProject/pibu/app/SkincareQuiz/[id]/page.jsx\",\n        lineNumber: 78,\n        columnNumber: 5\n    }, this);\n}\n_s(QuizRecommendations, \"TIMbT9AEYUmmV9PyOLE8MMbAaWU=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname\n    ];\n});\n_c = QuizRecommendations;\nvar _c;\n$RefreshReg$(_c, \"QuizRecommendations\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9Ta2luY2FyZVF1aXovW2lkXS9wYWdlLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ21EO0FBQ0w7QUFDcEI7QUFDNkI7QUFDVjtBQUU5QixTQUFTTzs7SUFDdEIsK0NBQStDO0lBQy9DLE1BQU1DLFdBQVdMLDREQUFXQTtJQUM1QixNQUFNTSxLQUFLRCxTQUFTRSxLQUFLLENBQUMsS0FBS0MsR0FBRyxJQUFJLDJCQUEyQjtJQUVqRSxNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR1osK0NBQVFBLENBQUM7SUFDL0MsTUFBTSxDQUFDYSxhQUFhQyxlQUFlLEdBQUdkLCtDQUFRQSxDQUFDLEVBQUU7SUFFakQsOEJBQThCO0lBQzlCQyxnREFBU0EsQ0FBQztRQUNSRSw2Q0FBS0EsQ0FBQ1ksR0FBRyxDQUFDLGtDQUFxQyxPQUFIUCxLQUN6Q1EsSUFBSSxDQUFDQyxDQUFBQTtZQUNKQyxRQUFRQyxHQUFHLENBQUMsaUJBQWlCRixTQUFTRyxJQUFJO1lBQzFDUixlQUFlSyxTQUFTRyxJQUFJO1FBQzlCLEdBQ0NDLEtBQUssQ0FBQ0MsQ0FBQUE7WUFDTEosUUFBUUksS0FBSyxDQUFDLGdDQUFnQ0E7UUFDaEQ7SUFDSixHQUFHLEVBQUU7SUFFTCw4QkFBOEI7SUFDOUJyQixnREFBU0EsQ0FBQztRQUNSRSw2Q0FBS0EsQ0FBQ1ksR0FBRyxDQUFFLHVDQUNSQyxJQUFJLENBQUNDLENBQUFBO1lBQ0pDLFFBQVFDLEdBQUcsQ0FBQyxpQkFBaUJGLFNBQVNHLElBQUk7WUFDMUNOLGVBQWVHLFNBQVNHLElBQUk7UUFDOUIsR0FDQ0MsS0FBSyxDQUFDQyxDQUFBQTtZQUNMSixRQUFRSSxLQUFLLENBQUMsZ0NBQWdDQTtRQUNoRDtJQUNKLEdBQUcsRUFBRTtJQUVMLDRDQUE0QztJQUM1QyxNQUFNQyxpQkFBaUI7UUFDckIsSUFBSSxDQUFDWixlQUFlLENBQUNBLFlBQVlhLFNBQVMsSUFBSWIsWUFBWWEsU0FBUyxDQUFDQyxNQUFNLEtBQUssR0FBRztZQUNoRixPQUFPLEVBQUUsRUFBRSx3RkFBd0Y7UUFDckc7UUFFQSxNQUFNQyxxQkFBcUJmLFlBQVlhLFNBQVMsQ0FBQ0csR0FBRyxDQUFDQyxDQUFBQSxXQUFZQSxTQUFTQyxXQUFXO1FBRXJGLCtDQUErQztRQUMvQyxJQUFJQyxtQkFBbUJqQixZQUFZa0IsTUFBTSxDQUFDQyxDQUFBQTtZQUN4QyxNQUFNQyxtQkFBbUJELFFBQVFFLFNBQVMsQ0FBQ0wsV0FBVyxHQUFHcEIsS0FBSyxDQUFDO1lBQy9ELE9BQU9pQixtQkFBbUJTLElBQUksQ0FBQ0MsQ0FBQUEsbUJBQW9CSCxpQkFBaUJJLFFBQVEsQ0FBQ0Q7UUFDL0U7UUFFQSxJQUFJekIsWUFBWTJCLGdCQUFnQixDQUFDYixNQUFNLEdBQUcsR0FBRztZQUMzQ0ssbUJBQW1CQSxpQkFBaUJDLE1BQU0sQ0FBQ0MsQ0FBQUE7Z0JBQ3pDLE9BQU9BLFFBQVFPLFFBQVEsSUFBSTVCLFlBQVkyQixnQkFBZ0IsQ0FBQ0gsSUFBSSxDQUFDSyxDQUFBQSxrQkFBbUJSLFFBQVFPLFFBQVEsQ0FBQ0YsUUFBUSxDQUFDRztZQUM1RztRQUNGO1FBRUEscUNBQXFDO1FBQ3JDVixpQkFBaUJXLElBQUksQ0FBQyxDQUFDQyxHQUFHQyxJQUFNRCxFQUFFSCxRQUFRLENBQUNLLGFBQWEsQ0FBQ0QsRUFBRUosUUFBUTtRQUVuRSxPQUFPVDtJQUNUO0lBRUEsc0NBQXNDO0lBQ3RDLE1BQU1lLGtCQUFrQnRCLGlCQUFpQnVCLE1BQU0sQ0FBQyxDQUFDQyxRQUFRZjtRQUN2RCxNQUFNTyxXQUFXUCxRQUFRTyxRQUFRO1FBQ2pDLElBQUksQ0FBQ1EsTUFBTSxDQUFDUixTQUFTLEVBQUU7WUFDckJRLE1BQU0sQ0FBQ1IsU0FBUyxHQUFHLEVBQUU7UUFDdkI7UUFDQVEsTUFBTSxDQUFDUixTQUFTLENBQUNTLElBQUksQ0FBQ2hCO1FBQ3RCLE9BQU9lO0lBQ1QsR0FBRyxDQUFDO0lBRUosaUNBQWlDO0lBQ2pDLHFCQUNFLDhEQUFDRTs7MEJBQ0MsOERBQUM1QywwREFBTUE7Ozs7OzBCQUNQLDhEQUFDNkM7Z0JBQUdDLFdBQVU7MEJBQXVEOzs7Ozs7WUFDcEV4Qyw2QkFDQyw4REFBQ3NDO2dCQUFJRSxXQUFVOztrQ0FDYiw4REFBQ0M7OzRCQUFFOzRCQUFpQnpDLFlBQVlhLFNBQVMsQ0FBQzZCLElBQUksQ0FBQzs7Ozs7OztrQ0FDL0MsOERBQUNEOzs0QkFBRTs0QkFBd0J6QyxZQUFZMkIsZ0JBQWdCLENBQUNlLElBQUksQ0FBQzs7Ozs7Ozs7Ozs7OzswQkFHakUsOERBQUNKO2dCQUFJRSxXQUFVOztrQ0FDZiw4REFBQ0Q7d0JBQUdDLFdBQVU7a0NBQWtEOzs7Ozs7a0NBQzlELDhEQUFDRjtrQ0FDRUssT0FBT0MsT0FBTyxDQUFDVixpQkFBaUJsQixHQUFHLENBQUM7Z0NBQUMsQ0FBQ1ksVUFBVWlCLFNBQVM7aURBQ3hELDhEQUFDUDs7a0RBQ0MsOERBQUNRO3dDQUFHTixXQUFVOzs0Q0FBMERaOzRDQUFTOzs7Ozs7O2tEQUNqRiw4REFBQ1U7d0NBQUlFLFdBQVU7a0RBQ1pLLFNBQVM3QixHQUFHLENBQUNLLENBQUFBLHdCQUNaLDhEQUFDaUI7Z0RBQXFCRSxXQUFVOzBEQUM5Qiw0RUFBQy9DLCtEQUFXQTtvREFBQzRCLFNBQVNBOzs7Ozs7K0NBRGRBLFFBQVF4QixFQUFFOzs7Ozs7Ozs7OzsrQkFKaEIrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFldEI7R0FsR3dCakM7O1FBRUxKLHdEQUFXQTs7O0tBRk5JIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9Ta2luY2FyZVF1aXovW2lkXS9wYWdlLmpzeD85MWE3Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUGF0aG5hbWUgfSBmcm9tICduZXh0L25hdmlnYXRpb24nO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBQcm9kdWN0Q2FyZCBmcm9tICcuLi8uLi9jb21wb25lbnRzL1Byb2R1Y3RDYXJkJztcbmltcG9ydCBOYXZCYXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9OYXZCYXInO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBRdWl6UmVjb21tZW5kYXRpb25zKCkge1xuICAvLyBTdGF0ZSB0byBzdG9yZSBxdWl6IHJlc3VsdHMgYW5kIHByb2R1Y3QgbGlzdFxuICBjb25zdCBwYXRobmFtZSA9IHVzZVBhdGhuYW1lKCk7XG4gIGNvbnN0IGlkID0gcGF0aG5hbWUuc3BsaXQoJy8nKS5wb3AoKTsgLy8gRXh0cmFjdCBpZCBmcm9tIHBhdGhuYW1lXG5cbiAgY29uc3QgW3F1aXpSZXN1bHRzLCBzZXRRdWl6UmVzdWx0c10gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW3Byb2R1Y3RMaXN0LCBzZXRQcm9kdWN0TGlzdF0gPSB1c2VTdGF0ZShbXSk7XG5cbiAgLy8gRmV0Y2ggcXVpeiByZXN1bHRzIGZyb20gQVBJXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXhpb3MuZ2V0KGBodHRwOi8vbG9jYWxob3N0OjgwMDAvc2tpbnF1aXovJHtpZH1gKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnUXVpeiByZXN1bHRzOicsIHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICBzZXRRdWl6UmVzdWx0cyhyZXNwb25zZS5kYXRhKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBxdWl6IHJlc3VsdHM6JywgZXJyb3IpO1xuICAgICAgfSk7XG4gIH0sIFtdKTtcblxuICAvLyBGZXRjaCBwcm9kdWN0IGxpc3QgZnJvbSBBUElcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBheGlvcy5nZXQoYGh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9wcm9kdWN0cy9saXN0YClcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ1Byb2R1Y3QgbGlzdDonLCByZXNwb25zZS5kYXRhKTtcbiAgICAgICAgc2V0UHJvZHVjdExpc3QocmVzcG9uc2UuZGF0YSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgcHJvZHVjdCBsaXN0OicsIGVycm9yKTtcbiAgICAgIH0pO1xuICB9LCBbXSk7XG5cbiAgLy8gRmlsdGVyIHByb2R1Y3QgbGlzdCBiYXNlZCBvbiBxdWl6IHJlc3VsdHNcbiAgY29uc3QgZmlsdGVyUHJvZHVjdHMgPSAoKSA9PiB7XG4gICAgaWYgKCFxdWl6UmVzdWx0cyB8fCAhcXVpelJlc3VsdHMuc2tpbl90eXBlIHx8IHF1aXpSZXN1bHRzLnNraW5fdHlwZS5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBbXTsgLy8gUmV0dXJuIGFuIGVtcHR5IGFycmF5IGlmIHF1aXogcmVzdWx0cyBhcmUgbm90IGF2YWlsYWJsZSBvciBubyBza2luIHR5cGVzIGFyZSBzZWxlY3RlZFxuICAgIH1cblxuICAgIGNvbnN0IGxvd2VyQ2FzZVNraW5UeXBlcyA9IHF1aXpSZXN1bHRzLnNraW5fdHlwZS5tYXAoc2tpblR5cGUgPT4gc2tpblR5cGUudG9Mb3dlckNhc2UoKSk7XG5cbiAgICAvLyBGaWx0ZXIgcHJvZHVjdHMgYmFzZWQgb24gc2VsZWN0ZWQgc2tpbiB0eXBlc1xuICAgIGxldCBmaWx0ZXJlZFByb2R1Y3RzID0gcHJvZHVjdExpc3QuZmlsdGVyKHByb2R1Y3QgPT4ge1xuICAgICAgY29uc3QgcHJvZHVjdFNraW5UeXBlcyA9IHByb2R1Y3Quc2tpbnR5cGVzLnRvTG93ZXJDYXNlKCkuc3BsaXQoJywnKTtcbiAgICAgIHJldHVybiBsb3dlckNhc2VTa2luVHlwZXMuc29tZShzZWxlY3RlZFNraW5UeXBlID0+IHByb2R1Y3RTa2luVHlwZXMuaW5jbHVkZXMoc2VsZWN0ZWRTa2luVHlwZSkpO1xuICAgIH0pO1xuXG4gICAgaWYgKHF1aXpSZXN1bHRzLnNraW5jYXJlX3JvdXRpbmUubGVuZ3RoID4gMCkge1xuICAgICAgZmlsdGVyZWRQcm9kdWN0cyA9IGZpbHRlcmVkUHJvZHVjdHMuZmlsdGVyKHByb2R1Y3QgPT4ge1xuICAgICAgICByZXR1cm4gcHJvZHVjdC5jYXRlZ29yeSAmJiBxdWl6UmVzdWx0cy5za2luY2FyZV9yb3V0aW5lLnNvbWUoc2VsZWN0ZWRSb3V0aW5lID0+IHByb2R1Y3QuY2F0ZWdvcnkuaW5jbHVkZXMoc2VsZWN0ZWRSb3V0aW5lKSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBTb3J0IGZpbHRlcmVkIHByb2R1Y3RzIGJ5IGNhdGVnb3J5XG4gICAgZmlsdGVyZWRQcm9kdWN0cy5zb3J0KChhLCBiKSA9PiBhLmNhdGVnb3J5LmxvY2FsZUNvbXBhcmUoYi5jYXRlZ29yeSkpO1xuXG4gICAgcmV0dXJuIGZpbHRlcmVkUHJvZHVjdHM7XG4gIH07XG5cbiAgLy8gR3JvdXAgZmlsdGVyZWQgcHJvZHVjdHMgYnkgY2F0ZWdvcnlcbiAgY29uc3QgZ3JvdXBlZFByb2R1Y3RzID0gZmlsdGVyUHJvZHVjdHMoKS5yZWR1Y2UoKGdyb3VwcywgcHJvZHVjdCkgPT4ge1xuICAgIGNvbnN0IGNhdGVnb3J5ID0gcHJvZHVjdC5jYXRlZ29yeTtcbiAgICBpZiAoIWdyb3Vwc1tjYXRlZ29yeV0pIHtcbiAgICAgIGdyb3Vwc1tjYXRlZ29yeV0gPSBbXTtcbiAgICB9XG4gICAgZ3JvdXBzW2NhdGVnb3J5XS5wdXNoKHByb2R1Y3QpO1xuICAgIHJldHVybiBncm91cHM7XG4gIH0sIHt9KTtcblxuICAvLyBSZW5kZXIgdGhlIHJlY29tbWVuZGF0aW9uIHBhZ2VcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPE5hdkJhciAvPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtbWVkaXVtIHRleHQtc2Vjb25kYXJ5IHRleHQtY2VudGVyIG1iLTVcIj5RdWl6IFJlc3VsdHM8L2gxPlxuICAgICAge3F1aXpSZXN1bHRzICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RleHQtY2VudGVyJz5cbiAgICAgICAgICA8cD5Zb3VyIHNraW4gdHlwZToge3F1aXpSZXN1bHRzLnNraW5fdHlwZS5qb2luKCcsICcpfTwvcD5cbiAgICAgICAgICA8cD5Zb3VyIHNraW5jYXJlIHJvdXRpbmU6IHtxdWl6UmVzdWx0cy5za2luY2FyZV9yb3V0aW5lLmpvaW4oJywgJyl9PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbXktMTAnPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtbWVkaXVtIHRleHQtc2Vjb25kYXJ5IHRleHQtY2VudGVyXCI+UmVjb21tZW5kZWQgUHJvZHVjdHM8L2gxPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIHtPYmplY3QuZW50cmllcyhncm91cGVkUHJvZHVjdHMpLm1hcCgoW2NhdGVnb3J5LCBwcm9kdWN0c10pID0+IChcbiAgICAgICAgICAgIDxkaXYga2V5PXtjYXRlZ29yeX0+XG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LW1lZGl1bSB0ZXh0LWFjY2VudCBweS01IHRleHQtY2VudGVyIHB4LTVcIj57Y2F0ZWdvcnl9czwvaDM+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBvdmVyZmxvdy14LWF1dG9cIj5cbiAgICAgICAgICAgICAgICB7cHJvZHVjdHMubWFwKHByb2R1Y3QgPT4gKFxuICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e3Byb2R1Y3QuaWR9IGNsYXNzTmFtZT1cImZsZXgtbm9uZSB3LTEvMyBtci01XCI+XG4gICAgICAgICAgICAgICAgICAgIDxQcm9kdWN0Q2FyZCBwcm9kdWN0PXtwcm9kdWN0fSAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVBhdGhuYW1lIiwiYXhpb3MiLCJQcm9kdWN0Q2FyZCIsIk5hdkJhciIsIlF1aXpSZWNvbW1lbmRhdGlvbnMiLCJwYXRobmFtZSIsImlkIiwic3BsaXQiLCJwb3AiLCJxdWl6UmVzdWx0cyIsInNldFF1aXpSZXN1bHRzIiwicHJvZHVjdExpc3QiLCJzZXRQcm9kdWN0TGlzdCIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwiY2F0Y2giLCJlcnJvciIsImZpbHRlclByb2R1Y3RzIiwic2tpbl90eXBlIiwibGVuZ3RoIiwibG93ZXJDYXNlU2tpblR5cGVzIiwibWFwIiwic2tpblR5cGUiLCJ0b0xvd2VyQ2FzZSIsImZpbHRlcmVkUHJvZHVjdHMiLCJmaWx0ZXIiLCJwcm9kdWN0IiwicHJvZHVjdFNraW5UeXBlcyIsInNraW50eXBlcyIsInNvbWUiLCJzZWxlY3RlZFNraW5UeXBlIiwiaW5jbHVkZXMiLCJza2luY2FyZV9yb3V0aW5lIiwiY2F0ZWdvcnkiLCJzZWxlY3RlZFJvdXRpbmUiLCJzb3J0IiwiYSIsImIiLCJsb2NhbGVDb21wYXJlIiwiZ3JvdXBlZFByb2R1Y3RzIiwicmVkdWNlIiwiZ3JvdXBzIiwicHVzaCIsImRpdiIsImgxIiwiY2xhc3NOYW1lIiwicCIsImpvaW4iLCJPYmplY3QiLCJlbnRyaWVzIiwicHJvZHVjdHMiLCJoMyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/SkincareQuiz/[id]/page.jsx\n"));

/***/ })

});
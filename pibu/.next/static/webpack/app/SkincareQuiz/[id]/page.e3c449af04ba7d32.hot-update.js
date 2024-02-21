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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ QuizRecommendations; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _components_ProductCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/ProductCard */ \"(app-pages-browser)/./app/components/ProductCard.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction QuizRecommendations() {\n    _s();\n    // State to store quiz results and product list\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname)();\n    const id = pathname.split(\"/\").pop(); // Extract id from pathname\n    const [quizResults, setQuizResults] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [productList, setProductList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    // Fetch quiz results from API\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"http://localhost:8000/skinquiz/\".concat(id)).then((response)=>{\n            console.log(\"Quiz results:\", response.data);\n            setQuizResults(response.data);\n        }).catch((error)=>{\n            console.error(\"Error fetching quiz results:\", error);\n        });\n    }, []);\n    // Fetch product list from API\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"http://localhost:8000/products/list\").then((response)=>{\n            console.log(\"Product list:\", response.data);\n            setProductList(response.data);\n        }).catch((error)=>{\n            console.error(\"Error fetching product list:\", error);\n        });\n    }, []);\n    // Filter product list based on quiz results\n    const filterProducts = ()=>{\n        if (!quizResults || !quizResults.skin_type || quizResults.skin_type.length === 0) {\n            return []; // Return an empty array if quiz results are not available or no skin types are selected\n        }\n        const lowerCaseSkinTypes = quizResults.skin_type.map((skinType)=>skinType.toLowerCase());\n        // Filter products based on selected skin types\n        let filteredProducts = productList.filter((product)=>{\n            const productSkinTypes = product.skintypes.toLowerCase().split(\",\");\n            return lowerCaseSkinTypes.some((selectedSkinType)=>productSkinTypes.includes(selectedSkinType));\n        });\n        if (quizResults.skincare_routine.length > 0) {\n            filteredProducts = filteredProducts.filter((product)=>{\n                return product.category && quizResults.skincare_routine.some((selectedRoutine)=>product.category.includes(selectedRoutine));\n            });\n        }\n        // Sort filtered products by category\n        filteredProducts.sort((a, b)=>a.category.localeCompare(b.category));\n        return filteredProducts;\n    };\n    // Group filtered products by category\n    const groupedProducts = filterProducts().reduce((groups, product)=>{\n        const category = product.category;\n        if (!groups[category]) {\n            groups[category] = [];\n        }\n        groups[category].push(product);\n        return groups;\n    }, {});\n    // Render the recommendation page\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Product Recommendations\"\n            }, void 0, false, {\n                fileName: \"/Users/nessaa/Documents/PibuProject/pibu/app/SkincareQuiz/[id]/page.jsx\",\n                lineNumber: 78,\n                columnNumber: 7\n            }, this),\n            quizResults && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: \"Quiz Results\"\n                }, void 0, false, {\n                    fileName: \"/Users/nessaa/Documents/PibuProject/pibu/app/SkincareQuiz/[id]/page.jsx\",\n                    lineNumber: 81,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/nessaa/Documents/PibuProject/pibu/app/SkincareQuiz/[id]/page.jsx\",\n                lineNumber: 80,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Filtered Products\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nessaa/Documents/PibuProject/pibu/app/SkincareQuiz/[id]/page.jsx\",\n                        lineNumber: 86,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: Object.entries(groupedProducts).map((param)=>{\n                            let [category, products] = param;\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        children: category\n                                    }, void 0, false, {\n                                        fileName: \"/Users/nessaa/Documents/PibuProject/pibu/app/SkincareQuiz/[id]/page.jsx\",\n                                        lineNumber: 90,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex overflow-x-auto space-x-4\",\n                                        children: products.map((product)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProductCard__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                                    product: product\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/nessaa/Documents/PibuProject/pibu/app/SkincareQuiz/[id]/page.jsx\",\n                                                    lineNumber: 94,\n                                                    columnNumber: 21\n                                                }, this)\n                                            }, product.id, false, {\n                                                fileName: \"/Users/nessaa/Documents/PibuProject/pibu/app/SkincareQuiz/[id]/page.jsx\",\n                                                lineNumber: 93,\n                                                columnNumber: 19\n                                            }, this))\n                                    }, void 0, false, {\n                                        fileName: \"/Users/nessaa/Documents/PibuProject/pibu/app/SkincareQuiz/[id]/page.jsx\",\n                                        lineNumber: 91,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, category, true, {\n                                fileName: \"/Users/nessaa/Documents/PibuProject/pibu/app/SkincareQuiz/[id]/page.jsx\",\n                                lineNumber: 89,\n                                columnNumber: 13\n                            }, this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/nessaa/Documents/PibuProject/pibu/app/SkincareQuiz/[id]/page.jsx\",\n                        lineNumber: 87,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nessaa/Documents/PibuProject/pibu/app/SkincareQuiz/[id]/page.jsx\",\n                lineNumber: 85,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nessaa/Documents/PibuProject/pibu/app/SkincareQuiz/[id]/page.jsx\",\n        lineNumber: 77,\n        columnNumber: 5\n    }, this);\n}\n_s(QuizRecommendations, \"TIMbT9AEYUmmV9PyOLE8MMbAaWU=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname\n    ];\n});\n_c = QuizRecommendations;\nvar _c;\n$RefreshReg$(_c, \"QuizRecommendations\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9Ta2luY2FyZVF1aXovW2lkXS9wYWdlLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDbUQ7QUFDTDtBQUNwQjtBQUM2QjtBQUV4QyxTQUFTTTs7SUFDdEIsK0NBQStDO0lBQy9DLE1BQU1DLFdBQVdKLDREQUFXQTtJQUM1QixNQUFNSyxLQUFLRCxTQUFTRSxLQUFLLENBQUMsS0FBS0MsR0FBRyxJQUFJLDJCQUEyQjtJQUVqRSxNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR1gsK0NBQVFBLENBQUM7SUFDL0MsTUFBTSxDQUFDWSxhQUFhQyxlQUFlLEdBQUdiLCtDQUFRQSxDQUFDLEVBQUU7SUFFakQsOEJBQThCO0lBQzlCQyxnREFBU0EsQ0FBQztRQUNSRSw2Q0FBS0EsQ0FBQ1csR0FBRyxDQUFDLGtDQUFxQyxPQUFIUCxLQUN6Q1EsSUFBSSxDQUFDQyxDQUFBQTtZQUNKQyxRQUFRQyxHQUFHLENBQUMsaUJBQWlCRixTQUFTRyxJQUFJO1lBQzFDUixlQUFlSyxTQUFTRyxJQUFJO1FBQzlCLEdBQ0NDLEtBQUssQ0FBQ0MsQ0FBQUE7WUFDTEosUUFBUUksS0FBSyxDQUFDLGdDQUFnQ0E7UUFDaEQ7SUFDSixHQUFHLEVBQUU7SUFFTCw4QkFBOEI7SUFDOUJwQixnREFBU0EsQ0FBQztRQUNSRSw2Q0FBS0EsQ0FBQ1csR0FBRyxDQUFFLHVDQUNSQyxJQUFJLENBQUNDLENBQUFBO1lBQ0pDLFFBQVFDLEdBQUcsQ0FBQyxpQkFBaUJGLFNBQVNHLElBQUk7WUFDMUNOLGVBQWVHLFNBQVNHLElBQUk7UUFDOUIsR0FDQ0MsS0FBSyxDQUFDQyxDQUFBQTtZQUNMSixRQUFRSSxLQUFLLENBQUMsZ0NBQWdDQTtRQUNoRDtJQUNKLEdBQUcsRUFBRTtJQUVMLDRDQUE0QztJQUM1QyxNQUFNQyxpQkFBaUI7UUFDckIsSUFBSSxDQUFDWixlQUFlLENBQUNBLFlBQVlhLFNBQVMsSUFBSWIsWUFBWWEsU0FBUyxDQUFDQyxNQUFNLEtBQUssR0FBRztZQUNoRixPQUFPLEVBQUUsRUFBRSx3RkFBd0Y7UUFDckc7UUFFQSxNQUFNQyxxQkFBcUJmLFlBQVlhLFNBQVMsQ0FBQ0csR0FBRyxDQUFDQyxDQUFBQSxXQUFZQSxTQUFTQyxXQUFXO1FBRXJGLCtDQUErQztRQUMvQyxJQUFJQyxtQkFBbUJqQixZQUFZa0IsTUFBTSxDQUFDQyxDQUFBQTtZQUN4QyxNQUFNQyxtQkFBbUJELFFBQVFFLFNBQVMsQ0FBQ0wsV0FBVyxHQUFHcEIsS0FBSyxDQUFDO1lBQy9ELE9BQU9pQixtQkFBbUJTLElBQUksQ0FBQ0MsQ0FBQUEsbUJBQW9CSCxpQkFBaUJJLFFBQVEsQ0FBQ0Q7UUFDL0U7UUFFQSxJQUFJekIsWUFBWTJCLGdCQUFnQixDQUFDYixNQUFNLEdBQUcsR0FBRztZQUMzQ0ssbUJBQW1CQSxpQkFBaUJDLE1BQU0sQ0FBQ0MsQ0FBQUE7Z0JBQ3pDLE9BQU9BLFFBQVFPLFFBQVEsSUFBSTVCLFlBQVkyQixnQkFBZ0IsQ0FBQ0gsSUFBSSxDQUFDSyxDQUFBQSxrQkFBbUJSLFFBQVFPLFFBQVEsQ0FBQ0YsUUFBUSxDQUFDRztZQUM1RztRQUNGO1FBRUEscUNBQXFDO1FBQ3JDVixpQkFBaUJXLElBQUksQ0FBQyxDQUFDQyxHQUFHQyxJQUFNRCxFQUFFSCxRQUFRLENBQUNLLGFBQWEsQ0FBQ0QsRUFBRUosUUFBUTtRQUVuRSxPQUFPVDtJQUNUO0lBRUEsc0NBQXNDO0lBQ3RDLE1BQU1lLGtCQUFrQnRCLGlCQUFpQnVCLE1BQU0sQ0FBQyxDQUFDQyxRQUFRZjtRQUN2RCxNQUFNTyxXQUFXUCxRQUFRTyxRQUFRO1FBQ2pDLElBQUksQ0FBQ1EsTUFBTSxDQUFDUixTQUFTLEVBQUU7WUFDckJRLE1BQU0sQ0FBQ1IsU0FBUyxHQUFHLEVBQUU7UUFDdkI7UUFDQVEsTUFBTSxDQUFDUixTQUFTLENBQUNTLElBQUksQ0FBQ2hCO1FBQ3RCLE9BQU9lO0lBQ1QsR0FBRyxDQUFDO0lBRUosaUNBQWlDO0lBQ2pDLHFCQUNFLDhEQUFDRTs7MEJBQ0MsOERBQUNDOzBCQUFHOzs7Ozs7WUFDSHZDLDZCQUNDLDhEQUFDc0M7MEJBQ0MsNEVBQUNFOzhCQUFHOzs7Ozs7Ozs7OzswQkFJUiw4REFBQ0Y7O2tDQUNDLDhEQUFDRTtrQ0FBRzs7Ozs7O2tDQUNKLDhEQUFDRjtrQ0FDRUcsT0FBT0MsT0FBTyxDQUFDUixpQkFBaUJsQixHQUFHLENBQUM7Z0NBQUMsQ0FBQ1ksVUFBVWUsU0FBUztpREFDeEQsOERBQUNMOztrREFDQyw4REFBQ007a0RBQUloQjs7Ozs7O2tEQUNMLDhEQUFDVTt3Q0FBSU8sV0FBVTtrREFDWkYsU0FBUzNCLEdBQUcsQ0FBQ0ssQ0FBQUEsd0JBQ1osOERBQUNpQjswREFDQyw0RUFBQzVDLCtEQUFXQTtvREFBQzJCLFNBQVNBOzs7Ozs7K0NBRGRBLFFBQVF4QixFQUFFOzs7Ozs7Ozs7OzsrQkFKaEIrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFldEI7R0FqR3dCakM7O1FBRUxILHdEQUFXQTs7O0tBRk5HIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9Ta2luY2FyZVF1aXovW2lkXS9wYWdlLmpzeD85MWE3Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUGF0aG5hbWUgfSBmcm9tICduZXh0L25hdmlnYXRpb24nO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBQcm9kdWN0Q2FyZCBmcm9tICcuLi8uLi9jb21wb25lbnRzL1Byb2R1Y3RDYXJkJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUXVpelJlY29tbWVuZGF0aW9ucygpIHtcbiAgLy8gU3RhdGUgdG8gc3RvcmUgcXVpeiByZXN1bHRzIGFuZCBwcm9kdWN0IGxpc3RcbiAgY29uc3QgcGF0aG5hbWUgPSB1c2VQYXRobmFtZSgpO1xuICBjb25zdCBpZCA9IHBhdGhuYW1lLnNwbGl0KCcvJykucG9wKCk7IC8vIEV4dHJhY3QgaWQgZnJvbSBwYXRobmFtZVxuXG4gIGNvbnN0IFtxdWl6UmVzdWx0cywgc2V0UXVpelJlc3VsdHNdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtwcm9kdWN0TGlzdCwgc2V0UHJvZHVjdExpc3RdID0gdXNlU3RhdGUoW10pO1xuXG4gIC8vIEZldGNoIHF1aXogcmVzdWx0cyBmcm9tIEFQSVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGF4aW9zLmdldChgaHR0cDovL2xvY2FsaG9zdDo4MDAwL3NraW5xdWl6LyR7aWR9YClcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ1F1aXogcmVzdWx0czonLCByZXNwb25zZS5kYXRhKTtcbiAgICAgICAgc2V0UXVpelJlc3VsdHMocmVzcG9uc2UuZGF0YSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgcXVpeiByZXN1bHRzOicsIGVycm9yKTtcbiAgICAgIH0pO1xuICB9LCBbXSk7XG5cbiAgLy8gRmV0Y2ggcHJvZHVjdCBsaXN0IGZyb20gQVBJXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXhpb3MuZ2V0KGBodHRwOi8vbG9jYWxob3N0OjgwMDAvcHJvZHVjdHMvbGlzdGApXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdQcm9kdWN0IGxpc3Q6JywgcmVzcG9uc2UuZGF0YSk7XG4gICAgICAgIHNldFByb2R1Y3RMaXN0KHJlc3BvbnNlLmRhdGEpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHByb2R1Y3QgbGlzdDonLCBlcnJvcik7XG4gICAgICB9KTtcbiAgfSwgW10pO1xuXG4gIC8vIEZpbHRlciBwcm9kdWN0IGxpc3QgYmFzZWQgb24gcXVpeiByZXN1bHRzXG4gIGNvbnN0IGZpbHRlclByb2R1Y3RzID0gKCkgPT4ge1xuICAgIGlmICghcXVpelJlc3VsdHMgfHwgIXF1aXpSZXN1bHRzLnNraW5fdHlwZSB8fCBxdWl6UmVzdWx0cy5za2luX3R5cGUubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gW107IC8vIFJldHVybiBhbiBlbXB0eSBhcnJheSBpZiBxdWl6IHJlc3VsdHMgYXJlIG5vdCBhdmFpbGFibGUgb3Igbm8gc2tpbiB0eXBlcyBhcmUgc2VsZWN0ZWRcbiAgICB9XG5cbiAgICBjb25zdCBsb3dlckNhc2VTa2luVHlwZXMgPSBxdWl6UmVzdWx0cy5za2luX3R5cGUubWFwKHNraW5UeXBlID0+IHNraW5UeXBlLnRvTG93ZXJDYXNlKCkpO1xuXG4gICAgLy8gRmlsdGVyIHByb2R1Y3RzIGJhc2VkIG9uIHNlbGVjdGVkIHNraW4gdHlwZXNcbiAgICBsZXQgZmlsdGVyZWRQcm9kdWN0cyA9IHByb2R1Y3RMaXN0LmZpbHRlcihwcm9kdWN0ID0+IHtcbiAgICAgIGNvbnN0IHByb2R1Y3RTa2luVHlwZXMgPSBwcm9kdWN0LnNraW50eXBlcy50b0xvd2VyQ2FzZSgpLnNwbGl0KCcsJyk7XG4gICAgICByZXR1cm4gbG93ZXJDYXNlU2tpblR5cGVzLnNvbWUoc2VsZWN0ZWRTa2luVHlwZSA9PiBwcm9kdWN0U2tpblR5cGVzLmluY2x1ZGVzKHNlbGVjdGVkU2tpblR5cGUpKTtcbiAgICB9KTtcblxuICAgIGlmIChxdWl6UmVzdWx0cy5za2luY2FyZV9yb3V0aW5lLmxlbmd0aCA+IDApIHtcbiAgICAgIGZpbHRlcmVkUHJvZHVjdHMgPSBmaWx0ZXJlZFByb2R1Y3RzLmZpbHRlcihwcm9kdWN0ID0+IHtcbiAgICAgICAgcmV0dXJuIHByb2R1Y3QuY2F0ZWdvcnkgJiYgcXVpelJlc3VsdHMuc2tpbmNhcmVfcm91dGluZS5zb21lKHNlbGVjdGVkUm91dGluZSA9PiBwcm9kdWN0LmNhdGVnb3J5LmluY2x1ZGVzKHNlbGVjdGVkUm91dGluZSkpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gU29ydCBmaWx0ZXJlZCBwcm9kdWN0cyBieSBjYXRlZ29yeVxuICAgIGZpbHRlcmVkUHJvZHVjdHMuc29ydCgoYSwgYikgPT4gYS5jYXRlZ29yeS5sb2NhbGVDb21wYXJlKGIuY2F0ZWdvcnkpKTtcblxuICAgIHJldHVybiBmaWx0ZXJlZFByb2R1Y3RzO1xuICB9O1xuXG4gIC8vIEdyb3VwIGZpbHRlcmVkIHByb2R1Y3RzIGJ5IGNhdGVnb3J5XG4gIGNvbnN0IGdyb3VwZWRQcm9kdWN0cyA9IGZpbHRlclByb2R1Y3RzKCkucmVkdWNlKChncm91cHMsIHByb2R1Y3QpID0+IHtcbiAgICBjb25zdCBjYXRlZ29yeSA9IHByb2R1Y3QuY2F0ZWdvcnk7XG4gICAgaWYgKCFncm91cHNbY2F0ZWdvcnldKSB7XG4gICAgICBncm91cHNbY2F0ZWdvcnldID0gW107XG4gICAgfVxuICAgIGdyb3Vwc1tjYXRlZ29yeV0ucHVzaChwcm9kdWN0KTtcbiAgICByZXR1cm4gZ3JvdXBzO1xuICB9LCB7fSk7XG5cbiAgLy8gUmVuZGVyIHRoZSByZWNvbW1lbmRhdGlvbiBwYWdlXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT5Qcm9kdWN0IFJlY29tbWVuZGF0aW9uczwvaDE+XG4gICAgICB7cXVpelJlc3VsdHMgJiYgKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoMj5RdWl6IFJlc3VsdHM8L2gyPlxuICAgICAgICAgIHsvKiBEaXNwbGF5IHF1aXogcmVzdWx0cyBoZXJlICovfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgICA8ZGl2PlxuICAgICAgICA8aDI+RmlsdGVyZWQgUHJvZHVjdHM8L2gyPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIHtPYmplY3QuZW50cmllcyhncm91cGVkUHJvZHVjdHMpLm1hcCgoW2NhdGVnb3J5LCBwcm9kdWN0c10pID0+IChcbiAgICAgICAgICAgIDxkaXYga2V5PXtjYXRlZ29yeX0+XG4gICAgICAgICAgICAgIDxoMz57Y2F0ZWdvcnl9PC9oMz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IG92ZXJmbG93LXgtYXV0byBzcGFjZS14LTRcIj5cbiAgICAgICAgICAgICAgICB7cHJvZHVjdHMubWFwKHByb2R1Y3QgPT4gKFxuICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e3Byb2R1Y3QuaWR9PlxuICAgICAgICAgICAgICAgICAgICA8UHJvZHVjdENhcmQgcHJvZHVjdD17cHJvZHVjdH0gLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VQYXRobmFtZSIsImF4aW9zIiwiUHJvZHVjdENhcmQiLCJRdWl6UmVjb21tZW5kYXRpb25zIiwicGF0aG5hbWUiLCJpZCIsInNwbGl0IiwicG9wIiwicXVpelJlc3VsdHMiLCJzZXRRdWl6UmVzdWx0cyIsInByb2R1Y3RMaXN0Iiwic2V0UHJvZHVjdExpc3QiLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImNhdGNoIiwiZXJyb3IiLCJmaWx0ZXJQcm9kdWN0cyIsInNraW5fdHlwZSIsImxlbmd0aCIsImxvd2VyQ2FzZVNraW5UeXBlcyIsIm1hcCIsInNraW5UeXBlIiwidG9Mb3dlckNhc2UiLCJmaWx0ZXJlZFByb2R1Y3RzIiwiZmlsdGVyIiwicHJvZHVjdCIsInByb2R1Y3RTa2luVHlwZXMiLCJza2ludHlwZXMiLCJzb21lIiwic2VsZWN0ZWRTa2luVHlwZSIsImluY2x1ZGVzIiwic2tpbmNhcmVfcm91dGluZSIsImNhdGVnb3J5Iiwic2VsZWN0ZWRSb3V0aW5lIiwic29ydCIsImEiLCJiIiwibG9jYWxlQ29tcGFyZSIsImdyb3VwZWRQcm9kdWN0cyIsInJlZHVjZSIsImdyb3VwcyIsInB1c2giLCJkaXYiLCJoMSIsImgyIiwiT2JqZWN0IiwiZW50cmllcyIsInByb2R1Y3RzIiwiaDMiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/SkincareQuiz/[id]/page.jsx\n"));

/***/ })

});
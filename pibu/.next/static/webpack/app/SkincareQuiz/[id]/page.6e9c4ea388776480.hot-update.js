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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ QuizRecommendations; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _components_ProductCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/ProductCard */ \"(app-pages-browser)/./app/components/ProductCard.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction QuizRecommendations() {\n    _s();\n    // State to store quiz results and product list\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname)();\n    const id = pathname.split(\"/\").pop(); // Extract id from pathname\n    const [quizResults, setQuizResults] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [productList, setProductList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    // Fetch quiz results from API\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"http://localhost:8000/skinquiz/\".concat(id)).then((response)=>{\n            console.log(\"Quiz results:\", response.data);\n            setQuizResults(response.data);\n        }).catch((error)=>{\n            console.error(\"Error fetching quiz results:\", error);\n        });\n    }, []);\n    // Fetch product list from API\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"http://localhost:8000/products/list\").then((response)=>{\n            console.log(\"Product list:\", response.data);\n            setProductList(response.data);\n        }).catch((error)=>{\n            console.error(\"Error fetching product list:\", error);\n        });\n    }, []);\n    // Filter product list based on quiz results\n    const filterProducts = ()=>{\n        if (!quizResults || !quizResults.skin_type || quizResults.skin_type.length === 0) {\n            return []; // Return an empty array if quiz results are not available or no skin types are selected\n        }\n        const lowerCaseSkinTypes = quizResults.skin_type.map((skinType)=>skinType.toLowerCase());\n        // Filter products based on selected skin types\n        let filteredProducts = productList.filter((product)=>{\n            const productSkinTypes = product.skintypes.toLowerCase().split(\",\");\n            return lowerCaseSkinTypes.some((selectedSkinType)=>productSkinTypes.includes(selectedSkinType));\n        });\n        if (quizResults.skincare_routine.length > 0) {\n            filteredProducts = filteredProducts.filter((product)=>{\n                return product.category && quizResults.skincare_routine.some((selectedRoutine)=>product.category.includes(selectedRoutine));\n            });\n        }\n        // Sort filtered products by category\n        filteredProducts.sort((a, b)=>a.category.localeCompare(b.category));\n        return filteredProducts;\n    };\n    // Group filtered products by category\n    const groupedProducts = filterProducts().reduce((groups, product)=>{\n        const category = product.category;\n        if (!groups[category]) {\n            groups[category] = [];\n        }\n        groups[category].push(product);\n        return groups;\n    }, {});\n    // Render the recommendation page\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Product Recommendations\"\n            }, void 0, false, {\n                fileName: \"/Users/nessaa/Documents/PibuProject/pibu/app/SkincareQuiz/[id]/page.jsx\",\n                lineNumber: 78,\n                columnNumber: 7\n            }, this),\n            quizResults && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: \"Quiz Results\"\n                }, void 0, false, {\n                    fileName: \"/Users/nessaa/Documents/PibuProject/pibu/app/SkincareQuiz/[id]/page.jsx\",\n                    lineNumber: 81,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/nessaa/Documents/PibuProject/pibu/app/SkincareQuiz/[id]/page.jsx\",\n                lineNumber: 80,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Filtered Products\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nessaa/Documents/PibuProject/pibu/app/SkincareQuiz/[id]/page.jsx\",\n                        lineNumber: 86,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: Object.entries(groupedProducts).map((param)=>{\n                            let [category, products] = param;\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        children: category\n                                    }, void 0, false, {\n                                        fileName: \"/Users/nessaa/Documents/PibuProject/pibu/app/SkincareQuiz/[id]/page.jsx\",\n                                        lineNumber: 90,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex overflow-x-auto\",\n                                        children: products.map((product)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"flex-none w-1/2\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProductCard__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                                    product: product\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/nessaa/Documents/PibuProject/pibu/app/SkincareQuiz/[id]/page.jsx\",\n                                                    lineNumber: 94,\n                                                    columnNumber: 21\n                                                }, this)\n                                            }, product.id, false, {\n                                                fileName: \"/Users/nessaa/Documents/PibuProject/pibu/app/SkincareQuiz/[id]/page.jsx\",\n                                                lineNumber: 93,\n                                                columnNumber: 19\n                                            }, this))\n                                    }, void 0, false, {\n                                        fileName: \"/Users/nessaa/Documents/PibuProject/pibu/app/SkincareQuiz/[id]/page.jsx\",\n                                        lineNumber: 91,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, category, true, {\n                                fileName: \"/Users/nessaa/Documents/PibuProject/pibu/app/SkincareQuiz/[id]/page.jsx\",\n                                lineNumber: 89,\n                                columnNumber: 13\n                            }, this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/nessaa/Documents/PibuProject/pibu/app/SkincareQuiz/[id]/page.jsx\",\n                        lineNumber: 87,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nessaa/Documents/PibuProject/pibu/app/SkincareQuiz/[id]/page.jsx\",\n                lineNumber: 85,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nessaa/Documents/PibuProject/pibu/app/SkincareQuiz/[id]/page.jsx\",\n        lineNumber: 77,\n        columnNumber: 5\n    }, this);\n}\n_s(QuizRecommendations, \"TIMbT9AEYUmmV9PyOLE8MMbAaWU=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname\n    ];\n});\n_c = QuizRecommendations;\nvar _c;\n$RefreshReg$(_c, \"QuizRecommendations\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9Ta2luY2FyZVF1aXovW2lkXS9wYWdlLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDbUQ7QUFDTDtBQUNwQjtBQUM2QjtBQUV4QyxTQUFTTTs7SUFDdEIsK0NBQStDO0lBQy9DLE1BQU1DLFdBQVdKLDREQUFXQTtJQUM1QixNQUFNSyxLQUFLRCxTQUFTRSxLQUFLLENBQUMsS0FBS0MsR0FBRyxJQUFJLDJCQUEyQjtJQUVqRSxNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR1gsK0NBQVFBLENBQUM7SUFDL0MsTUFBTSxDQUFDWSxhQUFhQyxlQUFlLEdBQUdiLCtDQUFRQSxDQUFDLEVBQUU7SUFFakQsOEJBQThCO0lBQzlCQyxnREFBU0EsQ0FBQztRQUNSRSw2Q0FBS0EsQ0FBQ1csR0FBRyxDQUFDLGtDQUFxQyxPQUFIUCxLQUN6Q1EsSUFBSSxDQUFDQyxDQUFBQTtZQUNKQyxRQUFRQyxHQUFHLENBQUMsaUJBQWlCRixTQUFTRyxJQUFJO1lBQzFDUixlQUFlSyxTQUFTRyxJQUFJO1FBQzlCLEdBQ0NDLEtBQUssQ0FBQ0MsQ0FBQUE7WUFDTEosUUFBUUksS0FBSyxDQUFDLGdDQUFnQ0E7UUFDaEQ7SUFDSixHQUFHLEVBQUU7SUFFTCw4QkFBOEI7SUFDOUJwQixnREFBU0EsQ0FBQztRQUNSRSw2Q0FBS0EsQ0FBQ1csR0FBRyxDQUFFLHVDQUNSQyxJQUFJLENBQUNDLENBQUFBO1lBQ0pDLFFBQVFDLEdBQUcsQ0FBQyxpQkFBaUJGLFNBQVNHLElBQUk7WUFDMUNOLGVBQWVHLFNBQVNHLElBQUk7UUFDOUIsR0FDQ0MsS0FBSyxDQUFDQyxDQUFBQTtZQUNMSixRQUFRSSxLQUFLLENBQUMsZ0NBQWdDQTtRQUNoRDtJQUNKLEdBQUcsRUFBRTtJQUVMLDRDQUE0QztJQUM1QyxNQUFNQyxpQkFBaUI7UUFDckIsSUFBSSxDQUFDWixlQUFlLENBQUNBLFlBQVlhLFNBQVMsSUFBSWIsWUFBWWEsU0FBUyxDQUFDQyxNQUFNLEtBQUssR0FBRztZQUNoRixPQUFPLEVBQUUsRUFBRSx3RkFBd0Y7UUFDckc7UUFFQSxNQUFNQyxxQkFBcUJmLFlBQVlhLFNBQVMsQ0FBQ0csR0FBRyxDQUFDQyxDQUFBQSxXQUFZQSxTQUFTQyxXQUFXO1FBRXJGLCtDQUErQztRQUMvQyxJQUFJQyxtQkFBbUJqQixZQUFZa0IsTUFBTSxDQUFDQyxDQUFBQTtZQUN4QyxNQUFNQyxtQkFBbUJELFFBQVFFLFNBQVMsQ0FBQ0wsV0FBVyxHQUFHcEIsS0FBSyxDQUFDO1lBQy9ELE9BQU9pQixtQkFBbUJTLElBQUksQ0FBQ0MsQ0FBQUEsbUJBQW9CSCxpQkFBaUJJLFFBQVEsQ0FBQ0Q7UUFDL0U7UUFFQSxJQUFJekIsWUFBWTJCLGdCQUFnQixDQUFDYixNQUFNLEdBQUcsR0FBRztZQUMzQ0ssbUJBQW1CQSxpQkFBaUJDLE1BQU0sQ0FBQ0MsQ0FBQUE7Z0JBQ3pDLE9BQU9BLFFBQVFPLFFBQVEsSUFBSTVCLFlBQVkyQixnQkFBZ0IsQ0FBQ0gsSUFBSSxDQUFDSyxDQUFBQSxrQkFBbUJSLFFBQVFPLFFBQVEsQ0FBQ0YsUUFBUSxDQUFDRztZQUM1RztRQUNGO1FBRUEscUNBQXFDO1FBQ3JDVixpQkFBaUJXLElBQUksQ0FBQyxDQUFDQyxHQUFHQyxJQUFNRCxFQUFFSCxRQUFRLENBQUNLLGFBQWEsQ0FBQ0QsRUFBRUosUUFBUTtRQUVuRSxPQUFPVDtJQUNUO0lBRUEsc0NBQXNDO0lBQ3RDLE1BQU1lLGtCQUFrQnRCLGlCQUFpQnVCLE1BQU0sQ0FBQyxDQUFDQyxRQUFRZjtRQUN2RCxNQUFNTyxXQUFXUCxRQUFRTyxRQUFRO1FBQ2pDLElBQUksQ0FBQ1EsTUFBTSxDQUFDUixTQUFTLEVBQUU7WUFDckJRLE1BQU0sQ0FBQ1IsU0FBUyxHQUFHLEVBQUU7UUFDdkI7UUFDQVEsTUFBTSxDQUFDUixTQUFTLENBQUNTLElBQUksQ0FBQ2hCO1FBQ3RCLE9BQU9lO0lBQ1QsR0FBRyxDQUFDO0lBRUosaUNBQWlDO0lBQ2pDLHFCQUNFLDhEQUFDRTs7MEJBQ0MsOERBQUNDOzBCQUFHOzs7Ozs7WUFDSHZDLDZCQUNDLDhEQUFDc0M7MEJBQ0MsNEVBQUNFOzhCQUFHOzs7Ozs7Ozs7OzswQkFJUiw4REFBQ0Y7O2tDQUNDLDhEQUFDRTtrQ0FBRzs7Ozs7O2tDQUNKLDhEQUFDRjtrQ0FDRUcsT0FBT0MsT0FBTyxDQUFDUixpQkFBaUJsQixHQUFHLENBQUM7Z0NBQUMsQ0FBQ1ksVUFBVWUsU0FBUztpREFDeEQsOERBQUNMOztrREFDQyw4REFBQ007a0RBQUloQjs7Ozs7O2tEQUNMLDhEQUFDVTt3Q0FBSU8sV0FBVTtrREFDWkYsU0FBUzNCLEdBQUcsQ0FBQ0ssQ0FBQUEsd0JBQ1osOERBQUNpQjtnREFBcUJPLFdBQVU7MERBQzlCLDRFQUFDbkQsK0RBQVdBO29EQUFDMkIsU0FBU0E7Ozs7OzsrQ0FEZEEsUUFBUXhCLEVBQUU7Ozs7Ozs7Ozs7OytCQUpoQitCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWV0QjtHQWpHd0JqQzs7UUFFTEgsd0RBQVdBOzs7S0FGTkciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL1NraW5jYXJlUXVpei9baWRdL3BhZ2UuanN4PzkxYTciXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VQYXRobmFtZSB9IGZyb20gJ25leHQvbmF2aWdhdGlvbic7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IFByb2R1Y3RDYXJkIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUHJvZHVjdENhcmQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBRdWl6UmVjb21tZW5kYXRpb25zKCkge1xuICAvLyBTdGF0ZSB0byBzdG9yZSBxdWl6IHJlc3VsdHMgYW5kIHByb2R1Y3QgbGlzdFxuICBjb25zdCBwYXRobmFtZSA9IHVzZVBhdGhuYW1lKCk7XG4gIGNvbnN0IGlkID0gcGF0aG5hbWUuc3BsaXQoJy8nKS5wb3AoKTsgLy8gRXh0cmFjdCBpZCBmcm9tIHBhdGhuYW1lXG5cbiAgY29uc3QgW3F1aXpSZXN1bHRzLCBzZXRRdWl6UmVzdWx0c10gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW3Byb2R1Y3RMaXN0LCBzZXRQcm9kdWN0TGlzdF0gPSB1c2VTdGF0ZShbXSk7XG5cbiAgLy8gRmV0Y2ggcXVpeiByZXN1bHRzIGZyb20gQVBJXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXhpb3MuZ2V0KGBodHRwOi8vbG9jYWxob3N0OjgwMDAvc2tpbnF1aXovJHtpZH1gKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnUXVpeiByZXN1bHRzOicsIHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICBzZXRRdWl6UmVzdWx0cyhyZXNwb25zZS5kYXRhKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBxdWl6IHJlc3VsdHM6JywgZXJyb3IpO1xuICAgICAgfSk7XG4gIH0sIFtdKTtcblxuICAvLyBGZXRjaCBwcm9kdWN0IGxpc3QgZnJvbSBBUElcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBheGlvcy5nZXQoYGh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9wcm9kdWN0cy9saXN0YClcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ1Byb2R1Y3QgbGlzdDonLCByZXNwb25zZS5kYXRhKTtcbiAgICAgICAgc2V0UHJvZHVjdExpc3QocmVzcG9uc2UuZGF0YSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgcHJvZHVjdCBsaXN0OicsIGVycm9yKTtcbiAgICAgIH0pO1xuICB9LCBbXSk7XG5cbiAgLy8gRmlsdGVyIHByb2R1Y3QgbGlzdCBiYXNlZCBvbiBxdWl6IHJlc3VsdHNcbiAgY29uc3QgZmlsdGVyUHJvZHVjdHMgPSAoKSA9PiB7XG4gICAgaWYgKCFxdWl6UmVzdWx0cyB8fCAhcXVpelJlc3VsdHMuc2tpbl90eXBlIHx8IHF1aXpSZXN1bHRzLnNraW5fdHlwZS5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBbXTsgLy8gUmV0dXJuIGFuIGVtcHR5IGFycmF5IGlmIHF1aXogcmVzdWx0cyBhcmUgbm90IGF2YWlsYWJsZSBvciBubyBza2luIHR5cGVzIGFyZSBzZWxlY3RlZFxuICAgIH1cblxuICAgIGNvbnN0IGxvd2VyQ2FzZVNraW5UeXBlcyA9IHF1aXpSZXN1bHRzLnNraW5fdHlwZS5tYXAoc2tpblR5cGUgPT4gc2tpblR5cGUudG9Mb3dlckNhc2UoKSk7XG5cbiAgICAvLyBGaWx0ZXIgcHJvZHVjdHMgYmFzZWQgb24gc2VsZWN0ZWQgc2tpbiB0eXBlc1xuICAgIGxldCBmaWx0ZXJlZFByb2R1Y3RzID0gcHJvZHVjdExpc3QuZmlsdGVyKHByb2R1Y3QgPT4ge1xuICAgICAgY29uc3QgcHJvZHVjdFNraW5UeXBlcyA9IHByb2R1Y3Quc2tpbnR5cGVzLnRvTG93ZXJDYXNlKCkuc3BsaXQoJywnKTtcbiAgICAgIHJldHVybiBsb3dlckNhc2VTa2luVHlwZXMuc29tZShzZWxlY3RlZFNraW5UeXBlID0+IHByb2R1Y3RTa2luVHlwZXMuaW5jbHVkZXMoc2VsZWN0ZWRTa2luVHlwZSkpO1xuICAgIH0pO1xuXG4gICAgaWYgKHF1aXpSZXN1bHRzLnNraW5jYXJlX3JvdXRpbmUubGVuZ3RoID4gMCkge1xuICAgICAgZmlsdGVyZWRQcm9kdWN0cyA9IGZpbHRlcmVkUHJvZHVjdHMuZmlsdGVyKHByb2R1Y3QgPT4ge1xuICAgICAgICByZXR1cm4gcHJvZHVjdC5jYXRlZ29yeSAmJiBxdWl6UmVzdWx0cy5za2luY2FyZV9yb3V0aW5lLnNvbWUoc2VsZWN0ZWRSb3V0aW5lID0+IHByb2R1Y3QuY2F0ZWdvcnkuaW5jbHVkZXMoc2VsZWN0ZWRSb3V0aW5lKSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBTb3J0IGZpbHRlcmVkIHByb2R1Y3RzIGJ5IGNhdGVnb3J5XG4gICAgZmlsdGVyZWRQcm9kdWN0cy5zb3J0KChhLCBiKSA9PiBhLmNhdGVnb3J5LmxvY2FsZUNvbXBhcmUoYi5jYXRlZ29yeSkpO1xuXG4gICAgcmV0dXJuIGZpbHRlcmVkUHJvZHVjdHM7XG4gIH07XG5cbiAgLy8gR3JvdXAgZmlsdGVyZWQgcHJvZHVjdHMgYnkgY2F0ZWdvcnlcbiAgY29uc3QgZ3JvdXBlZFByb2R1Y3RzID0gZmlsdGVyUHJvZHVjdHMoKS5yZWR1Y2UoKGdyb3VwcywgcHJvZHVjdCkgPT4ge1xuICAgIGNvbnN0IGNhdGVnb3J5ID0gcHJvZHVjdC5jYXRlZ29yeTtcbiAgICBpZiAoIWdyb3Vwc1tjYXRlZ29yeV0pIHtcbiAgICAgIGdyb3Vwc1tjYXRlZ29yeV0gPSBbXTtcbiAgICB9XG4gICAgZ3JvdXBzW2NhdGVnb3J5XS5wdXNoKHByb2R1Y3QpO1xuICAgIHJldHVybiBncm91cHM7XG4gIH0sIHt9KTtcblxuICAvLyBSZW5kZXIgdGhlIHJlY29tbWVuZGF0aW9uIHBhZ2VcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxPlByb2R1Y3QgUmVjb21tZW5kYXRpb25zPC9oMT5cbiAgICAgIHtxdWl6UmVzdWx0cyAmJiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGgyPlF1aXogUmVzdWx0czwvaDI+XG4gICAgICAgICAgey8qIERpc3BsYXkgcXVpeiByZXN1bHRzIGhlcmUgKi99XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMj5GaWx0ZXJlZCBQcm9kdWN0czwvaDI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAge09iamVjdC5lbnRyaWVzKGdyb3VwZWRQcm9kdWN0cykubWFwKChbY2F0ZWdvcnksIHByb2R1Y3RzXSkgPT4gKFxuICAgICAgICAgICAgPGRpdiBrZXk9e2NhdGVnb3J5fT5cbiAgICAgICAgICAgICAgPGgzPntjYXRlZ29yeX08L2gzPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggb3ZlcmZsb3cteC1hdXRvXCI+XG4gICAgICAgICAgICAgICAge3Byb2R1Y3RzLm1hcChwcm9kdWN0ID0+IChcbiAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtwcm9kdWN0LmlkfSBjbGFzc05hbWU9XCJmbGV4LW5vbmUgdy0xLzJcIj5cbiAgICAgICAgICAgICAgICAgICAgPFByb2R1Y3RDYXJkIHByb2R1Y3Q9e3Byb2R1Y3R9IC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUGF0aG5hbWUiLCJheGlvcyIsIlByb2R1Y3RDYXJkIiwiUXVpelJlY29tbWVuZGF0aW9ucyIsInBhdGhuYW1lIiwiaWQiLCJzcGxpdCIsInBvcCIsInF1aXpSZXN1bHRzIiwic2V0UXVpelJlc3VsdHMiLCJwcm9kdWN0TGlzdCIsInNldFByb2R1Y3RMaXN0IiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJjYXRjaCIsImVycm9yIiwiZmlsdGVyUHJvZHVjdHMiLCJza2luX3R5cGUiLCJsZW5ndGgiLCJsb3dlckNhc2VTa2luVHlwZXMiLCJtYXAiLCJza2luVHlwZSIsInRvTG93ZXJDYXNlIiwiZmlsdGVyZWRQcm9kdWN0cyIsImZpbHRlciIsInByb2R1Y3QiLCJwcm9kdWN0U2tpblR5cGVzIiwic2tpbnR5cGVzIiwic29tZSIsInNlbGVjdGVkU2tpblR5cGUiLCJpbmNsdWRlcyIsInNraW5jYXJlX3JvdXRpbmUiLCJjYXRlZ29yeSIsInNlbGVjdGVkUm91dGluZSIsInNvcnQiLCJhIiwiYiIsImxvY2FsZUNvbXBhcmUiLCJncm91cGVkUHJvZHVjdHMiLCJyZWR1Y2UiLCJncm91cHMiLCJwdXNoIiwiZGl2IiwiaDEiLCJoMiIsIk9iamVjdCIsImVudHJpZXMiLCJwcm9kdWN0cyIsImgzIiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/SkincareQuiz/[id]/page.jsx\n"));

/***/ })

});
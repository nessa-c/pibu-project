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

/***/ "(app-pages-browser)/./app/products/page.jsx":
/*!*******************************!*\
  !*** ./app/products/page.jsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _components_SearchBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/SearchBar */ \"(app-pages-browser)/./app/components/SearchBar.jsx\");\n/* harmony import */ var _components_FiltersTest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/FiltersTest */ \"(app-pages-browser)/./app/components/FiltersTest.jsx\");\n/* harmony import */ var _components_ProductCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ProductCard */ \"(app-pages-browser)/./app/components/ProductCard.jsx\");\n/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/NavBar */ \"(app-pages-browser)/./app/components/NavBar.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n // Import Axios\n\n\n\n\nfunction SearchProducts() {\n    _s();\n    const [products, setProducts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [searchQuery, setSearchQuery] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [selectedCategories, setSelectedCategories] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [filteredProducts, setFilteredProducts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const isQueryInProduct = (product, query)=>{\n        return Object.values(product).some((value)=>String(value).toLowerCase().includes(query.toLowerCase()));\n    };\n    const handleSearch = (query)=>{\n        setSearchQuery(query);\n    };\n    const handleFilter = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((category, isChecked)=>{\n        if (isChecked) {\n            setSelectedCategories((prevCategories)=>[\n                    ...prevCategories,\n                    category\n                ]);\n        } else {\n            setSelectedCategories((prevCategories)=>prevCategories.filter((item)=>item !== category));\n        }\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchProducts();\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const filtered = products.filter((product)=>(searchQuery ? isQueryInProduct(product, searchQuery) : true) && (selectedCategories.length === 0 ? true : selectedCategories.includes(product.productCategory)));\n        setFilteredProducts(filtered);\n    }, [\n        searchQuery,\n        selectedCategories,\n        products\n    ]);\n    const fetchProducts = async ()=>{\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].get(\"http://localhost:8000/products/list\"); // Use Axios for HTTP request\n            setProducts(response.data);\n        } catch (error) {\n            console.error(\"Error fetching products:\", error);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        async function fetchProduct() {\n            if (id) {\n                try {\n                    const productResponse = await axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].get(\"http://localhost:8000/products/\".concat(id, \"/\"));\n                    const brandResponse = await axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].get(\"http://localhost:8000/sorting/brands/\".concat(productResponse.data.brandID, \"/\"));\n                    const brandName = brandResponse.data.brandName;\n                    const productWithBrandName = {\n                        ...productResponse.data,\n                        brandName\n                    };\n                    setProduct(productWithBrandName);\n                } catch (error) {\n                    console.error(\"Error fetching product:\", error);\n                }\n            }\n        }\n        fetchProduct();\n    }, [\n        id\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: \"sticky top-5 z-50 m-5\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NavBar__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/nessaa/Documents/PibuProject/pibu/app/products/page.jsx\",\n                    lineNumber: 75,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/nessaa/Documents/PibuProject/pibu/app/products/page.jsx\",\n                lineNumber: 74,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mx-20\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SearchBar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        onSearch: handleSearch\n                    }, void 0, false, {\n                        fileName: \"/Users/nessaa/Documents/PibuProject/pibu/app/products/page.jsx\",\n                        lineNumber: 78,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid xl:grid-cols-5 gap-5\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FiltersTest__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    onFilter: handleFilter,\n                                    className: \"w-1/4\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/nessaa/Documents/PibuProject/pibu/app/products/page.jsx\",\n                                    lineNumber: 81,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/nessaa/Documents/PibuProject/pibu/app/products/page.jsx\",\n                                lineNumber: 80,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"xl:col-end-6 xl:col-span-4 grid xl:grid-cols-2 gap-5\",\n                                children: filteredProducts.length > 0 ? filteredProducts.map((product)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProductCard__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                        product: product\n                                    }, product.id, false, {\n                                        fileName: \"/Users/nessaa/Documents/PibuProject/pibu/app/products/page.jsx\",\n                                        lineNumber: 86,\n                                        columnNumber: 29\n                                    }, this)) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    style: {\n                                        marginTop: \"20px\"\n                                    },\n                                    children: \"There are no products found.\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/nessaa/Documents/PibuProject/pibu/app/products/page.jsx\",\n                                    lineNumber: 89,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/nessaa/Documents/PibuProject/pibu/app/products/page.jsx\",\n                                lineNumber: 83,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nessaa/Documents/PibuProject/pibu/app/products/page.jsx\",\n                        lineNumber: 79,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nessaa/Documents/PibuProject/pibu/app/products/page.jsx\",\n                lineNumber: 77,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nessaa/Documents/PibuProject/pibu/app/products/page.jsx\",\n        lineNumber: 73,\n        columnNumber: 9\n    }, this);\n}\n_s(SearchProducts, \"RZzk2PDtOhXHCVFtNJI+B5JJDR8=\");\n_c = SearchProducts;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SearchProducts);\nvar _c;\n$RefreshReg$(_c, \"SearchProducts\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wcm9kdWN0cy9wYWdlLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNnRTtBQUN0QyxDQUFFLGVBQWU7QUFDSztBQUNJO0FBQ0E7QUFDVjtBQUUxQyxTQUFTUzs7SUFDTCxNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR1YsK0NBQVFBLENBQUMsRUFBRTtJQUMzQyxNQUFNLENBQUNXLGFBQWFDLGVBQWUsR0FBR1osK0NBQVFBLENBQUM7SUFDL0MsTUFBTSxDQUFDYSxvQkFBb0JDLHNCQUFzQixHQUFHZCwrQ0FBUUEsQ0FBQyxFQUFFO0lBQy9ELE1BQU0sQ0FBQ2Usa0JBQWtCQyxvQkFBb0IsR0FBR2hCLCtDQUFRQSxDQUFDLEVBQUU7SUFFM0QsTUFBTWlCLG1CQUFtQixDQUFDQyxTQUFTQztRQUMvQixPQUFPQyxPQUFPQyxNQUFNLENBQUNILFNBQVNJLElBQUksQ0FBQ0MsQ0FBQUEsUUFDL0JDLE9BQU9ELE9BQU9FLFdBQVcsR0FBR0MsUUFBUSxDQUFDUCxNQUFNTSxXQUFXO0lBRTlEO0lBRUEsTUFBTUUsZUFBZSxDQUFDUjtRQUNsQlAsZUFBZU87SUFDbkI7SUFFQSxNQUFNUyxlQUFlMUIsa0RBQVdBLENBQUMsQ0FBQzJCLFVBQVVDO1FBQ3hDLElBQUlBLFdBQVc7WUFDWGhCLHNCQUFzQmlCLENBQUFBLGlCQUFrQjt1QkFBSUE7b0JBQWdCRjtpQkFBUztRQUN6RSxPQUFPO1lBQ0hmLHNCQUFzQmlCLENBQUFBLGlCQUFrQkEsZUFBZUMsTUFBTSxDQUFDQyxDQUFBQSxPQUFRQSxTQUFTSjtRQUNuRjtJQUNKLEdBQUcsRUFBRTtJQUVMNUIsZ0RBQVNBLENBQUM7UUFDTmlDO0lBQ0osR0FBRyxFQUFFO0lBRUxqQyxnREFBU0EsQ0FBQztRQUNOLE1BQU1rQyxXQUFXMUIsU0FBU3VCLE1BQU0sQ0FBQ2QsQ0FBQUEsVUFDN0IsQ0FBQ1AsY0FBY00saUJBQWlCQyxTQUFTUCxlQUFlLElBQUcsS0FDMURFLENBQUFBLG1CQUFtQnVCLE1BQU0sS0FBSyxJQUFJLE9BQU92QixtQkFBbUJhLFFBQVEsQ0FBQ1IsUUFBUW1CLGVBQWU7UUFFakdyQixvQkFBb0JtQjtJQUN4QixHQUFHO1FBQUN4QjtRQUFhRTtRQUFvQko7S0FBUztJQUU5QyxNQUFNeUIsZ0JBQWdCO1FBQ2xCLElBQUk7WUFDQSxNQUFNSSxXQUFXLE1BQU1uQyw2Q0FBS0EsQ0FBQ29DLEdBQUcsQ0FBQyx3Q0FBeUMsNkJBQTZCO1lBQ3ZHN0IsWUFBWTRCLFNBQVNFLElBQUk7UUFDN0IsRUFBRSxPQUFPQyxPQUFPO1lBQ1pDLFFBQVFELEtBQUssQ0FBQyw0QkFBNEJBO1FBQzlDO0lBQ0o7SUFFQXhDLGdEQUFTQSxDQUFDO1FBQ04sZUFBZTBDO1lBQ1gsSUFBSUMsSUFBSTtnQkFDSixJQUFJO29CQUNBLE1BQU1DLGtCQUFrQixNQUFNMUMsNkNBQUtBLENBQUNvQyxHQUFHLENBQUMsa0NBQXFDLE9BQUhLLElBQUc7b0JBQzdFLE1BQU1FLGdCQUFnQixNQUFNM0MsNkNBQUtBLENBQUNvQyxHQUFHLENBQUMsd0NBQXFFLE9BQTdCTSxnQkFBZ0JMLElBQUksQ0FBQ08sT0FBTyxFQUFDO29CQUMzRyxNQUFNQyxZQUFZRixjQUFjTixJQUFJLENBQUNRLFNBQVM7b0JBQzlDLE1BQU1DLHVCQUF1Qjt3QkFBRSxHQUFHSixnQkFBZ0JMLElBQUk7d0JBQUVRO29CQUFVO29CQUNsRUUsV0FBV0Q7Z0JBQ2YsRUFBRSxPQUFPUixPQUFPO29CQUNaQyxRQUFRRCxLQUFLLENBQUMsMkJBQTJCQTtnQkFDN0M7WUFDSjtRQUNKO1FBRUFFO0lBQ0osR0FBRztRQUFDQztLQUFHO0lBRVAscUJBQ0ksOERBQUNPOzswQkFDRyw4REFBQ0M7Z0JBQU9DLFdBQVU7MEJBQ2QsNEVBQUM5QywwREFBTUE7Ozs7Ozs7Ozs7MEJBRVgsOERBQUM0QztnQkFBSUUsV0FBVTs7a0NBQ1gsOERBQUNqRCw2REFBU0E7d0JBQUNrRCxVQUFVM0I7Ozs7OztrQ0FDckIsOERBQUN3Qjt3QkFBSUUsV0FBVTs7MENBQ1gsOERBQUNGO2dDQUFJRSxXQUFVOzBDQUNYLDRFQUFDaEQsK0RBQVdBO29DQUFDa0QsVUFBVTNCO29DQUFjeUIsV0FBVTs7Ozs7Ozs7Ozs7MENBRW5ELDhEQUFDRjtnQ0FBSUUsV0FBVTswQ0FDVnRDLGlCQUFpQnFCLE1BQU0sR0FBRyxJQUMzQnJCLGlCQUFpQnlDLEdBQUcsQ0FBQ3RDLENBQUFBLHdCQUNqQiw4REFBQ1osK0RBQVdBO3dDQUFrQlksU0FBU0E7dUNBQXJCQSxRQUFRMEIsRUFBRTs7Ozs4REFHaEMsOERBQUNhO29DQUFFQyxPQUFPO3dDQUFFQyxXQUFXO29DQUFPOzhDQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU96RDtHQXZGU25EO0tBQUFBO0FBeUZULCtEQUFlQSxjQUFjQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9wcm9kdWN0cy9wYWdlLmpzeD80MDZhIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJzsgIC8vIEltcG9ydCBBeGlvc1xuaW1wb3J0IFNlYXJjaEJhciBmcm9tICcuLi9jb21wb25lbnRzL1NlYXJjaEJhcic7XG5pbXBvcnQgRmlsdGVyc1Rlc3QgZnJvbSAnLi4vY29tcG9uZW50cy9GaWx0ZXJzVGVzdCc7XG5pbXBvcnQgUHJvZHVjdENhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9Qcm9kdWN0Q2FyZCc7XG5pbXBvcnQgTmF2QmFyIGZyb20gJy4uL2NvbXBvbmVudHMvTmF2QmFyJztcblxuZnVuY3Rpb24gU2VhcmNoUHJvZHVjdHMoKSB7XG4gICAgY29uc3QgW3Byb2R1Y3RzLCBzZXRQcm9kdWN0c10gPSB1c2VTdGF0ZShbXSk7ICBcbiAgICBjb25zdCBbc2VhcmNoUXVlcnksIHNldFNlYXJjaFF1ZXJ5XSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbc2VsZWN0ZWRDYXRlZ29yaWVzLCBzZXRTZWxlY3RlZENhdGVnb3JpZXNdID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IFtmaWx0ZXJlZFByb2R1Y3RzLCBzZXRGaWx0ZXJlZFByb2R1Y3RzXSA9IHVzZVN0YXRlKFtdKTtcblxuICAgIGNvbnN0IGlzUXVlcnlJblByb2R1Y3QgPSAocHJvZHVjdCwgcXVlcnkpID0+IHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC52YWx1ZXMocHJvZHVjdCkuc29tZSh2YWx1ZSA9PlxuICAgICAgICAgICAgU3RyaW5nKHZhbHVlKS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHF1ZXJ5LnRvTG93ZXJDYXNlKCkpXG4gICAgICAgICk7XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZVNlYXJjaCA9IChxdWVyeSkgPT4ge1xuICAgICAgICBzZXRTZWFyY2hRdWVyeShxdWVyeSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZUZpbHRlciA9IHVzZUNhbGxiYWNrKChjYXRlZ29yeSwgaXNDaGVja2VkKSA9PiB7XG4gICAgICAgIGlmIChpc0NoZWNrZWQpIHtcbiAgICAgICAgICAgIHNldFNlbGVjdGVkQ2F0ZWdvcmllcyhwcmV2Q2F0ZWdvcmllcyA9PiBbLi4ucHJldkNhdGVnb3JpZXMsIGNhdGVnb3J5XSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRTZWxlY3RlZENhdGVnb3JpZXMocHJldkNhdGVnb3JpZXMgPT4gcHJldkNhdGVnb3JpZXMuZmlsdGVyKGl0ZW0gPT4gaXRlbSAhPT0gY2F0ZWdvcnkpKTtcbiAgICAgICAgfVxuICAgIH0sIFtdKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGZldGNoUHJvZHVjdHMoKTtcbiAgICB9LCBbXSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBmaWx0ZXJlZCA9IHByb2R1Y3RzLmZpbHRlcihwcm9kdWN0ID0+IFxuICAgICAgICAgICAgKHNlYXJjaFF1ZXJ5ID8gaXNRdWVyeUluUHJvZHVjdChwcm9kdWN0LCBzZWFyY2hRdWVyeSkgOiB0cnVlKSAmJlxuICAgICAgICAgICAgKHNlbGVjdGVkQ2F0ZWdvcmllcy5sZW5ndGggPT09IDAgPyB0cnVlIDogc2VsZWN0ZWRDYXRlZ29yaWVzLmluY2x1ZGVzKHByb2R1Y3QucHJvZHVjdENhdGVnb3J5KSlcbiAgICAgICAgKTtcbiAgICAgICAgc2V0RmlsdGVyZWRQcm9kdWN0cyhmaWx0ZXJlZCk7XG4gICAgfSwgW3NlYXJjaFF1ZXJ5LCBzZWxlY3RlZENhdGVnb3JpZXMsIHByb2R1Y3RzXSk7XG5cbiAgICBjb25zdCBmZXRjaFByb2R1Y3RzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9wcm9kdWN0cy9saXN0Jyk7ICAvLyBVc2UgQXhpb3MgZm9yIEhUVFAgcmVxdWVzdFxuICAgICAgICAgICAgc2V0UHJvZHVjdHMocmVzcG9uc2UuZGF0YSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBwcm9kdWN0czonLCBlcnJvcik7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hQcm9kdWN0KCkge1xuICAgICAgICAgICAgaWYgKGlkKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvZHVjdFJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KGBodHRwOi8vbG9jYWxob3N0OjgwMDAvcHJvZHVjdHMvJHtpZH0vYCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJyYW5kUmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYGh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9zb3J0aW5nL2JyYW5kcy8ke3Byb2R1Y3RSZXNwb25zZS5kYXRhLmJyYW5kSUR9L2ApO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBicmFuZE5hbWUgPSBicmFuZFJlc3BvbnNlLmRhdGEuYnJhbmROYW1lO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9kdWN0V2l0aEJyYW5kTmFtZSA9IHsgLi4ucHJvZHVjdFJlc3BvbnNlLmRhdGEsIGJyYW5kTmFtZSB9O1xuICAgICAgICAgICAgICAgICAgICBzZXRQcm9kdWN0KHByb2R1Y3RXaXRoQnJhbmROYW1lKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBwcm9kdWN0OicsIGVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgZmV0Y2hQcm9kdWN0KCk7XG4gICAgfSwgW2lkXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9J3N0aWNreSB0b3AtNSB6LTUwIG0tNSc+XG4gICAgICAgICAgICAgICAgPE5hdkJhciAvPlxuICAgICAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LTIwXCI+XG4gICAgICAgICAgICAgICAgPFNlYXJjaEJhciBvblNlYXJjaD17aGFuZGxlU2VhcmNofSAvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCB4bDpncmlkLWNvbHMtNSBnYXAtNVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZpbHRlcnNUZXN0IG9uRmlsdGVyPXtoYW5kbGVGaWx0ZXJ9IGNsYXNzTmFtZT1cInctMS80XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwieGw6Y29sLWVuZC02IHhsOmNvbC1zcGFuLTQgZ3JpZCB4bDpncmlkLWNvbHMtMiBnYXAtNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge2ZpbHRlcmVkUHJvZHVjdHMubGVuZ3RoID4gMCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcmVkUHJvZHVjdHMubWFwKHByb2R1Y3QgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9kdWN0Q2FyZCBrZXk9e3Byb2R1Y3QuaWR9IHByb2R1Y3Q9e3Byb2R1Y3R9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IG1hcmdpblRvcDogJzIwcHgnIH19PlRoZXJlIGFyZSBubyBwcm9kdWN0cyBmb3VuZC48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hQcm9kdWN0cztcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlQ2FsbGJhY2siLCJheGlvcyIsIlNlYXJjaEJhciIsIkZpbHRlcnNUZXN0IiwiUHJvZHVjdENhcmQiLCJOYXZCYXIiLCJTZWFyY2hQcm9kdWN0cyIsInByb2R1Y3RzIiwic2V0UHJvZHVjdHMiLCJzZWFyY2hRdWVyeSIsInNldFNlYXJjaFF1ZXJ5Iiwic2VsZWN0ZWRDYXRlZ29yaWVzIiwic2V0U2VsZWN0ZWRDYXRlZ29yaWVzIiwiZmlsdGVyZWRQcm9kdWN0cyIsInNldEZpbHRlcmVkUHJvZHVjdHMiLCJpc1F1ZXJ5SW5Qcm9kdWN0IiwicHJvZHVjdCIsInF1ZXJ5IiwiT2JqZWN0IiwidmFsdWVzIiwic29tZSIsInZhbHVlIiwiU3RyaW5nIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsImhhbmRsZVNlYXJjaCIsImhhbmRsZUZpbHRlciIsImNhdGVnb3J5IiwiaXNDaGVja2VkIiwicHJldkNhdGVnb3JpZXMiLCJmaWx0ZXIiLCJpdGVtIiwiZmV0Y2hQcm9kdWN0cyIsImZpbHRlcmVkIiwibGVuZ3RoIiwicHJvZHVjdENhdGVnb3J5IiwicmVzcG9uc2UiLCJnZXQiLCJkYXRhIiwiZXJyb3IiLCJjb25zb2xlIiwiZmV0Y2hQcm9kdWN0IiwiaWQiLCJwcm9kdWN0UmVzcG9uc2UiLCJicmFuZFJlc3BvbnNlIiwiYnJhbmRJRCIsImJyYW5kTmFtZSIsInByb2R1Y3RXaXRoQnJhbmROYW1lIiwic2V0UHJvZHVjdCIsImRpdiIsImhlYWRlciIsImNsYXNzTmFtZSIsIm9uU2VhcmNoIiwib25GaWx0ZXIiLCJtYXAiLCJwIiwic3R5bGUiLCJtYXJnaW5Ub3AiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/products/page.jsx\n"));

/***/ })

});
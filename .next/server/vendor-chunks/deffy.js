"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/deffy";
exports.ids = ["vendor-chunks/deffy"];
exports.modules = {

/***/ "(rsc)/./node_modules/deffy/lib/index.js":
/*!*****************************************!*\
  !*** ./node_modules/deffy/lib/index.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n// Dependencies\nvar Typpy = __webpack_require__(/*! typpy */ \"(rsc)/./node_modules/typpy/lib/index.js\");\n\n/**\n * Deffy\n * Computes a final value by providing the input and default values.\n *\n * @name Deffy\n * @function\n * @param {Anything} input The input value.\n * @param {Anything|Function} def The default value or a function getting the\n * input value as first argument.\n * @param {Object|Boolean} options The `empty` value or an object containing\n * the following fields:\n *\n *  - `empty` (Boolean): Handles the input value as empty field (`input || default`). Default is `false`.\n *\n * @return {Anything} The computed value.\n */\nfunction Deffy(input, def, options) {\n\n    // Default is a function\n    if (typeof def === \"function\") {\n        return def(input);\n    }\n\n    options = Typpy(options) === \"boolean\" ? {\n        empty: options\n    } : {\n        empty: false\n    };\n\n    // Handle empty\n    if (options.empty) {\n        return input || def;\n    }\n\n    // Return input\n    if (Typpy(input) === Typpy(def)) {\n        return input;\n    }\n\n    // Return the default\n    return def;\n}\n\nmodule.exports = Deffy;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvZGVmZnkvbGliL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFhOztBQUViO0FBQ0EsWUFBWSxtQkFBTyxDQUFDLHNEQUFPOztBQUUzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFVBQVU7QUFDckIsV0FBVyxtQkFBbUI7QUFDOUI7QUFDQSxXQUFXLGdCQUFnQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksVUFBVTtBQUN0QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWIvLi9ub2RlX21vZHVsZXMvZGVmZnkvbGliL2luZGV4LmpzPzI5MjYiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8vIERlcGVuZGVuY2llc1xudmFyIFR5cHB5ID0gcmVxdWlyZShcInR5cHB5XCIpO1xuXG4vKipcbiAqIERlZmZ5XG4gKiBDb21wdXRlcyBhIGZpbmFsIHZhbHVlIGJ5IHByb3ZpZGluZyB0aGUgaW5wdXQgYW5kIGRlZmF1bHQgdmFsdWVzLlxuICpcbiAqIEBuYW1lIERlZmZ5XG4gKiBAZnVuY3Rpb25cbiAqIEBwYXJhbSB7QW55dGhpbmd9IGlucHV0IFRoZSBpbnB1dCB2YWx1ZS5cbiAqIEBwYXJhbSB7QW55dGhpbmd8RnVuY3Rpb259IGRlZiBUaGUgZGVmYXVsdCB2YWx1ZSBvciBhIGZ1bmN0aW9uIGdldHRpbmcgdGhlXG4gKiBpbnB1dCB2YWx1ZSBhcyBmaXJzdCBhcmd1bWVudC5cbiAqIEBwYXJhbSB7T2JqZWN0fEJvb2xlYW59IG9wdGlvbnMgVGhlIGBlbXB0eWAgdmFsdWUgb3IgYW4gb2JqZWN0IGNvbnRhaW5pbmdcbiAqIHRoZSBmb2xsb3dpbmcgZmllbGRzOlxuICpcbiAqICAtIGBlbXB0eWAgKEJvb2xlYW4pOiBIYW5kbGVzIHRoZSBpbnB1dCB2YWx1ZSBhcyBlbXB0eSBmaWVsZCAoYGlucHV0IHx8IGRlZmF1bHRgKS4gRGVmYXVsdCBpcyBgZmFsc2VgLlxuICpcbiAqIEByZXR1cm4ge0FueXRoaW5nfSBUaGUgY29tcHV0ZWQgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIERlZmZ5KGlucHV0LCBkZWYsIG9wdGlvbnMpIHtcblxuICAgIC8vIERlZmF1bHQgaXMgYSBmdW5jdGlvblxuICAgIGlmICh0eXBlb2YgZGVmID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGRlZihpbnB1dCk7XG4gICAgfVxuXG4gICAgb3B0aW9ucyA9IFR5cHB5KG9wdGlvbnMpID09PSBcImJvb2xlYW5cIiA/IHtcbiAgICAgICAgZW1wdHk6IG9wdGlvbnNcbiAgICB9IDoge1xuICAgICAgICBlbXB0eTogZmFsc2VcbiAgICB9O1xuXG4gICAgLy8gSGFuZGxlIGVtcHR5XG4gICAgaWYgKG9wdGlvbnMuZW1wdHkpIHtcbiAgICAgICAgcmV0dXJuIGlucHV0IHx8IGRlZjtcbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gaW5wdXRcbiAgICBpZiAoVHlwcHkoaW5wdXQpID09PSBUeXBweShkZWYpKSB7XG4gICAgICAgIHJldHVybiBpbnB1dDtcbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gdGhlIGRlZmF1bHRcbiAgICByZXR1cm4gZGVmO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IERlZmZ5OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/deffy/lib/index.js\n");

/***/ })

};
;
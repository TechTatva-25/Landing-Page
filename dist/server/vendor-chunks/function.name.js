"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/function.name";
exports.ids = ["vendor-chunks/function.name"];
exports.modules = {

/***/ "(rsc)/./node_modules/function.name/lib/index.js":
/*!*************************************************!*\
  !*** ./node_modules/function.name/lib/index.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar noop6 = __webpack_require__(/*! noop6 */ \"(rsc)/./node_modules/noop6/lib/index.js\");\n\n(function () {\n    var NAME_FIELD = \"name\";\n\n    if (typeof noop6.name === \"string\") {\n        return;\n    }\n\n    try {\n        Object.defineProperty(Function.prototype, NAME_FIELD, {\n            get: function get() {\n                var nameMatch = this.toString().trim().match(/^function\\s*([^\\s(]+)/);\n                var name = nameMatch ? nameMatch[1] : \"\";\n                Object.defineProperty(this, NAME_FIELD, { value: name });\n                return name;\n            }\n        });\n    } catch (e) {}\n})();\n\n/**\n * functionName\n * Get the function name.\n *\n * @name functionName\n * @function\n * @param {Function} input The input function.\n * @returns {String} The function name.\n */\nmodule.exports = function functionName(input) {\n    return input.name;\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvZnVuY3Rpb24ubmFtZS9saWIvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWIsWUFBWSxtQkFBTyxDQUFDLHNEQUFPOztBQUUzQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMERBQTBELGFBQWE7QUFDdkU7QUFDQTtBQUNBLFNBQVM7QUFDVCxNQUFNO0FBQ04sQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFVBQVU7QUFDckIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2ViLy4vbm9kZV9tb2R1bGVzL2Z1bmN0aW9uLm5hbWUvbGliL2luZGV4LmpzP2I2NjYiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBub29wNiA9IHJlcXVpcmUoXCJub29wNlwiKTtcblxuKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgTkFNRV9GSUVMRCA9IFwibmFtZVwiO1xuXG4gICAgaWYgKHR5cGVvZiBub29wNi5uYW1lID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRnVuY3Rpb24ucHJvdG90eXBlLCBOQU1FX0ZJRUxELCB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgICAgICB2YXIgbmFtZU1hdGNoID0gdGhpcy50b1N0cmluZygpLnRyaW0oKS5tYXRjaCgvXmZ1bmN0aW9uXFxzKihbXlxccyhdKykvKTtcbiAgICAgICAgICAgICAgICB2YXIgbmFtZSA9IG5hbWVNYXRjaCA/IG5hbWVNYXRjaFsxXSA6IFwiXCI7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIE5BTUVfRklFTEQsIHsgdmFsdWU6IG5hbWUgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5hbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG59KSgpO1xuXG4vKipcbiAqIGZ1bmN0aW9uTmFtZVxuICogR2V0IHRoZSBmdW5jdGlvbiBuYW1lLlxuICpcbiAqIEBuYW1lIGZ1bmN0aW9uTmFtZVxuICogQGZ1bmN0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpbnB1dCBUaGUgaW5wdXQgZnVuY3Rpb24uXG4gKiBAcmV0dXJucyB7U3RyaW5nfSBUaGUgZnVuY3Rpb24gbmFtZS5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBmdW5jdGlvbk5hbWUoaW5wdXQpIHtcbiAgICByZXR1cm4gaW5wdXQubmFtZTtcbn07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/function.name/lib/index.js\n");

/***/ })

};
;
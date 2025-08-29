"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/assured";
exports.ids = ["vendor-chunks/assured"];
exports.modules = {

/***/ "(rsc)/./node_modules/assured/lib/index.js":
/*!*******************************************!*\
  !*** ./node_modules/assured/lib/index.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar noop = __webpack_require__(/*! noop6 */ \"(rsc)/./node_modules/noop6/lib/index.js\"),\n    sliced = __webpack_require__(/*! sliced */ \"(rsc)/./node_modules/sliced/index.js\");\n\n/**\n * assured\n * Proxies the callback function.\n *\n * @name assured\n * @function\n * @param {Function} fn The callback function to proxy.\n * @param {Promise} p A custom promise constructor (default: the built-in `Promise`).\n * @returns {Function} The proxied callback function extended with:\n *\n *  - `resolver` (Function): The promise resolver.\n *  - `assuredResolve` (Function): The resolve method.\n *  - `assuredReject` (Function): The reject method.\n *  - `_` (Promise): The promise object (used to `return` from your function).\n *\n */\nmodule.exports = function assured(fn, p) {\n    p = p || Promise;\n    fn = fn || noop;\n\n    var res = function res(err) {\n        fn.apply(res, arguments);\n        if (err) {\n            res.assuredReject(err);\n        } else {\n            res.assuredResolve.apply(res, sliced(arguments, 1));\n        }\n        return res._;\n    };\n\n    res.resolver = function (resolve, reject) {\n        res.assuredResolve = resolve;\n        res.assuredReject = reject;\n    };\n\n    res._ = new p(res.resolver);\n    res._.catch(noop);\n    return res;\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvYXNzdXJlZC9saWIvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWIsV0FBVyxtQkFBTyxDQUFDLHNEQUFPO0FBQzFCLGFBQWEsbUJBQU8sQ0FBQyxvREFBUTs7QUFFN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxVQUFVO0FBQ3JCLFdBQVcsU0FBUztBQUNwQixhQUFhLFVBQVU7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWIvLi9ub2RlX21vZHVsZXMvYXNzdXJlZC9saWIvaW5kZXguanM/NTZjYSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxudmFyIG5vb3AgPSByZXF1aXJlKFwibm9vcDZcIiksXG4gICAgc2xpY2VkID0gcmVxdWlyZShcInNsaWNlZFwiKTtcblxuLyoqXG4gKiBhc3N1cmVkXG4gKiBQcm94aWVzIHRoZSBjYWxsYmFjayBmdW5jdGlvbi5cbiAqXG4gKiBAbmFtZSBhc3N1cmVkXG4gKiBAZnVuY3Rpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBjYWxsYmFjayBmdW5jdGlvbiB0byBwcm94eS5cbiAqIEBwYXJhbSB7UHJvbWlzZX0gcCBBIGN1c3RvbSBwcm9taXNlIGNvbnN0cnVjdG9yIChkZWZhdWx0OiB0aGUgYnVpbHQtaW4gYFByb21pc2VgKS5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gVGhlIHByb3hpZWQgY2FsbGJhY2sgZnVuY3Rpb24gZXh0ZW5kZWQgd2l0aDpcbiAqXG4gKiAgLSBgcmVzb2x2ZXJgIChGdW5jdGlvbik6IFRoZSBwcm9taXNlIHJlc29sdmVyLlxuICogIC0gYGFzc3VyZWRSZXNvbHZlYCAoRnVuY3Rpb24pOiBUaGUgcmVzb2x2ZSBtZXRob2QuXG4gKiAgLSBgYXNzdXJlZFJlamVjdGAgKEZ1bmN0aW9uKTogVGhlIHJlamVjdCBtZXRob2QuXG4gKiAgLSBgX2AgKFByb21pc2UpOiBUaGUgcHJvbWlzZSBvYmplY3QgKHVzZWQgdG8gYHJldHVybmAgZnJvbSB5b3VyIGZ1bmN0aW9uKS5cbiAqXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYXNzdXJlZChmbiwgcCkge1xuICAgIHAgPSBwIHx8IFByb21pc2U7XG4gICAgZm4gPSBmbiB8fCBub29wO1xuXG4gICAgdmFyIHJlcyA9IGZ1bmN0aW9uIHJlcyhlcnIpIHtcbiAgICAgICAgZm4uYXBwbHkocmVzLCBhcmd1bWVudHMpO1xuICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICByZXMuYXNzdXJlZFJlamVjdChlcnIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzLmFzc3VyZWRSZXNvbHZlLmFwcGx5KHJlcywgc2xpY2VkKGFyZ3VtZW50cywgMSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXMuXztcbiAgICB9O1xuXG4gICAgcmVzLnJlc29sdmVyID0gZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICByZXMuYXNzdXJlZFJlc29sdmUgPSByZXNvbHZlO1xuICAgICAgICByZXMuYXNzdXJlZFJlamVjdCA9IHJlamVjdDtcbiAgICB9O1xuXG4gICAgcmVzLl8gPSBuZXcgcChyZXMucmVzb2x2ZXIpO1xuICAgIHJlcy5fLmNhdGNoKG5vb3ApO1xuICAgIHJldHVybiByZXM7XG59OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/assured/lib/index.js\n");

/***/ })

};
;
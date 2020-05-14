var ink =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./dist/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./dist/index.js":
/*!***********************!*\
  !*** ./dist/index.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nvar markdown = {\n  make: function make() {\n    for (var _len = arguments.length, lines = new Array(_len), _key = 0; _key < _len; _key++) {\n      lines[_key] = arguments[_key];\n    }\n\n    return ['\\n', lines.reduce(function (created, line) {\n      return [].concat(_toConsumableArray(created), [line(markdown)]);\n    }, []).join('\\n'), '\\n'];\n  },\n  url: function url(text, _url) {\n    return \"[\".concat(text, \"](\").concat(_url, \")\");\n  },\n  link: function link(text, _link) {\n    return \"[\".concat(text, \"](#\").concat(_link, \")\");\n  },\n  li: function li(text) {\n    return \"- \".concat(text);\n  },\n  list: function list(_list) {\n    return _list.map(function (item) {\n      return \"- \".concat(item);\n    }).join('\\n');\n  },\n  ul: {\n    li: function li(text) {\n      return \"- \".concat(text);\n    },\n    url: function url(text, _url2) {\n      return markdown.url(text, _url2);\n    },\n    link: function link(text, _link2) {\n      return markdown.link(text, _link2);\n    }\n  },\n  table: function table(_ref) {\n    var headers = _ref.headers,\n        rows = _ref.rows;\n\n    var make = function make(items) {\n      return ['|', items, '|'];\n    };\n\n    return [make(headers.join('|')), make(headers.map(function (header) {\n      return '---';\n    }).join('|'))].concat(_toConsumableArray(rows.reduce(function (rows, row) {\n      return [].concat(_toConsumableArray(rows), [make(row.join('|'))]);\n    }, []))).map(function (row) {\n      return row.join('');\n    }).join('\\n');\n  },\n  hr: function hr() {\n    return '---';\n  },\n  br: function br() {\n    return \"\\n\";\n  },\n  h1: function h1(text) {\n    return \"# \".concat(text);\n  },\n  h2: function h2(text) {\n    return \"## \".concat(text);\n  },\n  h3: function h3(text) {\n    return \"### \".concat(text);\n  },\n  h4: function h4(text) {\n    return \"#### \".concat(text);\n  },\n  h5: function h5(text) {\n    return \"##### \".concat(text);\n  },\n  pre: function pre(text) {\n    return '```' + text + '```';\n  },\n  bold: function bold(text) {\n    return \"**\".concat(text, \"**\");\n  },\n  italic: function italic(text) {\n    return \"_\".concat(text, \"_\");\n  },\n  quote: function quote(text) {\n    return \"> \".concat(text);\n  },\n  inline: function inline(text) {\n    return \"`\" + text + \"`\";\n  },\n  block: function block(text) {\n    return \"```\" + text + \"```\";\n  },\n  js: function js(text) {\n    return \"```javascript\" + text + \"```\";\n  },\n  py: function py(text) {\n    return \"```python\" + text + \"```\";\n  },\n  bash: function bash(text) {\n    return \"```bash\" + text + \"```\";\n  },\n  youtube: function youtube(_ref2) {\n    var id = _ref2.id,\n        _ref2$width = _ref2.width,\n        width = _ref2$width === void 0 ? '240' : _ref2$width,\n        _ref2$height = _ref2.height,\n        height = _ref2$height === void 0 ? '240' : _ref2$height,\n        _ref2$border = _ref2.border,\n        border = _ref2$border === void 0 ? '10' : _ref2$border,\n        _ref2$alt = _ref2.alt,\n        alt = _ref2$alt === void 0 ? 'Tutorial' : _ref2$alt,\n        _ref2$target = _ref2.target,\n        target = _ref2$target === void 0 ? \"_blank\" : _ref2$target;\n    return \"\\n\\t\\t<a href=\\\"http://www.youtube.com/watch?feature=player_embedded&v=\".concat(id, \"\\\" target=\\\"\").concat(target, \"\\\">\\n\\t\\t\\t<img src=\\\"http://img.youtube.com/vi/\").concat(id, \"/0.jpg\\\" alt=\\\"\").concat(alt, \"\\\" width=\\\"\").concat(width, \"\\\" height=\\\"\").concat(height, \"\\\" border=\\\"\").concat(border, \"\\\" />\\n\\t\\t</a>\\n\\t\");\n  }\n};\nmodule.exports = markdown;\nmodule.exports[\"default\"] = markdown;\nmodule.exports.markdown = markdown;\n\n//# sourceURL=webpack://ink/./dist/index.js?");

/***/ })

/******/ });
'use strict';

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var markdown = {
  make: function make() {
    for (var _len = arguments.length, lines = new Array(_len), _key = 0; _key < _len; _key++) {
      lines[_key] = arguments[_key];
    }

    return ['\n', lines.reduce(function (created, line) {
      return [].concat(_toConsumableArray(created), [line(markdown)]);
    }, []).join('\n'), '\n'];
  },
  url: function url(text, _url) {
    return "[".concat(text, "](").concat(_url, ")");
  },
  link: function link(text, _link) {
    return "[".concat(text, "](#").concat(_link, ")");
  },
  li: function li(text) {
    return "- ".concat(text);
  },
  list: function list(_list) {
    return _list.map(function (item) {
      return "- ".concat(item);
    }).join('\n');
  },
  ul: {
    li: function li(text) {
      return "- ".concat(text);
    },
    url: function url(text, _url2) {
      return markdown.url(text, _url2);
    },
    link: function link(text, _link2) {
      return markdown.link(text, _link2);
    }
  },
  table: function table(_ref) {
    var headers = _ref.headers,
        rows = _ref.rows;

    var make = function make(items) {
      return ['|', items, '|'];
    };

    return [make(headers.join('|')), make(headers.map(function (header) {
      return '---';
    }).join('|'))].concat(_toConsumableArray(rows.reduce(function (rows, row) {
      return [].concat(_toConsumableArray(rows), [make(row.join('|'))]);
    }, []))).map(function (row) {
      return row.join('');
    }).join('\n');
  },
  hr: function hr() {
    return '---';
  },
  br: function br() {
    return "\n";
  },
  h1: function h1(text) {
    return "# ".concat(text);
  },
  h2: function h2(text) {
    return "## ".concat(text);
  },
  h3: function h3(text) {
    return "### ".concat(text);
  },
  h4: function h4(text) {
    return "#### ".concat(text);
  },
  h5: function h5(text) {
    return "##### ".concat(text);
  },
  pre: function pre(text) {
    return '```' + text + '```';
  },
  bold: function bold(text) {
    return "**".concat(text, "**");
  },
  italic: function italic(text) {
    return "_".concat(text, "_");
  },
  quote: function quote(text) {
    return "> ".concat(text);
  },
  inline: function inline(text) {
    return "`" + text + "`";
  },
  block: function block(text) {
    return "```" + text + "```";
  },
  js: function js(text) {
    return "```javascript" + text + "```";
  },
  py: function py(text) {
    return "```python" + text + "```";
  },
  bash: function bash(text) {
    return "```bash" + text + "```";
  },
  youtube: function youtube(_ref2) {
    var id = _ref2.id,
        _ref2$width = _ref2.width,
        width = _ref2$width === void 0 ? '240' : _ref2$width,
        _ref2$height = _ref2.height,
        height = _ref2$height === void 0 ? '240' : _ref2$height,
        _ref2$border = _ref2.border,
        border = _ref2$border === void 0 ? '10' : _ref2$border,
        _ref2$alt = _ref2.alt,
        alt = _ref2$alt === void 0 ? 'Tutorial' : _ref2$alt,
        _ref2$target = _ref2.target,
        target = _ref2$target === void 0 ? "_blank" : _ref2$target;
    return "\n\t\t<a href=\"http://www.youtube.com/watch?feature=player_embedded&v=".concat(id, "\" target=\"").concat(target, "\">\n\t\t\t<img src=\"http://img.youtube.com/vi/").concat(id, "/0.jpg\" alt=\"").concat(alt, "\" width=\"").concat(width, "\" height=\"").concat(height, "\" border=\"").concat(border, "\" />\n\t\t</a>\n\t");
  }
};
module.exports = markdown;
module.exports["default"] = markdown;
module.exports.markdown = markdown;
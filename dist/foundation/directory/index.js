'use strict';

var path = require('path');

var files = require('fs');

var Directory = function Directory() {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  this.options = config;
  this.instance = files;
};

Directory.prototype.exists = function (path) {
  return this.instance.exists(path, function (file) {
    return file ? true : false;
  });
};

var directory = function directory() {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return new Directory(config);
};

module.exports = directory;
module.exports["default"] = directory;
module.exports.directory = directory;
module.exports.Directory = Directory;
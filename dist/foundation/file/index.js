'use strict';

var files = require('fs');

var path = require('path');

var File = function FileSystem() {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  this.options = config;
  this.instance = files;
};
/**
 *--------------------
 * File Exists
 *--------------------
 * @param path
 * @param name
 *
 * @return boolean
 *--------------------*/


File.prototype.copy = function (from, to) {
  if (typeof from === 'undefined' || typeof to === 'undefined') {
    return console.error('From and to parameters cannot be undefined', 'Prototype: File', 'Method: copy', 'Signature: File.copy(from, to)');
  } else {
    var instance = this.instance;
    instance.exists(to, function (exists) {
      if (exists) {
        console.log("Cannot copy ".concat(from, " to ").concat(to));
        console.log("File already exists at ".concat(to));
      } else {
        instance.copyFile(from, to, function (file) {
          "Successfully Copied ".concat(from, " to ").concat(to);
        });
      }
    });
  }
};

var file = function file() {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return new File(config);
};

module.exports = file;
module.exports.File = File;
module.exports.file = file;
module.exports["default"] = file;
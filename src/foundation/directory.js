
'use strict';

const path = require('path');
const files = require('fs');

const Directory = function Directory(config = {}) {
	this.options = config;
	this.instance = files;
};

Directory.prototype.exists = function (path) {
	return this.instance.exists(path, file => !!file);
};

const directory = function directory(config = {}) {
	return new Directory(config);
};

module.exports = directory;
module.exports.default = directory;
module.exports.directory = directory;
module.exports.Directory = Directory;

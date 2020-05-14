
'use strict';

const files = require('fs');
const path = require('path');


const File = function FileSystem(config = {}) {
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
		return console.error(
			'From and to parameters cannot be undefined',
			'Prototype: File',
			'Method: copy',
			'Signature: File.copy(from, to)',
		);
	} else {
		const instance = this.instance;

		instance.exists(to, function (exists) {
			if (exists) {
				console.log(`Cannot copy ${from} to ${to}`);
				console.log(`File already exists at ${to}`);
			} else {
				instance.copyFile(from, to, function (file) {
					`Successfully Copied ${from} to ${to}`
				})
			}
		})
	}
};

const file = function file(config = {}) {
	return new File(config);
};

module.exports = file;
module.exports.File = File;
module.exports.file = file;
module.exports.default = file;

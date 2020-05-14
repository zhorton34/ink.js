'use strict';

var repl = require('repl');

var _require = require('./file/index.js'),
    file = _require.file;

var _require2 = require('./directory/index.js'),
    directory = _require2.directory;

module.exports.file = file;
module.exports.directory = directory;
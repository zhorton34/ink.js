
'use strict';

const repl = require('repl');

const { file } = require('./file/index.js');
const { directory } = require('./directory/index.js');

module.exports.file = file;
module.exports.directory = directory;
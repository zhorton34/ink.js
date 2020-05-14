#!/usr/bin/env node

var fs = require('fs');
var path = require('path');

fs.
const [exe_path, file, base, ...arguments] = process.argv;

[namespace, type] = base.split(':');

console.log({ namespace, type, arguments });

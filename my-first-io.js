var fs = require('fs');

var filename = process.argv[2];
var contents = fs.readFileSync(filename);
var str = contents.toString();
var lines = str.split('\n').length;

console.log(lines - 1);
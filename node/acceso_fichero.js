var fs = require('fs');

var data = fs.readFile('/etc/passwd');

console.log(data);

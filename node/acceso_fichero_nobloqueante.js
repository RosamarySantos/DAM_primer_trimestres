var fs = require('fs');

fs.readFile('/etc/passwd','utf8', function (err, data) {
	if (err) throw err;
	console.log(data);
});
console.log('fin de programa');

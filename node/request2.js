var request = require('request');
var status = undefined;
function getSiteStatus(callback){
	request('http://google.com', function (error, response, body) {
		if (!error && response.statusCode == 200) {
		status_code = response.statusCode;
	}
	callback(status_code);
    });
}
getSiteStatus(function(status){
	console.log(status);
});
console.log('fin de programa');

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.set('port',process.env.PORT || 3000);

app.get('/', function (req, res) {
	res.send('Hello World');
})

app.get('/users/:userName', function(request, response) {
	var name = request.params.userName;
	response.send('¡Hola, ' + name + '!');
});

app.get(/\/personal\/(\d*)\/?(edit)?(\/(\d*))?/, function (request, response) {
	var message = 'el perfil del empleado #' + request.params[0];
	if (request.params[1] === 'edit') {
		message = 'Editando ' + message;
	} else {
		message = 'Viendo ' + message;
	}
	response.send(message);
});

app.post('/users', function(request, response) {
	var username = request.body.username;
	response.status('201').send('¡Hola, ' + username + '!');
});

var server = app.listen(app.get('port'), function () {
	var host = server.address().address;
	console.log("Example app listening at http://%s:%s", host, app.get('port	'))
})

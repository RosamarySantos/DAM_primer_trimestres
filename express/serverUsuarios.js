var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('port',process.env.PORT || 3000);


app.get('/users', function(req, res) {
	fs.readFile('./datos.json', 'utf8', function(err, data) {
		if (err)
		  res.status(500).json({"message":"file not found"});
		//console.log(data);
		//console.log(typeof JSON.parse(data));
		res.json(JSON.parse(data));
	});
});
app.get('/users/:id', function(req, res) {
	var userId = req.params.id;
	//console.log(userId);
	fs.readFile('./datos.json', 'utf8', function(err, data) {
		if (err)
		  res.status(500).json({"message":"file not found"});
		var users = JSON.parse(data); //convierto string a object
		//console.log(users);
		var user;
		for (var i = 0; i < users['users'].length; i++){
			if (userId == users.users[i].id)
				user = users['users'][i];
		}
		if (user) 
		    res.json(user);
		else
		    res.status(404).json({"message":"user not found"});
	});
});

app.post('/users', function(req, res) {
	var user = req.body;
	//console.log(user+' '+typeof user);
	fs.readFile('./datos.json', 'utf8', function(err, data) {
		if (err)
		  res.status(500).json({"message":"file not found"});
		var users = JSON.parse(data); //convierto string a object
		var idUser = users.users[users.users.length-1].id +1; //incrementamos en 1 el id
		user.id = idUser; //actualizamos el id del usuario
		users.users.push(user);
		//console.log(users);
		fs.writeFile('./datos.json', JSON.stringify(users), function(err) {
			if (err)
		  		res.status(500).json({"message":"file not found"});
			res.status(201).json(user);
		});
	});	
});

app.delete('/users/:id', function (req, res) {
	var userId = req.params.id;
	//console.log(userId);
	fs.readFile('./datos.json', 'utf8', function(err, data) {
		if (err)
		  res.status(500).json({"message":"file not found"});
		var users = JSON.parse(data); //convierto string a object
		//console.log(users);
		var userBorrado;
		for (var i = 0; i < users.users.length; i++) {
		//	console.log(i+' '+users.users[i]);
			if (userId == users.users[i].id){
				userBorrado = users.users[i];
				users.users.splice(i,1);	
			}
		}
		fs.writeFile('./datos.json', JSON.stringify(users), function(err) {
			if (err)
		  		res.status(500).json({"message":"file not found"});
			if (userBorrado)
				res.json(userBorrado);	
			else
				res.status(404).json({"message":"user not found"});
		});

	});
});

app.put('/users/:id', function(req, res) {
	var userId = req.params.id;
	var user = req.body;
	fs.readFile('./datos.json', 'utf8', function(err, data) {
		if (err)
		  res.status(500).json({"message":"file not found"});
		var users = JSON.parse(data); //convierto string a object
		var userModificado;
		for(var i=0; i < users.users.length; i++){
			if (users.users[i].id == userId){
				users.users[i] = user;
				userModificado = users.users[i];
				break;
			}
		}

		if (!userModificado){
			users.users.push(user);
			res.status(201).json(user);
		} else
			res.json(userModificado);
		fs.writeFile('./datos.json', JSON.stringify(users), function(err) {
			if (err)
		  		res.status(500).json({"message":"file not found"});
		});
	});
});	
				

























var server = app.listen(app.get('port'), function () {
	var host = server.address().address;
	console.log("Example app listening at http://%s:%s", host, app.get('port	'))
})

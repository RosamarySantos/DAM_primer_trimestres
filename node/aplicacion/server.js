var fs = require('fs');
var http = require("http");
var path = require('path');
//__dirname+='/proyecto2/'; //establecemos el directorio de trabajo
var server = http.createServer(function(request, response) {
//peticion de la pagina ındice
  if (request.url === '/' || request.url === '/index.html'){
	fs.readFile(__dirname+'/index.html',function(err,data){
	if (err) throw err;
	response.write(data);
	response.end();
  	});
  }
//peticion del favicon.ico
  else if (request.url === '/favicon.ico' ){
	fs.readFile(__dirname+'/favicon.ico',function(err,data){
	if (err) throw err;
	response.write(data);
	response.end();
	});
  }
//peticion para la pagina ındice de la carpeta directorio
  else if (request.url === '/directorio/' || request.url === '/directorio/index.html'){
	fs.readFile(__dirname+'/directorio/index.html',function(err,data){
	if (err) throw err;
	response.write(data);
	response.end();
	});
   }
//dejamos para el final las imagenes
  else {
	var patron = /imagenes\/\w+.png$/;
	if (patron.test(request.url)){
	   var imagenes = request.url.split('/');
	fs.readFile(__dirname+'/imagenes/'+imagenes[2],function(err,data){
	if (err) throw err;
	response.write(data);
	response.end();
	});
      	}
    }
  });

server.listen(4001);
console.log("Server is listening");

var fs = require('fs');
var coleccion = require('./coleccion');


//lectura del argumento que
//posiblemente sea el nombre
//del fichero a procesar
var fichero = process.argv[2];
if (!fichero) {
  console.log('No existe fichero');
  process.exit(1);
}
//lectura del fichero
fs.readFile(fichero, 'utf8', function(err,data) {
   if (err) throw err;
   //procesamos el fichero
   var personas = data.split('\n');
   var coleccion_personas = [];
   for (var i = 1; i < personas.length -1; i++) {
	var linea = personas[i].split(',');	
        var persona = {
		'nombre'   : linea[0],
		'apellido' : linea[1],
		'email'    : linea[2],
		'sexo'     : linea[3],
		'edad'     : linea[4]
	     };
	coleccion_personas.push(persona);
	}
   //console.log(coleccion_personas); 
   //console.log(coleccion(coleccion_personas).edadesLimites());  
   coleccion(coleccion_personas).edadesLimites(function(resultado){
	console.log(resultado);
   });
   //console.log(coleccion(coleccion_personas).listarSegunSexo('M'));
   coleccion(coleccion_personas).listarSegunSexo('F', function(resultado){
	console.log(resultado);
   });











});
console.log('fin de programa');

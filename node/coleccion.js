function coleccion(datos) {
  var _datos = datos;
  return {
	edadesLimites : function(callback) {
	   process.nextTick(function(){
		var objeto;
		var edadMinima = parseInt(_datos[0].edad);
		var edadMaxima = parseInt(_datos[0].edad);
		for (var i = 1; i < _datos.length ; i++){
			if (parseInt(_datos[i].edad) < edadMinima)
				edadMinima = parseInt(_datos[i].edad);
			if (parseInt(_datos[i].edad) > edadMaxima) 
				edadMaxima = parseInt(_datos[i].edad);
		}	
		objeto = {'edad_maxima' : edadMaxima, 
			  'edad_minima' : edadMinima};
		callback(objeto);
	   });
	},
	listarSegunSexo : function(sexo,callback) {
	     process.nextTick(function(){
		var resultado = [];
		for (var i = 0; i < _datos.length; i ++) 
			if (_datos[i].sexo === sexo)
				resultado.push(_datos[i]);
		callback(resultado);
             });
	}
	
  };
}

module.exports=coleccion;

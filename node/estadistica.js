function estadistica (coleccion ) {
  var _coleccion = coleccion;
  return {
    longitud : function (callback) { var resultado = _coleccion.length; 
			    callback(resultado);
			},
    masAlto  : function () { return Math.max.apply(null, _coleccion); },
    masBajo  : function () { return Math.min.apply(null, _coleccion); },
    repetido : function (v){ var contador = 0;
			     for (var i = 0; i < _coleccion.length; i++)
				if ( _coleccion[i] === v )
				   contador++;
    			     return contador; } ,
    ordenar  : function (callback) { setTimeout(function() {
					 var resultado = _coleccion.sort();   	
				       callback(resultado);},0); }	

  };

}

module.exports = estadistica;

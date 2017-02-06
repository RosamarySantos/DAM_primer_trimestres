var estadistica = require('./estadistica');
var coleccion = [];
for (var i = 0; i < 100; i++)
	coleccion.push(i);


var est1 = estadistica(coleccion);

console.log('Valor mas alto: '+ est1.masAlto());
console.log('Valor mas bajo: ' + est1.masBajo());
console.log('Número de veces repetido: ' + est1.repetido(2));
//console.log(est1.ordenar());
est1.ordenar(function(resultado){
	console.log(resultado);
});
//console.log('Número de elementos: ' + est1.longitud());
est1.longitud(function(resultado){
   console.log(resultado);
});
console.log('fin de programa');

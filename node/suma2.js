function suma1(numero_uno,numero_dos,callback){
  setTimeout(function(){
	var resultado = numero_uno + numero_dos;
	callback(resultado);
  }, 2500);
}
suma1(2,5,function(resultado){
	console.log(resultado);
});
function suma2(numero_uno,numero_dos,callback){
  setTimeout(function(){
	var resultado = numero_uno + numero_dos;
	callback(resultado);
  }, 500);
}
suma2(12,15,function(resultado){
	console.log(resultado);
});

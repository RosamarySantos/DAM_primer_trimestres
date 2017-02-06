function suma(numero_uno,numero_dos){
  setTimeout(function(){
	var resultado = numero_uno + numero_dos;
	return resultado;
  }, 500);
}

console.log(suma(5,4));


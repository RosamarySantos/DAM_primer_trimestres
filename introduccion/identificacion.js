function identificacion (id) {
  var _id = id;//encapsulamos ese id
  var calcularLetra = function(dni) {
     return 'TRWAGMYFPDXBNJZSQVHLCKET'.substring(dni % 23, dni % 23 +1);
  }
  //definimos la visibilidad hacia fuera
  return {
	esFormatoValido : function() {
		var patron = /^[0-9]{8}[a-zA-Z]?$/;
		return patron.test(_id);
	},
	dni_nif  : function() {
		if (this.esFormatoValido()){
		   if (isNaN(_id.charAt(_id.length -1)))
			return 'nif';
		   else
			return 'dni';
		}
		else
		   return 'id no válido';
  	},
	validar : function() {
		if (this.dni_nif() === 'nif') {
		  if (calcularLetra(_id.substring(0,_id.length -1)) === 
			_id.charAt(_id.length -1).toUpperCase())
		      return 'letra valida: '+calcularLetra(_id.substring(0,_id.length -1));
		  else
		      return 'letra no valida, letra correcta: '+calcularLetra(_id.substring(0,_id.length -1));
		}
		else if (this.dni_nif() === 'dni'){
		  return calcularLetra(_id);  
		}
		else 
		   return 'id no válido';
		  
	}
   };
}

var id1 = identificacion('11112345678');
console.log(id1.esFormatoValido()+' '+ id1.dni_nif() +' '+ id1.validar());

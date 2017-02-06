function Cadenas(cadena) {
  this.cadena = cadena;
  this.cadenaInvertida = function(){
        var resultado ="";
	for(var i = this.cadena.length - 1; i >= 0; i--)
	    resultado += this.cadena.charAt(i);
        return resultado;
	}
  };
Cadenas.prototype = {

  esCadena      :  function () { return isNaN(this.cadena); },
  longitudCadena:  function () { return this.cadena.length; },
  cadenaMayuscula: function () { return this.cadena.toUpperCase(); },
  cadenaInversa:   function () { return this.cadenaInvertida(); },
  esPalindromo:    function () { return this.cadena === this.cadenaInvertida() },
  toString     :   function () { return JSON.stringify(this) }	  
}  

var cadena2 = new Cadenas('1a3a1');
console.log(cadena2.esCadena()); //true
console.log(cadena2.longitudCadena()); //5
console.log(cadena2.cadenaMayuscula()); //1A3A1
console.log(cadena2.cadenaInversa()); // 1a3a1
console.log(cadena2.esPalindromo()); // true
console.log(cadena2.cadena);
console.log(cadena2.toString());











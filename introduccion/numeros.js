var numero1 = 2; //tipo entero (number)
var numero2 = 2.2;//tipo real (number)
var cadena = 'hola mundo'; //tipo string

if (isNaN(numero1))
  console.log(numero1 + ' NO es un numero');
else
  console.log(numero1 + ' es un numero');

if (isNaN(numero2))
  console.log(numero2 + ' NO es un numero');
else
  console.log(numero2 + ' es un numero');

if (isNaN(cadena))
  console.log(cadena + ' NO es un numero');
else
  console.log(cadena + ' es un numero');
//operador typeof
console.log(typeof numero1);
console.log(typeof numero2);
console.log(typeof cadena);

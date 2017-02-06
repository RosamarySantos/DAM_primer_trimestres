function persona (nombre, apellidos, edad) {
  var _nombre    = nombre;
  var _apellidos = apellidos;
  var _edad      = edad;
  return {
    nombrar:        function() { return _nombre + ' '+ _apellidos; },
    nombrarOficial: function() { return _apellidos + ', '+ _nombre; }
  };
}

var persona1 = persona('manuel', 'molino milla');
console.log(persona1.nombrar());
console.log(persona1.nombrarOficial());
console.log('------------------------');
var persona1 = persona('juan', 'garcía garcía');
console.log(persona1.nombrar());
console.log(persona1.nombrarOficial());

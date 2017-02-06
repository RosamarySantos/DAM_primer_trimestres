var objeto = {};
objeto.nombre = 'manuel';
objeto.apellidos = 'molino milla';
objeto.nombrar = function () {
  return objeto.nombre+' ' +objeto.apellidos;
}
objeto.nombrarOficial = function () {
  return objeto.apellidos+", "+objeto.nombre;
}
console.log(objeto.nombrar());
console.log(objeto.nombrarOficial());

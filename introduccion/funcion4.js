var objeto = {
  nombre : 'manuel',
  apellidos : 'molino milla',
  nombrar : function () {
    return objeto.nombre+' ' +objeto.apellidos;
  },
  nombrarOficial : function () {
    return objeto.apellidos+", "+objeto.nombre;
  }
}
console.log(objeto.nombrar());
console.log(objeto.nombrarOficial());

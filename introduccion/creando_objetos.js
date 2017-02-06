var objeto = {};

objeto.nombre = 'jose ricardo';
objeto.edad = 18;

console.log(objeto);

var otro_objeto = {

  nombre: 'pedrito jiménez',
  edad:   17

}
console.log(otro_objeto);
//borramos una propiedad
delete otro_objeto.edad;
console.log(otro_objeto);

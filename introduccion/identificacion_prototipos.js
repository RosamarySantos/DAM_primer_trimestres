/*----------------ejercicio 2 con constructores y prototipos-------------------*/
console.log("\n\n----------------ejercicio 2 del final con constructores y prototipos-------------------");

function Dni_nif(texto){
    this.texto=texto;
};
Dni_nif.prototype={
    esDni_NifCorrecto: function () {
            return /^([0-9]{8}[a-zA-Z]?)$/.test(this.texto);
        },
        esDni: function () {
            //el dni acaba en numero y el nif en letra
            if (isNaN(this.texto.charAt(this.texto.length - 1))) {
                return false; //si el ultimo caracter es NaN es una letra, por lo que es un nif 
            } else {
                return true; //si la ultima letra no es NaN es un numero, por lo que es un dni
            }
        },
        devolverLetraDni: function () {
            //comprobamos que el formato sea correcto y sea un dni (tamaño 8)
            if (this.esDni_NifCorrecto() && this.texto.length === 8) {
                var cadena = "TRWAGMYFPDXBNJZSQVHLCKET";
                var posicion = this.texto % 23;
                var letra = cadena.substring(posicion, posicion + 1);
                return letra;
            } else {
                return "no has introducido un dni correcto";
            }
        },
        validarLetraNif: function () {
            //comprobamos que el formato sea correcto y sea un nif (tamaño 9)
            if (this.esDni_NifCorrecto() && this.texto.length === 9) {
                var cadena = "TRWAGMYFPDXBNJZSQVHLCKET";
                var posicion = this.texto.substring(0, this.texto.length - 1) % 23;
                var letra = cadena.substring(posicion, posicion + 1);
                return letra === this.texto.charAt(this.texto.length - 1); //comparamos la letra con el ultimo caracter del nif
            } else {
                return "no has introducido un nif correcto";
            }
        },
        serializar: function(){
            return JSON.stringify(this);
        }
};

var dni= new Dni_nif("12345678");
console.log("es correcto el formato del dni o nif correcto: "+dni.esDni_NifCorrecto());
console.log("es dni?: "+dni.esDni());
console.log("devolver letra dni: "+dni.devolverLetraDni());
console.log("validar letra nif: "+dni.validarLetraNif());
console.log("datos serializados: "+dni.serializar());
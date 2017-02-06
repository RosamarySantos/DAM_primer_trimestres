function dni_nif(texto) {
    var _texto = texto;
    return{
        esDni_NifCorrecto: function (callback) {
            process.nextTick(function(){
               callback(/^([0-9]{8}[a-zA-Z]?)$/.test(_texto));
        });

        },
        esDni: function (callback) {
            process.nextTick(function(){
            //el dni acaba en numero y el nif en letra
              if (isNaN(_texto.charAt(_texto.length - 1))) {
                callback(false);
              } else {
                callback(true);
              }
        });
        },
        devolverLetraDni: function (callback) {
            process.nextTick(function(){
            if (_texto.length === 8) {
                var cadena = "TRWAGMYFPDXBNJZSQVHLCKET";
                var posicion = _texto % 23;
                var letra = cadena.substring(posicion, posicion + 1);
                callback(letra);
            } else {
                callback("no has introducido un dni correcto");
            }
        });
        },
        validarLetraNif: function (callback) {
            process.nextTick(function(){
            if (_texto.length === 9) {
                var cadena = "TRWAGMYFPDXBNJZSQVHLCKET";
                var posicion = _texto.substring(0, _texto.length - 1) % 23;
                var letra = cadena.substring(posicion, posicion + 1);
                callback(letra === _texto.charAt(_texto.length - 1));
            } else {
                callback("no has introducido un nif correcto");
            }
            });
        }
    
    };
}

module.exports = dni_nif;


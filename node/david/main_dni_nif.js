var dni=require('./dni_nif');
dni("12345678").esDni_NifCorrecto(function(resultado){
    console.log("tiene el formato correcto: "+resultado);
});

dni("12345678").esDni(function(resultado){
    console.log("es un dni: "+resultado);
});

dni("12345678").devolverLetraDni(function(resultado){
    console.log("letra del dni: "+resultado);
});

dni("12345678Z").validarLetraNif(function(resultado){
    console.log("es valida la letra: "+resultado);
});


console.log("hilo principal");
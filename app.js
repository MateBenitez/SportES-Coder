document.addEventListener("DOMContentLoaded", function () {

    const correos = prompt("Ingrese correos electrónicos separados por comas para recibir información adicional:").split(',');
    const telefonos = prompt("Ingrese números telefónicos separados por comas para recibir información adicional:").split(',');

    const datosContacto = {
        correos: correos,
        telefonos: telefonos
    };

    enviarDatosContacto(datosContacto);
});

function enviarDatosContacto(datosContacto) {

    console.log("Datos de contacto enviados para recibir información adicional:");
    console.log("Correos electrónicos:", datosContacto.correos);
    console.log("Números telefónicos:", datosContacto.telefonos);
    console.log("¡Gracias por enviar tus datos!");
}
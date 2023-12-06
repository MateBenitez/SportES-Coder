document.addEventListener("DOMContentLoaded", function () {
    const btnMostrarResultados = document.getElementById("btnMostrarResultados");
    const resultadosContainer = document.getElementById("resultados");


    function enviarDatosContacto(datosContacto) {
        console.log("Datos de contacto enviados:");
        console.log("Correo electrónico:", datosContacto.correo);
        console.log("Número telefónico:", datosContacto.telefono);


        const datosContactoJSON = JSON.stringify(datosContacto);
        localStorage.setItem('datosContacto', datosContactoJSON);

        console.log("¡Gracias por enviar tus datos!");
    }


    function mostrarResultados() {

        const datosContactoJSON = localStorage.getItem('datosContacto');
        if (datosContactoJSON) {
            const datosContacto = JSON.parse(datosContactoJSON);

            resultadosContainer.innerHTML = `
                <h3>Resultados:</h3>
                <p>Correo electrónico: ${datosContacto.correo}</p>
                <p>Número telefónico: ${datosContacto.telefono}</p>
            `;
        } else {
            resultadosContainer.innerHTML = `<p>No hay resultados almacenados.</p>`;
        }
    }


    btnMostrarResultados.addEventListener("click", function () {
        mostrarResultados();
    });

    document.getElementById("btnEnviarDatos").addEventListener("click", function () {
        const correo = prompt("Ingrese su correo electrónico:");
        const telefono = prompt("Ingrese su número telefónico:");

        const datosContacto = {
            correo: correo,
            telefono: telefono
        };

        enviarDatosContacto(datosContacto);
    });
});
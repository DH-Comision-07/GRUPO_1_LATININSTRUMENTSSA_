window.addEventListener('DOMContentLoaded', function () {

    let formulario = document.querySelector('.form');

    formulario.addEventListener("submit", function (e) {

        let errores = [];

        let fieldName = document.querySelector('input.name');

        if (fieldName.value == "") {
            errores.push("Ingrese su nombre de usuario")
        };

        let fieldPass = document.querySelector('input.pass');

        if (fieldPass.value == "") {
            errores.push("Ingrese su contraseña")
        };


        if (errores.length > 0) {

            e.preventDefault();

            let ulErrores = document.querySelector("div.errores ul");

            ulErrores.innerHTML = "";

            for (let i = 0; i < errores.length; i++) {
                ulErrores.innerHTML += "<li>" + errores[i] + "</li>"
            }
        }

    })
})
window.addEventListener('DOMContentLoaded', function () {

    let formulario = document.querySelector('.form');

    formulario.addEventListener("submit", function (e) {

        let fails = [];

        let fieldName = document.querySelector('input.name');

        if (fieldName.value == "") {
            fails.push("Se requiere un nombre")
        };

        let fieldEmail = document.querySelector('input.email');

        if (fieldEmail.value == "") {
            fails.push("Se requiere un email")
        };

        let fieldPass = document.querySelector('input.pass');

        if (fieldPass.value == "") {
            fails.push("Se requiere una contraseña")
        };

        let fieldRepass = document.querySelector('input.repass');

        if (fieldRepass.value == "") {
            fails.push("Repita la contraseña")
        };

        if (fieldPass.value !== fieldRepass.value) {
            fails.push("Las contraseñas no coinciden")
        };

        if (fails.length > 0) {

            e.preventDefault();

            let ulFails = document.querySelector("div.fails ul");

            ulFails.innerHTML = "";

            for (let i = 0; i < fails.length; i++) {
                ulFails.innerHTML += "<li>" + fails[i] + "</li>"
            }
        }

    })
})
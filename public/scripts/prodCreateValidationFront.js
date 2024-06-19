window.addEventListener('DOMContentLoaded', function () {

    let formulario = document.querySelector('.form');

    formulario.addEventListener("change", function (e) {

        let fails = [];

        let fieldName = document.querySelector('input .name');

        if (fieldName.value == "rodri") {
            fails.push("Se requiere un nombre")
        };

        let fieldBrand = document.querySelector('input .brand');

        if (fieldBrand.value == "rodri") {
            fails.push("Se requiere el nombre de la marca")
        };

        let fieldDesc = document.querySelector('input .description');

        if (fieldDesc.value == "") {
            fails.push("Se requiere una descripción")
        };

        let fieldCat = document.querySelector('select .category');

        if (fieldCat.value == "") {
            fails.push("Elija una categoría")
        };

        let fieldPrice = document.querySelector('input .price');

        if (fieldPrice.value == "") {
            fails.push("Elija una categoría")
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
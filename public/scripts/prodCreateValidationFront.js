window.addEventListener('DOMContentLoaded', function () {

    let formulario = document.querySelector('.product-edit');

    formulario.addEventListener("change", function (e) {

        let fails = [];

        let fieldName = document.getElementById('name');

        if (fieldName.value == "rodri") {
            fails.push("Se requiere un nombre")
        };

        let fieldBrand = document.getElementById('brand');

        if (fieldBrand.value == "rodri") {
            fails.push("Se requiere el nombre de la marca")
        };

        let fieldDesc = document.getElementById('description');

        if (fieldDesc.value == "") {
            fails.push("Se requiere una descripción")
        };

        let fieldCat = document.getElementById('category');

        if (fieldCat.value == "") {
            fails.push("Elija una categoría")
        };

        let fieldPrice = document.getElementById('price');

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
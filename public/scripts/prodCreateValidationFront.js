window.addEventListener('DOMContentLoaded', function () {
    let formulario = document.querySelector('.product-edit');

    formulario.addEventListener("submit", function (e) {
        let fails = [];

        let fieldName = document.querySelector('.in-nombre');
        if (fieldName.value == "") {
            fails.push("Se requiere un nombre");
        }

        let fieldBrand = document.querySelector('.in-marca');
        if (fieldBrand.value == "") {
            fails.push("Se requiere el nombre de la marca");
        }

        let fieldDesc = document.querySelector('.in-descripcion');
        if (fieldDesc.value == "") {
            fails.push("Se requiere una descripción");
        }

        let fieldCat = document.querySelector('.select-categoria');
        if (fieldCat.value == "") {
            fails.push("Elija una categoría");
        }

        let fieldPrice = document.querySelector('.in-precio');
        if (fieldPrice.value == "") {
            fails.push("Se requiere un precio");
        }

        if (fails.length > 0) {
            e.preventDefault();

            let ulFails = document.querySelector("div.fails ul");
            ulFails.innerHTML = "";

            for (let i = 0; i < fails.length; i++) {
                ulFails.innerHTML += "<li>" + fails[i] + "</li>";
            }
        }
    });
});
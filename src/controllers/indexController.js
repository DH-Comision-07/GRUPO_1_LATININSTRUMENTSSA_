const productService = require("../services/productService");

const indexController = {
	home: function (req, res) {
		const allProducts = productService.getAllProducts();
		res.render("home", {allProducts});
	},

	carrito: function (req, res) {
		res.render("carrito");
	},

	nosotros: function (req, res) {
		res.render("nosotros");
	},
};

module.exports = indexController;

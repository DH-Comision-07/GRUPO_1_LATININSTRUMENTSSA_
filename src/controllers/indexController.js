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
	instrumentos: function(req, res){
		const productByCategory = productService.productByCategory("instrumento");
		res.render("instrumentos", {productByCategory});
	},
	vinilos: function(req, res){
		const productByCategory = productService.productByCategory("vinilo");
		res.render("vinilos", {productByCategory});
	},
	accesorios: function(req, res){
		const productByCategory = productService.productByCategory("accesorio");
		res.render("accesorios", {productByCategory});
	}
};

module.exports = indexController;

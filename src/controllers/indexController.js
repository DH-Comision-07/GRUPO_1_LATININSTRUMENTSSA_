const productService = require("../services/productService");

const indexController = {
	home: async function (req, res) {
		try {
			const allProducts = await productService.getAllProducts();
			res.render("home", { allProducts });
		} catch (error) {
			console.error("Error fetching products:", error);
			res.status(500).send("Error fetching products");
		}
	},

	carrito: function (req, res) {
		res.render("carrito");
	},

	nosotros: function (req, res) {
		res.render("nosotros");
	},

	instrumentos: async function (req, res) {
		try {
			const productByCategory = await productService.productByCategory("instrument");
			res.render("instrumentos", { productByCategory });
		} catch (error) {
			console.error("Error fetching instruments:", error);
			res.status(500).send("Error fetching instruments");
		}
	},

	vinilos: async function (req, res) {
		try {
			const productByCategory = await productService.productByCategory("vinyl");
			res.render("vinilos", { productByCategory });
		} catch (error) {
			console.error("Error fetching vinyls:", error);
			res.status(500).send("Error fetching vinyls");
		}
	}


};

module.exports = indexController;

const productService = require("../services/productService");

const productsController = {
	Detail: async (req, res) => {
		const productId = req.params.id;
		const product = await productService.getProductsById(productId);
		if (product) {
			res.render("productDetail", { product });
		} else {
			res.status(404).send("Producto no encontrado");
		}
	},

	Create: (req, res) => {
		res.render("productCreate");
	},

	Store: async (req, res) => {
		const newProduct = {
			name: req.body.name,
			brand_id: req.body.brand, 
			description: req.body.description,
			category: req.body.category,
			price: parseFloat(req.body.price), 
			image: req.file ? req.file.filename : "",
		};
		await productService.createProduct(newProduct);
		res.redirect("/");
	},

	Edit: async (req, res) => {
		const productId = parseInt(req.params.id);
		const product = await productService.getProductsById(productId);
		if (!product) {
			return res.status(404).send("Producto no encontrado");
		}
		res.render("productEdit", { product });
	},

	Update: async (req, res) => {
		const productId = req.params.id;
		const updatedProduct = {
			name: req.body.name,
			brand_id: req.body.brand, // Asumiendo que el campo brand es una referencia a la tabla Brand
			description: req.body.description,
			category: req.body.category,
			price: parseFloat(req.body.price), // Cambié a parseFloat para que coincida con el tipo DECIMAL de Sequelize
			image: req.file ? req.file.filename : "",
		};
		await productService.updateProduct(productId, updatedProduct);
		res.redirect(`/product/detail/${productId}`);
	},

	Delete: async (req, res) => {
		const productId = req.params.id;
		await productService.deleteProduct(productId);
		res.redirect("/");
	},
};

module.exports = productsController;

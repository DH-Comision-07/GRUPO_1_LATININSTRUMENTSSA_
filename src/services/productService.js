const Product = require("../database/models/Product");

const productService = {
	getAllProducts: async () => {
		return await Product.findAll();
	},

	getProductsById: async (productId) => {
		return await Product.findByPk(productId);
	},

	getNextId: async () => {
		const products = await productService.getAllProducts();
		const maxId = products.reduce((acc, current) => {
			return acc > current.id ? acc : current.id;
		}, 0);
		return maxId + 1;
	},

	createProduct: async (newProduct) => {
		return await Product.create(newProduct);
	},

	updateProduct: async (productId, updatedProduct) => {
		const product = await Product.findByPk(productId);
		if (product) {
			return await product.update(updatedProduct);
		}
		return null;
	},

	deleteProduct: async (id) => {
		const product = await Product.findByPk(id);
		if (product) {
			return await product.destroy();
		}
		return null;
	},

	productByCategory: async (category) => {
		return await Product.findAll({ where: { category } });
	},
};

module.exports = productService;

const { name } = require("ejs");
const productService = require("../services/productService");

const productsController = {
	list : (req, res)=> {
		const productos= productService.getAllProducts();
		
	},
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
		try{
		const newProduct = {
			
			name: req.body.name,
			brand: req.body.brand,
			description: req.body.description,
			category: req.body.category,
			price: parseInt(req.body.price),
			image: req.file ? req.file.filename : "",
		};
		await productService.createProduct(newProduct);
		res.redirect("/");
	} catch(error) {
		console.error('Error during product creation:', error);
		res.status(500).send('Error interno del servidor');
	}
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
		  brand: req.body.brand,
		  description: req.body.description,
		  category: req.body.category,
		  price: parseInt(req.body.price),
		  image: req.file ? req.file.filename : "",
		};
		await productService.updateProduct(productId, updatedProduct);
		res.redirect(`/product/detail/${productId}`);
	  },
Delete: (req,res)=> {
	const productId = req.params.id;
	productService.deleteProduct(productId);
	res.redirect('/')
	}
};

module.exports = productsController;

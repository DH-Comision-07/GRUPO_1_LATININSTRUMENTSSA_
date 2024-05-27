const { name } = require("ejs");
const productService = require("../services/productService");

const productsController = {
	list : (req, res)=> {
		const productos= productService.getAllProducts();
		
	},
	Detail: (req, res) => {
		const productId = req.params.id;
		const product = productService.getProductsById(productId);
		if (product) {
			res.render("productDetail", { product });
		} else {
			res.status(404).send("Producto no encontrado");
		}
	},

	Create: (req, res) => {
		res.render("productCreate");
	},

	Store: (req, res) => {
		const newProduct = {
			id: productService.getNextId(),
			name: req.body.name,
			brand: req.body.brand,
			description: req.body.description,
			category: req.body.category,
			price: parseInt(req.body.price),
			image: req.file ? req.file.filename : "",
		};
		productService.createProduct(newProduct);
		res.redirect("/");
	},

	Edit: (req, res) => {
		const productId = parseInt(req.params.id);
		const product = productService.getProductsById(productId);
		if (!product) {
			return res.status(404).send("Producto no encontrado");
		}
		res.render("productEdit", { product });
},

Update: (req, res) => {
    const productId = req.params.id;
	console.log(req.body);
    const updatedProduct = {
    name: req.body.name,
    brand: req.body.brand,
    description: req.body.description,
    category: req.body.category,
    price: parseInt(req.body.price),
    image: req.file ? req.file.filename : "",
    };
	console.log(updatedProduct);
    productService.updateProduct(productId, updatedProduct);
    res.redirect(`/product/detail/${productId}`);
},
Delete: (req,res)=> {
	const productId = req.params.id;
	productService.deleteProduct(productId);
	res.redirect('/')
	}
};

module.exports = productsController;

const productService = require("../services/productService");

const productsController = {
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
			nombre: req.body.nombre,
			marca: req.body.marca,
			descripcion: req.body.descripcion,
			categoria: req.body.categoria,
			precio: parseInt(req.body.precio),
			imagen: req.file ? req.file.filename : "",
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
    nombre: req.body.nombre,
    marca: req.body.marca,
    descripcion: req.body.descripcion,
    categoria: req.body.categoria,
    precio: parseInt(req.body.precio),
    imagen: req.file ? req.file.filename : "",
    };
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

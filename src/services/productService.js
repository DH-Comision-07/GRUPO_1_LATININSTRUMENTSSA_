const fs = require("fs");
const path = require("path");

const productsPath = path.join(__dirname, "../data/productsDataBase.json");

const products = JSON.parse(fs.readFileSync(productsPath, "utf-8"));

const productService = {
  getAllProducts: () => {
    return products
  },

  getProductsById: (productId) => {
    const products = productService.getAllProducts();
    return products.find((product) => product.id == productId);
  },

  getNextId: () => {
    const products = productService.getAllProducts();
    const maxId = products.reduce((acc, current) => {
      return acc > current.id ? acc : current.id;
    }, 0);
    return maxId + 1;
  },

  createProduct: (newProduct) => {
    const products = productService.getAllProducts();
    const maxId = products.reduce((acc, current) => {
      return acc > current.id ? acc : current.id;
    }, 0);

    newProduct.id = maxId + 1;
    products.push(newProduct);
    fs.writeFileSync(productsPath, JSON.stringify(products, null, 2), "utf-8")
  },

  updateProduct: (productId, updatedProduct) => {
		const products = productService.getAllProducts();
    console.log(updatedProduct);
		const productIndex = products.findIndex((product) => product.id == productId);
    console.log("pasa por aca");
    console.log(productIndex);
		if (productIndex !== -1) {
			products[productIndex] = { ...products[productIndex], ...updatedProduct };
      fs.writeFileSync(productsPath, JSON.stringify(products, null, 2), "utf-8");
    }
  },

  deleteProduct : ()=>{
    const getoneForDelete = productService.getProductsById();
    if (getoneForDelete !== -1) {
      products.pop()
      fs.writeFileSync(productsPath, JSON.stringify(products, null, 2), "utf-8");
    }
  }
}

module.exports = productService
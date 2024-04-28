const fs = require("fs");
const path = require("path");

const productsPath = path.join(__dirname, "../data/productsDataBase.json");



const productService = {
  getAllProducts: () => {
    const products = JSON.parse(fs.readFileSync(productsPath, "utf-8"));
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
    console.log(productIndex);
		if (productIndex !== -1) {
			products[productIndex] = { ...products[productIndex], ...updatedProduct };
      fs.writeFileSync(productsPath, JSON.stringify(products, null, 2), "utf-8");
    }
  },

  deleteProduct : function (id) {
    const products = productService.getAllProducts();
    let allProducts = products.filter(oneProduct => oneProduct.id != id);
      fs.writeFileSync(productsPath, JSON.stringify(allProducts, null, 2), "utf-8");    
  }
}

module.exports = productService
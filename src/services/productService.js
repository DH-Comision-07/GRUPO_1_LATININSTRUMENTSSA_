const fs = require("fs");
const path = require("path");
const db = require('../database/models/Product')

const productsPath = path.join(__dirname, "../data/productsDataBase.json");



const productService = {
  // getAllProductsDb: ()=>{
  //     const productos = db.Productos.findAll()
  //     return productos
  // },


   getAllProducts: async () => {
    try {
      const allProducts = await db.findAll();
      const simplifiedProducts = allProducts.map(product => product.dataValues);
      return simplifiedProducts;
    } catch (error) {
      console.error("Error al obtener todos los productos:", error);
      throw error;
    }
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
    console.log(productId);
    console.log(updatedProduct);
		const productIndex = products.findIndex((product) => product.id == productId);

		if (productIndex !== -1) {
      console.log('image' + updatedProduct.image);
      if(updatedProduct.image ===""){
        console.log('entro al if');
        updatedProduct.image = products[productIndex].image;
      }
      
			products[productIndex] = { ...products[productIndex], ...updatedProduct };
      fs.writeFileSync(productsPath, JSON.stringify(products, null, 2), "utf-8");
    }
  },

  deleteProduct : function (id) {
    const products = productService.getAllProducts();
    let allProducts = products.filter(oneProduct => oneProduct.id != id);
      fs.writeFileSync(productsPath, JSON.stringify(allProducts, null, 2), "utf-8");    
  },
  productByCategory : function(category){
    const products= productService.getAllProducts();    
    let productsCategory= []; 
    products.forEach(product => {           
      if(product.category === category){        
        productsCategory.push(product);
      }
    });
    return productsCategory;
  }
  
}

module.exports = productService
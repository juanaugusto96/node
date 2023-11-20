class ProductManager {
    constructor() {
      this.products = [];
      this.productId = 1;
    }
  
    addProduct(title, description, price, thumbnail, code, stock) {

        if (!title || !description || !price || !thumbnail || !code || !stock) {
        console.log("Todos los campos son obligatorios");
        return null;
      }
  
      const existingProduct = this.products.find(product => product.code === code);
      if (existingProduct) {
        console.log("El código del producto ya existe");
        return null;
      }
  
      const newProduct = {
        id: this.productId,
        title,
        description,
        price,
        thumbnail,
        code,
        stock,
      };
      this.products.push(newProduct);
      this.productId++; 
      return newProduct;
    }
  
    findProductByCode(code) {
      return this.products.find(product => product.code === code);
    }
  
    deleteProductByCode(code) {
      this.products = this.products.filter(product => product.code !== code);
    }
  
    updateStockByCode(code, newStock) {
      const product = this.findProductByCode(code);
      if (product) {
        product.stock = newStock;
        return product;
      }
      return null;
    }
  
    getAllProducts() {
      return this.products;
    }
  
    getProductById(id) {
      const product = this.products.find(product => product.id === id);
      if (!product) {
        console.log("Producto no encontrado");
      }
      return product;
    }
  }
  const manager = new ProductManager();
  
  manager.addProduct("Producto 1", "Descripción del producto 1", 10.99, "imagen1.jpg", "P001", 50);
  manager.addProduct("Producto 2", "Descripción del producto 2", 19.99, "imagen2.jpg", "P002", 30);
  
  const allProducts = manager.getAllProducts();
  console.log("Todos los productos:", allProducts);
  
  const productFound = manager.findProductByCode("P001");
  console.log("Producto encontrado:", productFound);
  
  manager.updateStockByCode("P002", 20);
  console.log("Stock actualizado:", manager.findProductByCode("P002"));
  
  manager.deleteProductByCode("P001");
  console.log("Productos después de eliminar:", manager.getAllProducts());
  
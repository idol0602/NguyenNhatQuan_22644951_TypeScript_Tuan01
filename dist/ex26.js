"use strict";
// 26. Create a class Order with list of products. Add method to calculate total price.
class Product {
    name;
    price;
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}
class Order {
    products = [];
    addProduct(product) {
        this.products.push(product);
    }
    getTotal() {
        return this.products.reduce((sum, p) => sum + p.price, 0);
    }
}
const order = new Order();
order.addProduct(new Product("Book", 50));
order.addProduct(new Product("Pen", 10));
console.log(order.getTotal());
//# sourceMappingURL=ex26.js.map
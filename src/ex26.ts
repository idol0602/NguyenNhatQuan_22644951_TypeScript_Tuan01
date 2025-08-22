// 26. Create a class Order with list of products. Add method to calculate total price.

class Product {
  constructor(public name: string, public price: number) {}
}

class Order {
  private products: Product[] = [];

  addProduct(product: Product): void {
    this.products.push(product);
  }

  getTotal(): number {
    return this.products.reduce((sum, p) => sum + p.price, 0);
  }
}

const order = new Order();
order.addProduct(new Product("Book", 50));
order.addProduct(new Product("Pen", 10));
console.log(order.getTotal());

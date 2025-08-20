// 8. Create a Product class with name, price. Create an array of products and filter products with
// price > 100.
export class Product {
  name: string;
  price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  display(): void {
    console.log(`Product: ${this.name}, Price: $${this.price}`);
  }
}

const products: Product[] = [
  new Product("Laptop", 1500),
  new Product("Mouse", 25),
  new Product("Keyboard", 75),
  new Product("Monitor", 200),
  new Product("USB Cable", 10)
];

const expensiveProducts = products.filter(product => product.price > 100);

expensiveProducts.forEach(product => product.display());
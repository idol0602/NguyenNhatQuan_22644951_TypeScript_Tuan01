declare class Product {
    name: string;
    price: number;
    constructor(name: string, price: number);
}
declare class Order {
    private products;
    addProduct(product: Product): void;
    getTotal(): number;
}
declare const order: Order;
//# sourceMappingURL=ex26.d.ts.map
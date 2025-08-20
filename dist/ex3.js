// 3. Create a class Car with properties brand, model, year. Write a method to show car info.
export class Car {
    brand;
    model;
    year;
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    showInfo() {
        console.log(`Brand: ${this.brand}`);
        console.log(`Model: ${this.model}`);
        console.log(`Year: ${this.year}`);
    }
}
// Example usage:
const car1 = new Car("Toyota", "Camry", 2020);
car1.showInfo();
//# sourceMappingURL=ex3.js.map
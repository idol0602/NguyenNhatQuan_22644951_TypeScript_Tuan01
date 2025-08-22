"use strict";
// 20. Write a Vehicle interface and implement it in Car and Bike classes.
class Car {
    brand;
    speed;
    constructor(brand, speed) {
        this.brand = brand;
        this.speed = speed;
    }
    drive() {
        console.log(`${this.brand} car is driving at ${this.speed} km/h.`);
    }
    stop() {
        console.log(`${this.brand} car has stopped.`);
    }
}
class Bike {
    brand;
    speed;
    constructor(brand, speed) {
        this.brand = brand;
        this.speed = speed;
    }
    drive() {
        console.log(`${this.brand} bike is riding at ${this.speed} km/h.`);
    }
    stop() {
        console.log(`${this.brand} bike has stopped.`);
    }
}
const car = new Car("Toyota", 100);
const bike = new Bike("Yamaha", 60);
car.drive();
car.stop();
bike.drive();
bike.stop();
//# sourceMappingURL=ex20.js.map
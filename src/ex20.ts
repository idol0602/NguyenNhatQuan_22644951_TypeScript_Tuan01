// 20. Write a Vehicle interface and implement it in Car and Bike classes.

interface Vehicle {
  brand: string;
  speed: number;

  drive(): void;
  stop(): void;
}

class Car implements Vehicle {
  brand: string;
  speed: number;

  constructor(brand: string, speed: number) {
    this.brand = brand;
    this.speed = speed;
  }

  drive(): void {
    console.log(`${this.brand} car is driving at ${this.speed} km/h.`);
  }

  stop(): void {
    console.log(`${this.brand} car has stopped.`);
  }
}

class Bike implements Vehicle {
  brand: string;
  speed: number;

  constructor(brand: string, speed: number) {
    this.brand = brand;
    this.speed = speed;
  }

  drive(): void {
    console.log(`${this.brand} bike is riding at ${this.speed} km/h.`);
  }

  stop(): void {
    console.log(`${this.brand} bike has stopped.`);
  }
}

const car = new Car("Toyota", 100);
const bike = new Bike("Yamaha", 60);

car.drive();
car.stop();

bike.drive();
bike.stop();

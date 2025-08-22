// 19. Demonstrate method overriding using polymorphism with Animal and subclasses.
import { Animal } from "./ex11.js";

class Dog extends Animal {
  speak(): void {
    console.log(`${this.name} barks: Woof! Woof!`);
  }
}

class Cat extends Animal {
  speak(): void {
    console.log(`${this.name} meows: Meow!`);
  }
}

const animals: Animal[] = [
  new Dog("Buddy"),
  new Cat("Kitty"),
  new Animal("Generic Animal")
];

animals.forEach(a => a.sound());
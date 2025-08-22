"use strict";
// 28. Create a class Animal with protected method makeSound(). Extend Dog and Cat to override it.
class Animal2 {
    makeSound() { }
}
class Dog extends Animal2 {
    makeSound() {
        console.log("Woof");
    }
    bark() {
        this.makeSound();
    }
}
class Cat extends Animal2 {
    makeSound() {
        console.log("Meow");
    }
    meow() {
        this.makeSound();
    }
}
const dog = new Dog();
dog.bark();
const cat = new Cat();
cat.meow();
//# sourceMappingURL=ex28.js.map
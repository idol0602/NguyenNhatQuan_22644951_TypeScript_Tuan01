"use strict";
// 11. Create a base class Animal. Extend Dog and Cat classes with methods bark() and meow().
class Animal {
    name;
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} makes a sound.`);
    }
}
class Dog extends Animal {
    bark() {
        console.log(`${this.name} says: Woof! Woof!`);
    }
}
class Cat extends Animal {
    meow() {
        console.log(`${this.name} says: Meow!`);
    }
}
const dog = new Dog("Buddy");
dog.speak();
dog.bark();
const cat = new Cat("Kitty");
cat.speak();
cat.meow();
//# sourceMappingURL=ex11.js.map
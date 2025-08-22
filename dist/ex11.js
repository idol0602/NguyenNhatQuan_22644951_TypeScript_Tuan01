// 11. Create a base class Animal. Extend Dog and Cat classes with methods bark() and meow().
export class Animal {
    name;
    constructor(name) {
        this.name = name;
    }
    sound() {
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
dog.sound();
dog.bark();
const cat = new Cat("Kitty");
cat.sound();
cat.meow();
//# sourceMappingURL=ex11.js.map
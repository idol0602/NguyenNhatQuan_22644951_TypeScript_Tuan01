"use strict";
// 12. Define interfaces Flyable and Swimmable. Implement them in Bird and Fish classes.
class Bird {
    name;
    constructor(name) {
        this.name = name;
    }
    fly() {
        console.log(`${this.name} is flying high in the sky!`);
    }
}
class Fish {
    name;
    constructor(name) {
        this.name = name;
    }
    swim() {
        console.log(`${this.name} is swimming in the water!`);
    }
}
const bird = new Bird("Eagle");
bird.fly();
const fish = new Fish("Nemo");
fish.swim();
//# sourceMappingURL=ex12.js.map
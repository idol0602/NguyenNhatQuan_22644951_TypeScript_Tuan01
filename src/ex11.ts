// 11. Create a base class Animal. Extend Dog and Cat classes with methods bark() and meow().

class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  speak(): void {
    console.log(`${this.name} makes a sound.`);
  }
}

class Dog extends Animal {
  bark(): void {
    console.log(`${this.name} says: Woof! Woof!`);
  }
}

class Cat extends Animal {
  meow(): void {
    console.log(`${this.name} says: Meow!`);
  }
}

const dog = new Dog("Buddy");
dog.speak();
dog.bark();

const cat = new Cat("Kitty");
cat.speak();
cat.meow();

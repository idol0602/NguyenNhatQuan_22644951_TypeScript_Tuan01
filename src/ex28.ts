// 28. Create a class Animal with protected method makeSound(). Extend Dog and Cat to override it.

class Animal2 {
  protected makeSound(): void {}
}

class Dog extends Animal2 {
  protected makeSound(): void {
    console.log("Woof");
  }

  bark(): void {
    this.makeSound();
  }
}

class Cat extends Animal2 {
  protected makeSound(): void {
    console.log("Meow");
  }

  meow(): void {
    this.makeSound();
  }
}

const dog = new Dog();
dog.bark();

const cat = new Cat();
cat.meow();

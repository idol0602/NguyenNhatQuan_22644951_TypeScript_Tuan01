// 27. Create a class Teacher that extends Person. Add subject attribute and introduce method.

class Person {
  constructor(public name: string, public age: number) {}

  introduce(): void {
    console.log(`Hi, I'm ${this.name}, ${this.age} years old`);
  }
}

class Teacher extends Person {
  constructor(name: string, age: number, public subject: string) {
    super(name, age);
  }

  introduce(): void {
    console.log(`Hi, I'm ${this.name}, I teach ${this.subject}`);
  }
}

const teacher = new Teacher("Alice", 30, "Math");
teacher.introduce();

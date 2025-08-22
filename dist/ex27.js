"use strict";
// 27. Create a class Teacher that extends Person. Add subject attribute and introduce method.
class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    introduce() {
        console.log(`Hi, I'm ${this.name}, ${this.age} years old`);
    }
}
class Teacher extends Person {
    subject;
    constructor(name, age, subject) {
        super(name, age);
        this.subject = subject;
    }
    introduce() {
        console.log(`Hi, I'm ${this.name}, I teach ${this.subject}`);
    }
}
const teacher = new Teacher("Alice", 30, "Math");
teacher.introduce();
//# sourceMappingURL=ex27.js.map
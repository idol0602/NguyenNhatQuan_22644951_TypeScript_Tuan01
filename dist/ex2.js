// 2. Write a class Student extending Person with an additional attribute grade. Add a method to
import { Person } from './ex1.js';
class Student extends Person {
    grade;
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }
    displayAllInfo() {
        super.display();
        console.log(`Grade: ${this.grade}`);
    }
}
let s = new Student("Quan", 21, "KTPM18A");
s.displayAllInfo();
//# sourceMappingURL=ex2.js.map
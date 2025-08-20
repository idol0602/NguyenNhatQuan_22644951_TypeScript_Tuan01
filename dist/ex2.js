// 2. Write a class Student extending Person with an additional attribute grade. Add a method to
// display all info.
import { Person } from './ex1.js';
class Student extends Person {
    grade;
    constructor(name, age, grade) {
        super(name, age); // Call the parent constructor
        this.grade = grade;
    }
    displayAllInfo() {
        super.display(); // Reuse Person's method
        console.log(`Grade: ${this.grade}`);
    }
}
let s = new Student("Quan", 21, "KTPM18A");
s.displayAllInfo();
//# sourceMappingURL=ex2.js.map
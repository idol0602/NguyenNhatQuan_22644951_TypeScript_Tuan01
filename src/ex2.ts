// 2. Write a class Student extending Person with an additional attribute grade. Add a method to
// display all info.

import { Person } from './ex1.js';

class Student extends Person {
  grade: string;

  constructor(name: string, age: number, grade: string) {
    super(name, age); // Call the parent constructor
    this.grade = grade;
  }

  displayAllInfo(): void {
    super.display(); // Reuse Person's method
    console.log(`Grade: ${this.grade}`);
  }
}

let s: Student = new Student("Quan",21,"KTPM18A")
s.displayAllInfo()
// 2. Write a class Student extending Person with an additional attribute grade. Add a method to

import { Person } from './ex1.js';

class Student extends Person {
  grade: string;

  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }

  displayAllInfo(): void {
    super.display();
    console.log(`Grade: ${this.grade}`);
  }
}

let s: Student = new Student("Quan",21,"KTPM18A")
s.displayAllInfo()
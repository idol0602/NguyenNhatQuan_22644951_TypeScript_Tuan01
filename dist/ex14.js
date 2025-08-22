"use strict";
// 14. Create a base class Employee. Extend Manager and Developer with specific methods.
class Employee {
    name;
    id;
    salary;
    constructor(name, id, salary) {
        this.name = name;
        this.id = id;
        this.salary = salary;
    }
    work() {
        console.log(`${this.name} is working...`);
    }
    displayInfo() {
        console.log(`ID: ${this.id}, Name: ${this.name}, Salary: ${this.salary}`);
    }
}
class Manager extends Employee {
    constructor(name, id, salary) {
        super(name, id, salary);
    }
    conductMeeting() {
        console.log(`${this.name} is conducting a meeting.`);
    }
}
class Developer extends Employee {
    constructor(name, id, salary) {
        super(name, id, salary);
    }
    writeCode() {
        console.log(`${this.name} is writing code.`);
    }
}
const m1 = new Manager("Alice", 101, 9000);
const d1 = new Developer("Bob", 202, 7000);
m1.displayInfo();
m1.work();
m1.conductMeeting();
console.log();
d1.displayInfo();
d1.work();
d1.writeCode();
//# sourceMappingURL=ex14.js.map
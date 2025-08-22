// 14. Create a base class Employee. Extend Manager and Developer with specific methods.

class Employee {
  protected name: string;
  protected id: number;
  protected salary: number;

  constructor(name: string, id: number, salary: number) {
    this.name = name;
    this.id = id;
    this.salary = salary;
  }

  work(): void {
    console.log(`${this.name} is working...`);
  }

  displayInfo(): void {
    console.log(`ID: ${this.id}, Name: ${this.name}, Salary: ${this.salary}`);
  }
}

class Manager extends Employee {
  constructor(name: string, id: number, salary: number) {
    super(name, id, salary);
  }

  conductMeeting(): void {
    console.log(`${this.name} is conducting a meeting.`);
  }
}

class Developer extends Employee {
  constructor(name: string, id: number, salary: number) {
    super(name, id, salary);
  }

  writeCode(): void {
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

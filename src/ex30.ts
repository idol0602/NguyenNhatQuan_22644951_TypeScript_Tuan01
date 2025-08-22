// 30. Create a class School with list of Students and Teachers. Add method to display info.

class Student {
  constructor(public name: string, public age: number) {}
}

class Teacher2 {
  constructor(public name: string, public subject: string) {}
}

class School {
  private students: Student[] = [];
  private teachers: Teacher2[] = [];

  addStudent(student: Student): void {
    this.students.push(student);
  }

  addTeacher(teacher: Teacher2): void {
    this.teachers.push(teacher);
  }

  displayInfo(): void {
    console.log("Students:");
    this.students.forEach(s => console.log(`${s.name}, ${s.age} years old`));
    console.log("Teachers:");
    this.teachers.forEach(t => console.log(`${t.name}, teaches ${t.subject}`));
  }
}

const school = new School();
school.addStudent(new Student("John", 18));
school.addStudent(new Student("Anna", 17));
school.addTeacher(new Teacher2("Mr. Smith", "Math"));
school.addTeacher(new Teacher2("Ms. Brown", "English"));

school.displayInfo();

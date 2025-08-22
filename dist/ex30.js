"use strict";
// 30. Create a class School with list of Students and Teachers. Add method to display info.
class Student {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
class Teacher2 {
    name;
    subject;
    constructor(name, subject) {
        this.name = name;
        this.subject = subject;
    }
}
class School {
    students = [];
    teachers = [];
    addStudent(student) {
        this.students.push(student);
    }
    addTeacher(teacher) {
        this.teachers.push(teacher);
    }
    displayInfo() {
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
//# sourceMappingURL=ex30.js.map
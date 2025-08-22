declare class Student {
    name: string;
    age: number;
    constructor(name: string, age: number);
}
declare class Teacher2 {
    name: string;
    subject: string;
    constructor(name: string, subject: string);
}
declare class School {
    private students;
    private teachers;
    addStudent(student: Student): void;
    addTeacher(teacher: Teacher2): void;
    displayInfo(): void;
}
declare const school: School;
//# sourceMappingURL=ex30.d.ts.map
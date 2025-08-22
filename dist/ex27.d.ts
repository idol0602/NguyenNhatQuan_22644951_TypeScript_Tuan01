declare class Person {
    name: string;
    age: number;
    constructor(name: string, age: number);
    introduce(): void;
}
declare class Teacher extends Person {
    subject: string;
    constructor(name: string, age: number, subject: string);
    introduce(): void;
}
declare const teacher: Teacher;
//# sourceMappingURL=ex27.d.ts.map
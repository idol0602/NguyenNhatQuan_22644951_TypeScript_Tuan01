declare class Employee {
    protected name: string;
    protected id: number;
    protected salary: number;
    constructor(name: string, id: number, salary: number);
    work(): void;
    displayInfo(): void;
}
declare class Manager extends Employee {
    constructor(name: string, id: number, salary: number);
    conductMeeting(): void;
}
declare class Developer extends Employee {
    constructor(name: string, id: number, salary: number);
    writeCode(): void;
}
declare const m1: Manager;
declare const d1: Developer;
//# sourceMappingURL=ex14.d.ts.map
declare abstract class Shape {
    abstract area(): number;
}
declare class Square extends Shape {
    side: number;
    constructor(side: number);
    area(): number;
}
declare class Circle extends Shape {
    radius: number;
    constructor(radius: number);
    area(): number;
}
declare const square: Square;
declare const circle: Circle;
//# sourceMappingURL=ex13.d.ts.map
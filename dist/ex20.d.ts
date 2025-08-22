interface Vehicle {
    brand: string;
    speed: number;
    drive(): void;
    stop(): void;
}
declare class Car implements Vehicle {
    brand: string;
    speed: number;
    constructor(brand: string, speed: number);
    drive(): void;
    stop(): void;
}
declare class Bike implements Vehicle {
    brand: string;
    speed: number;
    constructor(brand: string, speed: number);
    drive(): void;
    stop(): void;
}
declare const car: Car;
declare const bike: Bike;
//# sourceMappingURL=ex20.d.ts.map
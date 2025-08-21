interface Flyable {
    fly(): void;
}
interface Swimmable {
    swim(): void;
}
declare class Bird implements Flyable {
    name: string;
    constructor(name: string);
    fly(): void;
}
declare class Fish implements Swimmable {
    name: string;
    constructor(name: string);
    swim(): void;
}
declare const bird: Bird;
declare const fish: Fish;
//# sourceMappingURL=ex12.d.ts.map
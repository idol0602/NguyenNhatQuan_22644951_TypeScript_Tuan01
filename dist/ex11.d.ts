declare class Animal {
    name: string;
    constructor(name: string);
    speak(): void;
}
declare class Dog extends Animal {
    bark(): void;
}
declare class Cat extends Animal {
    meow(): void;
}
declare const dog: Dog;
declare const cat: Cat;
//# sourceMappingURL=ex11.d.ts.map
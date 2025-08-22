declare class Box<T> {
    private value;
    constructor(value: T);
    getValue(): T;
    setValue(newValue: T): void;
}
declare const numberBox: Box<number>;
declare const stringBox: Box<string>;
declare const booleanBox: Box<boolean>;
//# sourceMappingURL=ex16.d.ts.map
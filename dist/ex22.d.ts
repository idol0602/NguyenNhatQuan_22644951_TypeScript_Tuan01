declare class Stack<T> {
    private items;
    push(item: T): void;
    pop(): T | undefined;
    peek(): T | undefined;
    isEmpty(): boolean;
}
declare const stack: Stack<number>;
//# sourceMappingURL=ex22.d.ts.map
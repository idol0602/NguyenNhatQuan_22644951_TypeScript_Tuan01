"use strict";
// 22. Create a class Stack with push, pop, peek, isEmpty methods.
class Stack {
    items = [];
    push(item) {
        this.items.push(item);
    }
    pop() {
        return this.items.pop();
    }
    peek() {
        return this.items[this.items.length - 1];
    }
    isEmpty() {
        return this.items.length === 0;
    }
}
const stack = new Stack();
stack.push(10);
stack.push(20);
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.isEmpty());
//# sourceMappingURL=ex22.js.map
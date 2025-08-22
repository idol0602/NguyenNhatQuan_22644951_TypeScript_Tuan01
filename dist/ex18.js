"use strict";
// 18. Create a static class MathUtil with methods add(), subtract(), multiply(), divide().
class MathUtil {
    static add(a, b) {
        return a + b;
    }
    static subtract(a, b) {
        return a - b;
    }
    static multiply(a, b) {
        return a * b;
    }
    static divide(a, b) {
        if (b === 0) {
            throw new Error("Division by zero is not allowed.");
        }
        return a / b;
    }
}
console.log(MathUtil.add(10, 5));
console.log(MathUtil.subtract(10, 5));
console.log(MathUtil.multiply(10, 5));
console.log(MathUtil.divide(10, 5));
//# sourceMappingURL=ex18.js.map
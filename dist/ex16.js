"use strict";
// 16. Create a generic class Box that can store any type of value.
class Box {
    value;
    constructor(value) {
        this.value = value;
    }
    getValue() {
        return this.value;
    }
    setValue(newValue) {
        this.value = newValue;
    }
}
const numberBox = new Box(123);
console.log(numberBox.getValue());
const stringBox = new Box("Hello");
console.log(stringBox.getValue());
const booleanBox = new Box(true);
console.log(booleanBox.getValue());
numberBox.setValue(456);
console.log(numberBox.getValue());
//# sourceMappingURL=ex16.js.map
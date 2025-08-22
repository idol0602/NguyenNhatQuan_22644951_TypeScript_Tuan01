// 16. Create a generic class Box that can store any type of value.

class Box<T> {
  private value: T;

  constructor(value: T) {
    this.value = value;
  }

  getValue(): T {
    return this.value;
  }

  setValue(newValue: T): void {
    this.value = newValue;
  }
}

const numberBox = new Box<number>(123);
console.log(numberBox.getValue());

const stringBox = new Box<string>("Hello");
console.log(stringBox.getValue());

const booleanBox = new Box<boolean>(true);
console.log(booleanBox.getValue());

numberBox.setValue(456);
console.log(numberBox.getValue());

// 1. Create a class Person with attributes name and age. Write a method to display this information.
export class Person {
    name : string;
    age : number;

    constructor (name : string, age : number) {
        this.name = name;
        this.age = age;
    }

    display() : void {
        console.log(`name: ${this.name} age: ${this.age}`)
    }
}

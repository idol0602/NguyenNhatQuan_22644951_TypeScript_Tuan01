// 4. Create a class Rectangle with width and height. Write a method to calculate area and perimeter.
export class Rectangle {
    width : number;
    height : number;

    constructor(width : number, height : number) {
        this.width = width;
        this.height = height;
    }

    area() : number {
        return this.height * this.width;
    }

    perimeter() : number {
        return (this.height + this.width) * 2;
    }
}

let r: Rectangle = new Rectangle(10,20);
console.log(r.area())
console.log(r.perimeter())
// 4. Create a class Rectangle with width and height. Write a method to calculate area and perimeter.
export class Rectangle {
    width;
    height;
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    area() {
        return this.height * this.width;
    }
    perimeter() {
        return (this.height + this.width) * 2;
    }
}
let r = new Rectangle(10, 20);
console.log(r.area());
console.log(r.perimeter());
//# sourceMappingURL=ex4.js.map
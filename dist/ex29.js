"use strict";
// 29. Create an interface Movable with method move(). Implement it in Car and Robot.
class Car1 {
    move() {
        console.log("Car is moving");
    }
}
class Robot {
    move() {
        console.log("Robot is moving");
    }
}
const car1 = new Car1();
car1.move();
const robot = new Robot();
robot.move();
//# sourceMappingURL=ex29.js.map
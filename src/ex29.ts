// 29. Create an interface Movable with method move(). Implement it in Car and Robot.

interface Movable {
  move(): void;
}

class Car1 implements Movable {
  move(): void {
    console.log("Car is moving");
  }
}

class Robot implements Movable {
  move(): void {
    console.log("Robot is moving");
  }
}

const car1 = new Car1();
car1.move();

const robot = new Robot();
robot.move();

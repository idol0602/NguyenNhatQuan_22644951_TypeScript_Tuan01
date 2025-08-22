// 24. Create an abstract class Appliance with method turnOn(). Implement Fan and AirConditioner.

abstract class Appliance {
  abstract turnOn(): void;
}

class Fan extends Appliance {
  turnOn(): void {
    console.log("Fan is now on");
  }
}

class AirConditioner extends Appliance {
  turnOn(): void {
    console.log("AirConditioner is now on");
  }
}

const fan = new Fan();
fan.turnOn();

const ac = new AirConditioner();
ac.turnOn();

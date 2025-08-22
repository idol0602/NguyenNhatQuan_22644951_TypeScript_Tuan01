"use strict";
// 24. Create an abstract class Appliance with method turnOn(). Implement Fan and AirConditioner.
class Appliance {
}
class Fan extends Appliance {
    turnOn() {
        console.log("Fan is now on");
    }
}
class AirConditioner extends Appliance {
    turnOn() {
        console.log("AirConditioner is now on");
    }
}
const fan = new Fan();
fan.turnOn();
const ac = new AirConditioner();
ac.turnOn();
//# sourceMappingURL=ex24.js.map
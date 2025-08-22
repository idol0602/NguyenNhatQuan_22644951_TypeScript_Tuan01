declare abstract class Appliance {
    abstract turnOn(): void;
}
declare class Fan extends Appliance {
    turnOn(): void;
}
declare class AirConditioner extends Appliance {
    turnOn(): void;
}
declare const fan: Fan;
declare const ac: AirConditioner;
//# sourceMappingURL=ex24.d.ts.map
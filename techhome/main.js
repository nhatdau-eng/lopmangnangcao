class SmartLight {
    constructor(id) {
        this.id = id;
        this.isOn = false;
    }
    turnOn() {
        this.isOn = true;
        console.log(`Đèn ${this.id} đã bật`);
    }
    turnOff() {
        this.isOn = false;
        console.log(`Đèn ${this.id} đã tắt`);
    }
}
class MotionSensor {
    constructor(id) {
        this.id = id;
        this.linkedDevice = null;
    }
    connectDevice(target) {
        this.linkedDevice = target;
        console.log(
            ` Sensor ${this.id} đã kết nối với ${target.id}`);
    }
    trigger() {
        console.log(`Sensor ${this.id} phát hiện chuyển động`);
        if (this.linkedDevice) {
            this.linkedDevice.turnOn();
        } else {
            console.log("Chưa có thiết bị nào được kết nối");
        }
    }
}
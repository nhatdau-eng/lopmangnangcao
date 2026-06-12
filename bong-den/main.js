class ElectricLamp {
    #status;

    constructor() {
        this.#status = false; 
    }
    turnOn() {
        this.#status = true;
    }
    turnOff() {
        this.#status = false;
    }
    getStatus() {
        return this.#status;
    }
    displayStatus() {
        if (this.#status) {
            console.log("Bóng đèn đang BẬT");
        } else {
            console.log("Bóng đèn đang TẮT");
        }
    }
}

class SwitchButton {
    #status;
    #lamp;

    constructor() {
        this.#status = false;
        this.#lamp = null;
    }

    connectToLamp(lamp) {
        this.#lamp = lamp;
    }

    switchOn() {
        this.#status = true;
        this.#lamp.turnOn();
    }

    switchOff() {
        this.#status = false;
        this.#lamp.turnOff();
    }
}
let lamp = new ElectricLamp();
let button = new SwitchButton();
button.connectToLamp(lamp);
for (let i = 1; i <= 10; i++) {
    if (i % 2 !== 0) {
        button.switchOn();
    } else {
        button.switchOff();
    }

    console.log(`Lần ${i}:`);
    lamp.displayStatus();
}
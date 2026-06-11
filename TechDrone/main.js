class SecureDrone {
    #altitude;
    #battery;
    constructor(id) {
        this.id = id;
        this.#altitude = 0;
        this.#battery = 100;
    }
    #validateMove(meters) {
        if (!Number.isFinite(meters)) {
            console.log("Độ cao phải là một số hợp lệ!");
            return false;
        }

        if (meters <= 0) {
            console.log("Số mét phải lớn hơn 0!");
            return false;
        }

        if (this.#battery <= 0) {
            console.log("Hết pin!");
            return false;
        }

        return true;
    }

    flyUp(meters) {
        if (!this.#validateMove(meters)) return;

        if (this.#altitude + meters > 120) {
            console.log("Không thể bay quá 120m!");
            return;
        }

        this.#altitude += meters;
        this.#battery--;

        console.log(`Drone bay lên ${meters}m`);
    }

    flyDown(meters) {
        if (!this.#validateMove(meters)) return;

        if (this.#altitude - meters < 0) {
            console.log("Không thể xuống dưới mặt đất!");
            return;
        }

        this.#altitude -= meters;
        this.#battery--;

        console.log(`Drone bay xuống ${meters}m`);
    }
    charge() {
        this.#battery = 100;
        console.log("Drone đã được sạc đầy pin.");
    }

    getStatus() {
        return {
            altitude: this.#altitude,
            battery: this.#battery
        };
    }

    getAltitude() {
        return this.#altitude;
    }

    getBattery() {
        return this.#battery;
    }
}
const drone = new SecureDrone("DRN-99");
drone.flyUp(50);
console.log(drone.getStatus());
drone.flyDown(20);
console.log(drone.getStatus());

drone.flyUp(200);          
drone.flyUp("mười mét");   
drone.flyUp(-10);        
drone.flyUp(0);          
drone.flyUp(NaN);          
drone.flyUp(Infinity);     
console.log(drone.getStatus());
drone.charge();
console.log(drone.getStatus());
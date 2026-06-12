class Rat {
    #alive;
    constructor(name, weight, speed) {
        this.name = name;
        this.weight = weight;
        this.speed = speed;
        this.#alive = true;
    }
    squeak() {
        console.log("Chít chít");
    }
    isAlive() {
        return this.#alive;
    }
    die() {
        this.#alive = false;
    }
    getWeight() {
        return this.weight;
    }
    getSpeed() { return this.speed;
    }
}

class Cat {
    constructor(name, weight, maxSpeed) {
        this.name = name;
        this.weight = weight;
        this.maxSpeed = maxSpeed;
    }

    meow() {
        console.log("Meo meo");
    }

    catchRat(rat) {
        if (this.maxSpeed > rat.getSpeed()) {
            console.log(`${this.name} đã bắt được ${rat.name}`);
            return true;
        } else {
            console.log(`${this.name} không bắt được ${rat.name}`);
            return false;
        }
    }

    eatRat(rat) {
        if (rat.isAlive()) {
            this.weight += rat.getWeight();
            rat.die();
            console.log(`${this.name} đã ăn ${rat.name}`);
        } else {
            console.log(`${rat.name} đã chết, không thể ăn`);
        }
    }

    getWeight() {
        return this.weight;
    }
}
let rat = new Rat("Jerry", 2, 10);
let cat = new Cat("Tom", 5, 15);

rat.squeak();
cat.meow();

if (cat.catchRat(rat)) {
    cat.eatRat(rat);
}
console.log("Cân nặng mèo:", cat.getWeight());
console.log("Chuột còn sống:", rat.isAlive());
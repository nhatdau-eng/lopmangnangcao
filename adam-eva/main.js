class Apple {
    #weight
    constructor(){
        this.#weight = 10;
    }
    decrease(){
        if (!this.isEmpty()){
            this.#weight--;
        }
    }
    isEmpty(){
        return this.#weight<=0;
    }
    getWeight(){
        return this.#weight;
    }
}
class Human{
  constructor(name , gender,weight){
    this.name = name ;
    this.gender =gender;
    this.weight = weight ;
  }
  say(words){
    console.log(`${this.name} nói:"${words}"`);
  }
  eat(apple){
    if(!apple.isEmpty()){
        apple.decrease();
        this.weight++ ;
        console.log(`${this.name} vừa ăn một miếng táo `)
    }else{
        console.log("Táo đã hết!");
    }
  }
checkApple(apple) {
        console.log(`Táo còn: ${apple.getWeight()}`);
    }

    getWeight() {
        return this.weight;
    }

    getName() {
        return this.name;
    }

    getGender() {
        return this.gender;
    }
}

let apple = new Apple();
let adam = new Human("Adam", "Nam", 70);
let eva = new Human("Eva", "Nữ", 50);

// Adam và Eva ăn lần lượt
while (!apple.isEmpty()) {
    adam.eat(apple);
    console.log("Adam:", adam.getWeight());
    adam.checkApple(apple);

    if (apple.isEmpty()) break;

    eva.eat(apple);
    console.log("Eva:", eva.getWeight());
    eva.checkApple(apple);
}
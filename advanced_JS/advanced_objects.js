// reference type

let object1 = { value: 10 };
let object2 = object1;
let object3 = { value: 10 };

// context vs scope
let a = 2;

function b() {
  b = 4;
  console.log("inside function", b);
}

console.log(`${b()}, 'outside' ${a}`);

// instantiation

class Player {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
  introduce(){
    console.log(`Hi im ${this.name}, im a ${this.type}`);
  }
}

class Wizard extends Player {
    constructor(name,type){
        super(name, type)
    }
    play() {
        console.log(`Im a ${this.type}`);
    }
}

const wizard1 = new Wizard('Shelly', 'Healer');
const wizard2 = new Wizard('Thomas', 'Dark Magic');
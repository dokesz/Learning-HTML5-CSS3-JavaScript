//let + const

const player = "bobby";
let experience = 100;
let wizardLevel = false;

if (experience > 90) {
  let wizardLevel = true;
  console.log("inside", wizardLevel);
}

console.log("outside", wizardLevel);

//Destructuring

const obj = {
  player: "Bobby",
  experience: 100,
  wizardLevel: false,
};

/*const player1 = obj.player;
const experience1 = obj.experience;*/
//let wizardLevel1 = obj.wizardLevel;

const { player1, experience1 } = obj;
let { wizardLevel1 } = obj;

//Object properties

const name = "john snow";

const obj1 = {
  [name]: "hello",
  ["ray" + "smith"]: "hihi",
};

const a = "simon";
const b = true;
const c = {};

const obj2 = {
    a,
    b,
    c
}
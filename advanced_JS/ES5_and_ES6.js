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

//template strings

const greeting = 'Hello' + name + ' you semm to be doing' + great + ' ...';

//backtick altgr+7
const greetingBest = `Hello ${a} you seem to be ${b}, and do you have ${experience-16}`;

function greet(Name='', Age=30, pet='cat'){
   return `Hello ${Name} you seem to be ${Age-16}, and you have a ${pet}`;
}
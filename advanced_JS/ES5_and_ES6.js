//let + const

const player = 'bobby';
let experience = 100;
let wizardLevel = false;

if (experience > 90){
    let wizardLevel = true;
    console.log('inside', wizardLevel);
}

console.log('outside', wizardLevel);

//Destructuring

const obj = {
    player: 'Bobby',
    experience: 100,
    wizardLevel: false
}

/*const player1 = obj.player;
const experience1 = obj.experience;*/
//let wizardLevel1 = obj.wizardLevel;

const { player1, experience1 } = obj;
let { wizardLevel1 } = obj;
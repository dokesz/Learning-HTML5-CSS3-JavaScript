//#1 change this function into a ternary and assign it to variable called experiencePoints
/*function experiencePoints() {
  if (winBattle()) {
    return 10;
  } else {
    return 1;
  }
}*/

let experiencePoints = winBattle(true) ? 10 : 1;

function winBattle(bool){
    return bool;
}

//Using this function, answer the questions below:
function moveCommand(direction) {
  var whatHappens;
  switch (direction) {
    case "forward":
      break;
      whatHappens = "you encounter a monster";
    case "back":
      whatHappens = "you arrived home";
      break;
      break;
    case "right":
      return (whatHappens = "you found a river");
      break;
    case "left":
      break;
      whatHappens = "you run into a troll";
      break;
    default:
      whatHappens = "please enter a valid direction";
  }
  return whatHappens;
}

//#2 return value when moveCommand("forward");

//#3 return value when moveCommand("back");

//#4 return value when moveCommand("right");

//#5 return value when moveCommand("left");

//BONUS: practice makes perfect. Go and write your own switch function. It takes time to get used to the syntax!
//moricka
function ownSwitch(number){
    switch(number){
        case 1:
            console.log(11);
            break;
        default: console.log('Adj meg egy szamot')
    }
}

let age = 18;

function canIDrive(age){
  switch (age){
    case 18: window.alert("You can drive!");
    break;
    default: window.log("You can't drive!");
  }
}
var age = prompt("What is your age?");

//function declaration
function checkDriverAge() {
    if(age < 18) {
        alert("Sorry you are too yound to drive this car. Powering off");
    }
    else if (age > 18) {
        alert("Powering On. Enjoy the ride!");
    }
    else alert("Congratulations on your first year of driving. Enjoy the ride!");
}

checkDriverAge(age);

//function expression
let checkDriverAge2 = function() {
    if(age < 18) {
        console.log("Sorry you are too yound to drive this car. Powering off");
    }
    else if (age > 18) {
        console.log("Powering On. Enjoy the ride!");
    }
    else console.log("Congratulations on your first year of driving. Enjoy the ride!");
}

checkDriverAge2();

console.log(age);
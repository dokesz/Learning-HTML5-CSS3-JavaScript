//function declaration
function checkDriverAge() {
    var age = prompt("What is your age?");
    if(age < 18) {
        alert("Sorry you are too yound to drive this car. Powering off");
    }
    else if (age > 18) {
        alert("Powering On. Enjoy the ride!");
    }
    else alert("Congratulations on your first year of driving. Enjoy the ride!");
}

checkDriverAge();

//function expression
let checkDriverAge2 = function() {
    var age = prompt("What is your age?");
    if(age < 18) {
        console.log("Sorry you are too yound to drive this car. Powering off");
    }
    else if (age > 18) {
        console.log("Powering On. Enjoy the ride!");
    }
    else console.log("Congratulations on your first year of driving. Enjoy the ride!");
}

checkDriverAge2();

/*
//bonus
function checkDriverAge(age) {
    if(age < 18) {
        console.log("Sorry you are too yound to drive this car. Powering off");
    } 
    else if (age > 18) {
        console.log("Powering On. Enjoy the ride!");
    } 
    else console.log("Congratulations on your first year of driving. Enjoy the ride!");
}*/
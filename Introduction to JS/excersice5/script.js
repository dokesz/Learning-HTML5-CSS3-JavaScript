var age = prompt("What is your age?");

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

console.log(age);
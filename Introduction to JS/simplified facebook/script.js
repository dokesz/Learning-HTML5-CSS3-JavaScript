var database = [
    {
        username: "andy",
        password: "1234"
    },
    {
        username: "laci",
        password: "secret"
    }
];

var newsFeed = [
    {
        username: "Bob",
        timeline: "So tired of all that learning"
    },
    {
        username: "Susy",
        timeline: "Javascript is cool"
    },
    {
        username: "Lesli",
        timeline: "I'm so motivated"
    }
];

var userNamePrompt = prompt("What is your username?");
var passwordPrompt = prompt("What is your password?");

function isUserValid(username, password) {
    for (let i = 0; i < database.length; i++) {
        if(username === database[i].username && 
            password === database[i].password) {
            return true;
        } 
    }
    return false;
}

function signIn(username, password) {
    if(isUserValid(userNamePrompt, passwordPrompt) === true){
        console.log(newsFeed);
    } else alert("WRONG!!!");
}

signIn(userNamePrompt, passwordPrompt);
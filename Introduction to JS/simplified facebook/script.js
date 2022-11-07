var database = [
    {
        username: "andy",
        password: "1234"
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

function signIn(username, password) {
    if(username === database[0].username && 
        password === database[0].password) {
        console.log(newsFeed);
    } else alert("Sorry, wrong username or password!");
}

signIn(userNamePrompt, passwordPrompt);
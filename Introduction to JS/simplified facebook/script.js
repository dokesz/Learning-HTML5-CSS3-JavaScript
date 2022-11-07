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

function signIn(username, password) {
    for (let index = 0; index < database.length; index++) {
        if(username === database[index].username && 
            password === database[index].password) {
            console.log(newsFeed);
        } else alert("Sorry, wrong username or password!");   
    }
}

signIn(userNamePrompt, passwordPrompt);
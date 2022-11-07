//object
var user = {
    name: "John",
    age: 34,
    hobby: "Soccer",
    isMarried: false,
    //we can use an array inside an object
    spells: ["abrakadabra", "boom", "flash"],
    //we can use functions here too
    shout: function() {
        console.log("AHHHH!");
    }
};

//array --- we can use objects inside arrays
var list = [
    {
        username: "andy",
        password: "secret"
    },
    {
        username: "john",
        password: "1234"
    }
];
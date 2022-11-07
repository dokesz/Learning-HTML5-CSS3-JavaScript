//object
var user = {
    name: "John",
    age: 34,
    hobby: "Soccer",
    isMarried: false,
    //we can use an array inside an object
    spells: ["abrakadabra", "boom", "flash"],
    //we can use functions here too
    //function inside an object is called a "Method"
    //this means shout is a "method" of "user"
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
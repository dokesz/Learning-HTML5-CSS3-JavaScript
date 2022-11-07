var listOfAnimals = ["tiger", "cat" , "bear", "bird"];
console.log(listOfAnimals[1]);

var listNumbers = [1,2,3,4];

//this is not advised, there is a performance issue when you have array with different types
var mixedList = ["apples", 4, undefined, true, function apple(){
    console.log("apples")
}];

//an array in an array
var list = [
    ["tiger", "cat", "bear", "bird"]
];

console.log(list[0][2])
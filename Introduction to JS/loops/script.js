var todos = [
    "cleen room",
    "brush teeth", 
    "exercise",
    "study javascript",
    "eat healthy"
];

/*for (var i=0; i < todos.length; i++){
    var word = todos[i] + "!";
    console.log(word);
}*/

var counterOne = 0;
while(counterOne < todos.length) {
    console.log(todos[counterOne]);
    counterOne ++;
}

var counterOne = todos.length;
while(counterOne >= 0) {
    console.log(todos[counterOne]);
    counterOne --;
}


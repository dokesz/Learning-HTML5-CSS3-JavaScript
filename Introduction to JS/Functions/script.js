function sayHello() {
    console.log("Hello");
}

sayHello();

var sayBye = function() {
    console.log("Bye");
}

sayBye();

function sing(song) {
    console.log(song);
}

sing("laa dee daa");
sing("helloooo");
sing("backstreets back alright");

function multiply(a, b) {
    if(a > 10 || b > 10){
        return "thats too hard";
    } 
    else return a * b;
}

alert(multiply(5,10));
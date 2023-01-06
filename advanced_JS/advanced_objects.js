// reference type

let object1 = { value: 10 };
let object2 = object1;
let object3 = { value: 10 };

// context vs scope 
let a = 2;

function b(){
    b = 4;
    console.log('inside function', b);
}

console.log(`${b()}, 'outside' ${a}`);
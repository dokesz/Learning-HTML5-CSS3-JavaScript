// pass by value
let a = 5;
let b = a;

b++;

console.log(a);
console.log(b);

//pass by reference

let obj1 = { name: "suzy", password: "123" };
let obj2 = obj1;

// it change the password for obj1 too, because its reference to obj1 memory address
obj2.password = "easypeasy";

console.log(obj1);
console.log(obj2);

// arrays are objects too
let c = [1, 2, 3, 4, 5];
//concat creates a new array, it copies c values and pushes new value
let d = [].concat(c);
d.push(123123213);
console.log(c);

//object.assign()

let obj = {
  a: "a",
  b: "b",
  c: /*"c" ,*/ {
    deep: "try and copy me",
  },
};
let clone = Object.assign({}, obj);
let clone2 = { ...obj };
let superClone = JSON.parse(JSON.stringify(obj));

obj.c.deep = 'hahaha';
console.log(obj);
console.log(clone);
console.log(clone2);
console.log(superClone);

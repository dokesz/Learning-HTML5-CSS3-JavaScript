const multiply = (a,b) => a+b;

const carriedSum = (a) => (b) => a+b;
//to use carreidMultiply, use chrome developer option and write carreidMultiply(number)(number)

const sumBy5 = carriedSum(5);

//compose
const compose = (f,g) => (a) => f(g(a));

const sum = (num) => num + 1;

compose(sum,sum)(5);
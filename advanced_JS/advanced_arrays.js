//advanced arrays

var array = [1, 2, 10, 16];

const double = [];
const newArray = array.forEach((num) => {
  double.push(num * 2);
});

console.log("forEach", double);

// map, filter, reduce
//if we hava single parameter like here (num), we can avoid brackets and because we are returning single line here we can do shorthand
const mapArray = array.map(num => num * 2);

console.log("map", mapArray);

// filter

const filterArray = array.filter(num => {
    return num > 5
});

console.log('filter', filterArray);

// reduce

const reduceArray = array.reduce((accumulator, num) => {
    return accumulator + num;
}, 0);

console.log('reduce', reduceArray);

const array = [1,2,3,4,5];
array.flat();

// if we have nested arrays we can also use .flat() which create a new array without nested arrays
const array2 = [1,[2,3],[4,5]];
array2.flat();

const array3 = [1,2,[3,4,[5]]];
// i can tell the method how many layers i want to fly in the array (default is 1, but its not working here)
array3.flat(2);
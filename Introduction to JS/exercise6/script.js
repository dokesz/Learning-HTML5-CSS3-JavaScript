var array = ["banana", "apples", "oranges", "blueberries"];
console.log(array);

// 1. Remove the Banana from the array.
array.shift();
console.log(array);

// 2. Sort the array in order.
array.sort();
console.log(array);

// 3. Put "Kiwi" at the end of the array.
// first solution 
array.push("kiwi");
console.log(array);
/*
// second solution
var newArray = array.concat(["kiwi"]);
console.log(newArray);
*/

// 4. Remove "Apples" from the array.
// first solution
array.shift();
console.log(array);

/*
// second solution
newArray.shift();
console.log(newArray);
*/

// 5. Sort the array in reverse order. (Not alphabetical, but reverse
// the current Array i.e. ['a', 'c', 'b'] becomes ['b', 'c', 'a'])
array.reverse();
console.log(array);

// Bonus
// using this array,
// var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
// access "Oranges".
var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
console.log(array2);
console.log(array2[1][1][0])
const array = [1,2,3,4,5];
array.flat();

// if we have nested arrays we can also use .flat() which create a new array without nested arrays
const array2 = [1,[2,3],[4,5]];
array2.flat();

const array3 = [1,2,[3,4,[5]]];
// i can tell the method how many layers i want to fly in the array (default is 1, but its not working here)
array3.flat(2);

// .trimStart(), .trimEnd()
const userEmail = "        eddytheeagle@gmail.com";
const userEmail2 = 'jonnysmt@gmail.com     ';

console.log(userEmail.trimStart());
console.log(userEmail2.trimEnd()); 

// fromEntries

userProfiles = [['commanderTom', 23], ['derekZlander', 40], ['hansel', 18]];

const obj = Object.fromEntries(userProfiles);
Object.entries(obj);

//trycatch

try {
    true + 'hi';
} catch {
    console.log('you messed up');
}
//'truehi'

try {
    bob + 'hi'
} catch (error) {
    console.log('you messed up' + error);
}
// 'you messed up'
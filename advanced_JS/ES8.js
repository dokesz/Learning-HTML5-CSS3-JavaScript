// padStart(), padEnd()

'Turtle'.padStart(10);
'Turtle'.padEnd(10);

// object.values, object.entries, object.keys

let obj = {
    username0: 'Mami',
    username1: 'Papi',
    username2: 'Peti'
}

Object.keys(obj).forEach((key, index) => {
    console.log(key, obj[key]);
})

Object.values(obj).forEach(value => {
    console.log(value, obj[value]);
})

Object.entries(obj).forEach(entrie => {
    console.log(entrie);
})
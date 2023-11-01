const person1 = 'Adam Sandler';
const person2 = "Ben White"
const person3 = `Donal Trump`;
//---------------------
const multiLine = 'First line of code \n' +
    'Second Line of code \n' +
    'Third line of code '
console.log(multiLine)
//---------------------
const newMultiLine = `First line of code
Second line of Code
Third line of code
`
console.log(newMultiLine)

//---------------------
const a = 23;
const b = 21;
//---------------------
const total = 'sum of : ' + a + ' and ' + b + ' is: ' + (a + b);
console.log(total)
//---------------------
const newTotal = `sum of : ${a} and ${b} is: ${a + b}`
console.log(newTotal)
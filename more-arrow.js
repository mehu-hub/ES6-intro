const add = (first, last) => first + last;
const getFullName = (first, last) => first + ' ' + last;
const multify = (a, b) => a * b;

const result = multify(10, 25);
console.log(result)

//-----------------------------------------

// Multi line arrow function
const doMath = (x, y, z) => {
    const firstSum = x + y;
    const secondSum = y + z;
    const multifyResult = firstSum * secondSum;
    const result = multifyResult / 2;
    return result;
}
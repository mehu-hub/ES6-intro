// Function Delaration
function add(first, second){
    const total = first + second;
    return total;
}
//--------------------------------------------
// Function expression
const add1 = function add1(first, second){
    const total = first + second;
    return total
}
//--------------------------------------------
// Arrow Function
const add2 = (first, second) => first + second;
//--------------------------------------------
const result = add(10, 20);
console.log(result)
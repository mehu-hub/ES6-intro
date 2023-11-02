const fish = {
    name: 'Hilsa',
    address: 'Chadpur',
    color: 'Golden',
    price: 4000
}

// const price = fish.price
// const color = fish.color
// const address = fish.address

// Object Distructuring
const {name, address, color, price} = fish;
console.log(name)
console.log(price)
console.log(color)
console.log(address)

// Array Distructureing 
const [num1, no2] = [44, 45, 560];
console.log('Array output:', num1, no2)

const nayoks = ['Sakib', 'Rakib', 'Bappa', 'Niso'];

const [king75, porimonirJamai, Chekakhor, AttitudeKing] = nayoks;
console.log(AttitudeKing)
//------------------------

function getNames(){
    return ['Mehedi', 'Hasan']
}

const [firstName, secondName] = getNames();
console.log(secondName, firstName)
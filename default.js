function add(first, second = 0) {
    const total = first + second;
    return total
}

const result = add(10)
// console.log(result)

function input(first, last = 'Hasan'){
    const name = first + ' ' + last;
    return name;
}

const name = input('Mehedi', 'Chowdury')
// console.log(name)
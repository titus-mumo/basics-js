hello() // A regular function can be hoisted -  called before it is declared
//regular function
function hello(){
    console.log("Hello world")
}
hello();

//arrow function
const addNumbers = (num1, num2) => {
    return eval(num1 + num2)
}

let result1 = addNumbers(2, 3)
let result2 = addNumbers(4, 3)
console.log(result1)
console.log(result2)


// variable function
let greet = function(){
    console.log("Greetings")
}

//Arguments and paramenters

function getName(name, num1, num2){
    console.log(`Your name is ${name}`)
    console.log(num1 + num2)
}

getName('Jimmy', 5, 6);

//callback functions => Passing a function as an argument
const Calculator = (num1, num2, add, mul) =>{
    let resultAdd = add(num1, num2)
    let resultMul = mul(num1, num2)
    let result = `Add: ${resultAdd}, Mul: ${resultMul}`
    return result 
} 

const add = (num1, num2) => {
    return num1+ num2
}

const multiply = (num1, num2) => {
    return num1 * num2
}

console.log(Calculator(2, 3, add, multiply))

//for each method

let products = ['bread', 'butter', 'jam', 'bottle']

// let callback = (item) => console.log(`The product is ${item}`)

// products.forEach(callback)

products.forEach((product, index) => console.log(product, index))
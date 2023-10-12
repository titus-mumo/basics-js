//true and false

let value = [true, false, 'true', 'false'] //the last two items in the array are strings
console.log(value)

items = ['two', 'three', '', 'k']
boolean_array = []

for (i = 0; i < items.length; i++){
    if (items[i].length > 0){
        boolean_array.push(true)
    }else{
        boolean_array.push(false)
    }
}

console.log(boolean_array)

console.log(typeof boolean_array)

let name = 'Titus'
console.log(name.includes('us'))

// loose comparison => doesn't compare the type of variables being compared 
console.log('loose comparison') 
console.log(25 == '25')
// strict comparison => comapres even the type of the variables being comapred
console.log('strict comaprison')
console.log( 25 === '25')

// type conversion

let random = 25
let age = '25'
console.log(typeof random)
console.log(typeof random.toString()) // or String(random)
console.log(typeof Number(age))
console.log(Boolean(-1))

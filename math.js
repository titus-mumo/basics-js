//The math method is an in-built method
num = -2
console.log(Math.sign(num))
console.log(Math.random()* 100)

//premitive vs reference type
//premitime => big copy
let numOne = 5
let numTwo = numOne
numOne = 10

console.log(numOne)
console.log(numTwo)

//objects are depended on the same memory block => reference type

objOne = {title: 'One', rank:2}
objTwo = objOne
objOne.rank = 3
objTwo.rank = 10
console.log(objOne)
console.log(objTwo)

//To avoid reference type complications, use the spread operator
objThree = {...objOne, name:"idk"}
console.log(objThree)
objOne.rank = 1000
console.log(objOne)
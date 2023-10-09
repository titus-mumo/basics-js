const myName = "Titus";
let surName = "Mumo";
console.log(myName);

// concantenation
const fullName = myName + ' ' + surName
console.log(fullName)

//accessing characters in a string
const firstChar = myName.charAt(2)
console.log(firstChar)
console.log(myName[2])
//length
console.log(surName.length)
//methods
console.log(myName.toLowerCase())
//indexof
console.log(myName.indexOf('t'))
console.log(myName.lastIndexOf("s"))
//replace, replaceAll
console.log(myName.toLowerCase().replaceAll('t', 'h'))

//selecting a substring   .slice(2, 6)
console.log(myName.substring(0, 2))


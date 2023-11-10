const { setMaxIdleHTTPParsers } = require("http")

console.log('oop')
//pillars of oop =>encapsulation, inheritance, abstraction, polymorphism
const userOne = {
    userName: "Titus",
    fullName: "Titus Mumo",
    email: "titokay@gmail.com",
    age:25,
    login(){
        return `The user is logged out ${this.age}`
    },
    logout(){
        return "The user is logged out"
    }
}

console.log(userOne.login())
console.log(userOne.logout())

class Student{
    constructor(name, age){
        this.name = name
        this.age = age
    }
    displayInfo(){
        console.log(`${this.name} is ${this.age} years old`)
    }
}

//inheritance
class Teacher extends Student{
    constructor(name, age, semester, units){
        super(name, age)
        this.semester = semester
        this.units = units
    }
    updateUnits(newUnit){
        this.units = newUnit
    }
}

const teacher = new Teacher('jimmy', 20, 2.1, 3)
teacher.displayInfo()
console.log(teacher.units)
teacher.updateUnits(4)
console.log(teacher.units)






class User {
    constructor(name, age){
        this.name = name;
        this.age = age;
        this.active = false
    }
    login(){
        console.log(`${this.name} is logged in`)
        this.active = true
        return this
    }
    display(){
        if(this.active){
            console.log(`Username: ${this.name}, Age: ${this.age}`)
        } else{
            console.log('Please log in')
        }
    }
}

const Titus = new User('Titus', 20)

const Jimmy = new User('Jimmy', 15)

console.log(Titus)
Titus.login();
Jimmy.login().display()

//Inheritance

//one parent can have many children but a child can't have multiple parents
//a parent can pass its properties to the child but a child can pass its properties to the parents
class Student extends User{
    constructor(name, age, semester, rank){
        //name and age belong to the parent class
        super(name, age)
        this.semester = semester;
        this.rank = rank;
    }
    updateRank(newRank){
        this.rank = newRank;
        console.log(this.rank)
    }

    //we can overwrite methods
    display(){
        if(this.active){
            console.log(`Username: ${this.name}, Age: ${this.age}. semester: ${this.semester}, rank: `)
        } else{
            console.log('Please log in')
        }
    }
}

const studentOne = new Student('John', 16, 5, 10)
studentOne.login().display()
console.log(studentOne.rank)
studentOne.updateRank(5)


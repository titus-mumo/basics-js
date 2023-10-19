const user = {
    name:'Titus', 
    age:20,
    isLoggedIn: false,
    login(){
      return this.isLoggedIn  
    },
}

console.log(user.login())

//this keyword is used to refer to the object in which it is called
//If it si called in the browser, it will refer to the window as the object
//If it is called inside an object, e.g., user, the user will be the object


//Objects in arrays

let users = [{name:'tito'}, {name:'jim'}, {name:'vic'}]
users.forEach((object) => console.log(object.name))
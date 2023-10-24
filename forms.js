let form =document.querySelector('.identity-form')
let nameField = document.querySelector('#name')
let ageField = document.querySelector('#age')
let formMessage = document.querySelector('#form-message')
const usernamePattern = /^[a-zA-Z]{2,20}$/
const agePattern = /^[0-9]{1,3}$/
const handleSubmit = (event) => {
    event.preventDefault()
    let age_valid = true
    const age = form.age.value
    const nameResult = usernamePattern.test(form.name.value)
    const ageResult = agePattern.test(age)
    if(age.length === 3 && parseInt(age) > 120){
        age_valid = false
    }
    if (nameResult && ageResult && age_valid){
        console.log("The form is valid")
        formMessage.setAttribute('class', 'success')
        formMessage.innerHTML = 'Form is valid'
    } else{
        console.log("The form is not valid")
        formMessage.setAttribute('class', 'error')
        formMessage.innerHTML = "Ooops! An error occured"
    }
};

//regular expression => regex
// /^[0-9]{6,10}$
//allow any input => ^.{6,10}$
//veryfying email => /^[a-zA-Z0-9]{5, 10}@[a-zA-Z0-9]{3,10}.com$


form.name.addEventListener("keyup", function(event){
    const result = usernamePattern.test(event.target.value)
    if(result){
        nameField.setAttribute('class', 'accepted')
    } else {
        nameField.setAttribute('class', 'rejected')
    }
})

form.name.addEventListener("keyup", function(event){
    const result = usernamePattern.test(event.target.value)
    if(result){
        form.name.setAttribute('class', 'accepted')
    } else {
        form.name.setAttribute('class', 'rejected')
    }
})

form.age.addEventListener("keyup", function(event){
    let result = agePattern.test(event.target.value)
    if(result){
        form.age.setAttribute('class', 'accepted')
    } else {
        form.age.setAttribute('class', 'rejected')
    }
})

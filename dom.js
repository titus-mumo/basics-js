console.log("Document Object Model")
let pArray = document.querySelectorAll('p');
let body = document.querySelector('body')


const changeName = () => {
    let name = document.getElementById('name')
    if(name.innerHTML === 'Titus'){
        name.innerHTML = 'Jimmy'
    }else{
        name.innerHTML = "Titus"
    }
}

let selectorClass = document.getElementsByClassName('random')
console.log(selectorClass[0].innerHTML)
selectorClass[0].innerHTML = 'Hello'
console.log(selectorClass[0].innerHTML)

let button = document.getElementById('button')
button.addEventListener('click', function(){
    button.innerHTML = 'Clicked'
    button.setAttribute('style', 'color:red')
    body.classList.toggle('dark')
})

let style = button.style
console.log(typeof style)


// relationship between child and parent

let list = document.querySelector('ul')
const childrenArray = Array.from(list.children)
childrenArray.forEach(child => console.log(child.innerHTML))

console.log(list.parentElement.parentElement.children)

//sibling => next and previous
console.log(list.previousElementSibling)
console.log(list.nextElementSibling)

const addButton = document.getElementById('add')
const count = document.getElementById('count')
const subButton = document.getElementById('sub')
addButton.addEventListener('click', function(){
    value = parseInt(count.innerText)
    value++
    count.innerText = value
})

subButton.addEventListener('click', function(){
    value = parseInt(count.innerText)
    value--
    count.innerText = value
})

reset = document.getElementById('reset')
reset.addEventListener('click', function(){
    count.innerHTML = 0
})

// list.addEventListener('click', (event) => {
//     if(event.target.tagName === 'LI'){
//         event.target.remove()
//     }
// })

addSubjectButton = document.getElementById('add-product')
addSubjectButton.addEventListener('click', () =>{
    subject = prompt("Enter a new subject")
    //console.log(subject.length)
    console.log(subject)
    if ((typeof subject === 'string' && subject.length !== 0) && (typeof subject !== 'object')){
        const newLi = document.createElement('li')
        newLi.innerHTML = subject
        newLi.style.color = 'blue'
        //list.prepend(newLi)
        list.append(newLi)
    }
})

list.addEventListener('copy', function(){
    alert('we noticed you copied')
})

let input = document.querySelector('#input')
input.addEventListener('paste', () => {
    alert("We don't encourage pasting on this website")
})


//no case -//d2brenkan@yahoo.co.uk 

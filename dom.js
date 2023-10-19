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


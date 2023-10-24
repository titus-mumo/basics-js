let searchForm = document.querySelector('#search-form') 
let addTask = document.querySelector('#add-task')
let test = document.querySelector('#task-list')
let message = document.querySelector('#message')
let taskArray = ['Clean house', 'Do assignments', 'Stay Hydrated']
let arrayLength = taskArray.length



const mapIt = (taskArray) => {
    arrayLength = taskArray.length
    taskArray.map(task => {
        let id = taskArray.indexOf(task)
        let context = `<p id=${id}><span id=${id}>${task}</span><span id=${id} onclick="handleDelete(event)" class="material-symbols-outlined">
    delete
    </span></p>`
        test.innerHTML = test.innerHTML + context
        message.innerHTML = `${arrayLength} task(s) pending`
    })
}

const apply = (event) => {
    if(event){
        event.preventDefault()
    }
    const children = test.children
    for(let i =0; i< children.length; i++){
        children[i].setAttribute('class', 'task')
        const span = children[i].children
        span[1].setAttribute('class', span[1].className + ' delete')
    }
}

const search = (taskArray) => {
    taskArray.map(task => {
        let id = taskArray.indexOf(task)
        let context = `<p id=${id} ><span id=${id}>${task}</span><span id=${id} onclick="handleDelete(event)" class="material-symbols-outlined">
    delete
    </span></p>`
        
        test.innerHTML = test.innerHTML + context
    })
}


window.load = mapIt(taskArray)
window.load = apply()

const handleSearch = (event) => {
    event.preventDefault()
    if(test.innerHTML !== 'No task'){
        let searchTerm = searchForm.search.value.toLowerCase()
        let filteredArray = taskArray.filter(task => task.toLowerCase().startsWith(searchTerm))
        console.log(filteredArray)
        test.innerHTML = ''
        search(filteredArray)
        apply()
    }
}

const handleSubmit = (event) => {
    event.preventDefault()
    if(addTask.task.value.length > 0){
        taskArray.push(addTask.task.value)
        addTask.task.value = ''
        console.log(taskArray)
        arrayLength = taskArray.length
        test.innerHTML = ''
        mapIt(taskArray, arrayLength)
        apply()
    }
}
const handleDelete = (event) => {
    let id = event.target.id
    task = taskArray[id]
    taskArray.splice(id, 1);
    arrayLength = taskArray.length
    console.log(taskArray)
    if(arrayLength > 0){
        test.innerHTML = ''
        mapIt(taskArray)
    } else{
        test.innerHTML = 'No task'
    }
    
    message.innerHTML = `${arrayLength} task(s) pending`
    apply(event)
}

const handleDeleteAll = (event) => {
    event.preventDefault()
    test.innerHTML = 'No task'
    taskArray = []
    mapIt(taskArray)
    message.innerHTML = '0 task(s) pending'
    apply(event)
}
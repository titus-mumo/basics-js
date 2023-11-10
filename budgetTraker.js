const form = document.querySelector('.input-form')
const sourceElement = document.querySelector('#source')
const amountElement = document.querySelector('#amount')
const incomeDiv = document.querySelector('.income-div')
const expenseDiv = document.querySelector('.expense-div')
const balanceSpan = document.querySelector('#balance')
const incomeSpan = document.querySelector('#income-total')
const expenseSpan = document.querySelector('#expense-total')

const handleSubmit = (e) => {
    e.preventDefault()
    const source = form.source.value
    const amount = parseInt(form.amount.value)
    const transaction = {source: source, amount: amount}
    sourceElement.value = ''
    amountElement.value = ''
    if(transaction.amount > 0){
        let income = JSON.parse(localStorage.getItem('income'))
        if(income){
            income.push(transaction)
        }else{
            income = [transaction]
        }
        localStorage.setItem('income', JSON.stringify(income))
        const incomeArray = JSON.parse(localStorage.getItem('income'))
        handleUpdate(incomeDiv, incomeArray)
    }else{
        let expense = JSON.parse(localStorage.getItem('expense'))
        if(expense){
            expense.push(transaction)
        }else{
            expense = [transaction]
        }
        localStorage.setItem('expense', JSON.stringify(expense))
        const expenseArray = JSON.parse(localStorage.getItem('expense'))
        handleUpdate(expenseDiv, expenseArray)
    }
    handleStatistics(JSON.parse(localStorage.getItem('income')), JSON.parse(localStorage.getItem('expense')))
}

const handleUpdate = (div, transactions) => {
    div.innerHTML = ''
    if(div === incomeDiv){
        for(let transaction of transactions){
            let id = transactions.indexOf(transaction)
            div.innerHTML = div.innerHTML + `<p id=${id} class='item'><span>${transaction.source}: $ ${transaction.amount} </span><span id=income-${id} class="material-symbols-outlined delete" onclick='handleDelete(event)'>
delete
</span></p>`
        }
    }else if (div === expenseDiv){
        for(let transaction of transactions){
            let id = transactions.indexOf(transaction)
            div.innerHTML = div.innerHTML + `<p id=${id} class='item'><span>${transaction.source}: $ ${transaction.amount * -1} </span><span id=expense-${id} class="material-symbols-outlined delete" onclick='handleDelete(event)'>
delete
</span></p>`
        }
    }
}

const handleStatistics = (incomeArray = [], expenseArray = []) => {
    let incomeTotal = 0
    let expenseTotal = 0
    for(let income of incomeArray){
        incomeTotal += income.amount
    }
    for(let expense of expenseArray){
        expenseTotal += expense.amount
    }
    let balance = incomeTotal + expenseTotal
    balanceSpan.innerText = balance
    expenseSpan.innerText = expenseTotal * -1
    incomeSpan.innerText = incomeTotal
}

window.load = handleUpdate(incomeDiv, JSON.parse(localStorage.getItem('income')))
window.load = handleUpdate(expenseDiv, JSON.parse(localStorage.getItem('expense')))
window.load = handleStatistics(JSON.parse(localStorage.getItem('income')), JSON.parse(localStorage.getItem('expense')))

const handleDelete = (e) => {
    e.preventDefault()
    let indexToDelete = e.target.id.charAt(e.target.id.length - 1)
    if(e.target.id.startsWith('income')){
        let incomeArray = JSON.parse(localStorage.getItem('income'))
        incomeArray.splice(indexToDelete, 1)
        localStorage.setItem('income', JSON.stringify(incomeArray))
        handleUpdate(incomeDiv, JSON.parse(localStorage.getItem('income'))) 
    }else if(e.target.id.startsWith('expense')){
        let expenseArray = JSON.parse(localStorage.getItem('expense'))
        expenseArray.splice(indexToDelete, 1)
        localStorage.setItem('expense', JSON.stringify(expenseArray))
        handleUpdate(expenseDiv, JSON.parse(localStorage.getItem('expense'))) 
    }
    handleStatistics(JSON.parse(localStorage.getItem('income')), JSON.parse(localStorage.getItem('expense')))
}


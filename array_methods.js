const ratings = [5, 10, 9, 7, 2, 3, 8, 10]

console.log(ratings)
//filter
const filteredRatings = ratings.filter(rate => rate === 10)
console.log(filteredRatings)

const evenratings = ratings.filter(rate => rate % 2 === 0)
console.log(evenratings)

const oddratings = ratings.filter(rate => rate % 2 !== 0)
console.log(oddratings)

const movies = [
    {name:"Coffee Day", rating:9},
    {name:"The Lost Coder", rating:7},
    {name:"Typical Bug", rating:4}
]

const filteredMovies = movies.filter(movie => movie.rating > 8 && movie.name.endsWith('ay'))
console.log(filteredMovies)

//map
const mapMovies = movies.map(movie => {
    let movie_item = {rating: movie.rating + 2, name: movie.name}
    return movie_item
})

console.log(mapMovies)

//reduce

const reduceRating = movies.reduce((total, current) => {
    total = total + current.rating
    return total
}, 10)

console.log(reduceRating)


const students = [
    {name:'Titus', marks:9},
    {name:'Jimmy', marks:12},
    {name:'Victor', marks: 15},
    {name:'Titus', marks:10},
    {name:'Jimmy', marks:11},
    {name:'Victor', marks: 13},
]

//reduce and find
const reduce_students = students.reduce((array, current) => {
    let element;
    if(array){
        element = array.find(item => item.name === current.name)
    }
    if(element){
        element.marks = element.marks + current.marks
    }else{
        array.push(current)
    }
    return array
}, [])

console.log(reduce_students)
//find
const numbers = [16, 17, 2, 13, 15, 11]

const number = numbers.find(num => num === 6 || num === 1)

//sort and compare
console.log(number)
numbers.sort((a,b) => a-b)
console.log(numbers)

students.sort((a, b) => a.marks - b.marks)
console.log(students)

//reverse

numbers.reverse()
console.log(numbers)

students.reverse()
console.log(students)

//chaining

const filteredNumbers = numbers.filter(num => num < 14).sort().reverse().reduce((total, current) => {return total = total+ current}, 0)
console.log(filteredNumbers)

const task = []
console.log(task.length)
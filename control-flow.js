let students = ['jimmy', 'alex', 'mark', 'deepak']
// for loop

for(let i = 0; i < students.length; i++){
    console.log(students[i])
}

//in & off

for(let student of students){//we have access to the value, access empty value
    console.log(student)
}

for (let index in students){//with in, we have access to index/key, skips empty value
    console.log(students[index])
}

let count = 0
while(count < students.length){
    console.log("Just beginning Javasript")
    count++
}

do {
    console.log(`Count is ${count}`)
    count++
} while (count < 10);

let day = 'Wednesday'
switch (day) {
    case('Thursday'):
        console.log(`The day is ${day}`)
        break;
    case('Wednesday'):
        console.log(`The day is Wednesday`)
        break
    default:
        console.log('Sorry,No matching case found')
        break;
}


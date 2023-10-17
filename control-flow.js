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

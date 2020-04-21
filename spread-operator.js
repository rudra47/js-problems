
function pushStudents(storage, ...names) { // storage and ...names bolh are parameter
    for (let i = 0; i < names.length; i++) {
        storage.push(names[i]);
    }
}

var students = [];

pushStudents(students, 'Rudra', 'Masud', 'Rahul'); // here students and ('Rudra', 'Masud', 'Rahul') bolh are argument
console.log(students.length, students);
students = [];

pushStudents(students, 'mango', 'orange', 'apple', 'chilli');
console.log(students.length, students);

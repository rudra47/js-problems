var list = [
    'sun',
    'mon',
    'tue',
    'wed',
    'thu',
    'fri',
    'sat'
];

var length = list.length;

//traversing
console.log('traversing : ');

for (let i = 0; i < length; i++) {
    console.log('Element of '+i+' is '+ list[i]);
}
//reversing
console.log('reversing : ');

for (let i = length-1; i > 0; i--) {
    console.log('Element of '+i+' is '+ list[i]);
}

//traversing another way
console.log('traversing another way : ');

for (i in list) {
    console.log('Element of '+i+' is '+ list[i]);
}
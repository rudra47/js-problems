//SHALLOW COPY
var var1 = 5;
var var2 = var1; //shallow copy
var2 = 10

console.log(var1, var2);
/*
output is : 5 10 
*/

// DEEP COPY
var array1 = [
    'Sun',  //0 = -7
    'Mon',  //1 = -6
    'Tue',  //2 = -5
    'Wed',  //3 = -4
    'Thu',  //4 = -3
    'Fri',  //5 = -2
    'Sat'   //6 = -1
];

var array2 = array1; // Deep Copy

array2[2] = 'no day';
console.log('\narray deep copy :');
console.log(array1, array2);
/*
output is : 

array deep copy :
[ 'Sun', 'Mon', 'no day', 'Wed', 'Thu', 'Fri', 'Sat' ] [ 'Sun', 'Mon', 'no day', 'Wed', 'Thu', 'Fri', 'Sat' ]
*/

// Array shallow copy 
var array3 = [
    'Sun',  //0 = -7
    'Mon',  //1 = -6
    'Tue',  //2 = -5
    'Wed',  //3 = -4
    'Thu',  //4 = -3
    'Fri',  //5 = -2
    'Sat'   //6 = -1
];
var array4 = array3.slice(); //Shallow copy
// var array4 = [...array3]; //Shallow copy ES6
array4[2] = 'no day';

console.log('\narray shallow copy :');
console.log(array3, array4);

/* 
    output is: 

    array shallow copy :
    [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ] [ 'Sun', 'Mon', 'no day', 'Wed', 'Thu', 'Fri', 'Sat' ]
*/

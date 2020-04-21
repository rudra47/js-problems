var dayList = [
    'Sun',  //0 = -7
    'Mon',  //1 = -6
    'Tue',  //2 = -5
    'Wed',  //3 = -4
    'Thu',  //4 = -3
    'Fri',  //5 = -2
    'Sat'   //6 = -1
];

console.log(dayList);

// var chunk = dayList.slice(-4, -2);
var chunk = dayList.splice(-4, 2);
console.log('After chunk = ',dayList);
console.log(chunk);

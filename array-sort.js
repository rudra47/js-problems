var list = [
    2,5,1,4,41,3,8,35,10
];

console.log(list);

length = list.length-1;
for (let j = 0; j < length; j++) {
    for (let i = 0; i < length; i++) {
        if (list[i] > list[i+1]) {   
            [list[i], list[i+1]] = [ list[i+1], list[i] ];
        }
        
    }
}
console.log('After sort = ',list);

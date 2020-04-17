//1-10 multiplication table print

var series;
for (var i = 1; i <= 10; i++) {
    series = "";
    for (let j = 1; j <= 10; j++) {
        series += i*j + (i*j > 9 ? " ": "  ");       
    }
    console.log("series "+i+(i>9 ? " = " : "  = "),series);
}
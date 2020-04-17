var monthName = "April";
var totalDay = 30;
var startingDay = 3;

console.log("\n\nCalendar of "+ monthName + "\n");
console.log("Sun    Mon    Tue    Wed    Thu    Fri    Sat");

for (var i = 0; i < 5; i++) { // maximum row of calendar
    var dayRow = "";
    for (var j = 1; j <= 7; j++) { //weakly day calculate
        var currentDay = 7*i + j - startingDay; //store the date value

        if (currentDay > totalDay) {
            break;
        }else if(currentDay<1){
            currentDay = " ";
        }

        if (currentDay>9) {
            dayRow += currentDay + "     "; //5 space after every date which if bigger then 9
        }else{
            dayRow += currentDay + "      "; //6 space after every date
        }
    }
    console.log(dayRow);
}


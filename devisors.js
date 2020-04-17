var n = 12;
var range = Math.floor(Math.sqrt(n));
var devisors = "";

for (let i = 0; i <= range; i++) {
    if (n%i == 0) {
        if (i == n/i) {
            devisors += i + " " ;
        }else{
            devisors += i + " " + (n/i) + " ";
        }
    }
}
console.log(devisors);

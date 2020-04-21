var name = "Rudra Sen";

var rev = name.split("").reverse().join("");

// console.log(rev);

// using function
function reverseFunction(data) {
    var reverseData = data.split('').reverse().join('')
    return reverseData;
}
var sentence = "hello rudra";
var reverseSentence = reverseFunction(sentence);

console.log(reverseSentence);


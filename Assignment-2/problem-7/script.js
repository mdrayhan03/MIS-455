var char = prompt("Enter one character") ;
char = char.toLowerCase() ;
var vowel = ["a", "e", "i", "o", "u"] ;

if (vowel.some(c => c === char)) {
    console.log("Yes, your given character is vowel.")
}
else {
    console.log("Sorry, your given character is not vowel.")
}
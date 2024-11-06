var mark = parseInt(prompt("Enter your marks: "))
var grade ;

if( mark > 89) {
    grade = "A" ;
}
else if( mark > 84) {
    grade = "A-" ;
}
else if( mark > 79) {
    grade = "B+" ;
}
else if( mark > 74) {
    grade = "B" ;
}
else if( mark > 69) {
    grade = "B-" ;
}
else if( mark > 64) {
    grade = "C+" ;
}
else if( mark > 59) {
    grade = "C" ;
}
else if( mark > 54) {
    grade = "C-" ;
}
else if( mark > 49) {
    grade = "D+" ;
}
else if( mark > 44) {
    grade = "D" ;
}
else {
    grade = "F" ;
}
console.log("Your mark is " + mark + " & Your grade is " + grade) ;
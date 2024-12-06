var s = parseInt(prompt("Enter min: ")) ;
var e = parseInt(prompt("Enter max: ")) ;
leap_year = 0
for (s; s <= e ; s++) {
    if (s % 4 === 0 && s % 100 != 0) {
        leap_year += 1 ;
    }    
}
console.log(leap_year) ;
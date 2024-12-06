var s = parseInt(prompt("Enter min: ")) ;
var e = parseInt(prompt("Enter max: ")) ;
sum = 0
for (s; s <= e ; s++) {
    if (s % 2 === 0) {
        sum += s ;
    }    
}
console.log(sum) ;
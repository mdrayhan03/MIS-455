var s = parseInt(prompt("Enter min: ")) ;
var e = parseInt(prompt("Enter max: ")) ;

function evenAVG(s, e) {
    var sum = 0 ;
    var cnt = 0 ;
    for (s ; s <= e ; s++) {
        if (s % 2 === 0) {
            sum += s ;
            cnt += 1
        }
    }
    var avg = sum / cnt
    console.log("AVG of even: " + avg) ;
}

function oddAVG(s, e) {
    var sum = 0 ;
    var cnt = 0 ;
    for (s ; s <= e ; s++) {
        if (s % 2 != 0) {
            sum += s ;
            cnt += 1
        }
    }
    var avg = sum / cnt
    console.log("AVG of even: " + avg) ;
}

evenAVG(s, e) ;
oddAVG(s, e) ;
var Temp = parseInt(prompt("Enter Temperature in centigrade: ")) ;

if (Temp < 0 ) {console.log("Freezing weather") ;}
else if (Temp >= 0 && Temp < 10) {console.log("Very Cold weather") ;}
else if (Temp >= 10 && Temp < 20) {console.log("Cold weather") ;}
else if (Temp >= 20 && Temp < 30) {console.log("Normal weather") ;}
else if (Temp >= 30 && Temp < 40) {console.log("Hot weather") ;}
else if (Temp >=40) {console.log("Very Hot weather") ;}
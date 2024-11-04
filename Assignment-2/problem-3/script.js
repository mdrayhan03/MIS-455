var num = [] ;

num[0] = parseInt(prompt("Enter first number: ")) ;
num[1] = parseInt(prompt("Enter second number: ")) ;
num[2] = parseInt(prompt("Enter third number: ")) ;

console.log("Greatest number is: " + Math.max(...num)) ;
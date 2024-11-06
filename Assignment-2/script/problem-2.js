function voteFunction() {
    var ageEle = document.getElementById("ageID") ;
    var age = parseInt(ageEle.value) ;
    document.getElementById("output").innerText = age<18 ? "Sorry, Your are not elegible to cast vote.": "Congratulation, Your are elegible to cast vote." ;
}
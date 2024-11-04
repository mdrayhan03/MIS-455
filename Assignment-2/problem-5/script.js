function calculateFunction() {
    var name = document.getElementById("nameID").value ;
    var fee = parseInt(document.getElementById("feeID").value) ;
    var bd = parseInt(document.getElementById("bdID").value) ;
    var discount = 2 ;

    var date = new Date() ;
    var year =  date.getFullYear() - bd ;

    if (fee >= 50000 && year > 21) {discount = 15;}
    else if (fee >= 40000 && year > 20) {discount = 10;}
    else if (fee >= 30000 && year > 19) {discount = 5;}

    var damt = fee * discount / 100 ;
    var payableamt = fee - damt ;

    document.getElementsByClassName("output")[0].innerHTML = "Dear <B>" + name + "</b>, Your Total Tuition Fees is <b>" + fee + "tk</b> & discount amount is <b>" +damt+ "tk</b>.<br>Now you have to pay <b>" +payableamt+ "tk</b>."

}
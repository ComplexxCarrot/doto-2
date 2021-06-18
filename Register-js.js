var username = document.getElementById("usrname");
var password = document.getElementById("pssowrd");
var region = document.getElementById("region");
var date = document.getElementById("DoB");
var email = document.getElementById("email");

function emailValid(){
    
}
function passwordValid(){
    var capital = false;
    var smallcase = false;
    var number = false;
    var len = password.length();
    if(len<6) return false;
    for(i=0;i<len;i++){

    }
    if(capital && smallcase && number){
        return true;
    }else{
        return false;
    }
}
function validate() {
    function cekEmail(email) {
        if(email.startsWith("@") || email.startsWith(".")){
            return false;
        }
        else if(email.endsWith("@") || email.endsWith(".")) {
            return false;
        }
        else if(email.indexOf("@.") > -1 || email.indexOf(".@") > -1) {
            return false;
        }
        else if(email.indexOf("@") < 0 || email.indexOf(".") < 0) {
            return false;
        }
        else {
            return true;
        }
    }
    var name = document.getElementById('username').value;
    var Email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var region = document.getElementById('region').value;
    if(name == "") {
        alert("Username must be filled");
        return false;
    }
    else if(name.length < 5 || name.length > 30) {
        alert("Username must be between 5 - 30 characters!");
        return false;
    }
    else if(Email == "") {
        alert("Email must be filled!");
        return false;
    }
    else if(cekEmail(Email) == false) {
        alert("Invalid format email!");
        return false;
    }
    else if(password == "") {
        alert("Password must be filled!");
        return false;
    }
    else if(password.length < 8) {
        alert("Password must be at least 8 characters long!");
    }
    else if(region == "choose") {
        alert("Please select your region!");
        return false;
    }
    else if(date == "") {
        alert("Date of Birth must be filled");
        return false;
    }
    else {
        alert("You are now registered");
        location.reload();
    }
}
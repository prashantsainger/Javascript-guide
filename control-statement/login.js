// database

const user = ['ducat@google.com', "12345"];

let email = ""
let pass = ""


if (email == "" & pass == "") {
    msg = "Please Enter Email id And Password";
}

else if (email == "") {
    msg = "Please Enter Email";
}
else if (pass == "") {
    msg = "Please Enter Password";
}
else {
    if (user[0] == email & user[1] == pass) {
        msg = "Welcome";
    }
    else {
        msg = "Id password Do not Match"; 
    }

}
document.write(msg);




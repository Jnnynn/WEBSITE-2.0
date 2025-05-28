function verif() {
    var uname = document.getElementById("username").value;
    var pass = document.getElementById("password").value;
    var acc_uname = "sharkishark";
    var acc_pass = "sharks4life";

    if (uname == acc_uname && pass == acc_pass) {
        window.location.assign("MAIN.html");
    } else {
        alert("Oh no! Please check your username and password.");
    }
}
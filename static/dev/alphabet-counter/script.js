function go () {
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var letter = prompt("Enter desired letter in lowercase format:");
var initvalue = document.getElementById("init").value;
initvalue = parseInt(initvalue);
var pos = alphabet.indexOf(letter);
pos = pos + 1;
pos = initvalue + pos;
alert(pos);
}
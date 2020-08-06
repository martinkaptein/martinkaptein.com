var button1 = document.getElementById("capsify").addEventListener("click",capsify);
var button2 = document.getElementById("decapsify").addEventListener("click",decapsify);

function capsify () {
    var text = document.getElementById("input").value;
    var caps = text.toUpperCase();
    document.getElementById("input").value = caps;
    document.getElementById("fantasy").innerHTML = "Caps done!";
}

function decapsify () {
    var text = document.getElementById("input").value;
    var caps = text.toLowerCase();
    document.getElementById("input").value = caps;
    document.getElementById("fantasy").innerHTML = "De-caps done!";
}
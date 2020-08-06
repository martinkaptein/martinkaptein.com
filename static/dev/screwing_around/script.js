var button = document.getElementById("button");
var output = document.getElementById("output");
button.addEventListener("click", main);


function main () {
    var i = 0;
    
    while (i < 99999) {
        output = i;
        location.reload();
        i = i++;
    }
}
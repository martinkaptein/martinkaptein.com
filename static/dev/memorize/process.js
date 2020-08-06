var z;
z = confirm("Brain Train Memorise\nAre you ready to start?\n'OK' to continue, 'Cancel' to cancel.\nThis isn't supposed to be diffecult!!\nWritten by Martin Kaptein.\n@MartinKaptein (Instagram and Twitter)");
if (z == true) {
    main();
} else {
    window.history.back();
}
function again () {
    var x;
    x = confirm("Play again?\n'OK' to play again, 'Cancel' to quit.\nI Hope you liked this app by Martin Kaptein!");
    if (x == true) {
        main();
    } else {
        window.history.back();
    }
}
function main () {
    var y;
    y = prompt("How many characters <numbers and letters> do you want to memorise?");
    y = parseInt(y);
function rand(length,current){
 current = current ? current : '';
 return length ? rand( --length , "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt( Math.floor( Math.random() * 36 ) ) + current ) : current;
}
var v;
v = rand(y);
alert("Memorise this: < "+v+" >\nPress 'OK' when done.");
var w;
w = prompt("Enter the string you just memorised:");
if (w == v) {
    alert("Correct!!");
    again();
} else {
    alert("Wrong! The right string is: < "+v+" >\nYou entered < "+w+" >, which was wrong!");
    again();
}
}
var z;
z = confirm("Winkel berechnen \n'OK' zum vortfahren, 'Abbrechen' zum Abbrechen.\nGeschrieben von Martin Kaptein\n@MartinKaptein (Instagram and Twitter)");
if (z == true) {
go();
} else {
window.history.back();
}
function go () {
var a;
a = prompt("Vektor 1, Koordinate 1");
a = parseInt(a);
var b;
b = prompt("Vektor 1, Koordinate 2");
b = parseInt(b);
var c;
c = prompt("Vektor 1, Koordinate 3");
c = parseInt(c);
var d;
d = prompt("Vektor 2, Koordinate 1");
d = parseInt(d);
//get22>>e
var e;
e = prompt("Vektor 2, Koordinate 2");
e = parseInt(e);
//get23>>f
var f;
f = prompt("Vektor 2, Koordinate 3");
f = parseInt(f);
var x;
x = Math.acos(((a * d) + (b * e) + (c * f)) / (Math.sqrt((Math.pow(a, 2)) + (Math.pow(b, 2)) + (Math.pow(c, 2))) * (Math.sqrt((Math.pow(d, 2)) + (Math.pow(e, 2)) + (Math.pow(f, 2))))));
x = x * (180 / Math.PI);
alert("Der Winkel zwischen Vektor 1 und Vektor 2 betraegt "+x+" grad.");
location.reload();     
}
//Source code proudly presented by Martin Kaptein >> @MartinKaptein (Instagram and Twitter)
//check whether to start at all>>could/might be a mistake
var z;
z = confirm("Super Brain Train\nAre you ready to start?\n'OK' to continue, 'Cancel' to cancel.\nWritten by Martin Kaptein.\n@MartinKaptein (Instagram and Twitter)");
if (z == true) {
    main();
} else {
    window.history.back();
}
//order: memorise to string of 6 (devined number>>no var) symbols/charcaters >> after memorise >> equations (2 times all) >> check memorised strings >>congartiulate>>done!
//main function is god equation functions are inside main();

function main () {
    //here's all the magic
    //alright here comes the 1 part:
    function rand(length,current){
    current = current ? current : '';
    return length ? rand( --length , "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt( Math.floor( Math.random() * 36 ) ) + current ) : current;
    }
    var v;
    v = rand(6); //6 is predevined but can be changed later in this source code
    alert("First\nMemorise this: < "+v+" >\nPress 'OK' when done.\nMath equations will follow!");
    //last(); //debug test
    //idea for later: a second memorise, same function length something like 3 insert after this test
    
    
    
    function rand(length,current){
    current = current ? current : '';
    return length ? rand( --length , "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt( Math.floor( Math.random() * 36 ) ) + current ) : current;
    }
    var s;
    s = rand(3); //3 is predevined but can be changed later in this source code
    alert("Second\nMemorise this: < "+s+" >\nPress 'OK' when done.\nMath equations will follow!");
    
    
    
    
    
    
    
    //now come all equations(long>>2 times)>>var v is the number which should be memorised>>keep in RAM(hopefully:)
    //start
    
    first();
    function first () {
    var a;
    a = Math.floor(Math.random(0,1) * 1000);
    var b;
    b = Math.floor(Math.random(0,1) * 1000);
    var c;
    c = prompt(a+" + "+b+" = ?","");
    c = parseInt(c);  
    var d;
    d = a + b;
    if (c == d) {
        alert("You are right, the solution is ' "+d+" '.");
        second();
    } else {
        alert("Wrong! The right answer is ' "+d+" '.");
        second();
    }
    }
    function second () {
    var a;
    a = Math.floor(Math.random(0,1) * 1000);
    var b;
    b = Math.floor(Math.random(0,1) * 1000);
    var c;
    c = prompt(a+" - "+b+" = ?","");
    c = parseInt(c);  
    var d;
    d = a - b;
    if (c == d) {
        alert("You are right, the solution is ' "+d+" '.");
        third();
    } else {
        alert("Wrong! The right answer is ' "+d+" '.");
        third();
    }
    }
    function third () {
    var a;
    a = Math.floor(Math.random(0,1) * 100);
    var b;
    b = Math.floor(Math.random(0,1) * 10);
    var c;
    c = prompt(a+" x "+b+" = ?","");
    c = parseInt(c);  
    var d;
    d = a * b;
    if (c == d) {
        alert("You are right, the solution is ' "+d+" '.");
        fourth();
    } else {
        alert("Wrong! The right answer is ' "+d+" '.");
        fourth();
    }
    }
    function fourth () {
    var a;
    a = Math.floor(Math.random(0,1) * 10);
    var b;
    b = Math.floor(Math.random(0,1) * 100);
    var c;
    c = prompt(a+" x "+b+" = ?","");
    c = parseInt(c);  
    var d;
    d = a * b;
    if (c == d) {
        alert("You are right, the solution is ' "+d+" '.");
        five();
    } else {
        alert("Wrong! The right answer is ' "+d+" '.");
        five();
    }
    }
//again all>>different names
    function five () {
    var a;
    a = Math.floor(Math.random(0,1) * 1000);
    var b;
    b = Math.floor(Math.random(0,1) * 1000);
    var c;
    c = prompt(a+" + "+b+" = ?","");
    c = parseInt(c);  
    var d;
    d = a + b;
    if (c == d) {
        alert("You are right, the solution is ' "+d+" '.");
        six();
    } else {
        alert("Wrong! The right answer is ' "+d+" '.");
        six();
    }
    }
    function six () {
    var a;
    a = Math.floor(Math.random(0,1) * 1000);
    var b;
    b = Math.floor(Math.random(0,1) * 1000);
    var c;
    c = prompt(a+" - "+b+" = ?","");
    c = parseInt(c);  
    var d;
    d = a - b;
    if (c == d) {
        alert("You are right, the solution is ' "+d+" '.");
        seven();
    } else {
        alert("Wrong! The right answer is ' "+d+" '.");
        seven();
    }
    }
    function seven () {
    var a;
    a = Math.floor(Math.random(0,1) * 100);
    var b;
    b = Math.floor(Math.random(0,1) * 10);
    var c;
    c = prompt(a+" x "+b+" = ?","");
    c = parseInt(c);  
    var d;
    d = a * b;
    if (c == d) {
        alert("You are right, the solution is ' "+d+" '.");
        eight();
    } else {
        alert("Wrong! The right answer is ' "+d+" '.");
        eight();
    }
    }
    function eight () {
    var a;
    a = Math.floor(Math.random(0,1) * 10);
    var b;
    b = Math.floor(Math.random(0,1) * 100);
    var c;
    c = prompt(a+" x "+b+" = ?","");
    c = parseInt(c);  
    var d;
    d = a * b;
    if (c == d) {
        alert("You are right, the solution is ' "+d+" '.");
        last();
    } else {
        alert("Wrong! The right answer is ' "+d+" '.");
        last();
    }
    }
//noow check whether remember first^^ we try this in another function>>last();
    function last () {
        //check&end all
        var w;
        w = prompt("Enter the first string you 'just' memorised:");
        if (w == v) {
            alert("Correct!! ");
            last2();
        } else {
            alert("Wrong! The right string is: < "+v+" >\nYou entered < "+w+" >, which was wrong!");
            last2();
        }    
    }
        function last2 () {
        //check&end all
        var t;
        t = prompt("Enter the second string you 'just' memorised:");
        if (t == s) {
            alert("Correct!! \nDone!");
            window.history.back();
        } else {
            alert("Wrong! The right string is: < "+v+" >\nYou entered < "+w+" >, which was wrong!\nDone!");
            window.history.back();
        }    
    }
    
    
     
//this bracket is the last one!above too^^  
}


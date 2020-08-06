var button = document.getElementById("button");
var output = document.getElementById("Output");
button.addEventListener("click",main);

function main () {
    var WordCount = prompt("How many gibberish words are required?\nPlease enter integer.");
    WordCount = parseInt(WordCount);
    var PushOutput;
    var FinalOutput = new Array();
    var temp;
    var length;
    var IndividualWordLength;
    
    for (i = 0; i < WordCount; i++) {
        temp = Math.floor(Math.random(0, 1) * 4); //0,1,2,3,4
        
        if (temp == 3) {
            IndividualWordLength = Math.floor(Math.random(0, 1) * 14); //Word Length from 0 to 14
        } else {
            IndividualWordLength = Math.floor(Math.random(0, 1) * 6); //Word Length from 0 to 6
        }
        //IndividualWordLength = Math.floor(Math.random(0, 1) * 14); //Word Length from 0 to 14
        var randTemp = Math.floor(Math.random(0, 1) * 5); //0,1,2,3,4
        if (randTemp == 0 || randTemp == 1 || randTemp == 2 || randTemp == 3) {
            FinalOutput.push(rand(IndividualWordLength));
        } else {
            FinalOutput.push(CapsRand(IndividualWordLength));
        }
    }
    
    FinalOutput = FinalOutput.join(" ");
    output.value = FinalOutput;
    document.getElementById("fantasy").innerHTML = "Please, enjoy a senseless story of "+WordCount+" words!";
    document.getElementById("text").innerHTML = "Press GO to restart";
}

function CapsRand (length,current) {
    current = current ? current : '';
    return length ? rand( --length , "AAABCDDEEEFGHHIIIJKLLMNNOOOPQRRSSSTTTUUVWXYYZ.".charAt( Math.floor( Math.random() * 46 ) ) + current ) : current; //old>>ABCDEFGHIJKLMNOPQRSTUVWXYZ.
}

function rand (length,current) {
    current = current ? current : '';
    return length ? rand( --length , "aaabcddeeefghhiiijkllmnnooopqrrssstttuuvwxyyz.".charAt( Math.floor( Math.random() * 46 ) ) + current ) : current; //old>>abcdefghijklmnopqrstuvwxyz.
}
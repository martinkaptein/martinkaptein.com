var input = prompt("Press OK to continue, Cancel to exit.\nProgramm by @MartinKaptein (Instagram and Twitter)\nInput string to be reversed:");

if (input != null) {
    main();
} else {
    window.history.back();
}

function main () {
    var length = input.length;
    var array = new Array;

    for (i = 0; i < length; i++) {
        array.push(input.charAt((length - i) - 1));
    }
    
    var FinalProductBackwards = array.join("");
    var x = prompt("Press OK to continue, Cancel to exit.\nPress CTRL+C to copy (or stuff)",FinalProductBackwards);

    if (x != null) {
        location.reload();
    } else {
        window.history.back();
    }
}



var button = document.getElementById("go").addEventListener("click",randomize);

function randomize () {
    var input = document.getElementById("input").value;
    var inputLength = input.length;
    var result = new Array();
    var seed = new Array();
    for (i = 0; i < inputLength; i++) {
        var random = Math.floor(Math.random(0, 1) * 2); //0,1 >> ?
        seed.push(random);
        var change = input.charAt(i);
        
        switch (random) {
            case 0:
                change = change.toUpperCase();
                break;
                
            case 1:
                change = change.toLowerCase();
        }
        
        result.push(change);
    }
    
    result = result.join("");
    document.getElementById("input").value = result;
    document.getElementById("returnMessage").innerHTML = "Done!"
}

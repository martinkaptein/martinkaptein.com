var random = Math.floor(Math.random(0,1) * 100);
var counter = document.getElementById("tries");
var alreadyTried = document.getElementById("alreadyTried");
alreadyTriedArray = new Array;
var tries = 0;
    function start () {
        UserInput = document.getElementById("UserInput").value;
        UserInput = parseInt(UserInput);
        WrongRight = document.getElementById("check");
        
        if (UserInput != random) {
            if (UserInput > random) {
                WrongRight.innerHTML = "Guess lower!";
            } else if (UserInput < random) {
                WrongRight.innerHTML = "Guess higher!";
            }
            tries++;
            counter.innerHTML = tries;
        } else {
            WrongRight.innerHTML = "You won!!! The number was indeed "+random;
        }
        
        alreadyTriedArray.push(UserInput);
        alreadyTried.innerHTML = alreadyTriedArray;
    }
    
    function NewGame () {
        //reset values
        random = Math.floor(Math.random(0,1) * 100);
        counter.innerHTML = '';
        WrongRight.innerHTML = '';
        UserInput.value = '';
        alreadyTried = new Array;
        tries = 0;
    }
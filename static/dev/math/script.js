function main () {
    var z = confirm("Are you really sure you want to start?")
    if (z == true) {
        //get all user input & vars
        var number1;
        var number2;
        var number3;
        var number4;
        var result;
        var UserInput;
        var checkMultiplication = document.getElementById("checkbox1").checked;
        var checkSubtraction = document.getElementById("checkbox2").checked;
        var checkAddition = document.getElementById("checkbox3").checked;
        var OperationListForHuman = new Array(" + ", " - ", " x ");
        var exerciseCount = document.getElementById("exerciseCount").value;
        //generate random numbers, chose right function + randomly + right amount of times
        function multiplication (number1, number2) {
            return number1 * number2;
        }
        
        function subtraction (number3, number4) {
            return number3 - number4;
        }
        
        function addition (number3, number4) {
            return number3 + number4;
        }
        //enable/disable function accoring to user settings
        for (i = 0; i <= exerciseCount; i++) {
            if (checkMultiplication == false) {
                var RandomOperation = Math.floor((Math.random() * 2) + 1);//results only 1,2 so no multiplication etc
            }
            
            
            var RandomOperation = Math.floor(Math.random(0,1) * 3);//results 0,1,2
            
            if ((RandomOperation = 0) && (checkMultiplication.checked == true)) {
                result = multiplication(Math.floor(Math.random(0,1) * 10), Math.floor(Math.random(0,1) * 10));
            } else if ((RandomOperation = 1) && (checkSubtraction.checked == true)) {
                result = subtraction(Math.floor(Math.random(0,1) * 1000), Math.floor(Math.random(0,1) * 1000));
            } else if ((RandomOperation = 2) && (checkAddition.checked == true)) {
                result = addition(Math.floor(Math.random(0,1) * 1000), Math.floor(Math.random(0,1) * 1000));
            } else {
                
            }
            
            UserInput = parseInt(prompt())
        }
        
        
        
    } else {
        history.back();
    }
}
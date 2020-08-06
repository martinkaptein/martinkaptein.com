function retrievePlayCount () {
    //if first time
    if (!localStorage.getItem("timesPlayed")) {
        localStorage.setItem("timesPlayed", 0);
        document.getElementById("amountTimesPlayed").innerHTML = "This is your first time! Good luck!";
    } else {
    var PlayCount = localStorage.getItem("timesPlayed");
    document.getElementById("amountTimesPlayed").innerHTML = PlayCount;
    }
}

retrievePlayCount();


function main () {
    //settings&var declaration
    var ExerciseCount = parseInt(prompt("Enter the number of memorise exercises you want to do!\nDefault is 4",4));
    

    var StringLength = parseInt(prompt("Enter the desired length of the string you want to memorise!\nDefault is 4",4));
    var MathExerciseCount = 0;
    var MathExercisesDone = 0;
    var NumberOfCorrectMathExercises = 0;
    var NumberOfCorrectMemoExercises = 0;

    MathExerciseCount = parseInt(prompt("How many math Exercises do you want to do?\nDefault is 5.",5));

    var ExerciseCounterForLoop = 0;
    var StringArray = new Array();

    while (ExerciseCounterForLoop < ExerciseCount) {
        function rand(length,current){
        current = current ? current : '';
        return length ? rand( --length , "0123456789abcdefghijklmnopqrstuvwxyz".charAt( Math.floor( Math.random() * 36 ) ) + current ) : current;//bak 0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ
        }
        var v = rand(StringLength);
        StringArray.push(v);
        //save each time in different place@array
        ExerciseCounterForLoop++;
        alert(ExerciseCounterForLoop+" exercise.\nMemorise this: <  "+v+"  >\nPress 'OK' when done.");


    }

    //lets do some math
    while (MathExercisesDone < MathExerciseCount) {
        //here
        var number1 = Math.floor(Math.random(0,1) * 1000);
        var number2 = Math.floor(Math.random(0,1) * 1000);
        var number3 = Math.floor(Math.random(0,1) * 10);
        var number4 = Math.floor(Math.random(0,1) * 10);
        var OperatorListForHuman = new Array(" + ", " - ", " x ");
        var Result;
        var UserInputMath;
        var Randomoperator = Math.floor(Math.random(0,1) * 3);//results 0,1,2
        if (Randomoperator == 0) {
            Result = number1 + number2;
            UserInputMath = parseInt(prompt(number1+OperatorListForHuman[Randomoperator]+number2,""));
        } else if (Randomoperator == 1) {
            Result = number1 - number2;
            UserInputMath = parseInt(prompt(number1+OperatorListForHuman[Randomoperator]+number2,""));
        } else {
            Result = number3 * number4;
            UserInputMath = parseInt(prompt(number3+OperatorListForHuman[Randomoperator]+number4,""));
        }

        if (UserInputMath == Result) {
            alert("Correct!");
            NumberOfCorrectMathExercises++;
        } else {
            alert("Incorrect!\nThe Correct result is "+Result);
        }
        MathExercisesDone++;
    }
    //finished math, now continue
 

    var ExerciseToAsk = 0; //has to be outside for loop
    var StringArrayLength = StringArray.length;
    for (var i = 0; i < StringArrayLength; i++) {//or .forEach //before was .every
        var ExerciseToAskUser = ExerciseToAsk + 1;
        var UserInput = prompt("Input the "+ExerciseToAskUser+" string you memorised:","");
        var TheNecessaryItemFromArray = StringArray[ExerciseToAsk];
        ExerciseToAsk++;

        if (UserInput == TheNecessaryItemFromArray) {
            alert("Correct!");
            NumberOfCorrectMemoExercises++;
        } else {
            alert("Wrong! The right string was <  "+TheNecessaryItemFromArray+"  >!");
        }
    }
    /*    
    if (UserWantsMath == true) {
        //do math
        //HERE!!!!
    } else {
        alert("Thank for playing!!\nI hope you are more intelligent now!:)");
    }*/
    
    var previousCount = localStorage.getItem("timesPlayed");
    var updatedCount = parseInt(previousCount);
    updatedCount++;
    localStorage.setItem("timesPlayed", updatedCount);
    alert("Thank for playing Brainer for the "+updatedCount+" time!");
    retrievePlayCount();
}
//var TotalScore = (NumberOfCorrectMemoExercises * StringLength) + NumberOfCorrectMathExercises;
//document.write('Total exercise count: '+TotalExerciseCount+'<br>Total math exercise count: '+MathExerciseCount+'<br>Total string memorise count: '+ExerciseCount+'<br>Length of memorised strings: '+StringLength+'<br>Number of correct memorize exercises: '+NumberOfCorrectMemoExercises+'<br>Number of correct math exercises: '+NumberOfCorrectMathExercises+'<br><br>Total score: '+TotalScore);
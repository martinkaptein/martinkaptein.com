function GetLowerRange() {
    var LowerRange = document.getElementById("LowerRange").value;
    LowerRange = parseInt(LowerRange);
    return LowerRange;
}

function GetHigherRange() {
    var HigherRange = document.getElementById("HigherRange").value;
    HigherRange = parseInt(HigherRange);
    return HigherRange;
}

function GenerateNumber() {
    var Low = GetLowerRange();
    var High = (GetHigherRange()) + 1;
    var delta = High - Low;
    var output = Math.floor(Math.random() * delta);
    output = output + Low;
    return output;
}

function main() {
    var PrintOutput = document.getElementById("GeneratorOutput");
    PrintOutput.value = GenerateNumber();
}

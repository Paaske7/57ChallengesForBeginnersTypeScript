"use strict";
function countingTheNumberOfCharacters() {
    var inputStringElem = document.getElementById("inputString");
    var string = inputStringElem.value;
    var amount = string.length;
    var completeOutput = string + " har " + amount + " karakter";
    document.getElementById("completeOutput").innerText = "" + completeOutput;
}

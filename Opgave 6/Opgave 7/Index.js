"use strict";
function Area() {
    var inputLengthElem = document.getElementById("inputLength");
    var inputWidthElem = document.getElementById("inputWidth");
    var length = +inputLengthElem.value;
    var width = +inputWidthElem.value;
    var feet = length * width;
    var squaremeters = length * width * 10; // Helt forkert regnestykke - Ved ikke lige regnestykket.
    var completeOutput = "You entered dimensions of " + length + " feet by " + width + " feet.\n    The area is " + feet + "\n    " + squaremeters + " meters";
    document.getElementById("completeOutput").innerText = "" + completeOutput;
}

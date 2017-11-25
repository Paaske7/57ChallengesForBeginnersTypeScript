"use strict";
function Calculate() {
    var inputFirstNumberElem = document.getElementById("inputFirstNumber");
    var inputSecondNumberElem = document.getElementById("inputSecondNumber");
    var FirstNumber = +inputFirstNumberElem.value;
    var SecondNumber = +inputSecondNumberElem.value;
    // + foran input når det er et tal -- valueasnumber virker ikke
    var plus = FirstNumber + SecondNumber;
    var minus = FirstNumber - SecondNumber;
    var multiplie = FirstNumber * SecondNumber;
    var divide = FirstNumber / SecondNumber;
    var completeOutput = FirstNumber + " + " + SecondNumber + " = " + plus + "\n    " + FirstNumber + " - " + SecondNumber + " = " + minus + " \n    " + FirstNumber + " * " + SecondNumber + " = " + multiplie + " \n    " + FirstNumber + " / " + SecondNumber + " = " + divide;
    document.getElementById("completeOutput").innerText = "" + completeOutput;
}

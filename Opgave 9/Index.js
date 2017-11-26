"use strict";
function Paint() {
    var inputCoverElem = document.getElementById("inputCover");
    var cover = +inputCoverElem.value;
    var paint = 0;
    var number1 = 350;
    var number2 = 700;
    if (cover < number1) {
        paint = 0;
    }
    if (cover > number1 && cover < number2) {
        paint = 1;
    }
    if (cover >= number2) {
        paint = 2;
    }
    // Osv ..
    // Switch løkke ville have været bedre..
    var completeOutput = "You will ned to purchase " + paint + " gallons of paint to cover " + cover + " square feet";
    document.getElementById("completeOutput").innerText = "" + completeOutput;
}

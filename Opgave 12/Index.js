"use strict";
function Interest() {
    var inputPrincipalElem = document.getElementById("inputPrincipal");
    var inputRateElem = document.getElementById("inputRate");
    var inputYearsElem = document.getElementById("inputYears");
    var Principal = +inputPrincipalElem.value;
    var Rate = +inputRateElem.value;
    var Rate2 = Rate / 100;
    var Year = +inputYearsElem.value;
    var sum = Principal * (1 + (Rate2 * Year));
    var completeOutput = "After " + Year + " years at " + Rate + "%, the investment will be worth " + sum + " US dollars.";
    document.getElementById("completeOutput").innerText = "" + completeOutput;
}

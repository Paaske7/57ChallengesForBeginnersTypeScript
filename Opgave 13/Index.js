"use strict";
function CompundInterest() {
    var inputPrincipalElem = document.getElementById("inputPrincipal");
    var inputRateElem = document.getElementById("inputRate");
    var inputYearsElem = document.getElementById("inputYears");
    var inputCompoundElem = document.getElementById("inputCompound");
    var Principal = +inputPrincipalElem.value;
    var Rate = +inputRateElem.value;
    var Rate2 = Rate / 100;
    var Year = +inputYearsElem.value;
    var Compund = +inputCompoundElem.value;
    var sum = Principal * (1 + (Rate2 / Compund) ^ Compund * Year); // Forkert regnestykke
    var completeOutput = Principal + " US dollars invested at " + Rate + "% for " + Year + " years compunded " + Compund + " times per year is " + sum + " US dollars.";
    document.getElementById("completeOutput").innerText = "" + completeOutput;
}

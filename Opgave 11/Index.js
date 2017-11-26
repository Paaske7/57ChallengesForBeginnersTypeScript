"use strict";
function Currency() {
    var inputEuroElem = document.getElementById("inputEuro");
    var inputExchangeElem = document.getElementById("inputExchange");
    var euro = +inputEuroElem.value;
    var exchange = +inputExchangeElem.value;
    var sum = euro * exchange / 100;
    var completeOutput = euro + " euros at the exchange rate of  " + exchange + " is\n    " + sum + " US dollars";
    document.getElementById("completeOutput").innerText = "" + completeOutput;
}

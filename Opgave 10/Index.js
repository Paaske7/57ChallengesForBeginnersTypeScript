"use strict";
function CheckOut() {
    var inputPrice1Elem = document.getElementById("inputPrice1");
    var inputQuantatity1Elem = document.getElementById("inputQuantatity1");
    var inputPrice2Elem = document.getElementById("inputPrice2");
    var inputQuantatity2Elem = document.getElementById("inputQuantatity2");
    var inputPrice3Elem = document.getElementById("inputPrice3");
    var inputQuantatity3Elem = document.getElementById("inputQuantatity3");
    var calc1 = +inputPrice1Elem.value * +inputQuantatity1Elem.value;
    var calc2 = +inputPrice2Elem.value * +inputQuantatity2Elem.value;
    var calc3 = +inputPrice3Elem.value * +inputQuantatity3Elem.value;
    var subtotal = calc1 + calc2 + calc3;
    var tax = 0.0055;
    var tax2 = subtotal * tax * 10;
    var total = tax2 + subtotal;
    var completeOutput = "Subtotal: " + subtotal + "\n    Tax: " + tax2 + "\n    Total:  " + total;
    document.getElementById("completeOutput").innerText = "" + completeOutput;
}

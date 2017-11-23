"use strict";
function sayingHello() {
    var inputNameElem = document.getElementById("inputName");
    var name = inputNameElem.value;
    document.getElementById("outputName").innerText = "" + name;
}

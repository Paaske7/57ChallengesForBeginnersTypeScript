"use strict";
function Retirement() {
    var inputAgeElem = document.getElementById("inputAge");
    var inputRetireElem = document.getElementById("inputRetire");
    var age = +inputAgeElem.value;
    var retire = +inputRetireElem.value;
    var left = retire - age;
    var year = new Date().getFullYear();
    var retirementYear = year + left;
    var completeOutput = "Du har " + left + " \u00E5r til du kan g\u00E5 p\u00E5 pension.\n    Det er \u00E5r " + year + ", s\u00E5 du kan g\u00E5 p\u00E5 pension i \u00E5r " + retirementYear + ".";
    document.getElementById("completeOutput").innerText = "" + completeOutput;
}

"use strict";
function printingQuotes() {
    var inputQuoteElem = document.getElementById("inputQuote");
    var inputQuoteOwnerElem = document.getElementById("inputQuoteOwner");
    var quote = inputQuoteElem.value;
    var quoteOwner = inputQuoteOwnerElem.value;
    var completeOutput = quoteOwner + " sagde \"" + quote + "\"";
    document.getElementById("completeOutput").innerText = "" + completeOutput;
}

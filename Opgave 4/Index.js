"use strict";
function MadLib() {
    var inputNounElem = document.getElementById("inputNoun");
    var inputVerbElem = document.getElementById("inputVerb");
    var inputAdjectiveElem = document.getElementById("inputAdjective");
    var inputAdverbElem = document.getElementById("inputAdverb");
    var noun = inputNounElem.value;
    var verb = inputVerbElem.value;
    var adjective = inputAdjectiveElem.value;
    var adverb = inputAdverbElem.value;
    var completeOutput = "Du " + verb + " din " + adjective + " " + noun + " " + adverb + "? Det er da sjovt!";
    document.getElementById("completeOutput").innerText = "" + completeOutput;
}

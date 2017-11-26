"use strict";
function Pizza() {
    var inputPeopleElem = document.getElementById("inputPeople");
    var inputPizzaElem = document.getElementById("inputPizza");
    var people = +inputPeopleElem.value;
    var pizza = +inputPizzaElem.value;
    var each = (pizza * 8) / people;
    var leftover = pizza % each; // Forkert udregning
    var completeOutput = people + " people with " + pizza + " pizzas.\n    Each person gets " + each + " pieces of pizza\n    There are " + leftover + " pieces left";
    document.getElementById("completeOutput").innerText = "" + completeOutput;
}

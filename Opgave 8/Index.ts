function Pizza() {
    let inputPeopleElem = <HTMLInputElement>document.getElementById("inputPeople");
    let inputPizzaElem = <HTMLInputElement>document.getElementById("inputPizza");

    let people: number = +inputPeopleElem.value;
    let pizza: number = +inputPizzaElem.value;

    let each =(pizza*8)/people;
    let leftover = pizza % each; // Forkert udregning
    let completeOutput: string = `${people} people with ${pizza} pizzas.
    Each person gets ${each} pieces of pizza
    There are ${leftover} pieces left`;
    

    document.getElementById("completeOutput").innerText = "" + completeOutput;
  }
function Currency() {
    let inputEuroElem = <HTMLInputElement>document.getElementById("inputEuro");
    let inputExchangeElem = <HTMLInputElement>document.getElementById("inputExchange");

    let euro: number = +inputEuroElem.value;
    let exchange: number = +inputExchangeElem.value
    let sum: number = euro*exchange/100;
    
    let completeOutput: string = `${euro} euros at the exchange rate of  ${exchange} is
    ${sum} US dollars`;
    

    document.getElementById("completeOutput").innerText = "" + completeOutput;
  }
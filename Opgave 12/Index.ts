function Interest() {
    let inputPrincipalElem = <HTMLInputElement>document.getElementById("inputPrincipal");
    let inputRateElem = <HTMLInputElement>document.getElementById("inputRate");
    let inputYearsElem = <HTMLInputElement>document.getElementById("inputYears");

    let Principal: number = +inputPrincipalElem.value;
    let Rate: number = +inputRateElem.value
    let Rate2: number = Rate/100;
    let Year: number = +inputYearsElem.value;
    let sum: number = Principal*(1+(Rate2*Year));

    let completeOutput: string = `After ${Year} years at ${Rate}%, the investment will be worth ${sum} US dollars.`;
    

    document.getElementById("completeOutput").innerText = "" + completeOutput;
  }
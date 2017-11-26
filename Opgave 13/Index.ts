function CompundInterest() {
    let inputPrincipalElem = <HTMLInputElement>document.getElementById("inputPrincipal");
    let inputRateElem = <HTMLInputElement>document.getElementById("inputRate");
    let inputYearsElem = <HTMLInputElement>document.getElementById("inputYears");
    let inputCompoundElem = <HTMLInputElement>document.getElementById("inputCompound");

    let Principal: number = +inputPrincipalElem.value;
    let Rate: number = +inputRateElem.value
    let Rate2: number = Rate/100;
    let Year: number =+inputYearsElem.value;
    let Compund: number =+inputCompoundElem.value;
    let sum: number = Principal*(1+(Rate2/Compund)^Compund*Year); // Forkert regnestykke

    let completeOutput: string = `${Principal} US dollars invested at ${Rate}% for ${Year} years compunded ${Compund} times per year is ${sum} US dollars.`;
    

    document.getElementById("completeOutput").innerText = "" + completeOutput;
  }
function Area() {
    let inputLengthElem = <HTMLInputElement>document.getElementById("inputLength");
    let inputWidthElem = <HTMLInputElement>document.getElementById("inputWidth");

    let length: number = +inputLengthElem.value;
    let width: number = +inputWidthElem.value;
    let feet: number = length*width;
    let squaremeters:number = length*width*10; // Helt forkert regnestykke - Ved ikke lige regnestykket.

    let completeOutput: string = `You entered dimensions of ${length} feet by ${width} feet.
    The area is ${feet}
    ${squaremeters} meters`;
    

    document.getElementById("completeOutput").innerText = "" + completeOutput;
  }
function Calculate() {
    let inputFirstNumberElem = <HTMLInputElement>document.getElementById("inputFirstNumber");
    let inputSecondNumberElem = <HTMLInputElement>document.getElementById("inputSecondNumber");

    let FirstNumber: number = +inputFirstNumberElem.value;
    let SecondNumber: number = +inputSecondNumberElem.value;
    // + foran input når det er et tal -- valueasnumber virker ikke

    let plus: number = FirstNumber+SecondNumber;
    let minus: number = FirstNumber-SecondNumber;
    let multiplie: number = FirstNumber*SecondNumber;
    let divide: number = FirstNumber/SecondNumber;

    let completeOutput: string = `${FirstNumber} + ${SecondNumber} = ${plus}
    ${FirstNumber} - ${SecondNumber} = ${minus} 
    ${FirstNumber} * ${SecondNumber} = ${multiplie} 
    ${FirstNumber} / ${SecondNumber} = ${divide}`;

    document.getElementById("completeOutput").innerText = "" + completeOutput;
  }
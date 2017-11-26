function Retirement() {
    let inputAgeElem = <HTMLInputElement>document.getElementById("inputAge");
    let inputRetireElem = <HTMLInputElement>document.getElementById("inputRetire");

    let age: number = +inputAgeElem.value;
    let retire: number = +inputRetireElem.value;

    let left: number = retire-age;
    let year: number = new Date().getFullYear();
    let retirementYear: number = year + left;

    let completeOutput: string = `Du har ${left} år til du kan gå på pension.
    Det er år ${year}, så du kan gå på pension i år ${retirementYear}.`;
    

    document.getElementById("completeOutput").innerText = "" + completeOutput;
  }
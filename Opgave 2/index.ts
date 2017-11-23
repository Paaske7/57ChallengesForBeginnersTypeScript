function countingTheNumberOfCharacters() {
    let inputStringElem = <HTMLInputElement>document.getElementById("inputString");
  
    let string: string = inputStringElem.value;
    let amount: number = string.length;
  
    let completeOutput = `${string} har ${amount} karakter`;
    
    document.getElementById("completeOutput").innerText = "" + completeOutput;
  }
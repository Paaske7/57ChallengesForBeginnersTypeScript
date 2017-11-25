function MadLib() {
    let inputNounElem = <HTMLInputElement>document.getElementById("inputNoun");
    let inputVerbElem = <HTMLInputElement>document.getElementById("inputVerb");
    let inputAdjectiveElem = <HTMLInputElement>document.getElementById("inputAdjective");
    let inputAdverbElem = <HTMLInputElement>document.getElementById("inputAdverb");
  

    let noun: string = inputNounElem.value;
    let verb: string = inputVerbElem.value;
    let adjective: string = inputAdjectiveElem.value;
    let adverb: string = inputAdverbElem.value;

    let completeOutput: string = `Du ${verb} din ${adjective} ${noun} ${adverb}? Det er da sjovt!`;
    

    document.getElementById("completeOutput").innerText = "" + completeOutput;
  }





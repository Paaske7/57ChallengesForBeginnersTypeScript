function printingQuotes() {
  let inputQuoteElem = <HTMLInputElement>document.getElementById("inputQuote");
  let inputQuoteOwnerElem = <HTMLInputElement>document.getElementById("inputQuoteOwner");

  let quote: string = inputQuoteElem.value;
  let quoteOwner: string = inputQuoteOwnerElem.value;

  let completeOutput: string = `${quoteOwner} sagde "${quote}"`;

  document.getElementById("completeOutput").innerText = "" + completeOutput;
}



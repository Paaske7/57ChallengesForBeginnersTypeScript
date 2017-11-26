function CheckOut() {
    let inputPrice1Elem = <HTMLInputElement>document.getElementById("inputPrice1");
    let inputQuantatity1Elem = <HTMLInputElement>document.getElementById("inputQuantatity1");

    let inputPrice2Elem = <HTMLInputElement>document.getElementById("inputPrice2");
    let inputQuantatity2Elem = <HTMLInputElement>document.getElementById("inputQuantatity2");

    let inputPrice3Elem = <HTMLInputElement>document.getElementById("inputPrice3");
    let inputQuantatity3Elem = <HTMLInputElement>document.getElementById("inputQuantatity3");

    let calc1: number = +inputPrice1Elem.value*+inputQuantatity1Elem.value;
    let calc2: number = +inputPrice2Elem.value*+inputQuantatity2Elem.value;
    let calc3: number = +inputPrice3Elem.value*+inputQuantatity3Elem.value;

    let subtotal: number = calc1+calc2+calc3;
    let tax:number = 0.0055;
    let tax2:number = subtotal*tax*10;
    let total:number = tax2+subtotal;

    let completeOutput: string = `Subtotal: ${subtotal}
    Tax: ${tax2}
    Total:  ${total}`;
    

    document.getElementById("completeOutput").innerText = "" + completeOutput;
  }
function Paint() {
    let inputCoverElem = <HTMLInputElement>document.getElementById("inputCover");

    let cover: number = +inputCoverElem.value;
    let paint: number = 0;
    let number1: number = 350;
    let number2: number = 700;

    if(cover < number1){
        paint = 0;
    }
    if(cover  > number1 && cover < number2){
        paint = 1;
    }
    if(cover >= number2){
        paint = 2;
    }
    // Osv ..
    // Switch løkke ville have været bedre..
  

    let completeOutput: string = `You will ned to purchase ${paint} gallons of paint to cover ${cover} square feet`;
    

    document.getElementById("completeOutput").innerText = "" + completeOutput;
  }
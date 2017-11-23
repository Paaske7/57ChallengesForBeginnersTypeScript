function sayingHello() {
  let inputNameElem = <HTMLInputElement>document.getElementById("inputName");

  let name: string = inputNameElem.value;
  
  document.getElementById("outputName").innerText = "" + name;
}
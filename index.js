let result = document.querySelector(".result");
const buttons = document.querySelectorAll(".number, .operator");
const opertor = document.querySelectorAll(".operator");
const clear = document.querySelector(".clear");
const equal = document.querySelector(".equal");
const delet = document.querySelector(".delete");
let acc = 0;

function btnClick(e) {
  if (acc === 0) {
    result.value = "";
    acc = 1;
    // console.log(acc);
  }

  let value = e.target.value;
  result.value += value;
}

function clearInput() {
  acc = 0;
  return (result.value = "0");
}

function add() {
  let input = result.value;
  let output = eval(input);
  result.value = output;
}

function deleteLAstChar() {
  let deletLast = result.value.slice(0, -1);
  return (result.value = deletLast);
}

function oneChar(e) {
  let value = result.value;
  let lastValue = value.slice(-1);
  let clickedValue = e.target.value;

  if (lastValue.match(/[+\-*/]/) && clickedValue.match(/[+\-*/]/)) {
    result.value = value.slice(0, -1) ;
  }
}

opertor.forEach((opertors) => {
  opertors.addEventListener("click", oneChar);
});

buttons.forEach((button) => {
  button.addEventListener("click", btnClick);
});

clear.addEventListener("click", clearInput);
equal.addEventListener("click", add);
delet.addEventListener("click", deleteLAstChar);

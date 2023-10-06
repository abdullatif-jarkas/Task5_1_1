let firstNum = document.querySelector('.first-num');
let secondNum = document.querySelector('.second-num');
let operation = document.querySelector('.operation');

let toggle = "first";

// Start Buttons

let zero = document.querySelector('#zero');
let one = document.querySelector('#one');
let two = document.querySelector('#two');
let three = document.querySelector('#three');
let four = document.querySelector('#four');
let five = document.querySelector('#five');
let six = document.querySelector('#six');
let seven = document.querySelector('#seven');
let eight = document.querySelector('#eight');
let nine = document.querySelector('#nine');

let dot = document.querySelector('#dot');
let equal = document.querySelector('#equal');
let minus = document.querySelector('#minus');
let plus = document.querySelector('#plus');
let multiply = document.querySelector('#multiply');
let divide = document.querySelector('#divide');
let clear = document.querySelector('#clear');
let deleteNum = document.querySelector('#delete');
// End Buttons

// Logic
let numberButtons = [zero, one, two, three, four, five, six, seven, eight, nine, dot];
numberButtons.forEach((num) => num.addEventListener('click', () => {
  if(toggle === "first") {
    firstNum.innerHTML += num.innerHTML;
  }
  else {
    secondNum.innerHTML += num.innerHTML;
  }
}));
let opButtons = [plus, minus, multiply, divide];
opButtons.forEach((op) => op.addEventListener('click', () => {
  operation.innerHTML += op.innerHTML;
  if(toggle == "first") {
    toggle = "second";
  } else {
    toggle = "first";
  }
}));

clear.addEventListener('click', () => {
  firstNum.innerHTML = '';
  secondNum.innerHTML = '';
  operation.innerHTML = '';
})
deleteNum.addEventListener('click', () => {
  if(toggle == "first") {
    let newNum = firstNum.innerHTML.split('').slice(0,firstNum.innerHTML.split('').length-1).join('')
    firstNum.innerHTML = newNum;
  } else {
    let newNum = secondNum.innerHTML.split('').slice(0, secondNum.innerHTML.split('').length-1).join('')
    secondNum.innerHTML = newNum;
  }
})

equal.addEventListener('click', () => {
  switch(operation.innerHTML) {
    case '+':
      firstNum.innerHTML = Number(firstNum.innerHTML) + Number(secondNum.innerHTML)
      secondNum.innerHTML = '';
      operation.innerHTML = '';
      if(toggle == "first") {
        toggle = "second";
      } else {
        toggle = "first";
      }
      break;
    case '-':
      firstNum.innerHTML = Number(firstNum.innerHTML) - Number(secondNum.innerHTML)
      secondNum.innerHTML = '';
      operation.innerHTML = '';
      if(toggle == "first") {
        toggle = "second";
      } else {
        toggle = "first";
      }
      break;
    case '*':
      firstNum.innerHTML = Number(firstNum.innerHTML) * Number(secondNum.innerHTML)
      secondNum.innerHTML = '';
      operation.innerHTML = '';
      if(toggle == "first") {
        toggle = "second";
      } else {
        toggle = "first";
      }
      break;
    case '/':
      firstNum.innerHTML = Number(firstNum.innerHTML) / Number(secondNum.innerHTML)
      secondNum.innerHTML = '';
      operation.innerHTML = '';
      if(toggle == "first") {
        toggle = "second";
      } else {
        toggle = "first";
      }
      break;
  }

});
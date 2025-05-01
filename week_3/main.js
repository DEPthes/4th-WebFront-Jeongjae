let firstNumber = '';
let secondNumber = '';
let operator = '';

const $result = document.querySelector('.number');
const $$buttons = document.querySelectorAll('.buttons button');
const $clear = document.querySelector('.clear');

$$buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (value === '=') {
      if (firstNumber && operator && secondNumber) {
        let result;
        switch (operator) {
          case '+':
            result = Number(firstNumber) + Number(secondNumber);
            break;
          case '-':
            result = Number(firstNumber) - Number(secondNumber);
            break;
          case '*':
            result = Number(firstNumber) * Number(secondNumber);
            break;
          case '/':
            if (Number(secondNumber) === 0) {
              result = 'Error';
            } else {
              result = Number(firstNumber) / Number(secondNumber);
            }
            break;
        }
        $result.value = result;
        firstNumber = String(result);
        secondNumber = '';
        operator = '';
      }
      return;
    }

    if (['+', '-', '*', '/'].includes(value)) {
      operator = value;
      return;
    }

    if (!operator) {
      firstNumber += value;
      $result.value = firstNumber;
    } else {
      secondNumber += value;
      $result.value = secondNumber;
    }
  });
});

$clear.addEventListener('click', () => {
  firstNumber = '';
  secondNumber = '';
  operator = '';
  $result.value = '';
});

let firstNumber = ''; //첫번째 숫자
let secondNumber = ''; //두번째 숫자
let operator = ''; // 연산자

const $result = document.querySelector('.number');
const $$buttons = document.querySelectorAll('.buttons button');
const $clear = document.querySelector('.clear');

$$buttons.forEach((button) => {
  //반복 , 각 버튼마다 클릭할 때 실행할 함수를 붙이기 위해
  button.addEventListener('click', () => {
    //긱 버튼을 실행했을때
    const value = button.textContent; //사용자가 클릭한 버튼 안의 글자(text)를 가져와서 value라는 변수에 저장

    if (value === '=') {
      if (firstNumber && operator && secondNumber) {
        let result; //계산 결과를 저장할 공간 필요
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
              //0으로 나누면 에러
              result = 'Error';
            } else {
              result = Number(firstNumber) / Number(secondNumber);
            }
            break;
        }
        $result.value = result; //계산 결과를 input 창에 표시

        firstNumber = String(result); //처음번호를 계산 결과로 설정 -> 계속 계산 할 수 있게, 나머지는  초기화
        secondNumber = '';
        operator = '';
      }
      return; //함수 종료
    }

    if (['+', '-', '*', '/'].includes(value)) {
      operator = value;
      return; //클릭한 값이 연산자 중 하나인지 확인,맞다면 operator에 저장하고 종료
    }

    if (!operator) {
      //연산자가 아직 선택되지 않았을 경우
      firstNumber += value; // 첫 번째 숫자에 입력값 누적
      $result.value = firstNumber; // 화면에 표시
    } else {
      secondNumber += value; //연산자가 있으면 두번째 숫자 누적
      $result.value = secondNumber; //화면에 표시
    }
  });
});

$clear.addEventListener('click', () => {
  firstNumber = '';
  secondNumber = '';
  operator = '';
  $result.value = '';
});
//C버튼 클릭시 모든 변수 input 초기화

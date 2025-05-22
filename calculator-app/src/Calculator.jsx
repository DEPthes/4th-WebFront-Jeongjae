import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [first, setFirst] = useState('');
  const [second, setSecond] = useState('');
  const [operator, setOperator] = useState('');
  const [display, setDisplay] = useState('');

  const handleClick = (value) => {
    if (value === '=') {
      let result;
      const a = Number(first);
      const b = Number(second);
      switch (operator) {
        case '+':
          result = a + b;
          break;
        case '-':
          result = a - b;
          break;
        case '*':
          result = a * b;
          break;
        case '/':
          result = b === 0 ? 'Error' : a / b;
          break;
        default:
          result = '';
      }
      setDisplay(result);
      setFirst(String(result));
      setSecond('');
      setOperator('');
      return;
    }

    if (['+', '-', '*', '/'].includes(value)) {
      setOperator(value);
    } else {
      if (!operator) {
        const updated = first + value;
        setFirst(updated);
        setDisplay(updated);
      } else {
        const updated = second + value;
        setSecond(updated);
        setDisplay(updated);
      }
    }
  };

  const clearAll = () => {
    setFirst('');
    setSecond('');
    setOperator('');
    setDisplay('');
  };

  const buttons = [
    '7',
    '8',
    '9',
    '/',
    '4',
    '5',
    '6',
    '*',
    '1',
    '2',
    '3',
    '+',
    '-',
    '0',
    '.',
    '=',
  ];

  return (
    <div className="calculator">
      <div className="top">
        <input type="text" className="number" value={display} readOnly />
        <button className="clear" onClick={clearAll}>
          C
        </button>
      </div>
      <div className="buttons">
        {buttons.map((btn, i) => (
          <button key={i} onClick={() => handleClick(btn)}>
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;

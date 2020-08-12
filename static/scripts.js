document.addEventListener('DOMContentLoaded', function () {
  'use strict'
  const display = document.querySelector('#screen>p');
  let displayData='0';
  let btn = document.querySelectorAll('li');
  btn.forEach(btn => {
    btn.addEventListener('click', () => {
      const numberValue = btn.getAttribute('data-number');
      const btnText = btn.innerText;
      if (btn.hasAttribute('data-number')) {
        if (display.innerText != '0') {
          displayData += numberValue;
          display.innerText = displayData;
        } else {
          displayData = numberValue;
          display.innerText = displayData;
        };
        return displayData;
      } else if (btn.hasAttribute('data-decimal')) {
        const decimalValue = btn.getAttribute('data-decimal');
        displayData += decimalValue;
        display.innerText = displayData;
        return displayData;
      } else if (btn.hasAttribute('data-operator')) {
        const operatorValue = btn.getAttribute('data-operator');
        displayData += operatorValue;
        display.innerText = displayData;
        return displayData;
      } else if (btn.hasAttribute('data-equals')){
        try {
          displayData = eval(displayData);
          display.innerText = displayData;
        }
        catch (e) {
          display.innerText = 'Syntax Error!';
          displayData = "";
        }
        return displayData;
      } else {
        return;
      };
    });
  });
  const clearBtn = document.querySelector('#clear');
  clearBtn.addEventListener('click', () => {
    displayData = '0';
    display.textContent = displayData;
  })
})
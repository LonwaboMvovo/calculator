let numbers = document.querySelectorAll('.numbers');
let functions = document.querySelectorAll('.functions');
let equal = document.querySelector('#equal');
let clear = document.querySelector('#clear');
let back = document.querySelector('#back');
let divide = document.querySelector('#divide');
let multiply = document.querySelector('#multiply');
let answer = document.querySelector('#answer');

let calculation = '';
let userCalculation = '';

for (var i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', function() {
        calculation += this.textContent;
        userCalculation += this.textContent;
        answer.textContent = userCalculation;
    });
}

for (var i = 0; i < functions.length; i++) {
    functions[i].addEventListener('click', function() {
        calculation += this.textContent;
        userCalculation += this.textContent;
        answer.textContent = userCalculation;
    })
}

equal.addEventListener('click', function() {
    calculation = eval(calculation);
    userCalculation = calculation;
    answer.textContent = calculation;
})

clear.addEventListener('click', function() {
    calculation = '';
    userCalculation = '';
    answer.textContent = calculation;
})

back.addEventListener('click', function() {
    calculation = calculation.slice(0, -1);
    userCalculation = userCalculation.slice(0, -1);
    answer.textContent = userCalculation;
})

divide.addEventListener('click', function() {
    calculation += '/';
    userCalculation += '÷';
    answer.textContent = userCalculation;
})

multiply.addEventListener('click', function() {
    calculation += '*';
    userCalculation += '×'
    answer.textContent = userCalculation;
})
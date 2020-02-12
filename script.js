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
        if (userCalculation !== 'Ans' && calculation.length === 13) {
            calculation += this.textContent;
            userCalculation += this.textContent;
            answer.value = userCalculation;
        }
    });
}

for (var i = 0; i < functions.length; i++) {
    functions[i].addEventListener('click', function() {
        calculation = calculation.toString();
        if (calculation.charAt(calculation.length - 1) !== '+' && calculation.charAt(calculation.length - 1) !== '-' && calculation.charAt(calculation.length - 1) !== '/' && calculation.charAt(calculation.length - 1) !== '*' && calculation.length === 13) {
            calculation += this.textContent;
            userCalculation += this.textContent;
            answer.value = userCalculation;
    }
    })
}

equal.addEventListener('click', function() {
    if (calculation !== '' && calculation.charAt(calculation.length - 1) !== '+' && calculation.charAt(calculation.length - 1) !== '-' && calculation.charAt(calculation.length - 1) !== '*' && calculation.charAt(calculation.length - 1) !== '/') {
        calculation = eval(calculation);
        calculation = calculation.toString();
        calculation = calculation.substr(0,13);
        userCalculation = 'Ans';
        answer.value = calculation;
        calculation = parseFloat(calculation);
    }
})

clear.addEventListener('click', function() {
    calculation = '';
    userCalculation = '';
    answer.value = calculation;
})

back.addEventListener('click', function() {
    if (typeof calculation === 'string') {
        calculation = calculation.slice(0, -1);
        userCalculation = userCalculation.slice(0, -1);
        answer.value = userCalculation;
    }
    if (userCalculation.charAt(userCalculation.length - 1) === 'n') {
        calculation = '';
        userCalculation = '';
        answer.value = calculation;
    }
})

divide.addEventListener('click', function() {
    calculation = calculation.toString();
    if (calculation.charAt(calculation.length - 1) !== '+' && calculation.charAt(calculation.length - 1) !== '-' && calculation.charAt(calculation.length - 1) !== '/' && calculation.charAt(calculation.length - 1) !== '*' && calculation.length < 13) {
        calculation += '/';
        userCalculation += '÷';
        answer.value = userCalculation;   
    }
})

multiply.addEventListener('click', function() {
    calculation = calculation.toString();
    if (calculation.charAt(calculation.length - 1) !== '+' && calculation.charAt(calculation.length - 1) !== '-' && calculation.charAt(calculation.length - 1) !== '/' && calculation.charAt(calculation.length - 1) !== '*' && calculation.length < 13) {
        calculation += '*';
        userCalculation += '×'
        answer.value = userCalculation;
    }
})
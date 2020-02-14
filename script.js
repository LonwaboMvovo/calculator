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
        if (userCalculation !== 'Ans' && userCalculation.length < 13) {
            calculation += this.textContent;
            userCalculation += this.textContent;
            answer.value = userCalculation;
        }
    });
}

for (var i = 0; i < functions.length; i++) {
    functions[i].addEventListener('click', function() {
        calculation = calculation.toString();
        if (calculation.charAt(calculation.length - 1) !== '+' && calculation.charAt(calculation.length - 1) !== '' && calculation.charAt(calculation.length - 1) !== '-' && calculation.charAt(calculation.length - 1) !== '/' && calculation.charAt(calculation.length - 1) !== '*' && userCalculation.length < 13) {
            calculation += this.textContent;
            userCalculation += this.textContent;
            answer.value = userCalculation;
        }
    })
}

equal.addEventListener('click', function() {
    if (calculation !== '' && userCalculation !== 'Ans' && calculation.charAt(calculation.length - 1) !== '+' && calculation.charAt(calculation.length - 1) !== '-' && calculation.charAt(calculation.length - 1) !== '*' && calculation.charAt(calculation.length - 1) !== '/') {
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
    // if (userCalculation.charAt(userCalculation.length - 1) === 'n') {
    //     calculation = '';
    //     userCalculation = '';
    //     answer.value = calculation;
    // }
    if (userCalculation === 'Ans') {
        calculation = '';
        userCalculation = '';
        answer.value = calculation;
    }
})

divide.addEventListener('click', function() {
    calculation = calculation.toString();
    if (calculation.charAt(calculation.length - 1) !== '+' && calculation.charAt(calculation.length - 1) !== '' && calculation.charAt(calculation.length - 1) !== '-' && calculation.charAt(calculation.length - 1) !== '/' && calculation.charAt(calculation.length - 1) !== '*' && userCalculation.length < 13) {
        calculation += '/';
        userCalculation += '÷';
        answer.value = userCalculation;   
    }
})

multiply.addEventListener('click', function() {
    calculation = calculation.toString();
    if (calculation.charAt(calculation.length - 1) !== '+' && calculation.charAt(calculation.length - 1) !== '' && calculation.charAt(calculation.length - 1) !== '-' && calculation.charAt(calculation.length - 1) !== '/' && calculation.charAt(calculation.length - 1) !== '*' && userCalculation.length < 13) {
        calculation += '*';
        userCalculation += '×'
        answer.value = userCalculation;
    }
})

document.addEventListener('keypress', function (key) {
    if (key.keyCode === 55) {
        if (userCalculation !== 'Ans' && calculation.length < 13) {
            calculation += 7;
            userCalculation += 7;
            answer.value = userCalculation;
        }
    }
    if (key.keyCode === 56) {
        if (userCalculation !== 'Ans' && calculation.length < 13) {
            calculation += 8;
            userCalculation += 8;
            answer.value = userCalculation;
        }
    }
    if (key.keyCode === 57) {
        if (userCalculation !== 'Ans' && calculation.length < 13) {
            calculation += 9;
            userCalculation += 9;
            answer.value = userCalculation;
        }
    }
    if (key.keyCode === 52) {
        if (userCalculation !== 'Ans' && calculation.length < 13) {
            calculation += 4;
            userCalculation += 4;
            answer.value = userCalculation;
        }
    }
    if (key.keyCode === 53) {
        if (userCalculation !== 'Ans' && calculation.length < 13) {
            calculation += 5;
            userCalculation += 5;
            answer.value = userCalculation;
        }
    }
    if (key.keyCode === 54) {
        if (userCalculation !== 'Ans' && calculation.length < 13) {
            calculation += 6;
            userCalculation += 6;
            answer.value = userCalculation;
        }
    }
    if (key.keyCode === 49) {
        if (userCalculation !== 'Ans' && calculation.length < 13) {
            calculation += 1;
            userCalculation += 1;
            answer.value = userCalculation;
        }
    }
    if (key.keyCode === 50) {
        if (userCalculation !== 'Ans' && calculation.length < 13) {
            calculation += 2;
            userCalculation += 2;
            answer.value = userCalculation;
        }
    }
    if (key.keyCode === 51) {
        if (userCalculation !== 'Ans' && calculation.length < 13) {
            calculation += 3;
            userCalculation += 3;
            answer.value = userCalculation;
        }
    }
    if (key.keyCode === 48) {
        if (userCalculation !== 'Ans' && calculation.length < 13) {
            calculation += 0;
            userCalculation += 0;
            answer.value = userCalculation;
        }
    }
    if (key.keyCode === 46) {
        calculation = '';
        userCalculation = '';
        answer.value = calculation;
    }
    if (key.keyCode === 13) {
        if (calculation !== '' && userCalculation !== 'Ans' && calculation.charAt(calculation.length - 1) !== '+' && calculation.charAt(calculation.length - 1) !== '-' && calculation.charAt(calculation.length - 1) !== '*' && calculation.charAt(calculation.length - 1) !== '/') {
            calculation = eval(calculation);
            calculation = calculation.toString();
            calculation = calculation.substr(0,13);
            userCalculation = 'Ans';
            answer.value = calculation;
            calculation = parseFloat(calculation);
        }
    }
})

document.addEventListener('keydown', function (key) {
    if (key.keyCode === 8) {
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
        if (userCalculation === 'Ans') {
            calculation = '';
            userCalculation = '';
            answer.value = calculation;
        } 
    }
    if (key.keyCode === 106) {
        calculation = calculation.toString();
        if (calculation.charAt(calculation.length - 1) !== '+' && calculation.charAt(calculation.length - 1) !== '' && calculation.charAt(calculation.length - 1) !== '-' && calculation.charAt(calculation.length - 1) !== '/' && calculation.charAt(calculation.length - 1) !== '*' && userCalculation.length < 13) {
        calculation += '*';
        userCalculation += '×'
        answer.value = userCalculation;
        }
    }
    if (key.keyCode === 111) {
        calculation = calculation.toString();
        if (calculation.charAt(calculation.length - 1) !== '+' && calculation.charAt(calculation.length - 1) !== '' && calculation.charAt(calculation.length - 1) !== '-' && calculation.charAt(calculation.length - 1) !== '/' && calculation.charAt(calculation.length - 1) !== '*' && userCalculation.length < 13) {
            calculation += '/';
            userCalculation += '÷';
            answer.value = userCalculation;   
        }
    }
    if (key.keyCode === 107) {
        calculation = calculation.toString();
        if (calculation.charAt(calculation.length - 1) !== '+' && calculation.charAt(calculation.length - 1) !== '' && calculation.charAt(calculation.length - 1) !== '-' && calculation.charAt(calculation.length - 1) !== '/' && calculation.charAt(calculation.length - 1) !== '*' && userCalculation.length < 13) {
            calculation += '+';
            userCalculation += '+';
            answer.value = userCalculation;
        }
    }
    if (key.keyCode === 109) {
        calculation = calculation.toString();
        if (calculation.charAt(calculation.length - 1) !== '+' && calculation.charAt(calculation.length - 1) !== '' && calculation.charAt(calculation.length - 1) !== '-' && calculation.charAt(calculation.length - 1) !== '/' && calculation.charAt(calculation.length - 1) !== '*' && userCalculation.length < 13) {
            calculation += '-';
            userCalculation += '-';
            answer.value = userCalculation;
        }
    }
})
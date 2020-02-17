//Variables for HTML elements:
const numbers = document.querySelectorAll('.numbers'); //All numbers from HTML file
const functions = document.querySelectorAll('.functions'); //Plus and minus from HTML file
const equal = document.querySelector('#equal'); //Equal from HTML file
const clear = document.querySelector('#clear'); //Clear from HTML file
const back = document.querySelector('#back'); //Back from HTML file
const divide = document.querySelector('#divide'); //Divide from HTML file
const multiply = document.querySelector('#multiply'); //Multiply from HTML file
const left_bracket = document.querySelector('#left_bracket'); //Left bracket from HTML file
const right_bracket = document.querySelector('#right_bracket'); //Right bracket from HTML file
const answer = document.querySelector('#answer'); //Text input from HTML file which will display the answer

//Variables for Javascript file:
let calculation = ''; //Initial calculation value
let userCalculation = ''; //Initial user calculation which is the calculation that will be displayed in 'answer'. Different from 'calculation' because the divide and multiply symbol is what is seen in 'answer' instead of slash and asterisk which is used by the eval method

//Mouse Click Inputs:
    //Numbers:
for (var i = 0; i < numbers.length; i++) { 
    numbers[i].addEventListener('click', function() { 
        if (userCalculation !== 'Ans' && userCalculation.length < 13) { //Number not added if it won't fit in 'answer'(userCalculation.length < 13); userCalculation is used because the actual calculation could have more than 13 characters and if equal had just been pressed(userCalculation !== 'Ans')
            calculation += this.textContent; //Adds the number of the button clicked to 'calculation'
            userCalculation += this.textContent; //Adds the number of the button clicked to 'userCalculation'
            answer.value = userCalculation; //Shows userCalculation in 'answer'
        }
    });
}
    //Functions:
for (var i = 0; i < functions.length; i++) {
    functions[i].addEventListener('click', function() {
        calculation = calculation.toString(); //Have to change 'calculation' to string because need to check if last character in 'calculation' is not another function and the method used is charAt which needs the variable to be a string
        if (calculation.charAt(calculation.length - 1) !== '+' && calculation !== '' && calculation.charAt(calculation.length - 1) !== '-' && calculation.charAt(calculation.length - 1) !== '/' && calculation.charAt(calculation.length - 1) !== '*' && userCalculation.length < 13) { //Function not added if it won't fit in answer display which is 13 characters(userCalculation.length < 13), if the last character in 'calculation' is not a function as well(calculation.charAt(calculation.length - 1) !== '+') and if there's no value for 'calculation' yet(calculation !== '')
            calculation += this.textContent; //Adds the function of the button clicked to 'calculation'
            userCalculation += this.textContent; //Adds the function of the button clicked to 'userCalculation'
            answer.value = userCalculation; //Shows userCalculation in 'answer'
        }
    })
}
    //Equal:
equal.addEventListener('click', function() {
    if (calculation !== '' && userCalculation !== 'Ans' && calculation.charAt(calculation.length - 1) !== '+' && calculation.charAt(calculation.length - 1) !== '-' && calculation.charAt(calculation.length - 1) !== '*' && calculation.charAt(calculation.length - 1) !== '/') { //Will not evaluate 'calculation' if 'calculation' is empty(calculation !== ''), equal had just been pressed(userCalculation !== 'Ans')
        calculation = eval(calculation); //Evaluates 'calculation' and returns answer
        calculation = calculation.toString(); //Turns 'calculation' into a string again so that it can be shortend into 13 characters which is needed for the substr method
        calculation = calculation.substr(0,13); //Shortens 'calculation' to 13 characters 
        userCalculation = 'Ans'; //Changes userCalculation to 'Ans' so that if the user would like to make more calculations then that is what will be displayed as a placeholder for the  'calculation' answer
        answer.value = calculation; //Shows userCalculation in 'answer'
        calculation = parseFloat(calculation); //Turns 'calculation' into a floating point number
    }
})

clear.addEventListener('click', function() {
    calculation = ''; //Clears 'calculation'
    userCalculation = ''; //Clears 'userCalculation'
    answer.value = calculation; //Shows userCalculation in 'answer'
})

back.addEventListener('click', function() {
    if (userCalculation === 'Ans') { //If back is pressed and 'userCalculation' is only = 'Ans' then it clears 'calculation'
        calculation = ''; //Clears 'calculation'
        userCalculation = ''; //Clears 'userCalculation'
        answer.value = calculation; //Shows userCalculation in 'answer'
    }
    if (typeof calculation === 'string') { //If back is pressed and 'calculation' is a string then only will it remove the last character of 'calculation' and 'userCalculation'; this is used because after 'equal' is clicked, 'calculation' is a number and should not be able to be reduced by clicking back 
        calculation = calculation.slice(0, -1); //Removes the last character of 'calculation'
        userCalculation = userCalculation.slice(0, -1); //Removes the last character of 'userCalculation'
        answer.value = userCalculation; //Shows userCalculation in 'answer'
    }
})

divide.addEventListener('click', function() {
    calculation = calculation.toString();
    if (calculation.charAt(calculation.length - 1) !== '+' && calculation !== '' && calculation.charAt(calculation.length - 1) !== '-' && calculation.charAt(calculation.length - 1) !== '/' && calculation.charAt(calculation.length - 1) !== '*' && userCalculation.length < 13) {
        calculation += '/';
        userCalculation += '÷';
        answer.value = userCalculation;   
    }
})

multiply.addEventListener('click', function() {
    calculation = calculation.toString();
    if (calculation.charAt(calculation.length - 1) !== '+' && calculation !== '' && calculation.charAt(calculation.length - 1) !== '-' && calculation.charAt(calculation.length - 1) !== '/' && calculation.charAt(calculation.length - 1) !== '*' && userCalculation.length < 13) {
        calculation += '*';
        userCalculation += '×'
        answer.value = userCalculation;
    }
})

left_bracket.addEventListener('click', function() {
    calculation = calculation.toString();
    if (userCalculation.length < 13) {
        calculation += this.textContent;
        userCalculation += this.textContent;
        answer.value = userCalculation;
    }
})

right_bracket.addEventListener('click', function() {
    calculation = calculation.toString();
    if (userCalculation.length < 13) {
        calculation += this.textContent;
        userCalculation += this.textContent;
        answer.value = userCalculation;
    }
})

//Keyboard Inputs
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
        if (calculation.charAt(calculation.length - 1) !== '+' && calculation !== '' && calculation.charAt(calculation.length - 1) !== '-' && calculation.charAt(calculation.length - 1) !== '/' && calculation.charAt(calculation.length - 1) !== '*' && userCalculation.length < 13) {
        calculation += '*';
        userCalculation += '×'
        answer.value = userCalculation;
        }
    }
    if (key.keyCode === 111) {
        calculation = calculation.toString();
        if (calculation.charAt(calculation.length - 1) !== '+' && calculation !== '' && calculation.charAt(calculation.length - 1) !== '-' && calculation.charAt(calculation.length - 1) !== '/' && calculation.charAt(calculation.length - 1) !== '*' && userCalculation.length < 13) {
            calculation += '/';
            userCalculation += '÷';
            answer.value = userCalculation;   
        }
    }
    if (key.keyCode === 107) {
        calculation = calculation.toString();
        if (calculation.charAt(calculation.length - 1) !== '+' && calculation !== '' && calculation.charAt(calculation.length - 1) !== '-' && calculation.charAt(calculation.length - 1) !== '/' && calculation.charAt(calculation.length - 1) !== '*' && userCalculation.length < 13) {
            calculation += '+';
            userCalculation += '+';
            answer.value = userCalculation;
        }
    }
    if (key.keyCode === 109) {
        calculation = calculation.toString();
        if (calculation.charAt(calculation.length - 1) !== '+' && calculation !== '' && calculation.charAt(calculation.length - 1) !== '-' && calculation.charAt(calculation.length - 1) !== '/' && calculation.charAt(calculation.length - 1) !== '*' && userCalculation.length < 13) {
            calculation += '-';
            userCalculation += '-';
            answer.value = userCalculation;
        }
    }
})

//make brackets their own thing - thinking of adding and if statement that if equal is pressed and calculation only has one bracket then a closing bracket will be added. Also there is type error when bracket is directly after a number without including an operation
//make plus and minus their own thing 
//when a number is clicked and equal had just been pressed it must clear answer and calculations
//make initial calculation value equal zero
//make error messages for when someone wants to divide by zero
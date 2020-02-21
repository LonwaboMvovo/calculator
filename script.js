    //Variables for HTML elements:
const numbers = document.querySelectorAll('.numbers'); //All numbers from HTML file
const plus = document.querySelector('#plus'); //Plus from HTML file
const subtract = document.querySelector('#subtract'); //Subtract from HTML file
const equal = document.querySelector('#equal'); //Equal from HTML file
const clear = document.querySelector('#clear'); //Clear from HTML file
const back = document.querySelector('#back'); //Back from HTML file
const divide = document.querySelector('#divide'); //Divide from HTML file
const multiply = document.querySelector('#multiply'); //Multiply from HTML file
const left_bracket = document.querySelector('#left_bracket'); //Left bracket from HTML file
const right_bracket = document.querySelector('#right_bracket'); //Right bracket from HTML file
const decimal_point = document.querySelector('#decimal_point'); //Decimal Point from HTML file
const answer = document.querySelector('#answer'); //Text input from HTML file which will display the answer

    //Variables and Functions for Javascript file:
let calculation = ''; //Initial calculation value
let userCalculation = ''; //Initial user calculation which is the calculation that will be displayed in 'answer'. Different from 'calculation' because the divide and multiply symbol is what is seen in 'answer' instead of slash and asterisk which is used by the eval method

const canAddBracket = () => { //Determines if closed bracket can be added
    let open = 0; //Iitial number of open brackets
    let close = 0; //Initial number of closed bracketss
    stringCalculation(); //Turns calculation to string so that for loop can run through the string to check for brackets but this wouldn't work if it were a number 
    for (let i = 0; i < calculation.length; i++) {
        if (calculation[i] === '(') { //For every open bracket in 'calculation', 'open' will increase by one
            open++;
        }
        if (calculation[i] === ')') { //For every closed bracket in 'calculation', 'close' will increase by one
            close++
        }
    }
    return open > close //Returns if the number of open brackets is greater than then number of closed brackets
}
const canAddDecimalPoint = () => { //Checks to see if a decimal point can be added
    stringCalculation(); //Turns 'calculation into a string
    let opt = false; //Opt is a variable used to see if there is a variable in a certain position
    for (let i = calculation.length; opt === false && i > -1; i--) {
        if (calculation[i] === '+' || calculation[i] === '-' || calculation[i] === '*' || calculation[i] === '/' || calculation[i] === '(' || i === 0) { //Only want numbers in the string
            opt = true; //Stops for loop
            if(calculation.slice(i+1,calculation.length).includes('.')) {
                return false; //If there is a decimal point already in the number then another one will not be able to be added
            }
        }
    }
    return true; //Allows decimal point to be added
}
const undefinedBoi = () => {
    if (userCalculation === 'Undefined boiiiii') { //If 'userCalculation' is 'Undefined boiiiii' which means the answer was infinity, this function will clear 'calculation' and 'userCalculation'. This function is so that once the user gets an answer that is infinity then it will prohibit them from doing more calculations on it
        operationClear(); //Calls 'operationClear' which clears calculations and updates answer
    }
}
const Ans = () => {
    if (userCalculation === 'Ans') { //If 'userCalculation' is 'Ans' that means an answer was just declared but the answer was not infinity, this function will clear 'calculation' and 'userCalculation'. This function is used so that when someone presses a number just after doing a calculation then everything is cleared and the new calculation will start with that number
        operationClear(); //Calls 'operationClear' which clears calculations and updates answer
    }
}
const userCalculationLess13 = () => { //Checks to see if the length of 'userCalculation' is less than 13
    return userCalculation.length < 13;
}
const CanAddOperation = () => { //Checks to see if an operation can be added
    return calculation.charAt(calculation.length - 1) !== '+' && calculation.charAt(calculation.length - 1) !== '-' && calculation.charAt(calculation.length - 1) !== '/' && calculation.charAt(calculation.length - 1) !== '*' && calculation !== '';
}
const operationPlus = () => {
    stringCalculation(); //Have to change 'calculation' to string because need to check if last character in 'calculation' is not another function and the method used is charAt which needs the variable to be a string
    if (CanAddOperation()&& userCalculationLess13()) { //Function not added if it won't fit in answer display which is 13 characters(userCalculationLess13()), if the last character in 'calculation' is not a function as well(calculation.charAt(calculation.length - 1) !== '+') and if there's no value for 'calculation' yet(calculation !== '')
        calculation += '+'; //Adds the function of the button clicked to 'calculation'
        userCalculation += '+'; //Adds the function of the button clicked to 'userCalculation'
        getAnswerUser(); //Shows userCalculation in 'answer'
    }
}
const operationSubtract = () => {
    stringCalculation(); //Have to change 'calculation' to string because need to check if last character in 'calculation' is not another function and the method used is charAt which needs the variable to be a string
        if (CanAddOperation() && userCalculationLess13()) { //Function not added if it won't fit in answer display which is 13 characters(userCalculationLess13()), if the last character in 'calculation' is not a function as well(calculation.charAt(calculation.length - 1) !== '+') and if there's no value for 'calculation' yet(calculation !== '')
            calculation += '-'; //Adds the function of the button clicked to 'calculation'
            userCalculation += '-'; //Adds the function of the button clicked to 'userCalculation'
            getAnswerUser(); //Shows userCalculation in 'answer'
        }
}
const operationEqual = () => {
    if (calculation.charAt(calculation.length - 1) !== '(' && calculation.charAt(calculation.length - 1) !== '+' && calculation.charAt(calculation.length - 1) !== '-' && calculation.charAt(calculation.length - 1) !== '/'  && calculation.charAt(calculation.length - 1) !== '*' && calculation !== '') { //Will not evaluate 'calculation' if 'calculation' is empty(calculation !== ''), equal had just been pressed()
        while (canAddBracket() === true) {
            calculation += ')'; //Adds left bracket to 'calculation'
            userCalculation += ')'; //Adds left bracket to 'Useralculation'
        }
        calculation = eval(calculation); //Evaluates 'calculation' and returns answer
        stringCalculation(); //Turns 'calculation' into a string again so that it can be shortend into 13 characters which is needed for the substr method
        calculation = calculation.substr(0,13); //Shortens 'calculation' to 13 characters 
        // noZeros();
        userCalculation = 'Ans'; //Changes userCalculation to 'Ans' so that if the user would like to make more calculations then that is what will be displayed as a placeholder for the  'calculation' answer
        if (calculation === 'Infinity') {
            userCalculation = 'Undefined boiiiii';
            getAnswerUser(); //Shows userCalculation in 'answer'
        }
        else {
            calculation = parseFloat(calculation); //Turns 'calculation' into a floating point number
            getAnswer(); //Shows userCalculation in 'answer'
        }
    }
}
const operationClear = () => {
    calculation = ''; //Clears 'calculation'
    userCalculation = ''; //Clears 'userCalculation'
    getAnswer(); //Shows userCalculation in 'answer'
}
const operationBack = () => {
    undefinedBoi();
    if (userCalculation === 'Ans') { //If back is pressed and 'userCalculation' is only = 'Ans' then it clears 'calculation'
        operationClear();
    }
    else if (typeof calculation === 'string') { //If back is pressed and 'calculation' is a string then only will it remove the last character of 'calculation' and 'userCalculation'; this is used because after 'equal' is clicked, 'calculation' is a number and should not be able to be reduced by clicking back 
        calculation = calculation.slice(0, -1); //Removes the last character of 'calculation'
        userCalculation = userCalculation.slice(0, -1); //Removes the last character of 'userCalculation'
        getAnswerUser(); //Shows userCalculation in 'answer'
    }
}
const operationDivide = () => {
    stringCalculation(); //Have to change 'calculation' to string because need to check if last character in 'calculation' is not another function and the method used is charAt which needs the variable to be a string
    if (CanAddOperation() && userCalculationLess13()) { //Function not added if it won't fit in answer display which is 13 characters(userCalculationLess13()), if the last character in 'calculation' is not a function as well(calculation.charAt(calculation.length - 1) !== '+') and if there's no value for 'calculation' yet(calculation !== '')
        calculation += '/'; //Adds slash(which represents divide in JavaScript) to 'calculation'
        userCalculation += '÷'; //Adds divide symbol to 'Useralculation'
        getAnswerUser(); //Shows userCalculation in 'answer'
    }
}
const operationMultiply = () => {
    stringCalculation();  //Have to change 'calculation' to string because need to check if last character in 'calculation' is not another function and the method used is charAt which needs the variable to be a string
    if (CanAddOperation() && userCalculationLess13()) { //Function not added if it won't fit in answer display which is 13 characters(userCalculationLess13()), if the last character in 'calculation' is not a function as well(calculation.charAt(calculation.length - 1) !== '+') and if there's no value for 'calculation' yet(calculation !== '')
        calculation += '*'; //Adds asterisk(which represents multiply in JavaScript) to 'calculation'
        userCalculation += '×' //Adds multiplication symbol to 'Useralculation'
        getAnswerUser(); //Shows userCalculation in 'answer'
    }
}
const operationLeftBracket = () => {
    undefinedBoi(); //Runs 'undefinedBoi' to check is 'userCalculation' is infinity
    stringCalculation(); //Turned into string to make sure 'calculation' is not longer than 13 characters
    if (userCalculationLess13() && calculation.charAt(calculation.length - 1) !== '(') { //Checks if 'userCalculation' is not longer than 13 characters
       if (CanAddOperation()) { //Checks that Calculation is not empty and that the last character in 'calculation' is not a operation
            calculation += '*('; //Adds times and bracket becuase the eval method doesn't work without it
            userCalculation += '('; //Just adds bracket to 'userCalculation' so that user doesn't see asterisk
            getAnswerUser(); //Shows userCalculation in 'answer'      
       }
       else {
        calculation += '('; //Adds left bracket to 'calculation'
        userCalculation += '('; //Adds left bracket to 'Useralculation'
        getAnswerUser(); //Shows userCalculation in 'answer'
       }
    }
}
const operationRightBracket = () => {
    stringCalculation(); //Turned into string to make sure 'calculation' is not longer than 13 characters
    //Checks if 'userCalculation' is not longer than 13 characters
    if (canAddBracket() === true && calculation.charAt(calculation.length - 1) !== '(' && calculation.includes('(') && CanAddOperation() && userCalculationLess13()) { //Checks that Calculation is not empty and that the last character in 'calculation' is not a operation
        calculation += ')'; //Adds left bracket to 'calculation'
        userCalculation += ')'; //Adds left bracket to 'Useralculation'
        getAnswerUser(); //Shows userCalculation in 'answer'
    }
}
const operationDecimalPoint = () => {
    canAddDecimalPoint();
    if (canAddDecimalPoint() && userCalculationLess13() && calculation.charAt(calculation.length - 1) !== '(' && calculation.charAt(calculation.length - 1) !== ')' && calculation.charAt(calculation.length - 1) !== '.' && CanAddOperation()) {
        calculation += '.'; //Adds left bracket to 'calculation'
        userCalculation += '.'; //Adds left bracket to 'Useralculation'
        getAnswerUser(); //Shows userCalculation in 'answer'
        stringCalculation();
    }
}
const getAnswer = () => {
    answer.value = calculation; //Some parts need the answer that shows to be 'calculation'
}
const getAnswerUser = () => {
    answer.value = userCalculation; //Some parts need the answer that shows to be 'userCalculation'
}
const stringCalculation = () => {
    calculation = calculation.toString(); //Turns 'calculation' to string
}

//Mouse Click Inputs:
    //Numbers:
for (let i = 0; i < numbers.length; i++) { 
    numbers[i].addEventListener('click', function() { 
        undefinedBoi();
        Ans();
        if (userCalculationLess13()) { //Number not added if it won't fit in 'answer'(userCalculationLess13()); userCalculation is used because the actual calculation could have more than 13 characters and if equal had just been pressed()
            calculation += this.textContent; //Adds the number of the button clicked to 'calculation'
            userCalculation += this.textContent; //Adds the number of the button clicked to 'userCalculation'
            getAnswerUser(); //Shows userCalculation in 'answer'
        }
    });
}

    //Plus:
plus.addEventListener('click', operationPlus);

    //Subtract:
subtract.addEventListener('click', operationSubtract);

    //Equal:
equal.addEventListener('click', operationEqual);

    //Clear:
clear.addEventListener('click', operationClear);

    //Back:
back.addEventListener('click', operationBack);

    //Divide:
divide.addEventListener('click', operationDivide);

    //Multiply:
multiply.addEventListener('click',operationMultiply);

    //Left Bracket:
left_bracket.addEventListener('click', operationLeftBracket);

    //Right Bracket:
right_bracket.addEventListener('click', operationRightBracket);

    //Decimal Point:
decimal_point.addEventListener('click', operationDecimalPoint);

//Keyboard Inputs:
    //Keypress Event Listeners:
document.addEventListener('keypress', function (key) {
        //Numbers:
    for (let i = 48; i < 58; i++) { //For loop that runs through the numpad key codes
        undefinedBoi();
        Ans();
        if (key.keyCode === i && userCalculationLess13()) {
            calculation += i-48; //The key code for zero is 48 so have to minus by 48 to get the number pressed
            userCalculation += i-48;
            getAnswerUser();
        }
    }

        //Decimal Point:
    if (key.keyCode === 46) {
        operationDecimalPoint();
    }

        //Equal:
    if (key.keyCode === 13) {
        operationEqual();
    }

        //Multiply:
    if (key.keyCode === 42) {
        operationMultiply();
    }

        //Divide:
    if (key.keyCode === 47) {
        operationDivide();
    }
    
        //Plus:
    if (key.keyCode === 43) {
        operationPlus();
    }
    
        //Subtract:
    if (key.keyCode === 45) {
        operationSubtract();
    }

        //Left Bracket:
    if (key.keyCode === 40) {
        operationLeftBracket();
    }

        //Left Bracket:
    if (key.keyCode === 41) {
        operationRightBracket();
    }
})

    //Keydown Event Listeners:
document.addEventListener('keydown', function (key) {
        //Back:
    if (key.keyCode === 8) {
        operationBack();
    }
    
    //Clear or Delete
    else if (key.keyCode === 46) {
        operationClear();
    }
})

//Done By Lonwabo Mvovo
// Dom way
// var one = document.getElementById("one");
// var two = document.getElementById("two");
// var three = document.getElementById("three");
// var four = document.getElementById("four");
// var five = document.getElementById("five");
// var six = document.getElementById("six");
// var seven = document.getElementById("seven");
// var eight = document.getElementById("eight");
// var nine = document.getElementById("nine");
// var add = document.getElementById("add");
// var subtract = document.getElementById("subtract");
// var multiply = document.getElementById("multiply");
// var divide = document.getElementById("divide");
// var equals = document.getElementById("equals");

// function num1() {
//     var num1 = this.innerText;
//     return num1;
// }

// one.addEventListener("click", num1);
// two.addEventListener("click", num1);
// three.addEventListener("click", num1);
// four.addEventListener("click", num1);
// five.addEventListener("click", num1);
// six.addEventListener("click", num1);
// seven.addEventListener("click", num1);
// eight.addEventListener("click", num1);
// nine.addEventListener("click", num1);




// Smart way
// var butts = document.querySelectorAll("button");
// for (var i = 0; i < butts.length; i++) {
//     function func() {
//         var num1 = this;
//         return console.log(num1);
//     }
//     butts[i].addEventListener("click", func);
// }

var numbers = document.getElementsByClassName("numbers");
var functions = document.querySelectorAll(".function");
var equals = document.querySelector("#equals");
var answer = document.querySelector("#answer");

var num1 = [];

for (var i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", function() {
        num1.push(this.textContent);
        answer.textContent = num1;
    })
}

// for (var i = 0; i < numbers.length; i++) {
//     numbers[i].addEventListener("click", function() {
//         var answer1 = num1 + this.textContent;
//         answer.textContent = answer1;
//         done = false;
//     })
// }

for (var i = 0; i < functions.length; i++) {
    functions[i].addEventListener("click", function() {
        num1.push(this.textContent);
        answer.textContent = num1;
    })
}
/* Your calculator is going to contain functions for all of the basic math operators you 
typically find on simple calculators, so start by creating functions for the following 
items and testing them in your browser’s console.
add
subtract
multiply
divide
*/

function add (a, b) {
	return a + b;
}

function subtract (a, b) {
	return a - b;
}

function multiply (a , b) {
	return a * b;
}

function divide (a , b) {
    return a / b;
}

/* Create a new function operate that takes an operator and 2 numbers and then calls 
one of the above functions on the numbers. */

function operate (operator, a, b) {
    switch (operator) {
        case add:
            return add(a, b);
        case subtract:
            return subtract(a, b);
        case multiply:
            return multiply(a, b);
        case divide:
            return divide(a, b);
    }
}

/*Create the functions that populate the display when you click the number buttons… 
you should be storing the ‘display value’ in a variable somewhere for use in the 
next step.*/

/* Make the calculator work! You’ll need to store the first number that is input into the calculator when a user 
presses an operator, and also save which operation has been chosen and then operate() on them when the user presses 
the “=” key. You should already have the code that can populate the display, so once operate() has been called, 
update the display with the ‘solution’ to the operation. This is the hardest part of the project. You need to 
figure out how to store all the values and call the operate function with them. Don’t feel bad if it takes you a 
while to figure out the logic. */

const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");
const numbers = document.querySelectorAll(".numbers");
const equals = document.querySelector(".equals");
display.textContent = "0";
let displayValue1 = 0;
let displayValue2 = 0;
let operator1 = "";
function roundToTwo(num) {    
    return +(Math.round(num + "e+2")  + "e-2");
}
function checkZero(operator, b) {
    if (operator === divide && b === "0") {
        return display.textContent = "Wrong!";
    }
}

    const buttonPress = buttons.forEach((button) => {
        button.addEventListener('click', function() {
            if (display.textContent === "0" && button.className === "numbers") {
                display.textContent = "";
                display.textContent = `${display.textContent}${button.id}`;
                displayValue1 = `${button.id}`;
            } else if (display.textContent !== "0" && button.className === "numbers") {
                display.textContent = `${display.textContent}${button.id}`;
                displayValue1 += `${button.id}`;
            } else if (button.className === "clear") {
                display.textContent = "0";
                displayValue1 = 0;
                displayValue2 = 0;
                operator1 = "";
                numbers.forEach(function(number) {
                    number.classList.remove("numbersTwo");
                })
                equals.classList.remove("numbersTwo");
            } else if (button.className === "operator") {
                operator1 = add;
                numbers.forEach(function(number) {
                    number.classList.add("numbersTwo");
                })
                equals.classList.add("numbersTwo");
                if (button.id === "add") {
                    operator1 = add;
                } else if (button.id === "subtract") {
                    operator1 = subtract;
                } else if (button.id === "divide") {
                    operator1 = divide;
                } else if (button.id === "multiply") {
                    operator1 = multiply;
                }
            } else if (display.textContent === "0" && button.className === "numbers numbersTwo") {
                displayValue2 = `${button.id}`;
            } else if (display.textContent !== "0" && button.className === "numbers numbersTwo") {
                displayValue2 += `${button.id}`;
            } else if (button.className === "equals numbersTwo") {
                let finalAns = operate(operator1, Number(displayValue1), Number(displayValue2));
                finalAns = roundToTwo(finalAns);
                if (operator1 = divide && Number(displayValue2) === 0) {
                    finalAns = "Wrong!";
                }
                display.textContent = `${finalAns}`;
                displayValue1 = finalAns;
                displayValue2 = 0;
                numbers.forEach(function(number) {
                    number.classList.remove("numbersTwo");
                })
                equals.classList.remove("numbersTwo");
            }
        })
    });
/*
clear.addEventListener("click", function clearDisplay(event) {
    event.display.textContent = "";
});

if (button.id != "" && button.id != "clear" && button.id != "add") {
            display.textContent = "";
            display.textContent = `${display.textContent}${button.id}`;
            } else if (button.id === "clear") {
                display.textContent = "";
            } else if (button.id === "add") {
                display.textContent = "";
            }

else if (operator === "add" && button.className === "numbers" && displayValue2 === 0) {
                display.textContent = `${display.textContent}${button.id}`;
                displayValue2 = `${button.id}`;
                console.log(displayValue2);
                console.log(operator);
            } else if (operator === "add" && button.className === "numbers" && displayValue2 !== 0) {
                display.textContent = `${display.textContent}${button.id}`;
                displayValue2 += `${button.id}`;
                console.log(displayValue2);
                console.log(operator);
            }

*/
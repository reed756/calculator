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

const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");
const clear = document.getElementsByClassName("clear");
display.textContent = "0";
let displayValue1 = 0;
let displayValue2 = 0;
let operator = "";

    const buttonPress = buttons.forEach((button) => {
        button.addEventListener('click', function() {
            if (display.textContent === "0" && button.className === "numbers" && operator !== "add") {
                display.textContent = "";
                display.textContent = `${display.textContent}${button.id}`;
                displayValue1 = `${button.id}`;
                console.log(operator);
            } else if (display.textContent !== "0" && button.className === "numbers" && operator !== "add") {
                display.textContent = `${display.textContent}${button.id}`;
                displayValue1 += `${button.id}`;
                console.log(operator);
            } else if (button.className === "clear") {
                display.textContent = "0";
                displayValue1 = 0;
                displayValue2 = 0;
                operator = "";
            } else if (button.className = "operator") {
                operator = `${button.id}`;
                display.textContent = "0";
                console.log(operator);
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
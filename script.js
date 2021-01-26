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
const display = document.querySelector("#display");
const one = document.querySelector("#one");
const two = document.querySelector("#two");

one.addEventListener('click', One);
two.addEventListener('click', Two);

function One() {
    display.textContent = `${display.textContent}1`;
}

function Two() {
    display.textContent = `${display.textContent}2`;
}
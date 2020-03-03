function add(a, b) {
	return a + b;
}

function subtract(a, b) {
	return a - b;
}

function multiply(a, b) {
	return a * b;
}

function divide(a, b) {
    return a / b
}

function operate(operator, a, b) {
    return operator(a,b)
}

const display = document.querySelector('p')

function displayNumber() {
    let btn = document.querySelectorAll('button');
    btn.forEach(btn => btn.addEventListener('click', function() {
        let selected = btn.value
        display.textContent += selected;
    }))
}

displayNumber()

function clearDisplay() {
    display.textContent = '';

}
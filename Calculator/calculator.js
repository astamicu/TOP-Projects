function add(a, b) {
    result = a + b
    console.log(result)
	return result
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
    console.log(a, operator, b)
    if (operator == add) {
        add(a,b)
    }
    display.textContent = add(a,b)
}

const display = document.querySelector('p')
const btn = document.querySelectorAll('button');

function displayNumber(selected) {
    if (selected == '+') {
        display.textContent = ''
    }

    if (selected == '=') {
        display.textContent = result
    }


    else {
        yas = display.textContent += selected;
        // console.log(yas)
    }
}

btn.forEach(btn => btn.addEventListener('click', function() {
    selected = ''
    selected += btn.value
    
    if (selected == '+' || selected == '-' || selected == '/' || selected == '*') {
        a = Number(yas)
        // console.log(a)
        // console.log(selected)
        display.textContent = ''
        if (selected == '+') {
            operator = 'add'
            // console.log(operator)
            return operator
        }
    }
    
    if (selected == '=') {
        b = Number(yas)
        // console.log(a)
        // console.log(operator)
        // console.log(b)
        // console.log(selected)
        operate(operator, a, b)
        
    }
    
    displayNumber(selected)
    
}))

// 

function clearDisplay() {
    display.textContent = '';
}


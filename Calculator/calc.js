function add(a, b) {
    return a + b
}

function subtract(a, b) {
	return a - b
}

function multiply(a, b) {
	return a * b
}

function divide(a, b) {
    if (b == '0') {
        display.textContent = 'DON\'T'
    }
    else {

        return a / b
    }
}

function operate(operator, a, b) {
    result = self[operator](a,b)
    console.log(a, operator, b + ' = ' + result)
    return result
}

const display = document.querySelector('p')
const btn = document.querySelectorAll('button');
result = null

function displayNumber(selected) {
    if (selected == '=') {
        if (result.toString().length > 10) {
            result = result.toFixed(9)
        }
        display.textContent = result
    }
    else {
        no = display.textContent += selected;
         
    }
}

btn.forEach(btn => btn.addEventListener('click', function() {
    selected = ''
    selected += btn.value

    if (selected == '+' || selected == '-' || selected == '/' || selected == '*') {
        a = Number(no)
        display.textContent = ''
        if (result != null) {
            a = Number(result)
        }
        if (selected == '+') {  
            operator = 'add'
            return operator
        }
        if (selected == '-') {
            operator = 'subtract'
            return operator
        }
        if (selected == '*') {
            operator = 'multiply'
            return operator
        }
        if (selected == '/') {
            operator = 'divide'
            return operator
        }
    }
    
    if (selected == '=') {
        b = Number(no)
        operate(operator, a, b)
    }
    
    displayNumber(selected)
    
}))

// 

function clearDisplay() {
    display.textContent = '';
    result = null
    a = null
    b = null 
}


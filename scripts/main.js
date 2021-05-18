let buttonAdd = document.getElementById("buttonAdd");
let buttonSubtract = document.getElementById("buttonSubtract");
let buttonDivide = document.getElementById("buttonDivide");
let buttonMultiply = document.getElementById("buttonMultiply");
let buttonEqual = document.getElementById("buttonEqual")
let buttonNumbers = document.querySelectorAll(".button-number");
let buttonClear = document.getElementById("buttonClear");

let display = document.getElementById("display");
let displayValue = "";


let firstNumber = 0;
let secondNumber = 0;
let result = 0;

function setFirstNumber(){
    firstNumber = Number(displayValue);
}

function clearDisplay(){
    displayValue = "";
    display.textContent = "";
}

function setOperation(operation){
    display.setAttribute("data-operation", operation);
};

buttonAdd.addEventListener("click", function(){
    if(!firstNumber) setFirstNumber();
    clearDisplay();
    setOperation("add");
});

buttonSubtract.addEventListener("click", function(){
    if(!firstNumber) setFirstNumber();
    clearDisplay();
    setOperation("subtract");
});

buttonDivide.addEventListener("click", function(){
    if(!firstNumber) setFirstNumber();
    clearDisplay();
    setOperation("divide");
});

buttonMultiply.addEventListener("click", function(){
    if(!firstNumber) setFirstNumber();
    clearDisplay();
    setOperation("multiply");
});

buttonEqual.addEventListener('click', function(){
    secondNumber = Number(displayValue);
    switch(display.getAttribute("data-operation")){
        case "add":
            result = firstNumber + secondNumber;
            break;
        case "subtract":
            result = firstNumber - secondNumber;
            break;
        case "divide":
            result = firstNumber / secondNumber;
            break;
        case "multiply":
            result = firstNumber * secondNumber;
            break;    
    }
    display.textContent = result;
    firstNumber = result;
})

buttonNumbers.forEach(button => {
    button.addEventListener("click", () => {
        displayValue += button.textContent;
        display.textContent = displayValue;
    })
})

buttonClear.addEventListener("click", () => {
    firstNumber = 0;
    secondNumber = 0;
    result = 0;
    display.textContent = "";
    displayValue = "";
})
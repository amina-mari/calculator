let buttonAdd = document.getElementById("buttonAdd");
let buttonSubtract = document.getElementById("buttonSubtract");
let buttonDivide = document.getElementById("buttonDivide");
let buttonMultiply = document.getElementById("buttonMultiply");
let buttonEqual = document.getElementById("buttonEqual")
let buttonNumbers = document.querySelectorAll(".button-number");
let buttonClear = document.getElementById("buttonClear");
let buttonDot = document.getElementById('buttonDot');
let buttonBackspace = document.getElementById("buttonBackspace");

let display = document.getElementById("display");
let displayValue = "";


let firstNumber;
let secondNumber;
let result = 0;

function setFirstNumber(){
    firstNumber = Number(displayValue);
}

function setSecondNumber(){
    secondNumber = Number(displayValue);
}

function clearDisplay(){
    displayValue = "";
    display.textContent = "";
}

function setOperation(operation){
    display.setAttribute("data-operation", operation);
};

function operate(){
    if(typeof firstNumber === "number"
    && typeof secondNumber === "number"
    && display.getAttribute("data-operation")){

        switch(display.getAttribute("data-operation")){
            case "add":
                result = firstNumber + secondNumber;
                break;
            case "subtract":
                result = firstNumber - secondNumber;
                break;
            case "divide":
                if(secondNumber === 0) {
                    alert("Don't crash my calculator!!!")
                    return;
                }
                result = firstNumber / secondNumber;
                break;
            case "multiply":
                result = firstNumber * secondNumber;
                break;    
        }
        if(result !== Math.round(result)){
            result = Number(result.toFixed(2)); 
            return result;
        }
    } else alert("You won't crash it ;)");
}

buttonAdd.addEventListener("click", function(){
    if(typeof firstNumber === "number") setSecondNumber();    
    
    if(typeof firstNumber === "number" 
    && typeof secondNumber === "number"
    && display.getAttribute("data-operation")) firstNumber = operate();
    
    setOperation("add");
    
    if(typeof firstNumber !== "number") setFirstNumber();
    // console.log(`First: ${firstNumber}\nSecond: ${secondNumber}\nDisplayValue: ${displayValue}`);
    clearDisplay();
});

buttonSubtract.addEventListener("click", function(){
    if(typeof firstNumber === "number") setSecondNumber();    
    
    if(typeof firstNumber === "number" 
    && typeof secondNumber === "number"
    && display.getAttribute("data-operation")) firstNumber = operate();

    setOperation("subtract");

    if(typeof firstNumber !== "number") setFirstNumber();

    clearDisplay();
});

buttonDivide.addEventListener("click", function(){
    if(typeof firstNumber === "number") setSecondNumber();  
         
    if(typeof firstNumber === "number" 
    && typeof secondNumber === "number"
    && display.getAttribute("data-operation")) firstNumber = operate();

    setOperation("divide");

    if(typeof firstNumber !== "number") setFirstNumber();

    clearDisplay();
});

buttonMultiply.addEventListener("click", function(){
    if(typeof firstNumber === "number") setSecondNumber();    
    
    if(typeof firstNumber === "number" 
    && typeof secondNumber === "number"
    && display.getAttribute("data-operation")) firstNumber = operate();

    setOperation("multiply");

    if(typeof firstNumber !== "number") setFirstNumber();

    clearDisplay();
});

buttonEqual.addEventListener('click', function(){
    secondNumber = Number(displayValue);
    operate();
    displayValue = result;
    display.textContent = result;
    firstNumber = result;
    display.setAttribute("data-operation", "");
})

buttonNumbers.forEach(button => {
    button.addEventListener("click", () => {
        displayValue += button.textContent;
        display.textContent = displayValue;
    })
})

buttonClear.addEventListener("click", () => {
    firstNumber = null;
    secondNumber = null;
    result = 0;
    display.textContent = "";
    display.setAttribute("data-operation", "");
    displayValue = "";
})

buttonDot.addEventListener('click', function(){
    if(!displayValue) return;
    let displayTest = displayValue.split("");
    for(let i = 0; i <displayTest.length; i++){
        if(displayTest[i] === ".") return;
    }

    displayValue += buttonDot.textContent;
    display.textContent = displayValue;  
})

buttonBackspace.addEventListener('click', ()=>{
    if(!displayValue) return;

    let arrayDisplay = displayValue.split("");
    arrayDisplay.pop();
    displayValue = arrayDisplay.join("");

    display.textContent = displayValue;
})
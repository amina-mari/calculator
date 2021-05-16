let buttonAdd = document.getElementById("buttonAdd");
let buttonSubtract = document.getElementById("buttonSubtract");
let buttonDivide = document.getElementById("buttonDivide");
let buttonMultiply = document.getElementById("buttonMultiply");
let buttonEqual = document.getElementById("buttonEqual")
let inputNumber = document.getElementById("inputNumber");

let firstNumber = 0;
let secondNumber = 0;
let result = 0;

function setFirstNumber(){
    firstNumber = Number(inputNumber.value);
    inputNumber.value = "";
}

function setOperation(operation){
    inputNumber.setAttribute("data-operation", operation);
};

buttonAdd.addEventListener("click", function(){
    setFirstNumber();
    setOperation("add");
});

buttonSubtract.addEventListener("click", function(){
    setFirstNumber();
    setOperation("subtract");
});

buttonDivide.addEventListener("click", function(){
    setFirstNumber();
    setOperation("divide");
});

buttonMultiply.addEventListener("click", function(){
    setFirstNumber();
    setOperation("multiply");
});

buttonEqual.addEventListener('click', function(){
    secondNumber = Number(inputNumber.value);
    switch(inputNumber.getAttribute("data-operation")){
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
    inputNumber.value = result;
})
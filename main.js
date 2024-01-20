const btn_0 = document.getElementById ("0")
const btn_1 = document.getElementById ("1")
const btn_2 = document.getElementById ("2")
const btn_3 = document.getElementById ("3")
const btn_4 = document.getElementById ("4")
const btn_5 = document.getElementById ("5")
const btn_6 = document.getElementById ("6")
const btn_7 = document.getElementById ("7")
const btn_8 = document.getElementById ("8")
const btn_9 = document.getElementById ("9")
const btn_plus = document.getElementById ("+")
const btn_minus =document.getElementById ("-")
const btn_multiplication = document.getElementById ("*")
const btn_divider = document.getElementById ("/")
const btn_equal  = document.getElementById ("=")
const btn_AC = document.getElementById ("AC")
const btn_fullstop = document.getElementById (".")
const total = document.getElementById("total")


let currentInput = "0";
let previousInput= "";
let operator= "";
function handleOperatorClick(newOperator) {
    if (operator !== "") {
        calculateResult();
    }
    operator = newOperator;
    previousInput = currentInput;
    currentInput = "0";
}

function numberClick(number){
    if (operator === "=")
    {
        currentInput = number;
        operator = "";
        previousInput = "";

    }
    else if (currentInput === "0") {
            currentInput = number;
        } else
         {
            currentInput += number;
        }
        updateDisplay();
    }
    
    btn_0.onclick = function ()
    {
        numberClick ("0");
    }

btn_1.onclick = function ()
    {
        numberClick ("1");
    }
    btn_2.onclick = function ()
    {
        numberClick ("2");
    }
    btn_3.onclick = function ()
    {
        numberClick ("3");
    }
    btn_4.onclick = function ()
    {
        numberClick ("4");
    }
    btn_5.onclick = function ()
    {
        numberClick ("5");
    }
    btn_6.onclick = function ()
    {
        numberClick ("6");
    }
    btn_7.onclick = function ()
    {
        numberClick ("7");
    }
    btn_8.onclick = function ()
    {
        numberClick ("8");
    }
    btn_9.onclick = function ()
    {
        numberClick ("9");
    }

    btn_plus.onclick = function ()
    {
        handleOperatorClick ("+");
    }

    btn_minus.onclick = function ()
    {
        handleOperatorClick ("-");
    }

    btn_multiplication.onclick = function ()
    {
        handleOperatorClick ("*");
    }

    btn_divider.onclick = function ()
    {
        handleOperatorClick ("/");
    }
    
    btn_equal.onclick = function ()
    {
         handleOperatorClick("=");
    }

    btn_AC.onclick = function ()
    {
         ("AC");
    }
    




// Function to handle operator button clicks
function handleOperatorClick(newOperator) {
    if (operator !== "") {
        calculateResult();
    }
    operator = newOperator;
    previousInput = currentInput;
    currentInput = "0";
}

// Function to perform the calculation
function calculateResult() {
    let result;
    const num1 = parseFloat(previousInput);
    const num2 = parseFloat(currentInput);

    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num1 / num2;
            break;
        default:
            result = num2;
    }

    currentInput = result.toString();
    operator = "=";
    console.log("result",result)
    updateDisplay();
    console.log("", result)
    console.log("cu",currentInput)
    console.log("pre", previousInput)
}

function updateDisplay() {
    total.innerHTML = currentInput
}



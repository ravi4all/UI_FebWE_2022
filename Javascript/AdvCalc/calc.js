window.addEventListener("load", initEvents);

// 1. One operator should replace previous one
// 2. Working of back space
// 3. Clear text box if we click on C

var textBox;

function initEvents() {
    let operands = document.querySelectorAll(".operand");
    let operators = document.querySelectorAll(".operator");
    let res =  document.querySelector(".result");
    textBox = document.querySelector("#box");
    textBox.setAttribute("readonly",true);
    for(let i = 0; i < operands.length; i++) {
        operands[i].addEventListener("click", appendNumbers);
    }

    for(let i = 0; i < operators.length; i++) {
        operators[i].addEventListener("click", appendOperator);
    }
    res.addEventListener("click", calc);
}

function appendNumbers() {
    console.log(this);
    var num = this.innerHTML;
    textBox.value += num;
}

function appendOperator() {
    var opr = this.innerHTML;
    textBox.value += opr;
}

function calc() {
    var expression = textBox.value;
    var result = eval(expression);
    textBox.value = result;
}
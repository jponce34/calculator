const numberB = document.querySelectorAll('[data-number]');
const operationB = document.querySelectorAll('[data-operation');
const equalsB = document.querySelector('[data-equals]');
const clearB = document.querySelector('[data-all-clear]');
const currentOperandText = document.querySelector('[data-current-operand]')
var num = 10; //previous operand
var num2 = 5; //current operand
var sum = 0;

function operate ( num, num2, operator){
    if(operator == '+'){
        add(num, num2);
        updateDisplay();
    }

    else if(operator == '+'){
        subtract(num, num2);
        updateDisplay();
    }

    else if(operator == '+'){
        multiply(num, num2);
        updateDisplay();
    }

    else if(operator == '+'){
        divide(num, num2);
        updateDisplay();
    }

}

function updateDisplay(){
    //
}

function add(num, num2){
     sum = num+num2;
}

function subtract(num, num2){
     sum = num-num2;
}
function multiply(num, num2){
     sum = num*num2;
}

function divide(num, num2){
     sum = num/num2;
}

function erase(){
   num = 0;
   num2 = 0;
}

console.log(num);
console.log(add(num, num2));
console.log()
console.log(subtract(num, num2));
console.log(multiply(num, num2));
console.log(divide(num, num2));

updateDisplay();
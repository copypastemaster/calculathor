const sum = (a,b) => {
    return a+b
};

const prod = (a,b) => {
    return a * b;
}

const diff = (a,b) => {
    return a - b;
}

const quotient = (a,b) => {
    return a/b;
}

const operate = function(pick, firstNum, secondNum){
    return pick(firstNum, secondNum);
}




const display = document.querySelector(".display-box");
const one = document.querySelector(".one")
const two = document.querySelector(".two")
const three = document.querySelector(".three")
const four = document.querySelector(".four")
const five = document.querySelector(".five")
const six = document.querySelector(".six")
const seven = document.querySelector(".seven")
const eight = document.querySelector(".eight")
const nine = document.querySelector(".nine")
const zero = document.querySelector(".zero")



// adding an event listener on buttons

const numbers = [zero, one, two, three, four, five, six, seven, eight, nine];

const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const multiply = document.querySelector('.multiply');
const divide = document.querySelector('.divide');
const equal = document.querySelector('.equals');
const clear = document.querySelector('.clear');



numbers.forEach((num) => {
    num.addEventListener('click', () => {
       val = +(display.value += num.value);;
    })
})

const calculator = { 
    displayValue: null,
    firstOperand: null,
    secondOperand: null,
    operator: null,
}

let val = null;

plus.addEventListener('click', () => {
    val = display.value;
    calculator.firstOperand = Number(val);
    display.value = '';

      equal.addEventListener('click', () => {
        let val2 = null;
        val2 = display.value;
        calculator.secondOperand = Number(val2);
        display.value = Number(calculator.firstOperand + calculator.secondOperand);
        return display.value;
        });
})


clear.addEventListener('click', () => {
    display.value = '';
})






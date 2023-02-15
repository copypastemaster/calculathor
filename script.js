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

const operate = function(operator, firstNum, secondNum){
    return operator(firstNum, secondNum);
}

const clear = function () {
    
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



// adding a click event listener

const numbers = [zero, one, two, three, four, five, six, seven, eight, nine];

let val = 0;
let val2 = 0;

numbers.forEach((num) => {
    num.addEventListener('click', () => {
       val = +(display.value += num.value);;
    })
})

const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const multiply = document.querySelector('.multiply');
const divide = document.querySelector('.divide');
const equal = document.querySelector('.equals');


plus.addEventListener('click', () => {
    display.value = val;
    display.value = 0;
})

equal.addEventListener('click', () => {
    display.value = val2;
    display.value = parseInt(val + val2);
})





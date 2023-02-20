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



let initValue = null;
let secondValue = null;

numbers.forEach((nums) => {
    nums.addEventListener('click', () => {
        display.value += nums.value
    })
})


plus.addEventListener('click', () => {
    initValue = Number(display.value);
    display.value = 0;
    display.value = '';
})

equal.addEventListener('click', () => {
    secondValue = Number(display.value);
    display.value = initValue + secondValue;
})




// const obj = { 
//     firstOperand: null,
//     secondOperand: null,
//     total: null,
// }


// plus.addEventListener('click', () => {
//     obj.firstOperand = Number(display.value);
//     display.value = 0;
//     display.value = '';

//     equal.addEventListener('click', () => {
//         obj.secondOperand = Number(display.value);
//         obj.total = obj.firstOperand + obj.secondOperand;
//         display.value = obj.total;
//         console.log(obj);
//     })
// })

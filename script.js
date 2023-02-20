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
const del = document.querySelector('.undo');




numbers.forEach((nums) => {
    nums.addEventListener('click', () => {
        display.value += nums.value
    })
})


let initValue = null;
let secondValue = null;


function sum () {

    plus.addEventListener('click', () => {
        initValue = Number(display.value);
        display.value = 0;
        display.value = '';
    })
    
    equal.addEventListener('click', () => {
        secondValue = Number(display.value);
        display.value = initValue + secondValue;
    })    
}

plus.addEventListener('click', sum())


clear.addEventListener('click', () => {
    initValue = null;
    secondValue = null;
    display.value = 0;
    display.value = '';
})


del.addEventListener('click', () => {
    let a = [...display.value];
    let b = a.pop();
    display.value = a.join('');
})
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

numbers.forEach((nums) => {
    nums.addEventListener('click', () => {
        display.value += nums.value
    })
})


const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const multiply = document.querySelector('.multiply');
const divide = document.querySelector('.divide');
const equal = document.querySelector('.equals');
const clear = document.querySelector('.clear');
const del = document.querySelector('.undo');

const arr = [plus, minus, multiply, divide]


arr.forEach((item) => {
    item.addEventListener('click', () => {
        display.value += item.value;
    })
})

equal.addEventListener('click', () => {
    let a = display.value;
    let b = eval(a);
    display.value = b;
})


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

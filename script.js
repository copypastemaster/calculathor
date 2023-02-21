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



let initValue = null;
let secondValue = null;
let total = null;

let toggle = false;


function addition () {
    plus.addEventListener('click', () => {
        initValue = Number(display.value);
        display.value = 0;
        display.value = '';
        toggle = true;
    })

    equal.addEventListener('click', () => {
        secondValue = Number(display.value)

        if (toggle == true) {
            display.value = initValue + secondValue;
        }
        
        toggle = false;
    })
    
}

plus.addEventListener('click', addition());




// function add () {
    
//     console.log(`initval: ${initValue}`)

//     plus.addEventListener('click', () => {
//         initValue = Number(display.value);
//         console.log(`secondInitval: ${initValue}`);
//         display.value = 0;
//         display.value = '';
//     })
    
//     equal.addEventListener('click', () => {
//             total = operate(sum, initValue, Number(display.value))
//             display.value = total;
//         })
// }
// plus.addEventListener('click', add())


// function difference () {
    
//     console.log(`initval: ${initValue}`)

//     minus.addEventListener('click', () => {
//         initValue = Number(display.value);
//         console.log(`secondInitval: ${initValue}`);
//         display.value = 0;
//         display.value = '';
//     })
    
//     equal.addEventListener('click', () => {
//         total = operate(diff, initValue, Number(display.value));
//         display.value = total;
//     })
// }
// minus.addEventListener('click', difference());





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

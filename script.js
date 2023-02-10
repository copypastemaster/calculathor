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


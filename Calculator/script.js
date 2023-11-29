let currentValue = '0'; //Initialization of the variable to store the value


// Function that takes the input from the calculator
const takeInputValue = (num) => {
    if (num == 'C') {
        currentValue = '';
    }
    else if(num == 'DEL'){
        currentValue = currentValue.slice(0,-1);
    }
    else if (currentValue === '0') {
        currentValue = num;
    }
    else {
        currentValue = currentValue + '' + num;
    }
    document.querySelector('#display').value = currentValue;
}


// Function that performs the evaluation of the numbers
const calculate = () => {
    currentValue = eval(currentValue);
    document.querySelector('#display').value = currentValue;
}
const display = document.getElementById('display');

const appendToDisplay = (input) => {
    const lastChar = display.value.slice(-1);
    const operators = ['+', '-', '*', '/'];
    
    if (operators.includes(lastChar) && operators.includes(input)) {
        display.value = display.value.slice(0, -1) + input;
    } else {
        display.value += input;
    }
};


const clearDisplay = () => {
    display.value = '';
};

const calculate = () => {
    try {
        display.value = eval(display.value);
    }
    catch(error) {
        display.value = 'Error'; 
    }
};
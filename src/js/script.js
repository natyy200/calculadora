// música
const music = new Audio("./src/assets/sound/click.wav");
music.volume = 0.2;

const display = document.getElementById('display');

const appendToDisplay = (input) => {
    music.play();
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
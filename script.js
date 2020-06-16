console.log('Hello world');
// create a variable that allowed a onclick function.
// create a function 
// declare a variable and set it equal to the screen class.
let screen = document.querySelector('.screen');
//console.log(currentText);
// declare a variable for all numbers to make them clickable.
let AllButtonArray = document.querySelectorAll('.number');
//console.log(allButtonArray);
// declare the all clear button using .querySelector.
let allClearbutton = document.querySelector('.allClear-sign');

// declare a variable and set it up to the equal button.
let equalbutton = document.querySelector('.equal-sign');

// declare a variable and set it to the delete button.
let deletebutton = document.querySelector('.delete-sign');

let appendNumber = document.querySelector('.number')


// we going to use .addEventListener to the allbuttonItems to enable click.
// declare a variable called currentText.
let currentText = '';
// addEventListener requires a function, defined below.
function addAllListeners(buttons){
    for (let button of buttons){
        button.addEventListener('click', change);
        //console.log(buttons);
    }
}
addAllListeners(AllButtonArray);

function change(param){
    if(param === undefined){
        currentText.innerHTML = '';
    } else {
        currentText = currentText + param.target.innerHTML;
        screen.innerHTML = currentText;
    }
}
//console.log(undefined);

allClearbutton.addEventListener('click', clearScreen);
// create a funtion to update the screen.
function clearScreen(){
    currentText.innerHTML = '';
}

deletebutton.addEventListener('click', eraseNum);
//create a function to delete last element.
function eraseNum(){
    currentText.innerHTML = currentText.innerHTML.slice(0, -1);
}

equalbutton.addEventListener('click', equalClick);
function equalClick(){
    screenText = currentText.innerHTML;
    console.log(arr);
    let array = currentText.innerHTML.split('');
    let num1 = arr[0] * 1;
    let num2 = arr[1] * 1;
    let operator = '';
    let result = 0;

    if(operator === '*'){
        currentText.innerHTML = result + (num1 * num2);
    } else if(operator === '/'){
        currentText.innerHTML = result + (num1 / num2);
    } else if(operator === '+'){
        currentText.innerHTML === result + (num1 + num2);
    } else if(operator === '-'){
        currentText.innerHTML = result + (num1 - num2);
    }
}
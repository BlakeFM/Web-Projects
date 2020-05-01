// Define our UI element variables
let button = null;
let countDiv = null;
let button2 = null;
let sequenceDiv2 = null;
let sequenceTextInput = null;

// Gets called on page load
let onPageLoad = () => {
    // Set our UI elements
    button = document.getElementById("button1");
    countDiv = document.getElementById("count");
    button2 = document.getElementById("button2");
    sequenceDiv2 = document.getElementById("sequence");
    sequenceTextInput = document.getElementById("sequenceText");
    // Set the button click event to run onButtonClick
    button.addEventListener("click", onButtonClick);
    button2.addEventListener("click", onButton2Click)
}

// Gets called on button click
let onButtonClick = () => {
    // Change the count div text
    countDiv.textContent = 'Yessah'
}
let onButton2Click = () => {
    let totalRepeat = parseInt(sequenceTextInput.value);
    let text="0       ";
    let number1=BigInt(0);
    let number2=BigInt(1);
    for (let count = 1; count < totalRepeat; count+=1) {
        let number3=number1+number2;
        number1=number2;
        number2=number3;
        text += number3.toLocaleString()+"       ";
    }
    sequenceDiv2.textContent = text;
}
// On page load, run the onPageLoad function
document.addEventListener("DOMContentLoaded", onPageLoad);





// Define our UI element variables
let button = null;
let countDiv = null;
let button2 = null;
let sequenceDiv2 = null;


// Gets called on page load
let onPageLoad = () => {
    // Set our UI elements
    button = document.getElementById("button1");
    countDiv = document.getElementById("count");
    button2 = document.getElementById("button2");
    sequenceDiv2 = document.getElementById("sequence");
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
    sequenceDiv2.textContent = 'To be done'
}
// On page load, run the onPageLoad function
document.addEventListener("DOMContentLoaded", onPageLoad);





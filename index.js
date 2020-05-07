// Define our UI element variables
let button = null;
let countDiv = null;
let button2 = null;
let sequenceDiv2 = null;
let sequenceTextInput = null;
let button3 = null;
let countDiv2 = null;
let countTextInput = null;
let button4 = null;
let babybutton = null;

// Gets called on page load
let onPageLoad = () => {
    // Set our UI elements

    button = document.getElementById("button1");
    countDiv = document.getElementById("count");
    button2 = document.getElementById("button2");
    sequenceDiv2 = document.getElementById("sequence");
    sequenceTextInput = document.getElementById("sequenceText");
    button3 = document.getElementById("button3");
    countDiv2 = document.getElementById("count1");
    countTextInput = document.getElementById("countText")
    button4 = document.getElementById("button4")
    babybutton = document.getElementById("babybutton")


    // Set the button click event to run onButtonClick
    button.addEventListener("click", onButtonClick);
    button2.addEventListener("click", onButton2Click)
    button3.addEventListener("click", onButton3Click)
    button4.addEventListener("click", onButton4Click)
    babybutton.addEventListener("click", onButton5Click)
}

// Gets called on button click
let onButtonClick = () => {
    // Change the count div text
    countDiv.textContent = 'Yessah'
}

let onButton5Click = () => {
    let gif = document.createElement("img");
    gif.src = "baby.gif";
    gif.height = 400;
    let holder = document.getElementById("Image");
    holder.appendChild(gif);
}

let onButton4Click = () => {
    //Creates the image
    let img = document.createElement("img");
    //Pulls the file
    img.src = "Picture.jpg";
    img.height = 450;
    //Adds the image on click
    let holder = document.getElementById("ImageHolder");
    //appendChild is a function of holder/ A function
    holder.appendChild(img);
}

let onButton2Click = () => {
    let totalRepeat = parseInt(sequenceTextInput.value);
    let text = "0       ";
    let number1 = bigInt(0);
    let number2 = bigInt(1);
    for (let count = 1; count < totalRepeat; count += 1) {
        let number3 = number1 + number2;
        number1 = number2;
        number2 = number3;
        text += number3.toLocaleString() + "       ";
    }
    sequenceDiv2.textContent = text;
}


let onButton3Click = () => {
    let Repeat = parseInt(countTextInput.value);
    let text = "0     ";
    bigInt(0);
    let number5 = bigInt(0);
    for (let count = 1; count < Repeat + 1; count += 1) {
        let number6 ;
        number6 = number5 + bigInt(1);
        number5 = number5 + bigInt(1)
        text += number6.toLocaleString() + "     ";
    }
    countDiv2.textContent = text;
}
// On page load, run the onPageLoad function
document.addEventListener("DOMContentLoaded", onPageLoad);





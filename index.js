const buttons = document.querySelectorAll("button");

const arrayButtons = [];

for (let button of buttons) {
    arrayButtons.push(button);
}

const button1 = arrayButtons[0];
const button2 = arrayButtons[1];

function clickButton() {
    alert("You clicked me!");
}

button1.addEventListener("click", clickButton);
button2.addEventListener("click", clickButton);
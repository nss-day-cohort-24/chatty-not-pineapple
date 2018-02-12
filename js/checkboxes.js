"use strict";



var darkBackground = document.getElementById("dark-box");
// var checkBoxLarge = document.getElementById("inlineCheckbox2");
var message = document.getElementsByClassName("message-entry");
// var messagesText = document.getElementsByClassName("message-post");

function darkSide() {
    if (darkBackground.checked === true) {
        message.style.backgroundColor = "red";
        console.log("the box is checked");
    }
    
}
darkBackground.addEventListener("click", darkSide);


function testMe() {
    console.log("let's try to make the midnight theme and text larger");
}
module.exports = {darkSide, testMe};
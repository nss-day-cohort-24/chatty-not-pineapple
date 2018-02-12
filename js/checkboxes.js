"use strict";



var darkBackground = document.getElementById("dark-box");
// var checkBoxLarge = document.getElementById("inlineCheckbox2");
var message = document.getElementsByClassName("username-item");
// var messagesText = document.getElementsByClassName("message-post");

function darkSide() {
    if (darkBackground.checked === true) {
        message.style.color = "blue";
        console.log("the box is checked");
    }
    
}
darkBackground.addEventListener("click", darkSide);

var changeText = document.getElementById("text-box");
// var checkBoxLarge = document.getElementById("inlineCheckbox2");
var message = document.getElementsByClassName("navbar");
// var messagesText = document.getElementsByClassName("message-post");

function largeText() {
    if (changeText.checked === true) {
        console.log("the box is checked");
    }
    
}
changeText.addEventListener("click", largeText);

module.exports = {darkSide, largeText};
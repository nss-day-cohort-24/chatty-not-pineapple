"use strict";



var darkBackground = document.getElementById("dark-box");
// var checkBoxLarge = document.getElementById("inlineCheckbox2");
// var message = document.getElementsByClassName("username-item");
// var messagesText = document.getElementsByClassName("message-post");

function darkSide() {
    var message = document.getElementsByClassName("username-item"), i, len;
    if (darkBackground.checked === true) {
        console.log("the box is checked");

        for (i = 0, len = message.length; i < len; i++) {
          message[i].style.color = '#2C81B7';
        }
    }else if(darkBackground.checked === false) {
        for (i = 0, len = message.length; i < len; i++) {
          message[i].style.color = '#ffffff';
        }
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
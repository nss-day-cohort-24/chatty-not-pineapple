"use strict";

var darkBackground = document.getElementById("dark-box");
// var checkBoxLarge = document.getElementById("inlineCheckbox2");
// var message = document.getElementsByClassName("username-item");
// var messagesText = document.getElementsByClassName("message-post");

function darkSide() {
    var message = document.getElementsByClassName("username-item"), i, len;
    var background = document.getElementsByClassName("conversation-item"), x, taco;
    if (darkBackground.checked === true) {
        console.log("the box is checked");
        for (i = 0, len = message.length; i < len; i++) {
          message[i].style.color = '#2C81B7';
        }
        for (x = 0, taco = background.length; x < taco; x++) {
            background[x].style.backgroundColor = '#aaaaaa';
          }
    }else if(darkBackground.checked === false) {
        for (i = 0, len = message.length; i < len; i++) {
          message[i].style.color = '#ffffff';
        }
        for (x = 0, taco = background.length; x < taco; x++) {
            background[x].style.backgroundColor = '#e7e7e7';
           }
    }
}

darkBackground.addEventListener("click", darkSide);

var changeText = document.getElementById("text-box");
// var checkBoxLarge = document.getElementById("inlineCheckbox2");
var message = document.getElementsByClassName("navbar");
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

module.exports = {darkSide};


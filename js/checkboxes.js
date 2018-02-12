"use strict";

var darkBackground = document.getElementById("dark-box");
var largeText = document.getElementById("text-box");


function darkSide() {
    var conversation = document.getElementsByClassName("conversation-item"), x, taco;
    var background = document.getElementsByTagName("h2"), y, burrito;

    if (darkBackground.checked === true) {
        console.log("the box is checked");
        for (x = 0, taco = conversation.length; x < taco; x++) {
            conversation[x].style.color = '#ffffff';
        }
        for (y = 0, burrito = background.length; y < burrito; y++) {
            background[y].style.backgroundColor = '#2c314f';
        }
    }else if(darkBackground.checked === false) {
        for (x = 0, taco = conversation.length; x < taco; x++) {
            conversation[x].style.color = '#2c314f';
        }
        for (y = 0, burrito = background.length; y < burrito; y++) {
            background[y].style.backgroundColor = '#efeee9';
        }
    }
}

darkBackground.addEventListener("click", darkSide);

function bigText() {
    var user = document.getElementsByClassName("username-item"), i, len;
    var conversation = document.getElementsByClassName("conversation-item"), x, taco;

    if (largeText.checked === true) {
        console.log("the box is checked");
        for (i = 0, len = user.length; i < len; i++) {
            user[i].style.fontSize = '30px';
        }
        for (x = 0, taco = conversation.length; x < taco; x++) {
            conversation[x].style.fontSize = '40px';
        }
    }else if(largeText.checked === false) {
        for (i = 0, len = user.length; i < len; i++) {
            user[i].style.fontSize = '15px';
        }
        for (x = 0, taco = conversation.length; x < taco; x++) {
            conversation[x].style.fontSize = '20px';
        }
    }
}

largeText.addEventListener("click", bigText);


module.exports = {darkSide, bigText};


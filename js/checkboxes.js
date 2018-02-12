"use strict";

var darkBackground = document.getElementById("dark-box");
// var checkBoxLarge = document.getElementById("inlineCheckbox2");
// var message = document.getElementsByClassName("username-item");
// var messagesText = document.getElementsByClassName("message-post");

function darkSide() {
    var user = document.getElementsByClassName("username-item"), i, len;
    var conversation = document.getElementsByClassName("conversation-item"), x, taco;
    var background = document.getElementsByTagName("h2"), y, burrito;

    if (darkBackground.checked === true) {
        console.log("the box is checked");
        for (i = 0, len = user.length; i < len; i++) {
          user[i].style.color = '#aaaaaa';
        }
        for (x = 0, taco = conversation.length; x < taco; x++) {
            conversation[x].style.color = '#ffffff';
        }
        for (y = 0, burrito = conversation.length; y < burrito; y++) {
            background[y].style.backgroundColor = '#2c314f';
        }
    }else if(darkBackground.checked === false) {
        for (i = 0, len = user.length; i < len; i++) {
          user[i].style.color = '#7acdcf';
        }
        for (x = 0, taco = conversation.length; x < taco; x++) {
            conversation[x].style.color = '#aaaaaa';
        }
        for (y = 0, burrito = conversation.length; y < burrito; y++) {
            background[y].style.backgroundColor = '#efeee9';
        }
    }
}

darkBackground.addEventListener("click", darkSide);


module.exports = {darkSide};


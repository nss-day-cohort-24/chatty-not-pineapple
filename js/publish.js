"use strict";

let deleter = require("./delete");

/* 
Declarations
*/


let count = 0;
var temp = {

	username: "" , 
	convo: ""

};
var convoArr = [{

	username: "",
	conversation: ""
}];



function sendButtonEvent(event){ 
	/*
    Once enter key is pressed, event occurs that triggers enter-text-field element to pass
    data contained to a variable, which is unshifted into convoArr[]. Then,
    printMessage is passed the current convoArr[].
    */
    

	if (event.keyCode === 13){
		count++;
		temp += document.getElementByClassName("enter-text-field").innerHTML; //this is problematic.
		var empty = convoArr.username.unshift("Jisie").conversation.unshift(temp);
        
	}
    
	printMessage(convoArr, count);
}


function printMessage(lastMessage, position){
	/*
    Push array of conversation to the HMTL page.
    */

	var textField = document.getElementById("message-history-div"); 
	var printText;

	printText += `<div class="text-message">
    <h4 class="username"> ${lastMessage.username} </h4>
	<h2 class="conversation item"> ${lastMessage.conversation} </h2>
    </div> <button id="delete-button-${position}"></button>`; //reference to the position.
    
	deleter.createDeleteEntry(position, printText, convoArr); // This passes a reference to a specific text message element and creates a delete button.
    
	textField.innerHTML += printText;

}

module.exports = {sendButtonEvent, printMessage};

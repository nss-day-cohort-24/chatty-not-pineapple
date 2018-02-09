"use strict";

/* 
Declarations
*/

var enterButton = document.getElementById("send-button");
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
    Once send button is pressed, event occurs that triggers enter-text-field element to pass
    data contained to a variable, which is unshifted into convoArr[]. Then,
    printMessage is passed the current convoArr[].
    */
	event.keyCode === 13 ? (
		temp += document.getElementByClassName("enter-text-field").innerHTML,
		convoArr.unshift(temp) 
	): 
		undefined;
    
	printMessage(convoArr);
}


function printMessage(lastMessage){
	/*
    Push array of conversation to the HMTL page.
    */

	var textField = document.getElementById("message-history-div"); 
	var printText;

	printText += `<div class="text-message">
    <h4 class="username"> ${lastMessage.username} </h4>
	<h2 class="conversation item"> ${lastMessage.conversation} </h2>
    </div>`;

	textField.innerHTML += printText;

}

module.exports = undefined;

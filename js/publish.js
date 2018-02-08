"use strict";

var enterButton = document.getElementById("send-button");
var convoArr = [{
	username: "",
	conversation: ""
}];
var temp = {username: "" , convo: ""};


function sendButtonEvent(event){
	event.keyCode === 13 ? (
		temp += document.getElementByClassName("enter-text-field").innerHTML,
		convoArr.unshift(temp) // 
	): 
		undefined
	;
    
	printMessage(convoArr);
}


function printMessage(lastMessage){
	var textField = document.getElementById("message-history-div"); 
	var printText;

	printText += `<h4 class="username"> ${lastMessage.username} </h4>`;
	printText += `<h2 class="conversation item"> ${lastMessage.conversation} </h2>`;
	printText += "</div>";

	textField.innerHTML += printText;

}

module.exports = undefined;

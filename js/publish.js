"use strict";

let deleter = require("./delete");
let loader = require("./load");
/* 
Declarations
*/


let count = 5;
let enterButton = document.getElementById("send-button");
let temp = {

	username: "",
	conversation: "",
	id: ""

};


let convoArr = loader.retrievedConvo;



function sendButtonEvent(event){ 
	/*
    Once enter key is pressed, event occurs that triggers enter-text-field element to pass
    data contained to a variable, which is unshifted into convoArr[]. Then,
    printMessage is passed the current convoArr[].
    */
    

	if (event.keyCode === 13 || event.which === 13){
		count++;
		temp += document.getElementByClassName("enter-text-field").innerHTML;
		convoArr.unshift({username:"Jisie", conversation: `${temp}`, id: `${count}` });
		printMessage(convoArr);
	}  
}


function printMessage(lastMessage){
	/*
    Push array of conversation to the HMTL page.
    */

	var textField = document.getElementById("message-history-div"); 
	var printText;

	printText += `<div class="message-entry">
    <h4 class="username"> ${lastMessage.username} </h4>
	<h2 class="conversation item"> ${lastMessage.conversation} </h2>
    </div> <button id="delete-button"></button>`; //reference to the position.
    
	textField.innerHTML += printText;
	//	deleter.createDeleteEntry(position, printText, convoArr); // This passes a reference to a specific text message element and creates a delete button.
	deleter.deleteParent();

}

module.exports = {sendButtonEvent, printMessage};

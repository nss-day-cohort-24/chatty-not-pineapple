"use strict";

let deleter = require("./delete");
let loader = require("./load");
/* 
Declarations
*/


let count = 5;
let enterButton = document.getElementById("enter-text-field");
let temp = document.getElementById("enter-text-field").innerText;
let convoArr = loader.retrievedConvo;

// Event-listeners

enterButton.addEventListener("keyup", enterButtonEvent);


document.getElementById("send-button").addEventListener("click", function( event ) {
	// display the current click count inside the clicked div
	event.target.textContent = "click count: " + event.detail;
	console.log(event.detail);
}, false);


function enterButtonEvent(){ 
	/*
    Once enter key is pressed, event occurs that triggers enter-text-field element to pass
    data contained to a variable, which is unshifted into convoArr[]. Then,
    printMessage is passed the current convoArr[].
	*/
    

	if (event.keyCode === 13 || event.which === 13){
		
		convoArr.unshift({username:"Jisie", conversation: `${temp}`, id: `${count}` });
		console.log("this occured");
		printMessage(convoArr);
		temp = "";
	}  
}


function printMessage(lastMessage){
	/*
    Push array of conversation to the HMTL page.
    */
	count++;
	var textField = document.getElementById("message-history-div"); 
	var printText= "";

	printText += "<div class=message-entry>" +
	"<div class=username-item> " + lastMessage[count].username + "</div>" +
	"<div class=conversation-item>" + lastMessage[count].conversation  + "</div>" +
	"<button id=delete-button img=images/trash.svg></button></div> "; //reference to the position.
	console.log(printText);
	textField.innerHTML += printText;

}

module.exports = {enterButtonEvent, printMessage};

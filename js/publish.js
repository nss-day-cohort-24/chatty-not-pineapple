"use strict";

let deleter = require("./delete");
let loader = require("./load");
/* 
Declarations
*/


let count = 5;
let enterButton = document.getElementById("enter-text-field");
let temp;


// Event-listeners

enterButton.addEventListener("keyup", enterButtonEvent);


document.getElementById("send-button").addEventListener("click", function( event ) {
	// display the current click count inside the clicked div
	event.target.textContent = "click count: " + event.detail;
	temp =  document.getElementById("enter-text-field").value;
	count++;
	console.log({username:"Jisie", conversation: `${temp}`, id: `${count}` });
	loader.retrievedConvo.unshift({username:"Jisie", conversation: `${temp}`, id: `${count}` });
	console.log(loader.retrievedConvo);
	let appendDOM = document.getElementById("message-history-div");
	var tempString = "<div class=message-entry>" +
	"<div class=username-item> " + "Jisie" + "</div>" +
	"<div class=conversation-item>" + temp + "</div>" +
	"<button id=delete-button img=images/trash.svg></button></div> ";
	appendDOM.innerHTML += tempString;

	document.getElementById("enter-text-field").value ="";
}, false);


function enterButtonEvent(){ 
	/*
    Once enter key is pressed, event occurs that triggers enter-text-field element to pass
    data contained to a variable, which is unshifted into convoArr[]. Then,
    printMessage is passed the current convoArr[].
	*/
    

	if (event.keyCode === 13 || event.which === 13){
		count++;
		temp =  document.getElementById("enter-text-field").value;
		loader.retrievedConvo.unshift({username:"Jisie", conversation: `${temp}`, id: `${count}` });
		console.log("this occured");
		printMessage(loader.retrievedConvo[count]);
		temp = "";
	}  
}


function printMessage(currentMessage){
	/*
    Push array of conversation to the HMTL page.
    */
	
	let textField = document.getElementById("message-history-div"); 
	let printText= "";
	

	printText += "<div class=message-entry>" +
	"<div class=username-item> " + currentMessage.username + "</div>" +
	"<div class=conversation-item>" + currentMessage.conversation + "</div>" +
	"<button id=delete-button>DELETE</button></div> "; //reference to the position.
	console.log(printText);
	textField.innerHTML += printText;

}

module.exports = {enterButtonEvent, printMessage};

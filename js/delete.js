"use strict";

let publish = require("./publish");



function createDeleteEntry(position, printText, convoArr){ 
	/*
    Create delete button
    */
	var appendButton; 
	appendButton += `<button img="images/trash.svg" id="delete-button-${position}"></button>`;
	printText += appendButton;
    
	/* 
    Add eventlistener to button that, when clicked, execute an anonymous function to splice from
    convoArr, at given position, data
    */

	document.getElementById(`"delete-button-${position}"`).addEventListener("click", function(){
		convoArr[position] = "";
	});
	return printText;

}

module.exports = {createDeleteEntry};
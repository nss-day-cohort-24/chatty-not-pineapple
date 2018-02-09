"use strict";

let publish = require("./publish");



function createDeleteEntry(position, printText, convoArr){ 
	/*
    Create delete button
    */
	var appendButton; 
	appendButton += `<button id="delete-button-${position}"></button>`;
	printText += appendButton;
    
	/* 
    Add eventlistener to button that, when clicked, execute an anonymous function to splice from
    convoArr, at given position, data
    */

	document.getElementbyID(`"delete-button-${position}"`).addEventListener("click", function(){
		convoArr[position] = "";
	});
	return printText;

}




// /* //Delete Button

// /** 
// function deleteButton (){
//     x = dataArray.indexOf(this.entry);
//     dataArray.splice(x, 1);
// } **/

// addEventListener("click", deleteButton);


// //Clear All Button
// var deleteAll = document.getElementById("deleteAllButton");

// function deleteInput () {
// 	document.getElementById("message-history-div").innerHTML = " ";
// }

// deleteAll.addEventListener("click", deleteInput);

// var deleteConversation = document.getElementById(" ");

// function deleteConvo () {

// 	document.getElementById(" ").innerHTML = " ";    
    
// }
  
// deleteConversation.addEventListener("click", deleteConvo);

module.exports = {createDeleteEntry};
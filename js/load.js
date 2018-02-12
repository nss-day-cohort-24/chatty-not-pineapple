"use strict";
/* Declarations */

var startDateTime = Date().now;
var convoRequest = new XMLHttpRequest();
let retrievedConvo = [];

/* 
Event-Listeners
*/

convoRequest.addEventListener("load", convoRequestComplete);
convoRequest.addEventListener("error", convoRequestError);
function convoRequestComplete(event) {
	let temp = JSON.parse(event.target.responseText); 
	console.log(temp);
	showData(temp);
}

function convoRequestError(event) {

	console.log("ConvoRequest - Error", event.target.responseText);
}

/*
showData function takes an object passed and makes it available for initial conversion to HTML page through the
convoData string object, which is concatenated to "message-history-div".
*/ 

function showData(dataToBeParsed){ 
	var preHistory = document.getElementById("message-history-div");

	for(let entry in dataToBeParsed) {     
		var convoData = "";
		let message = dataToBeParsed[entry];
		retrievedConvo.unshift(dataToBeParsed[entry]);
		console.log(retrievedConvo);
		convoData += "<div class=message-entry>" +
		"<div class=username-item> " + message.username + "</div>" +
		"<div class=conversation-item>" + message.conversation  + "</div>" +
		"<button id=delete-button img=images/trash.svg></button></div> ";

		preHistory.innerHTML += convoData;
		
	}

}


convoRequest.open("GET", "js/convoInit.json");
convoRequest.send();

module.exports = {showData, retrievedConvo}; //Export showData function to Main.js to call it.
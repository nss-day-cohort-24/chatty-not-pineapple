"use strict";

var startDateTime = Date().now;
var convoRequest = new XMLHttpRequest();
var retrievedConvo;


convoRequest.addEventListener("load", convoRequestComplete);

function convoRequestComplete(event) {
	retrievedConvo = JSON.parse(event.target.responseText); //error
	showData(retrievedConvo);
}


function showData(dataArray){
	var preHistory = document.getElementById("message-history-div");  //need to put id in html

	for(var entry in dataArray) {                  // Print to "message-history-div"
		var convoData = "";
		var convoItem = dataArray[entry];
		convoData += `<div class="message-entry">`;
		convoData += `<h4 class="username"> ${convoItem.username} </h4>`;
		convoData += `<h2 class="conversation item"> ${convoItem.conversation} </h2>`;
		convoData += "</div>";

		preHistory.innerHTML += convoData;
	}

}


for (var i = 0 ; i < 10; i++){
	var entry = `${i}`;
}

convoRequest.open("GET", "convoInit.json");
convoRequest.send();

module.exports = {showData};
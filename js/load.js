"use strict";
/*
Declarations

*/


var startDateTime = Date().now;
var convoRequest = new XMLHttpRequest();
var retrievedConvo;


/* 
Event-Listeners
*/

convoRequest.addEventListener("load", convoRequestComplete);



function convoRequestComplete(event) {
	retrievedConvo = JSON.parse(event.target.responseText); //error
	showData(retrievedConvo);
}

/*
showData function takes an object passed and makes it available for initial conversion to HTML page through the
convoData string object, which is concatenated to "message-history-div".
*/ 


function showData(dataArray){
	var preHistory = document.getElementById("message-history-div");

	for(var entry in dataArray) {                  
		var convoData = "";
		var convoItem = dataArray[entry];
		convoData += `<div class="message-entry">
    <h4 class="username"> ${convoItem.username} </h4>
    <h2 class="conversation item"> ${convoItem.conversation} </h2>
    </div>`;

		preHistory.innerHTML += convoData;
	}

}


convoRequest.open("GET", "js/convoInit.json");
convoRequest.send();

module.exports = {showData}; //Export showData function to Main.js to call it.
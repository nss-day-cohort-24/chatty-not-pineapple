"use strict";
/*
Declarations

*/


var startDateTime = Date().now;
var convoRequest = new XMLHttpRequest();
var retrievedConvo = [];
let count = 0;


/* 
Event-Listeners
*/

convoRequest.addEventListener("load", convoRequestComplete);



function convoRequestComplete(event) {
	retrievedConvo.map(JSON.parse(event.target.responseText)); // Map the JSON to a local object.
	
	
	showData(retrievedConvo);
}

/*
showData function takes an object passed and makes it available for initial conversion to HTML page through the
convoData string object, which is concatenated to "message-history-div".
*/ 


function showData(dataArray){
	var preHistory = document.getElementById("message-history-div");

	for(var entry in dataArray) {   
		count++;   
		var convoData = "";
		var convoItem = dataArray[entry];
		convoData += `<div class="message-entry">
<<<<<<< Updated upstream
    <h4 class="username-item"> ${convoItem.username} </h4>
    <h2 class="conversation-item"> ${convoItem.conversation} </h2>
    </div>`;
=======
		<div class="username-item"> ${convoItem.username} </div>
		<div class="conversation-item"> ${convoItem.conversation} </div>
		</div> <button id="delete-button-${count}" img="images/trash.svg"></button>`;
>>>>>>> Stashed changes

		preHistory.innerHTML += convoData;
		makeDeleteButton(count);
	}

}


function makeDeleteButton(count){

	var temp = document.getElementById(`"delete-button-${count}"`).addEventListener("click", function(){
		retrievedConvo[count] = " ";
	});
}

convoRequest.open("GET", "js/convoInit.json");
convoRequest.send();

module.exports = {showData}; //Export showData function to Main.js to call it.
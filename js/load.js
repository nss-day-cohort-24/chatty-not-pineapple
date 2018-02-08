var startDateTime = Date().now;
var convoRequest = new XMLHttpRequest();

convoRequest.addEventListener("load", convoRequestComplete);

function convoRequestComplete(event) {
	var retrievedConvo = JSON.parse(event.target.responseText); //error
	showData(retrievedConvo);
}


function showData(dataArray){
	var preHistory = document.getElementById("message-history-div");  //need to put id in html

	for(var entry in dataArray) {                  // Print to "message-history-div"
		var convoData = "";
		var convoItem = dataArray[entry];
		convoData += "<div>";
		convoData += "<h4>" + convoItem.username + "</h4>";
		convoData += "<h2>" + convoItem.conversation + "</h2>";
		convoData += "</div>";

		preHistory.innerHTML += convoData;
	}

}

convoRequest.open("GET", "convoInit.json");
convoRequest.send();
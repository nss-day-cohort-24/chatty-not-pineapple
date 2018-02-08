var startDateTime = Date().now;
var convoRequest = new XMLHttpRequest();

convoRequest.addEventListener("load", convoRequestComplete);

function convoRequestComplete(event) {
    var retrievedConvo = JSON.parse(event.target); //error
    showData(retrievedConvo);
}


function showData(itDontMatter){
	var five = document.getElementById("five-conversation");  //need to put id in html

  for(whatever in itDontMatter) {                  //added to DOM
    var convoFiveData = '';
    var convoItem = itDontMatter[whatever];
    convoData += "<div>";
    convoData += "<h4>" + convoItem.name + "</h4>"
    convoData += "<h2>" + convoItem.conversation + "</h2>"
    convoData += "</div>";

    five.innerHTML += convoFiveData;
  }

}

convoRequest.open("GET", "convoInit.json");
convoRequest.send();
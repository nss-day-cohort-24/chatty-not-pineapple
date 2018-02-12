"use strict";

let publish = require("./publish");

document.querySelector("body").addEventListener("click", deleteParent);


function deleteParent(event){

	if (event.target.id === "delete-button") {
		event.target.parentNode.remove();
		console.log("test");
		console.log(event.target.parentNode);
	}

}

let deleteAll = document.getElementById("deleteAllButton").addEventListener("click", function clear(messages) {
	
	document.getElementById("message-history-div").innerHTML=""; 

	if(messages.value > 0) {
		document.getElementById("deleteAllButton").disabled = false;
	} else{
		document.getElementById("enter-text-field").addEventListener("keyup", function enable(messages) {
			if (event.which === 13 || event.keyCode == 13) {
				document.getElementById("deleteAllButton").disabled = false; 
			}
		});
		document.getElementById("deleteAllButton").disabled = true;
	} 
});

module.exports = {deleteParent, deleteAll};
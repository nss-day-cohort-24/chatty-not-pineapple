"use strict";

//Delete Button

/** 
function deleteButton (){
    x = dataArray.indexOf(this.entry);
    dataArray.splice(x, 1);
} **/

.......addEventListener("click", deleteButton);


//Clear All Button
var deleteAll = document.getElementById("deleteAllButton");

function deleteInput () {
    document.getElementById("message-history-div").innerHTML = " ";
  }

  deleteAll.addEventListener("click", deleteInput);

  var deleteConversation = document.getElementById(" ");

  function deleteConvo () {
      document.getElementById(" ").innerHTML = " ";
    }
  
    deleteConversation.addEventListener("click", deleteConvo);
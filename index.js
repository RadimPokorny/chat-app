function addDivToContainer() { 
    
    var message = document.getElementById("msg").value;

    if(message != ""){
    
    var div = document.createElement("div");
    div.className = "line";
    
    var sentDiv = document.createElement("div");
    sentDiv.className = "sent";
    
    var messageBoxDiv = document.createElement("div");
    messageBoxDiv.className = "message-box";
    
    var messageOutputDiv = document.createElement("div");
    messageOutputDiv.className = "message-output";
    
    var messageParagraph = document.createElement("p");
    messageParagraph.textContent = message;
    
    content.appendChild(div);
    messageOutputDiv.appendChild(messageParagraph);
    messageBoxDiv.appendChild(messageOutputDiv);
    sentDiv.appendChild(messageBoxDiv);
    div.appendChild(sentDiv);
    document.getElementById("msg").value = "";  
    scrollBot();  
  }
  
}
// Get the input field
var input = document.getElementById("msg");

function scrollBot(){

  const content = document.getElementById("content");
  content.scrollTop = document.getElementById('content').scrollHeight;
  
}



// Execute a function when the user presses a key on the keyboard
input.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    document.getElementById("addButton").click();
  }
});


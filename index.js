function addDivToContainer() {
    
    var content = document.getElementById("content");
    
    var div = document.createElement("div");
    div.className = "line";
    
    var sentDiv = document.createElement("div");
    sentDiv.className = "sent";
    
    var messageBoxDiv = document.createElement("div");
    messageBoxDiv.className = "message-box";
    
    var messageOutputDiv = document.createElement("div");
    messageOutputDiv.className = "message-output";
    
    var messageParagraph = document.createElement("p");
    var message = document.getElementById("msg").value;
    messageParagraph.textContent = message;
    
    content.appendChild(div);
    messageOutputDiv.appendChild(messageParagraph);
    messageBoxDiv.appendChild(messageOutputDiv);
    sentDiv.appendChild(messageBoxDiv);
    div.appendChild(sentDiv);
}
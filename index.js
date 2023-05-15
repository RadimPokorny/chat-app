// Funkce, která přidá váš div do kontejneru
function addDivToContainer() {
    var div = document.createElement("div");
    div.className = "line";
    
    var sentDiv = document.createElement("div");
    sentDiv.className = "sent";
    
    var messageBoxDiv = document.createElement("div");
    messageBoxDiv.className = "message-box";
    
    var messageOutputDiv = document.createElement("div");
    messageOutputDiv.className = "message-output";
    
    var messageParagraph = document.createElement("p");
    messageParagraph.textContent = "This is some random message. Please do not take it seriously. Please bro, just do not.";
    
    messageOutputDiv.appendChild(messageParagraph);
    messageBoxDiv.appendChild(messageOutputDiv);
    sentDiv.appendChild(messageBoxDiv);
    div.appendChild(sentDiv);
    
    var container = document.getElementById("content");
    container.appendChild(div);
}
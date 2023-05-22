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


function uploadImage() {
  var fileInput = document.getElementById("imageInput");
  fileInput.click();

  fileInput.onchange = function () {
    var file = fileInput.files[0];
    var reader = new FileReader();

    reader.onload = function (e) {
      var imageSrc = e.target.result;
      // Do something with the image source, e.g. display it or send it to the server
      
      var div = document.createElement("div");
      div.className = "line";

      var sentDiv = document.createElement("div");
      sentDiv.className = "sent";

      var messageBoxDiv = document.createElement("div");
      messageBoxDiv.className = "message-box";

      var messageOutputDiv = document.createElement("div");
      messageOutputDiv.className = "message-output";

      var imageElement = document.createElement("img");
      imageElement.src = imageSrc;
      imageElement.alt = "Uploaded Image";

      messageOutputDiv.appendChild(imageElement);
      messageBoxDiv.appendChild(messageOutputDiv);
      sentDiv.appendChild(messageBoxDiv);
      div.appendChild(sentDiv);

      // Append the new message div to the content area
      var content = document.getElementById("content");
      content.appendChild(div);

      // Clear the input field
      document.getElementById("msg").value = "";

      // Scroll to the bottom of the content area
      scrollBot();
    };

    reader.readAsDataURL(file);
  };
}



function getSubString() {
    var message = "Hello, stranger, I would like to tell you something, but don´t know how.";
  
    var shortMessage = message.substring(0, 35);
    var elements = document.querySelectorAll("#last-message");
  
    elements.forEach(function(element) {
      element.innerHTML = shortMessage + "...";
    });
  }
  
window.onload = getSubString;


  
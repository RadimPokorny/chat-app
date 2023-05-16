function getSubString() {
    var message = "Hello, stranger, I would like to tell you something, but don´t know how.";
  
    var shortMessage = message.substring(0, 23);
    var elements = document.querySelectorAll("#last-message");
  
    elements.forEach(function(element) {
      element.innerHTML = shortMessage + "...";
    });
  }
  
  window.onload = getSubString;

  function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      document.getElementById("chat-here").innerHTML = this.responseText;
      }
    xhttp.open("GET", "index.html", true);
    xhttp.send();
}
  
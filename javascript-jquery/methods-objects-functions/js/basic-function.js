let a = 5;

// Create a function to update the content of the element whose id attribute has a value of message
function updateMessage() {
  var el = document.getElementById('message');
  el.textContent = a;
}

// Call the function
updateMessage();
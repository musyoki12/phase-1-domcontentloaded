// Your code goes here
// setting up the event listener to detect when the HTML page has loaded and the document is ready to be manipulated
  document.addEventListener( "DOMContentLoaded", function () {
    updateDOM()
  } );
  
  //modifying the DOM element content
function updateDOM() {
    document.getElementById( "text" )
     .textContent = "This is really cool!";
  }





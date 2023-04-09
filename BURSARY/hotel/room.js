<script>
  function bookRoom(roomType) {
    // Code to book the selected room type goes here
    alert("You have booked a " + roomType + " room!");
  }
  
  // Attach the event handler to each button element
  var buttons = document.querySelectorAll(".card button");
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
      var roomType = this.parentNode.querySelector("h2").textContent;
      bookRoom(roomType);
    });
  }
</script>

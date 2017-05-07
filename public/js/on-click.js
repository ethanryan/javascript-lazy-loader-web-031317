// You'll put all the functions you write in cars.js
// and all the code that must happen within a jQuery .ready() function
// inside on-click.js (hint: it might be an .on("click", ...) event handler).

"use strict";

$(document).ready(function() {
  console.log("document is ready!");

  // add click listener here
  // it should call on fetchJSON()

  $("#load-cars").on("click", function() {
     fetchJSON();
  });
}); //end (document).ready

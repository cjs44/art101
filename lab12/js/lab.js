// index.js - conditionals
// Author: Caitlin Smith and Alissa Sheinin
// Date: May 22, 2023

// sort function
function sortingHat(str) {
  // count letters in str, assign to length
  var len = str.length;
  // mod 4 to get remainder
  var rem = len % 4;
  var result = "";
  // conditional for house
  if (rem == 0){
    result = "Gryffindor";
  }
  else if (rem == 1){
    result = "Ravenclaw";
  }
  else if (rem == 2){
    result = "Slytherin";
  }
  else {
    result = "Hufflepuff";
  }
  return result;
}

// event listener
// find the button element
var button = document.getElementById('button');
// event listener
button.addEventListener("click", function() {
  // get the value from the input box
  var name = document.getElementById("input").value;
  // run sort
  var house = sortingHat(name);
  // new p with result
  var newP = "<p>The Sorting Hat has sorted you into " + house + "</p>";
  // change the output div HTML to the result so it shows on the page
  document.getElementById("output").innerHTML = newP;
});


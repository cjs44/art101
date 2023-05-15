// index.js - events and forms
// Author: Caitlin Smith and Alissa Sheinin
// Date: May 15, 2023

// sort function
function userNameUCSC(userName) {
  //split string to array
  var nameArray = userName.split('');
  console.log("nameArray =", nameArray);
  //sort the array
  var nameArraySort = nameArray.sort();
  console.log("nameSort =", nameArraySort);
  //join array back to string
  var nameSorted = nameArraySort.join('');
  console.log("nameSorted =", nameSorted);
  return nameSorted;
}

// input and results
// find the button element
var buttonEl = document.getElementById('my-button');
// event listener
buttonEl.addEventListener('click', function() {
  // get the value from the input box
  input = document.getElementById('user-name').value;
  // sort that input
  var result = userNameUCSC(input);
  console.log("result: ", result);
  // change the output div HTML to the result so it shows on the page
  document.getElementById("output").innerHTML = result;
});


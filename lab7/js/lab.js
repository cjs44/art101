// index.js - Lab 7 Functions
// Author: Caitlin Smith and Alice Sheinin
// Date: 5/3/23

//a new function - userNameUCSC
function userNameUCSC() {
  var userName = window.prompt("Please provide your username");
  console.log("userName =", userName);
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

//call the function and output
document.writeln("Thank you, I found your name:  ", userNameUCSC(), "</br");
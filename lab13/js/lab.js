// index.js - conditionals
// Author: Caitlin Smith and Alissa Sheinin
// Date: May 22, 2023
// sort function
function FizzBuzz(str) {
  var oneLongString = "";
  for (var i = 1; i <= 200; i++){
    oneLongString += i + " ";
    var flag = 0;
    if (i % 3 == 0){
      oneLongString += "Fizz";
      flag = 1;
    }
    if (i % 5 == 0){
      oneLongString += "Buzz";
      flag = 1;
    }
    if (i % 7 == 0){
      oneLongString += "Boom";
      flag = 1;
    }
    if (flag){
      oneLongString += "!";
    }
    oneLongString += "<br>"
  }
  return oneLongString;
}

$("#output").html(FizzBuzz());
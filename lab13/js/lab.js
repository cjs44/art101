// index.js - conditionals
// Author: Caitlin Smith and Alissa Sheinin
// Date: May 22, 2023
// sort function
function FizzBuzz(str) {
  var oneLongString = "";
  for (var i = 1; i <= 200; i++){
    oneLongString += i + " ";
    var flag = 0;
    /*If the number is a multiple of 3, if should print "Fizz!"
If the number is a multiple of 5, it should print "Buzz!"
If the number is a multiple of 7, it should print "Boom!"
If the number is a multiple of more than one 3, 5 or 7, it should combine Fizz, 
Buzz, and Boom. For example, if the number is a multiple of 3 AND 5, it should print 
"FizzBuzz!" and so on. */
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
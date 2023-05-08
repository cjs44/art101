// index.js - functions and callback
// Author: Caitlin Smith and Alissa Sheinin
// Date: May 8, 2023

// Constants
var array = [5, 70, 24, 16, 45, 6, 1];

// Functions
function square(x){
    var result = x * x;
    return result;
}

// test
console.log("Square of 2: ", square(2));
console.log("Square of 25: ", square(25));

console.log("My array: ", array);

// callback 
var result = array.map(square);
// expected: (7) [25, 4900, 576, 256, 2025, 36, 1]
console.log("Squared array: ", result);

var result = array.map(function(x) {
  var result = x ** 3; 
  return result;
});
// expected: (7) [125, 343000, 13824, 4096, 91125, 216, 1]
console.log("Cubed array: ", result);


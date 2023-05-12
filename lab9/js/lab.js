// index.js - Lab 9 JavaScript for the Web
// Author: Caitlin Smith and Alice Sheinin
// Date: 5/11/23

//find the output and assign it to a variable outputEl
var outputEl = document.getElementById("output");
console.log("outputEl: ", outputEl);

//create a new element and assign it to a variable new1El
var new1El = document.createElement("p");

//change the html attribute of new1El
new1El.innerHTML = "Something new";
new1El.id = "first-element";

//create another new element and assign it to a variable new2El
var new2El = document.createElement("p");

//change the html attribute of new2El
new2El.innerHTML = "Something else";
new2El.id = "second-element";

//append both new elements
outputEl.appendChild(new1El);
outputEl.appendChild(new2El);

//change the css attributes
new1El.style.color = "yellow";
new2El.style.fontSize = "60pt";
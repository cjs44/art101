// index.js - Lab 6 Arrays and Objects
// Author: Caitlin Smith and Alice Sheinin
// Date: 5/1/23

// variables
var myTransport = ["Honda Civic", "Bus", "Rowan's Tacoma", "Jaime's Civic"];
var myMainRide = {
    make: "Honda", 
    model: "Civic", 
    color: "Blue", 
    year: "2018", 
    ownIt: true, 
    age: function(){
        return 2023 - this.year;
    }
};

// output
document.writeln("Ways of Getting Around: " + myTransport + "<br>");
document.writeln("My Main Ride: <pre>", 
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
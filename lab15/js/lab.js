// index.js - Lab 15 AJAX
// Author: Caitlin Smith and Alice Sheinin
// Date: 5/31/23

//add a click event to the button
function getAnswer(){
  //when the user clicks the button, use a jQuery AJAX call to fetch output from your API
  //using the ajax method
  $.ajax({
  //The URL for the request
  url: "https://yesno.wtf//api",
  data: {},
  type: "GET",
  dataType: "json",
  })
  .done(function(data){
          console.log(data);
          var printableData = "<pre>" + JSON.stringify(data, null, 2) + "</pre>";
          var answer = data.answer;
          var imgU = data.image;
          $("#output").html("<h3>" + answer);
          $("#output").append("<img src=" + imgU + ">");
  });
  }
  
  //Call the function
  $("button").click(getAnswer());
  
  
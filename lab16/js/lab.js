// index.js - Lab 16 JSON and APIs
// Author: Caitlin Smith and Alice Sheinin
// Date: 6/5/23

// Use $.ajax() to retrieve data and store this object in a variable comicObj. 
function getComic() {
  //when the user clicks the button, use a jQuery AJAX call to fetch output from your API
  //using the ajax method
  $.ajax({
    //The URL for the request
    url: "https://xkcd.com/info.0.json",
    data: {},
    type: "GET",
    dataType: "json",
  })
    .done(function (data) {
      /*Give the section a title using the comicObj.title key from the object
      Create an image tag using the comicObj.img key from the object
      Give the image an alt and title attributes using the comicObj.alt key from the object*/
      console.log(data);
      var comicObj = data;
      console.log(comicObj);
      var title = comicObj.title;
      var img = comicObj.img;
      var alt = comicObj.alt;
      $("#output").html("<h3>" + title + "<h3/>");
      $("#output").append("<img src=" + img + ">");
      $("#output").append("<p>" + alt + "</p>");
    });
}

//Call the function
getComic();

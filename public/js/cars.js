// You'll put all the functions you write in cars.js
// and all the code that must happen within a jQuery .ready() function
// inside on-click.js (hint: it might be an .on("click", ...) event handler).

//"use strict";

// this is the base API url:
var baseUrl = "http://mimeocarlisting.azurewebsites.net/api/cars/";


//View: what the user sees
function formatCars(carsJSON) {

  console.log(carsJSON);

const carOutput = carsJSON.map(function(carData) {
  //return "<h1>" + carData.Make + "</h1>" + "Model: " + carData.Model + "<br>" +  "Year: " + carData.Year + "<br><br>"
  //return `<div class="row"><div class="col-md-4 car">

//console.log(carData);
  // return `
  // <div class="col-md-4 car">
  // <h1> ${carData.Make}</h1>
  // <p><strong>Model:</strong> ${carData.Model}</p>
  // <p><strong>Year:</strong> ${carData.Year}</p>
  // </div>
  // `

  return `<div class="col-md-4 car"><h2>${carData.Make}</h2><p><strong>Model:</strong> ${carData.Model}</p><p><strong>Year:</strong> ${carData.Year}</p></div>`
})

//return carOutput //returning the variable above, which returns carData within html
return `<div class="row">${carOutput.join('')}</div>`
}


//Controller: communicates the data to the view
function addCarsToDOM(carsJSON) {
  // this function should pass carsJSON to formatCars() and then
  // add the resulting HTML to the div with an id of "cars"

  $("#cars").append(formatCars(carsJSON)) //appends results of formatCars(carsJSON) to #cars
}

var counter = 3 //this needs to be a global variable... starting at page 3


//Model: the data
function fetchJSON() {
  // this function will make the ajax call
  // on success of the ajax call, it will pass the returned data
  // to addCarsToDOM()
      $.ajax({

        url: baseUrl + `${counter++}/3`,
        contentType: 'application/json',
        dataType: 'jsonp',
        success: function(result) {
          console.log(result);

          addCarsToDOM(result); //calling addCarsToDOM and passing result as an argument

          // console.log("Make: " + result[0]["Make"]);
          // console.log("Model: " + result[0]["Model"]);
          // console.log("Year: " + result[0]["Year"]);

          // const carOutput = result.map(function(carData) {
          //   return "<h1>" + carData.Make + "</h1>" + "Model: " + carData.Model + "<br>" +  "Year: " + carData.Year + "<br><br>"
          // })
          //
          // $("#cars_2").append(carOutput.join(''))
      }});
}

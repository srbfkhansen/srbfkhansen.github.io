/**
 * Create an HttpRequest to retrieve the weather JSON for a specific area, and populate High Temperature and Current Weather values in the html.
 * @param {String} aUrl URL for the weather request.
 * @param {String} aHighTempId Html Element Id target for the High Temperature information.
 * @param {String} aWeatherId Html Element Id target for the Current Weather information.
 */
function LoadWeatherData(aUrl, aHighTempId, aWeatherId) {
   let request = new XMLHttpRequest();
   request.open('Get', aUrl);
   request.send();

   request.onload = function() {
      let data = JSON.parse(request.responseText); // Create JSON weatherData object.
      document.getElementById(aHighTempId).innerHTML = data.main.temp_max; // Add temperature value to Html element id for 'High Temperature' on web page.
      document.getElementById(aWeatherId).innerHTML = data.weather[0].description; // Add current weather description to Html element id for 'Current Weather' on web page.
   }
}

/**
 * Create an HttpRequest to retrieve the temple information from JSON file I created. 
 * Temple information will population the temple information areas on the temples webpage.
 * @param {String} aUrl URL used to access JSON file I created with temple info.
 * @param {String} aInfoIds Html Element Id for each temple.
 */
function LoadTempleData(aUrl, aInfoIds) {
   var request = new XMLHttpRequest();
   request.open("GET", aUrl);
   request.responseType = "json";
   request.send();

   request.onload = function() {
      var temples = request.response.temples; // JSON temple info object.

      for (var index = 0; index < temples.length; index++) {
         // String which adds all lines of temple information into desired section.
         var result = "<p>" + temples[index].address + "</p><p>" + temples[index].telephone + "</p>";
         result += "<p><b>Services offered</b>: " + temples[index].services +"</p><p><b>History</b>: " + temples[index].history + "</p>"; 
         result += "<p><b>Endowments</b>: " + temples[index].endowments +"</p><p><b>Sealings</b>: " + temples[index].sealings + "</p>"; 
         result += "<p><b>Temple Closures</b>: " + temples[index].closures +"</p><br>"; 
         document.getElementById(aInfoIds[index]).innerHTML = result; // Add whole "result" string into the inner HTML to print out in display area.
      }
   }
}
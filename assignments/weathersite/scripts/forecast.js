// forecastUrl must be defined and contain the http request url for querying the weather forecast before file is included.

let forecastRequest = new XMLHttpRequest();
forecastRequest.open('Get', forecastUrl, true);
forecastRequest.send();

/**
 * Called once the forecast request is finished.
 * Creates JSON object - forecastData to be used to gather town information.
 * Creates section in Html for daily forecast to be displayed.
 * Calls function for CreateFiveDayForecast
 */
forecastRequest.onload = function() {
   let forecastData = JSON.parse(forecastRequest.responseText);
   // console.log(forecastData);

   var section = document.getElementById('dailyForecast'); // Name section forecast will be displayed in.
   CreateFiveDayForecast(forecastData, section); // Call function that will create the five day forecast.
}

/**
 * Creates five day forecast using JSON object and sends to Html.
 * @param {Object} aForecastData 
 * @param {HTMLElement} aParentElement 
 */
function CreateFiveDayForecast(aForecastData, aParentElement) {
   var index = 0; // First record.
   while (!aForecastData.list[index].dt_txt.includes("18:00:00")) index++; // Advance forecast records until 6pm.
   
   for (var offset = 0; offset < 5; offset++) { // Five days of input expected (or function will break).
      var day = (new Date(aForecastData.list[index].dt_txt).getDay()) % 7; // This is the forecast item's day (by index with Sunday: 0).
      var article = CreateForecastElement(day, aForecastData.list[index].weather[0].icon, aForecastData.list[index].weather[0].description, Math.round(aForecastData.list[index].main.temp)); // Call function that will create Html parent article.
      aParentElement.appendChild(article); // Add the forecast to the Html parent.

      index += 8; // Each day is 8 records apart.
   }
}

/**
 * Create a forecast Html section that can be added to an Html parent as needed.
 * @param {Number} aDay Index indicating the day of the week. 0: Sunday, 6: Saturday.
 * @param {String} aIconId String from which a URL can be constructed for displaying weather status: "http://openweathermap.org/img/w/" + aIconId + ".png"
 * @param {String} aIconDescription Alternate text to use if the weather icon is not displayed.
 * @param {Number} aTemperature Temperature in fahrenheit forcasted.
 * @returns {HTMLElement} An Html "Article" containing the forecast Html elements.
 */
function CreateForecastElement(aDay, aIconId, aIconDescription, aTemperature) {
   // Create the following using the document:
   //    <article>
   //        <h4 class="forecast">Three-letter-versionof(aDay)</h4>
   //        <img src="http://openweathermap.org/img/w/aIconId.png" alt="aIconDescription" />
   //        <p>aTemperature\u00b0 F</p>
   //    </article>
   var result = document.createElement('article'); // This Html element will contain all the forecast components.

   // Add the header (h4).
   var header = document.createElement('h4'); // Create header variable and set it up in the Html.
   header.textContent = GetDayName(aDay); // Call GetDayName function to display day of the week in relation to the the index number - 0: Sunday, 6: Saturday.
   result.appendChild(header); // Send header results to Html article.

   // Create, populate, and add the image to the article.
   var image = document.createElement('img');
   image.src = "http://openweathermap.org/img/w/" + aIconId + ".png";  
   image.alt = aIconDescription;
   result.appendChild(image);

   // Create, populate, and add the paragraph containing the temperature to the article.
   var paragraph = document.createElement('p');
   paragraph.textContent = aTemperature + "\u00B0 F";
   result.appendChild(paragraph);

   return result;
}

/**
 * Convert the day of the week index in [0, 6] to a three letter string representation.
 * @param {Number} aDay Day of the week index where 0 is Sunday and 6 is Saturday.
 * @returns {String} Three letter string representing the day of the week.
 */
function GetDayName(aDay) {
    var result = "MON"; // Day of the week text. Default is Monday.
    switch (aDay % 7) { // Keep day in the range of [0] to [6].
        case 0: result = "Sun"; break;
        case 1: result = "Mon"; break;
        case 2: result = "Tue"; break;
        case 3: result = "Wed"; break;
        case 4: result = "Thu"; break;
        case 5: result = "Fri"; break;
        case 6: result = "Sat"; break;
    }
    return result;
}







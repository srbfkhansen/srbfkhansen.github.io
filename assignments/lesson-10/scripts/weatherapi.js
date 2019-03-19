let weatherRequest = new XMLHttpRequest();
let apiURLstring = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=ec66dedc10881ec7bf3add572b56be42';
weatherRequest.open('Get', apiURLstring, true);
weatherRequest.send();

/**
 * Calculates windchill factor.
 * @param {Number} aTemperature 
 * @param {Number} aSpeed 
 */
function ConvertWindChill(aTemperature, aSpeed) {
    var temp = Math.pow(aSpeed, 0.16); // Create variable "temp" to assist in calculating wind chill.
    var result = 35.74 + 0.6215 * aTemperature - 35.75 * temp + 0.4275 * aTemperature * temp; // Calculate wind chill factor.
    return Math.round(result * 100) / 100; // Return windchill value.
}


/**
 * Function that starts on load and requests information from the town JSON file - creates weatherData JSON object.
 */
weatherRequest.onload = function() {
    let weatherData = JSON.parse(weatherRequest.responseText); // Create JSON weatherData object.
    //console.log(weatherData); // Used for testing.

    document.getElementById('highTemp').innerHTML = weatherData.main.temp_max; // Add temperature value to Html element id 'highTemp' on town homepage.

    document.getElementById('current').innerHTML = weatherData.weather[0].description; // Add current weather description to Html element id 'current' on town homepage.

    document.getElementById('speed').innerHTML = weatherData.wind.speed; // Add wind speed value to Html element id 'speed' on town homepage.

    document.getElementById('humidity').innerHTML = weatherData.main.humidity; // Add humidity value to Html element id 'humidity' on town homepage.

    document.getElementById('windChill').innerHTML = ConvertWindChill(weatherData.main.temp, weatherData.wind.speed); // Call function ConvertWindChill and add returned value to Html element id "windChill".
}
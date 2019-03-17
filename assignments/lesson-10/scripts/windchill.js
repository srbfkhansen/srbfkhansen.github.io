/**
 * 
 * Compute Wind Chill
 * 
 * Ruth Hansen
 * Date: 2/23/2019 * 
 * 
 * 
 */


// Function to calculate and display wind chill factor.
function UpdateWindChill(aTemperatureId, aWindSpeedId, aWindChillId) {
    var temperature = parseFloat(document.getElementById(aTemperatureId).innerHTML); // Pull temperature string and turn into number.
    var windSpeed = parseFloat(document.getElementById(aWindSpeedId).innerHTML); // Pull wind speed string and turn into number.
    var result = ConvertWindChill(temperature, windSpeed); // Call function to calculate wind chill.
    document.getElementById(aWindChillId).innerHTML = result; // Send calculated wind chill factor back to webpage.
}

// Function that calculates wind chill factor.
function ConvertWindChill(aTemperature, aSpeed) {
    var temp = Math.pow(aSpeed, 0.16);
    var result = 35.74 + 0.6215 * aTemperature - 35.75 * temp + 0.4275 * aTemperature * temp; // Calculate wind chill factor.
    return Math.round(result * 100) / 100;
}

//UpdateWindChill("highTemp", "speed", "windChill"); // Function that starts the calculation of wind chill factor for weather summary.




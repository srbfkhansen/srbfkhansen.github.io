let weatherRequest = new XMLHttpRequest();
let apiURLstring = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=ec66dedc10881ec7bf3add572b56be42';
weatherRequest.open('Get', apiURLstring, true);
weatherRequest.send();

// Function that calculates wind chill factor.
function ConvertWindChill(aTemperature, aSpeed) {
    var temp = Math.pow(aSpeed, 0.16);
    var result = 35.74 + 0.6215 * aTemperature - 35.75 * temp + 0.4275 * aTemperature * temp; // Calculate wind chill factor.
    return Math.round(result * 100) / 100;
}

weatherRequest.onload = function() {
    let weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);

    document.getElementById('highTemp').innerHTML = weatherData.main.temp_max;

    document.getElementById('current').innerHTML = weatherData.weather[0].description;

    document.getElementById('speed').innerHTML = weatherData.wind.speed;

    document.getElementById('humidity').innerHTML = weatherData.main.humidity;

    document.getElementById('windChill').innerHTML = ConvertWindChill(weatherData.main.temp, weatherData.wind.speed);
}
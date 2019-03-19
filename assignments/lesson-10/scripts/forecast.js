let forecastRequest = new XMLHttpRequest();
let apiURLforecastString = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=ec66dedc10881ec7bf3add572b56be42';
forecastRequest.open('Get', apiURLforecastString, true);
forecastRequest.send();

forecastRequest.onload = function() {
    let forecastData = JSON.parse(forecastRequest.responseText);
    // console.log(forecastData);

    var section = document.getElementById('dailyForecast');

    var index = 0; // First record.
    while (!forecastData.list[index].dt_txt.includes("18:00:00")) index++; // Advance forecast records until 6pm.
    var day = (new Date(forecastData.list[index].dt_txt).getDay()) % 7; // This is the first matching item's day.

    for (var offset = 0; offset < 5; offset++) { // Five days of input expected (or this thing will break).
        var article = document.createElement('article');
        var header = document.createElement('h4');
        var image = document.createElement('img');
        var para = document.createElement('p');
        
        header.textContent = GetDayName(day);

        image.src = "http://openweathermap.org/img/w/" + forecastData.list[index].weather[0].icon + ".png";  
        image.alt = forecastData.list[index].weather[0].description;

        para.textContent = Math.round(forecastData.list[index].main.temp) + "\u00B0 F";

        article.appendChild(header);
        article.appendChild(image);
        article.appendChild(para);

        section.appendChild(article);

        day = (day + 1) % 7; // Move to next day for text display.
        index += 8; // Each day is 8 records apart.
    }

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







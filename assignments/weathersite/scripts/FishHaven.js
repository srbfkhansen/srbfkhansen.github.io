  
var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

// On load run these two functions.
request.onload = function() {
    var eventSection = document.getElementById('events'); // Grab section from the DOM for town event display.

    var townInformation = request.response; // Variable set up to hold town information gathered from JSON object.
    ShowTownEvents(townInformation, "Fish Haven", eventSection); // Call function to show events for the town.
}
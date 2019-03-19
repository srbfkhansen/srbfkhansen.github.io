var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

// On load run these two functions.
request.onload = function() {
    var townSection = document.getElementById('localTowns'); // Grab section from the DOM for town information display.

    var townInformation = request.response; // Variable set up to hold town information gathered from JSON object.
    ShowTownInfo(townInformation, townSection); // Call function to show towns and town information on home page.
}
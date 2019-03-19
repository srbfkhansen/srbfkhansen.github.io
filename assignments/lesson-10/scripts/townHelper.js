/**
 * 
 * @param {*} jsonObj 
 */
function ShowTownInfo(jsonObj, aDomSection) {
    var towns = jsonObj['towns'];
    var urls = { 'Preston': 'images/preston.jpg', 'Soda Springs': 'images/sodaSprings.jpg', 'Fish Haven': 'images/fishHaven.jpg'};

    for (var index = 0; index < towns.length; index++) {
        if (towns[index].name == "Preston" || towns[index].name == "Soda Springs" || towns[index].name == "Fish Haven") {
            // towns[index] is my item.
            var article = document.createElement('article');
            var header = document.createElement('h2');
            var p1 = document.createElement('p');
            var p2 = document.createElement('p');
            var p3 = document.createElement('p');
            var p4 = document.createElement('p');
            var image = document.createElement('img');

            header.textContent = towns[index].name;
            p1.textContent = towns[index].motto;
            p2.textContent = 'Year Founded: ' + towns[index].yearFounded;
            p3.textContent = 'Population: ' + towns[index].currentPopulation;
            p4.textContent = 'Annual Rain Fall:' + towns[index].averageRainfall;
            image.src = urls[towns[index].name]; 

            article.appendChild(header);
            article.appendChild(p1);
            article.appendChild(p2);
            article.appendChild(p3);
            article.appendChild(p4);
            article.appendChild(image);

            aDomSection.appendChild(article);
        }
    }
}


/**
 * Find and display events for Preston on Preston weather page.
 * @param {Object} aTownInformation A JSON Object containing town information.
 * @param {String} aTownName Name of the town to use for displaying the events.
 * @param {HTMLElement} aDomSection Html DOM element for displaying event information.
 */
function ShowTownEvents(aTownInformation, aTownName, aDomSection) {
    var townList = aTownInformation['towns']; // Easy access to the towns item in the JSON.
    
    // First find town == Preston at townIndex. Second loop through events at townList[townIndex].events. Third add the text to some DOM element.
    for (var townIndex = 0; townIndex < townList.length; townIndex++) { // Find town == aTownName by looping through all the towns until we find it.
        if (townList[townIndex].name == aTownName) { // If we find a matching town... 
            for (var eventIndex = 0; eventIndex < townList[townIndex].events.length; eventIndex++) { // Loop through all events for aTownName and show them on the DOM.
                var eventP = document.createElement('p'); // To put the item in the DOM, we need a "p"aragraph.
                eventP.textContent = townList[townIndex].events[eventIndex]; // Fill the DOM text with the event text.
                aDomSection.appendChild(eventP); // Append the P to a Div pre-created to display preston events.
            }
        }
    }
}
        
// There is an array - you want to do something with the items in the array. Call the array myList.
// for (var xcvb = 0; xcvb < myList.length; xcvb++) {
    // var myItem = myList[xcvb];
//}
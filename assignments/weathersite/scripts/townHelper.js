/**
 * Function that locates desired towns from JSON object.
 * Sets up Html article to hold town information.
 * @param {Object} jsonObj 
 */
function ShowTownInfo(jsonObj, aDomSection) {
    var towns = jsonObj['towns'];
    var urls = { 'Preston': 'images/preston.jpg', 'Soda Springs': 'images/sodaSprings.jpg', 'Fish Haven': 'images/fishHaven.jpg'};

    for (var index = 0; index < towns.length; index++) {
        if (towns[index].name == "Preston" || towns[index].name == "Soda Springs" || towns[index].name == "Fish Haven") {
            // towns[index] is my item.
            var article = document.createElement('article'); // Html element that will contain town information.
            
            var article = CreateTownInfoElement(towns[index], urls[towns[index].name]);

            aDomSection.appendChild(article);
        }
    }
}

/**
 * Function that creates town information display and sends back.
 * Display includes town name, motto, year founded, annual rain fall, and image.
 * @param {String} aTown Name of town passed in.
 * @param {String} aImageUrl String from which the town image URL can be constructed.
 */
function CreateTownInfoElement(aTown, aImageUrl) {
   var result = document.createElement('article'); // Send town info display results back to Html article.

   // Create, populate, and add header to the article.
   var header = document.createElement('h2');
   header.textContent = aTown.name;
   result.appendChild(header);

   // Create, populate, and add motto to the article.
   var p1 = document.createElement('p');
   p1.textContent = aTown.motto;
   result.appendChild(p1);

   // Create, populate, and add year founded to the article
   var p2 = document.createElement('p');
   p2.textContent = 'Year Founded: ' + aTown.yearFounded;
   result.appendChild(p2);

   // Create, populate, and add town population to the article
   var p3 = document.createElement('p');
   p3.textContent = 'Population: ' + aTown.currentPopulation;
   result.appendChild(p3);

   // Create, populate, and add town population to the article
   var p4 = document.createElement('p');
   p4.textContent = 'Annual Rain Fall:' + aTown.averageRainfall;
   result.appendChild(p4);

   // Create, populate, and add town image to the article   
   var image = document.createElement('img');
   image.src = aImageUrl; 
   result.appendChild(image);

   return result;
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
        
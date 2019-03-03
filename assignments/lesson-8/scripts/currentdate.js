/**
 * 
 * Current Date Calculator
 * 
 * Ruth Hansen
 * Date: 2/16/2019 * 
 * 
 * Script to deliver date to webpage footer in this format:
 * Day of the week, day of month, month name, full year.
 * Initial function calls functions to get date results and displays results.
 */


function UpdateElementWithDate(aId) { // Main function which pulls and displays all current date information. 
    // Created in a way that it can be put in other elements besides the footer if desired.
    var date = new Date(); // Function that pulls current date information. Value given to variable for use.
    var day = ConvertDayToString(date.getDay()); // Get day of the week number and send to function for conversion.
    var monthName = ConvertMonthToString(date.getMonth()); // Call function to get month name. Send month number as parameter.
    // Pull day of the month and full year. Display all date elements.
    document.getElementById(aId).innerHTML = day + ", " + date.getDate() + " " + monthName + " " + date.getFullYear();
}

function ConvertDayToString(aDay) { // Function to convert day of the week number to name.
    var result = ""; // Declare variable as a string.
    switch (aDay) { // Examine each case and assign string weekday name to variable "result".
        case 0: result = "Sunday"; break;
        case 1: result = "Monday"; break;
        case 2: result = "Tuesday"; break;
        case 3: result = "Wednesday"; break;
        case 4: result = "Thursday"; break;
        case 5: result = "Friday"; break;
        case 6: result = "Saturday"; break;
}
return result; // Send result for day of the week back to variable "day".
}

function ConvertMonthToString(aMonth) { // Function to receive month number and calculate month name.
    var result = ""; // Declare variable as a string.
    switch (aMonth) { // Examine each case and assign month name to variable "result".
        case 0: result = "January"; break;
        case 1: result = "February"; break;
        case 2: result = "March"; break;
        case 3: result = "April"; break;
        case 4: result = "May"; break;
        case 5: result = "June"; break;
        case 6: result = "July"; break;
        case 7: result = "August"; break;
        case 8: result = "September"; break;
        case 9: result = "October"; break;
        case 10: result = "November"; break;
        case 11: result = "December"; break;
}
return result; // Send result for month name back to variable "monthName".
}

UpdateElementWithDate("currentDate"); // Function that will start all current date processing on page load.

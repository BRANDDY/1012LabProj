// 1012a22s JavaScript code for Task 5
// Learning Objectives: use of arrays and use of object Date

function myFunction() {
    var p = document.getElementById("mydata");
    //call a sub-algorithm to return the current time and date in a specific format
    p.innerHTML = getDateInCustomizedFormat();
}

// a sub-algorithm to return the current date in a customized format
// pre-conditions: none
// post-conditions: returns current time and date in this format: "It's HOUR:MIN. Today is MONTH DAY, YEAR (DAYOFWEEK)"
//                  where capital words are replaced by appropriate values.
function getDateInCustomizedFormat() {
    /* TODO 1: complete the following statement such that the current time and date are shown with 
       a format similar to that of the corresponding figure in Lab07 specification is */

    // insert desired words into the arrays.	 
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var d = new Date();

    // invoke d.getDay() , getMonth(), getDate(), getFullYear(), getHours(), getMinutes(), store into variables, and then cancantate them to generate the desired format.
    var HOUR = d.getHours();
    var MIN = d.getMinutes();
    var MONTH = months[d.getMonth()];
    var DAY = d.getDate();
    var YEAR = d.getFullYear();
    var DAYOFWEEK = days[d.getDay()];
    var result = "It's " + HOUR + ":" + MIN + ". " + "Today is " + MONTH + " " + DAY + ", " + YEAR + " (" + DAYOFWEEK + ")";
    return result;
}
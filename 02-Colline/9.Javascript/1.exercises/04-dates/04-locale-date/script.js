/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    let today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    let hourNow = today.getHours();
    let greeting;
    var dateTime = date+' '+hourNow;


    if (date < 2020){
        greeting = "Good Morning";
        alert date
    
    }
    else if (hourNow < 17.30){
        greeting = 'Good afternoon!';
    
    }
    else if (hourNow < 24){
        greeting = "Good evening"
    
    }
    else {
        greeting = "Hi buddy ";
    }
    
    
    document.getElementById("target").innerHTML = "<p>" + greeting + " </p>";
    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"
    // your code here
})();

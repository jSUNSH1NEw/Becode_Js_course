/* becode/javascript
 *
 * /04-dates/02-title-by-hour-two/script.js - 4.2: texte en fonction de l'heure (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let today = new Date();
    let hourNow = today.getHours();
    let greeting;


    if (hourNow < 12){
        greeting = "Good Morning";
    
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

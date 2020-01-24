/* becode/javascript
 *
 * /04-dates/01-title-by-hour-one/script.js - 4.1: texte en fonction de l'heure (1)
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
    icon ="Cofee"


}
else if (hourNow < 20){
    greeting = 'Good afternoon!';
    icon = "Moon"

}
else if (hourNow < 24){
    greeting = "Good work boy"
    icon = "Hand"

}
else {
    greeting = "Hi buddy ";
}


document.getElementById("target").innerHTML = "<p>" + greeting + " </p>";

document.getElementById("icon").innerHTML = ('<i class="fa fa-' + icon + '" aria-hidden="true"></i>');

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"
    // your code here
})();

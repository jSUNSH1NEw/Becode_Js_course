/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */
box()
//* FIX THE if  Link of varibles for use NULL
// function box(){
//     let age = prompt("Please enter your ur age:", "");
//     let type = prompt("Please enter ur gender","");
//     let city = prompt("Please enter were u living","");
//     let conf = confirm(" Tu as " + age + " Tu est " + type + " et tu habite " + city + "?");



//     if (age, type, city == ""){
//         alert("For real u pressed Cancel buddy ?Common i want ur response.");
//         box()
//     }
    

//     else if (conf == true){
//         alert("Enregistrement des données");
//     }

//     else{
//         alert("Change what u need too change ");
//         box()
//     }
// }

function box(){
    let age = prompt("Please enter your ur age:", "");
    let type = prompt("Please enter ur gender","");
    let city = prompt("Please enter were u living","");
    let conf = confirm(" Tu as " + age + " Tu est " + type + " et tu habite " + city + "?");



    if (age == "" || type =="" || city == "" || age == null || type == null || city == null ){
        alert("For real u pressed Cancel buddy ? or u maybe let a case blank get me a response boY.");
        box()
    }
    

    else if (conf == true){
        alert("Enregistrement des données");
    }

    else{
        alert("Change what u need too change ");
        box()
    }
}



/* becode/javascript
 *
 * /05-arrays/01-get-element/script.js - 5.1: élément de tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const fruits = [
        "pomme",
        "la figue fantome",
        "la cerise fantome",
        "le fruit fantome",
        "le kiwi fantome",
        "baie",
        "orange",
        "raison blanc",
        "citron FANTOME",
        "framboise",
        "raisin rouge",
    ];

    const dropfruits = () => alert(fruits[2]);
    document.getElementById("run").addEventListener("click", dropfruits);

    // your code here
})();

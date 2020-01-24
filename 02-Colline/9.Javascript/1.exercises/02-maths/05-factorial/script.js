/* becode/javascript
 *
 * /02-maths/05-factorial/script.js - 2.5: Factorielle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let numbers = document.getElementById("numbers").value

    function Cfact(nombre){
        switch(true){case (numbers<0 || (numbers!=Math.round(numbers))):return "Erreur";
            
            case (numbers==0):return 1;
            default:
                return (numbers-- * Cfact(numbers));
        }
    }
    
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", () => {
        // your code here
    });
})();

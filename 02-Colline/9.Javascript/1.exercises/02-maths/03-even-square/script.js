/* becode/javascript
 *
 * /02-maths/03-even-square/script.js - 2.3: carrés des pairs
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", () => {
        // your code here
        let nbs_pair = []; 
        for(let i=0;i<=21;i+=2){
            nbs_pair.push(i*i);
        }
        alert(nbs_pair)

        // your code here
    });
})();



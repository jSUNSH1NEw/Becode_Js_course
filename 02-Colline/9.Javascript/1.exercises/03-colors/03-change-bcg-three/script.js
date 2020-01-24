/* becode/javascript
 *
 * /03-colors/03-change-bcg-three/script.js - 3.3: couleur de fond (3)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const changeBackgroundColor = () => {
        let randomA = Math.floor(Math.random() * 258);
        let randomB = Math.floor(Math.random() * 256);
        let randomC = Math.floor(Math.random() * 257);
        let color = `rgb(${randomA},${randomB},${randomC})`;
        document.body.style.backgroundColor = color;
    }
    document.getElementById("run").addEventListener("click", changeBackgroundColor);
    // your code here
})();

/* becode/javascript
 *
 * /11-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", async () => {
        try {
            const request      = await fetch("http://localhost:3000/heroes");
            const arrObjetXmen = await request.json();
            const target       = document.getElementById("target");
            let   i            = 0;
            arrObjetXmen.forEach( objetXmen => {
                i++
                let template             = document.getElementById("tpl-hero").cloneNode(true);
                let cloneTemplateContent = document.importNode(template.content, true);
                target.appendChild(cloneTemplateContent);
                
                document.querySelector(`.hero:nth-child(0n+${i})>.title>strong.name`).innerHTML  = objetXmen.name;
                document.querySelector(`.hero:nth-child(0n+${i})>.title>em.alter-ego`).innerHTML = objetXmen.alterEgo;
                document.querySelector(`.hero:nth-child(0n+${i})>p.powers`).innerHTML            = objetXmen.abilities;

            });
    // your code here
})();

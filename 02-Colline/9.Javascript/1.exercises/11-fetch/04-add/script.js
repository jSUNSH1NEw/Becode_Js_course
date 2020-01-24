/* becode/javascript
 *
 * /11-fetch/04-add/script.js - 11.4: ajouter un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const createNewXman = async () => {
        
        let name      = document.getElementById("hero-name").value;
        let alterEgo  = document.getElementById("hero-alter-ego").value;
        let abilities = document.getElementById("hero-powers").value.split(", ");
        
        if(name == "" || alterEgo == "" || abilities == ""){
            alert("Remplissez tous les champs !")
            throw "Champs non remplis";
        }else{
            try{
                const requestArrOfXmen = await fetch("http://localhost:3000/heroes");
                let   arrOfXmen        = await requestArrOfXmen.json();
                let   id               = arrOfXmen.length + 1;
                return {
                    id       : id,
                    name     : name,
                    alterEgo : alterEgo,
                    abilities: abilities
                }
            } catch(error) {
                console.error(error);
            }
        }
    }

    const sendDataToApi = async (data) => {
        try{
            let sendDataRequest = await fetch("http://localhost:3000/heroes",{
                method : "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
            let answer = await sendDataRequest.json();
            console.log(answer);
        } catch (error){
            console.error(error);
        }
    }
    

    document.getElementById("run").addEventListener("click", async () => {
        let newXman = await createNewXman();
        sendDataToApi(newXman);
    })
    // your code here
})();

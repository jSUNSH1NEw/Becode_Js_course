/* becode/javascript
 *
 * /11-fetch/05-delete/script.js - 11.5: supprimer un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
     const deleteRequestToAPI = async (id) => {
        try{
            const sendDeleteRequest = await fetch(`http://localhost:3000/heroes/${id}`,{
                method : "DELETE",
                headers: {
                    "Content-Type": "application/json"
                },
            })
            const answer = await sendDeleteRequest.json();
            console.log(answer);
        } catch (error){
            console.error(error);
        }
    }

    
    document.getElementById("run").addEventListener("click", async () => {
        try {
            const idXmanToDelete  = document.getElementById("hero-id").value;
            const request = await fetch("http://localhost:3000/heroes");
            const arrObjetXmen = await request.json();
            let   indexOfRequestXmen = arrObjetXmen.findIndex( objetXmen => objetXmen.id == idXmanToDelete );
            let   objetXmen  = arrObjetXmen[indexOfRequestXmen];
            let   confirmation = confirm(`Êtes vous sûr de vouloir supprimer ${objetXmen.name}`);
            if (confirmation == true) {
                deleteRequestToAPI(idXmanToDelete);
            }
        }catch (error){
            console.error(error); 
        }
    })
    // your code here
})();

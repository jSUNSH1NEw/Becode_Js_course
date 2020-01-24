/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    const performOperation = operation => {
        // perform the operation
//*Variables 
        let one = document.getElementById("op-one").value.trim();  //* Add function trim for if the case get space on it 
        let two = document.getElementById("op-two").value.trim();  //*Add function trim for if the case get space on it 
//*Variables END
    //*function if  THE CASE are not filled Start
        if (one == "" ||two == ""){
            alert("1337 71|^|3");
        }
    //*other function END

    //!Create the parseInt for the variables after Say when ITS NOT GIVVEN JUST GO LEET
        one = parseInt(one);
        two = parseInt(two);
    //!Create the parseInt for the variables END 

        //? SWITCH FUNCTION  START 
            switch (operation){
                case 'addition' :
                    alert(one + two);
                    break;
                case 'substraction' :
                    alert(one - two);
                    break;
                case 'multiplication' : 
                    alert(one * two);
                    break;
                case 'division' :
                    alert (one / two);
                    break;
            }
        //? SWITCH FUNCTION END
    };
    Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (performOperation($btn.id), false),
        ),
    );
})();

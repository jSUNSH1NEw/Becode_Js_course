/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    let day = document.getElementById('day').value ;
    let month = document.getElementById('month').value ;
    let year = document.getElementById('year').value ;
    if ( month < pmonth ){
        age = year - pyear - 1;
    }
    else if ( month > pmonth ){
        age = year - pyear;
    }
    else if ( month == pmonth ){
        if ( day < pday ){
        age = year - pyear - 1;
        }
        else if ( day > pday ){
        age = year - pyear;
        }
        else if ( day == pday ){
        age = year - pyear;
        }
    }
    if (age != undefined){
        document.getElementById(outputFieldId).value = age;
    }

    ValidateForm(inputFieldId);


    // your code here
})();

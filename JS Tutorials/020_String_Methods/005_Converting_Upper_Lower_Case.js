//----------Converting to Upper and Lower Case----------

//A string is converted to upper case with toUpperCase():
//A string is converted to lower case with toLowerCase():



//----JavaScript String toUpperCase()----

let stringExample1 = "Hello brobeans.";
let stringToUpperCase = stringExample1.toUpperCase();

function print_toUpperCase() {
    let inputString = document.getElementById("enteredString_toUpperCase").value;

    //check each char is not a number
    for (let i = 0; i < inputString.length; i++) {
        if (isNaN(inputString[i])) {
            document.getElementById("myString__toUpperLowerCase").innerHTML = inputString.toUpperCase();
        }
        else {
            document.getElementById("myString__toUpperLowerCase").innerHTML =
                `Enter valid string.`;
        }
    }
}


function print_toLowerCase() {
    let inputString = document.getElementById("enteredString_toUpperCase").value;

    for (let i = 0; i < inputString.length; i++) {
        if (isNaN(inputString[i])) {
            document.getElementById("myString__toUpperLowerCase").innerHTML = inputString.toLowerCase();
        }
        else {
            document.getElementById("myString__toUpperLowerCase").innerHTML =
                `Enter valid string.`;
        }
    }
}
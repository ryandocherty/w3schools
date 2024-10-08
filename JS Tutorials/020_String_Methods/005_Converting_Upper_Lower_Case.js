//----------Converting to Upper and Lower Case----------

//A string is converted to upper case with toUpperCase():
//A string is converted to lower case with toLowerCase():

let stringExample1 = "Hello brobeans.";
let stringToUpperCase = stringExample1.toUpperCase();
let stringToLowerCase = stringExample1.toLowerCase();



document.getElementById("button_toUpperCase").addEventListener("click", print_toUpperCase);
document.getElementById("button_toLowerCase").addEventListener("click", print_toLowerCase);

function print_toUpperCase() {
    let inputString = document.getElementById("enteredString_toCase").value.trim();
    if (validateInputString()) {
        document.getElementById("myString__toCase").innerHTML =
        inputString.toUpperCase();
    }
}

function print_toLowerCase() {
    let inputString = document.getElementById("enteredString_toCase").value.trim();
    if (validateInputString()) {
        document.getElementById("myString__toCase").innerHTML =
        inputString.toLowerCase();
    }
}


function validateInputString() {
    let inputString = document.getElementById("enteredString_toCase").value.trim();

    //create a RegEx for special characters and numbers:
    //  symbols - /[!@#$%^&*()\-+={}[\]:;"'<>,.?\/|\\]/
    //  numbers - /\d/
    const regexSymbols = /[!@#$£%^&*()\-+={}[\]:;"'<>,.?\/|\\\d/]/;

    //use trim() to remove any whitespace from either (or both) ends, whilst preserving any whitespace in the middle
    //if it's ONLY whitespace, the resulting string will be 0 characters long,
    //we can then check use the 'length' property to confirm this
    if (!(inputString.trim().length === 0)) {
        //confirm string does not contain RegEx symbols or numbers:
        if (!(regexSymbols.test(inputString))) {
            return true;
        }
        else {
            document.getElementById("myString__toCase").innerHTML =
            `Only letters allowed`;
        }
    }
    else {
        document.getElementById("myString__toCase").innerHTML =
            `No characters detected`;
    }
}
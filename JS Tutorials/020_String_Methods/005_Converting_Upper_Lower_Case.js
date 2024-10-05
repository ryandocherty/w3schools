//----------Converting to Upper and Lower Case----------

//A string is converted to upper case with toUpperCase():
//A string is converted to lower case with toLowerCase():

let stringExample1 = "Hello brobeans.";
let stringToUpperCase = stringExample1.toUpperCase();
let stringToLowerCase = stringExample1.toLowerCase();


function print_toUpperCase() {

    let inputString = document.getElementById("enteredString_toUpperCase").value;
    let trimmedInputString = inputString.trim();

    const regexSymbols = /[!@#$%^&*()\-+={}[\]:;"'<>,.?\/|\\]/;     //create a RegEx for special characters

    //use trim() to remove any whitespace from either (or both) ends, whilst preserving any whitespace in the middle
    //if it's ONLY whitespace, the resulting string will be 0 characters long,
    //we can then check use the 'length' property to confirm this
    if (!(trimmedInputString.trim().length === 0)) {
        if (!(regexSymbols.test(trimmedInputString))) {             //confirm string does not contain RegEx symbols
            for (let i = 0; i < trimmedInputString.length; i++) {
                if ((isNaN(trimmedInputString[i]))) {               //confirm each char is not a number
                    document.getElementById("myString__toUpperLowerCase").innerHTML =
                    trimmedInputString.toUpperCase();
                }
                else {
                    document.getElementById("myString__toUpperLowerCase").innerHTML =
                    `Numbers not allowed`;
                }
            }
        }
        else {
            document.getElementById("myString__toUpperLowerCase").innerHTML =
            `Symbols not allowed`;
        }
    }
    else {
        document.getElementById("myString__toUpperLowerCase").innerHTML =
        `No characters detected`;
    }
}

//TODO: numbers & letters still make it thorugh (e.g "123Hello")
function print_toLowerCase() {
    
    let inputString = document.getElementById("enteredString_toUpperCase").value;
    let trimmedInputString = inputString.trim();

    const regexSymbols = /[!@#$%^&*()\-+={}[\]:;"'<>,.?\/|\\]/;

    if (!(trimmedInputString.trim().length === 0)) {
        if (!(regexSymbols.test(trimmedInputString))) {
            for (let i = 0; i < trimmedInputString.length; i++) {
                if ((isNaN(trimmedInputString[i]))) {
                    document.getElementById("myString__toUpperLowerCase").innerHTML =
                    trimmedInputString.toLowerCase();
                }
                else {
                    document.getElementById("myString__toUpperLowerCase").innerHTML =
                    `Numbers not allowed`;
                }
            }
        }
        else {
            document.getElementById("myString__toUpperLowerCase").innerHTML =
            `Symbols not allowed`;
        }
    }
    else {
        document.getElementById("myString__toUpperLowerCase").innerHTML =
        `No characters detected`;
    }
}
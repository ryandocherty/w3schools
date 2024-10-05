//----------Converting to Upper and Lower Case----------

//A string is converted to upper case with toUpperCase():
//A string is converted to lower case with toLowerCase():

let stringExample1 = "Hello brobeans.";
let stringToUpperCase = stringExample1.toUpperCase();
let stringToLowerCase = stringExample1.toLowerCase();


function print_toUpperCase() {

    let inputString = document.getElementById("enteredString_toUpperCase").value;
    let trimmedInputString = inputString.trim();

    //create a RegEx for special characters and numbers
    //symbols - /[!@#$%^&*()\-+={}[\]:;"'<>,.?\/|\\]/
    //numbers - /\d/
    const regexSymbols = /[!@#$£%^&*()\-+={}[\]:;"'<>,.?\/|\\\d/]/;      

    //use trim() to remove any whitespace from either (or both) ends, whilst preserving any whitespace in the middle
    //if it's ONLY whitespace, the resulting string will be 0 characters long,
    //we can then check use the 'length' property to confirm this
    if (!(trimmedInputString.trim().length === 0)) {
        //using 2 'if' statements in order to output 2 different error messages
        //confirm string does not contain RegEx symbols or numbers:
        if (!(regexSymbols.test(trimmedInputString))) {               
            document.getElementById("myString__toUpperLowerCase").innerHTML =
            trimmedInputString.toUpperCase();
        }
        else{
            document.getElementById("myString__toUpperLowerCase").innerHTML =
            `Only letters allowed`;
        }
    }
    else {
        document.getElementById("myString__toUpperLowerCase").innerHTML =
            `No characters detected`;
    }
}
    

function print_toLowerCase() {
    
    let inputString = document.getElementById("enteredString_toUpperCase").value;
    let trimmedInputString = inputString.trim();

    const regexSymbols = /[!@#$£%^&*()\-+={}[\]:;"'<>,.?\/|\\\d/]/;

    if (!(trimmedInputString.trim().length === 0)) {
        if (!(regexSymbols.test(trimmedInputString))) {
            document.getElementById("myString__toUpperLowerCase").innerHTML =
            trimmedInputString.toLowerCase();
        }
        else{
            document.getElementById("myString__toUpperLowerCase").innerHTML =
            `Only letters allowed`;
        }
    }
    else {
        document.getElementById("myString__toUpperLowerCase").innerHTML =
            `No characters detected`;
    }
}
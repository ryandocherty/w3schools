//----------Converting to Upper and Lower Case----------

//A string is converted to upper case with toUpperCase():
//A string is converted to lower case with toLowerCase():

let stringExample1 = "Hello brobeans.";
let stringToUpperCase = stringExample1.toUpperCase();
let stringToLowerCase = stringExample1.toLowerCase();



function print_toUpperCase() {
    let inputString = document.getElementById("enteredString_toCase").value.trim();
    //pass inputString into validateInputString() function
    //validateInputString() then returns inputString if no errors present
    if (validateStringToCase(inputString)) {
        document.getElementById("myString_toCase").innerHTML =
        inputString.toUpperCase();
    }
}

function print_toLowerCase() {
    let inputString = document.getElementById("enteredString_toCase").value.trim();
    if (validateStringToCase(inputString)) {
        document.getElementById("myString_toCase").innerHTML =
        inputString.toLowerCase();
    }
}


function validateStringToCase(inputString) {

    //RegEx to check for no numbers and at least one letter:
    const regexOnlyLetters = /^(?=.*[a-zA-Z])[^0-9]*$/;

    //use trim() to remove any whitespace from either (or both) ends, whilst preserving any whitespace in the middle
    //if it's ONLY whitespace, the resulting string will be 0 characters long,
    //we can then use the 'length' property to confirm this:
    if ((!(inputString.trim().length === 0)) &&
        //check for no numbers and at least one letter:
        (regexOnlyLetters.test(inputString))) {
        return inputString;
    }
    else {
        document.getElementById("myString_toCase").innerHTML =
            `String cannot:` + `<br>` +
            `Contain zero letters` + `<br>` +
            `Contain any numbers`;
    }
}

document.getElementById("button_toUpperCase").addEventListener("click", print_toUpperCase);
document.getElementById("button_toLowerCase").addEventListener("click", print_toLowerCase);
//----------JavaScript String trim()----------

//The trim() method removes whitespace from both sides of a string,
//while preserving any whitespace in the middle:

let stringToBeTrimmed = "     Hello m80!     ";
let stringTrimmed = stringToBeTrimmed.trim();



function print_StringTrimmed(){
    let inputString = document.getElementById("enteredString_trim").value;
    if (validateStringTrim(inputString)){
        document.getElementById("myString_trimmed").innerHTML =
        `Entered string: ` + inputString + `<br>` +
        `Trimmed string: ` + inputString.trim();
    }
}


function validateStringTrim(inputString) {

    if ((!(inputString.trim().length === 0)) &&
        //require whitespace at the beginning or end of the string:
        (inputString.at(0) === " " || inputString.at(-1) === " ")){
        return inputString;
    }
    else {
        document.getElementById("myString_trimmed").innerHTML =
            `String cannot be empty and requires` + `<br>` +
            `whitespace at the beginning and/or end`;
    }
}


document.getElementById("button_trim").addEventListener("click", print_StringTrimmed);
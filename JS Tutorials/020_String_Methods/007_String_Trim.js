//----------JavaScript String trim()----------

//The trim() method removes whitespace from both sides of a string,
//while preserving any whitespace in the middle:

let stringToBeTrimmed = "     Hello m80!     ";
let stringTrimmed = stringToBeTrimmed.trim();



function print_StringTrimmed(){

    let inputString = document.getElementById("enteredString_trim").value;

    if ((!(inputString.trim().length === 0)) &&
        //require whitespace at the beginning or end of the string:
        (inputString.at(0) === " " || inputString.at(-1) === " ")) {
        document.getElementById("myString_trimmed").innerHTML =
            `Entered string: ` + inputString + `<br>` +
            `Trimmed string: ` + inputString.trim();
    }
    else {
        document.getElementById("myString_trimmed").innerHTML =
            `String cannot be empty and requires` + `<br>` +
            `whitespace at the beginning and/or end`;
    }
}


//----------JavaScript String trimStart()----------

//ECMAScript 2019 added the String method trimStart() to JavaScript.
//The trimStart() method works like trim(), 
//but removes whitespace only from the start of a string:

function print_StringTrimStart(){

    let inputString = document.getElementById("enteredString_trimStart").value;
    //require whitespace at the beginning of the string:
    if ((!(inputString.trim().length === 0)) && (inputString.at(0) === " ")) {
        document.getElementById("myString_trimStart").innerHTML =
            `Entered string: ` + inputString + `<br>` +
            `Trimmed string: ` + inputString.trimStart();
    }
    else {
        document.getElementById("myString_trimStart").innerHTML =
            `String cannot be empty and` + `<br>` +
            `requires whitespace at the beginning`;
    }

}


//----------JavaScript String trimEnd()----------

//ECMAScript 2019 added the String method trimEnd() to JavaScript.
//The trimEnd() method works like trim(), 
//but removes whitespace only from the end of a string:

function print_StringTrimEnd(){

    let inputString = document.getElementById("enteredString_trimEnd").value;
    //require whitespace at the end of the string:
    if ((!(inputString.trim().length === 0)) && (inputString.at(-1) === " ")) {
        document.getElementById("myString_trimEnd").innerHTML =
            `Entered string: ` + inputString + `<br>` +
            `Trimmed string: ` + inputString.trimEnd();
    }
    else {
        document.getElementById("myString_trimEnd").innerHTML =
            `String cannot be empty and` + `<br>` +
            `requires whitespace at the end`;
    }

}


document.getElementById("button_trim").addEventListener("click", print_StringTrimmed);
document.getElementById("button_trimStart").addEventListener("click", print_StringTrimStart);
document.getElementById("button_trimEnd").addEventListener("click", print_StringTrimEnd);
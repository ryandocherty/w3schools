//----------JavaScript String Padding----------

//ECMAScript 2017 added two new string methods to JavaScript: padStart() and padEnd() 
//this was to support padding at the beginning and at the end of a string.

//EXAMPLE padStart():
//Pad a string with "0" until it reaches length 4:
let stringToBePadded = "5";
let stringPadded1 = stringToBePadded.padStart(4, "0");

//Pad a string with "x" until it reaches length 10:
let stringPadded2 = stringToBePadded.padStart(10, "x");


function print_StringPadStart(){

    let inputString = 
    document.getElementById("enteredString_initialPaddingString").value;
    let inputStringPadding = 
    document.getElementById("enteredString_paddingString").value;
    let inputStringPaddingLength = 
    document.getElementById("enteredString_paddingLength").valueAsNumber;

    if (validateString_Padding(inputString, inputStringPadding, inputStringPaddingLength)){
        document.getElementById("myString_padded").innerHTML =
        inputString.padStart(inputStringPaddingLength, inputStringPadding);
    }
}

function print_StringPadEnd(){

    let inputString = 
    document.getElementById("enteredString_initialPaddingString").value;
    let inputStringPadding = 
    document.getElementById("enteredString_paddingString").value;
    let inputStringPaddingLength = 
    document.getElementById("enteredString_paddingLength").valueAsNumber;

    if (validateString_Padding(inputString, inputStringPadding, inputStringPaddingLength)){
        document.getElementById("myString_padded").innerHTML =
        inputString.padEnd(inputStringPaddingLength, inputStringPadding);
    }
}

//Function to check:
//Each inputted string is not empty,
//Padding length is numerical, 
//and greater than the length of the initial string
function validateString_Padding(initialString, paddingString, paddingLength) {

    if (!(initialString.trim().length === 0)){
        if (!(paddingString.trim().length === 0)){
            if((!(isNaN(paddingLength))) && (paddingLength > initialString.length)){
                return true;
            }
            else{
                document.getElementById("myString_padded").innerHTML =
                `Padding length must be numerical and` + `<br>` +
                `greater than the length of the first string.`
            }
        }
        else{
            document.getElementById("myString_padded").innerHTML =
            `No characters detected in the padding string.`
        }
    }
    else{
        document.getElementById("myString_padded").innerHTML =
        `No characters detected in the first string.`
    }
}
   
document.getElementById("button_padStart").addEventListener("click", print_StringPadStart);
document.getElementById("button_padEnd").addEventListener("click", print_StringPadEnd);
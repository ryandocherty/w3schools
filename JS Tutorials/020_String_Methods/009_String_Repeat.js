//----------JavaScript String repeat()----------

//The repeat() method returns a string with a number of copies of a string.
//The repeat() method returns a new string.
//The repeat() method does not change the original string.

function print_StringRepeat(){

    let inputString = 
    document.getElementById("enteredString_repeat").value;
    let repeatAmount = 
    document.getElementById("enteredString_repeatAmount").valueAsNumber;

    if (validateString_Repeat(inputString, repeatAmount)){
        document.getElementById("myString_repeated").innerHTML =
        inputString.repeat(repeatAmount);
    }
}

function validateString_Repeat(x, y) {

    if (!(x.trim().length === 0)) {
        if (!(isNaN(y))) {
            if (y > 0) {
                return true;
            }
            else{
                document.getElementById("myString_repeated").innerHTML =
                `Repeat amount must be greater than zero.`
            }
        }
        else {
            document.getElementById("myString_repeated").innerHTML =
                `Repeat amount must be numerical`
        }
    }
    else {
        document.getElementById("myString_repeated").innerHTML =
            `No characters detected.`
    }
}

document.getElementById("button_repeat").addEventListener("click", print_StringRepeat);
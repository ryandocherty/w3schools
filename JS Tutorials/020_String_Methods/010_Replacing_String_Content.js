//----------Replacing String Content----------

//The replace() method replaces a specified value with another value in a string.
//The replace() method does not change the string it is called on.
//The replace() method returns a new string.
//The replace() method replaces ONLY THE FIRST match
//If you want to replace all matches, use a regular expression with the /g flag set

function print_StringReplace(){

    let initialString = document.getElementById("enteredString_replace_initial").value;
    let partToReplace = document.getElementById("enteredString_replace_1stParam").value;
    let replacementString = document.getElementById("enteredString_replace_2ndParam").value;

    if (validateString_Replace(initialString, partToReplace, replacementString)){

        document.getElementById("myString_replaced").innerHTML =
        initialString.replace(partToReplace, replacementString);
    }

}


function validateString_Replace(input1, input2, input3) {

    if (((input1.trim().length === 0)) ||
        ((input2.trim().length === 0)) ||
        ((input3.trim().length === 0))) {

        document.getElementById("myString_replaced").innerHTML =
        `All input boxes require text.`
        return false;
    }
    else if (!(input1.includes(input2))) {
        document.getElementById("myString_replaced").innerHTML =
        `No match found.`
        return false;
    }
    else{
        return true;
    }
}


document.getElementById("button_replace").addEventListener("click", print_StringReplace);
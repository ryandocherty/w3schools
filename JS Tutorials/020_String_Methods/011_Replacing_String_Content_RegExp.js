//----------Replacing String Content Using Regular Expressions (RegExp)----------

//The replace() method replaces a specified value with another value in a string.
//The replace() method does not change the string it is called on.
//The replace() method returns a new string.
//The replace() method replaces ONLY THE FIRST match


//If you want to replace all matches, use a regular expression with the /g flag set:

function print_StringReplace_RegEx_gFlag(){

    const initialString = 
    document.getElementById("enteredString_replace_initial_RegEx_gFlag").value;
    const partToReplace = 
    document.getElementById("enteredString_replace_1stParam_RegEx_gFlag").value;
    const replacementString = 
    document.getElementById("enteredString_replace_2ndParam_RegEx_gFlag").value;

    //conversion from a string to RegExp:
    const regex = new RegExp(partToReplace, 'g');

    if (validateString_Replace_RegEx_gFlag(initialString, partToReplace, replacementString)){

        //The /g flag replaces all matches, 
        //instead of just the first match:
        document.getElementById("myString_replaced_RegEx_gFlag").innerHTML =
        initialString.replace(regex, replacementString);
    }

}

function validateString_Replace_RegEx_gFlag(input1, input2, input3) {

    if (((input1.trim().length === 0)) ||
        ((input2.trim().length === 0)) ||
        ((input3.trim().length === 0))) {

        document.getElementById("myString_replaced_RegEx_gFlag").innerHTML =
        `All input boxes require text.`
        return false;
    }
    else if (!(input1.includes(input2))) {
        document.getElementById("myString_replaced_RegEx_gFlag").innerHTML =
        `No match found.`
        return false;
    }
    else{
        return true;
    }
}


//By default, the replace() method is case sensitive
//To replace case insensitive, use a regular expression with an /i flag (insensitive):

function print_StringReplace_RegEx_iFlag(){

    const initialString = 
    document.getElementById("enteredString_replace_initial_RegEx_iFlag").value;
    const partToReplace = 
    document.getElementById("enteredString_replace_1stParam_RegEx_iFlag").value;
    const replacementString = 
    document.getElementById("enteredString_replace_2ndParam_RegEx_iFlag").value;

    //conversion from a string to RegExp:
    const regex = new RegExp(partToReplace, 'i');

    if (validateString_Replace_RegEx_iFlag(initialString, partToReplace, replacementString)){

        //The /i flag replaces all matches, 
        //instead of just the first match:
        document.getElementById("myString_replaced_RegEx_iFlag").innerHTML =
        initialString.replace(regex, replacementString);
    }

}

function validateString_Replace_RegEx_iFlag(input1, input2, input3) {

    if (((input1.trim().length === 0)) ||
        ((input2.trim().length === 0)) ||
        ((input3.trim().length === 0))) {

        document.getElementById("myString_replaced_RegEx_iFlag").innerHTML =
        `All input boxes require text.`
        return false;
    }
    else if (!(input1.includes(input2))) {
        document.getElementById("myString_replaced_RegEx_iFlag").innerHTML =
        `No match found.`
        return false;
    }
    else{
        return true;
    }
}



document.getElementById("button_replace_RegEx_gFlag").addEventListener("click", print_StringReplace_RegEx_gFlag);
document.getElementById("button_replace_RegEx_iFlag").addEventListener("click", print_StringReplace_RegEx_iFlag);
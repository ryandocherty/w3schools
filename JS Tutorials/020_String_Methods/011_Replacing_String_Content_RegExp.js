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

    const errorMessage = validateString_Replace(initialString, partToReplace, replacementString);

    if (errorMessage){
        document.getElementById("myString_replaced_RegEx_gFlag").innerHTML = errorMessage;
    }
    else{
        document.getElementById("myString_replaced_RegEx_gFlag").innerHTML =
        initialString.replace(regex, replacementString);
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
    //can use /gi to do both replace all + case insensitive
    const regex = new RegExp(partToReplace, 'i');

    //the validateString() function returns specific error messages (or null)
    const errorMessage = validateString_Replace(initialString, partToReplace, replacementString);

    if (errorMessage){
        document.getElementById("myString_replaced_RegEx_iFlag").innerHTML = errorMessage;
    }
    else{
        //The /i flag ignores case (case insensitive):
        document.getElementById("myString_replaced_RegEx_iFlag").innerHTML =
        initialString.replace(regex, replacementString);
    }
}


function validateString_Replace(input1, input2, input3) {

    if (((input1.trim().length === 0)) ||
        ((input2.trim().length === 0)) ||
        ((input3.trim().length === 0))) {

        return `All input boxes require text.`;
    }

    //includes() method is case sensitive,
    //use toLowerCase() on both strings to circumvent this:
    else if (!(input1.toLowerCase().includes(input2.toLowerCase()))) {

        return `No match found.`;
    }
    else{
        //why return "null" instead of "true" here:
        //in the print() function above, it's stated "if (errorMessage)"
        //returning true here would be saying that "it's true that an error message was returned"
        //but instead I'm stating that errorMessage == null
        return null;
        //also why return "null" instead of "false" here:
        //when returning null from the validateString() function, 
        //it indicates that there are no errors found during the validation process. 
        //it signifies the absence of an error message.
        //returning false here might imply that something went wrong or that the validation check failed,
        //but this doesn't really convey the idea of "no error" as clearly as null
    }
}


//Event listeners:
document.getElementById("button_replace_RegEx_gFlag").addEventListener("click", print_StringReplace_RegEx_gFlag);
document.getElementById("button_replace_RegEx_iFlag").addEventListener("click", print_StringReplace_RegEx_iFlag);
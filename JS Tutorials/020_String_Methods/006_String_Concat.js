//----------JavaScript String concat()----------

//concat() joins (concatenates) two or more strings:

let text1Concat = "Hello";
let text2Concat = "There";
let text3Concat = text1Concat.concat(" ", text2Concat);

//The concat() method can be used instead of the plus operator
//These two lines do the same:

let text4Concat = "Hello" + " " + "There";

//NOTE:
//All string methods return a new string. They don't modify the original string.
//Formally said: Strings are immutable: Strings cannot be changed, only replaced.



function print_StringConcatenated(){

    let inputString_1st = document.getElementById("enteredString1_concat").value.trim();
    let inputString_2nd = document.getElementById("enteredString2_concat").value.trim();

    if (validateStringConcat(inputString_1st, inputString_2nd)) {
        document.getElementById("myString_concatenated").innerHTML =
        inputString_1st.concat(" ", inputString_2nd);
    }
}

function validateStringConcat(inputString_1st, inputString_2nd) {

    //RegEx to check for no numbers and at least one letter:
    const regexOnlyLetters = /^(?=.*[a-zA-Z])[^0-9]*$/;

    //Checking the 2 entered strings individually:
    //I originally combined both strings and just checked that one,
    //but this allowed 1 string to be empty or just contain symbols
    if ((!(inputString_1st.trim().length === 0)) &&
        (!(inputString_2nd.trim().length === 0)) &&
        (regexOnlyLetters.test(inputString_1st)) &&
        (regexOnlyLetters.test(inputString_2nd))) {
        return true;
    }
    else {
        document.getElementById("myString_concatenated").innerHTML =
            `Either string cannot:` + `<br>` +
            `Contain zero letters` + `<br>` +
            `Contain any numbers`;
    }
}

document.getElementById("button_concatenated").addEventListener("click", print_StringConcatenated);
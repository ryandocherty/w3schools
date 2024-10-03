//----------Extracting String Parts----------

//There are 3 methods for extracting a part of a string:
//  slice(start, end)
//  substring(start, end)
//  substr(start, length)



//----------JavaScript String slice()----------

//slice() extracts a part of a string and returns the extracted part in a new string.
//The method takes 2 parameters: start position, and end position (end not included).

function print_StringSlice() {

    let inputString = document.getElementById("enteredStringInputSlice").value;
    let startSlicePosition = document.getElementById("enteredStringInputSliceStartPos").valueAsNumber;
    let endSlicePosition = document.getElementById("enteredStringInputSliceEndPos").valueAsNumber;

    //check entered parameters are valid:
    //start position has to be greater than or equal to 1
    //end position has to be less than the length of entered string
    //start position has to be less than the end position
    if ((startSlicePosition >= 1) && (endSlicePosition <= (inputString.length)) &&
        (startSlicePosition < endSlicePosition)) {

        document.getElementById("myStringSliced").innerHTML =
            `Sliced string: ` + inputString.slice(startSlicePosition - 1, endSlicePosition);
    }
    else {
        document.getElementById("myStringSliced").innerHTML =
            `Invalid position(s)`;
    }
}

//NOTE:
//JavaScript counts positions from zero.
//First position is 0.
//Second position is 1.


//If you omit the second parameter, the method will slice out the rest of the string:

function print_StringSlice_OmitSecondParameter() {

    let inputString = document.getElementById("enteredStringSlice_OmitSecondParam").value;
    let startSlicePosition = document.getElementById("enteredStringSliceStartPos_OmitSecondParam").valueAsNumber;

    //check entered parameters are valid
    if ((startSlicePosition >= 1) && (startSlicePosition <= (inputString.length))) {

        //omitting 2nd slice parameter here:
        document.getElementById("myStringSliced_OmitSecondParam").innerHTML =
            `Sliced string: ` + inputString.slice(startSlicePosition - 1);
    }
    else {
        document.getElementById("myStringSliced_OmitSecondParam").innerHTML =
            `Invalid position(s)`;
    }
}


//If a parameter is negative, the position is counted from the end of the string:

function print_StringSlice_NegativeParameter() {

    let inputString = document.getElementById("enteredStringSlice_NegativeParam").value;
    let negativeSlicePosition = document.getElementById("enteredStringSliceStartPos_NegativeParam").valueAsNumber;

    //check entered parameters are valid:
    //negative start slice position has to be less than 0
    //also has to be greater than or equal to length of entered string
    if ((negativeSlicePosition < 0) && (negativeSlicePosition >= (1 - (inputString.length + 1)))) {

        document.getElementById("myStringSliced_NegativeParam").innerHTML =
            `Sliced string: ` + inputString.slice(negativeSlicePosition);
    }
    else {
        document.getElementById("myStringSliced_NegativeParam").innerHTML =
            `Invalid position(s)`;
    }
}


//This example slices out a portion of a string with two negative positions:

function print_StringSlice_BothNegative() {

    let inputString = document.getElementById("enteredStringSlice_BothNegative").value;
    let negativeStartPos = document.getElementById("enteredStringSliceStartPos_BothNegative").valueAsNumber;
    let negativeEndPos = document.getElementById("enteredStringSliceEndPos_BothNegative").valueAsNumber;

    //check entered parameters are valid:
    //both negative positions have to be less than 0
    //negative start pos has to be less than/equal to negative end pos
    //negative start pos has to be greater than or equal to length of entered string
    if ((negativeStartPos < 0) &&
        (negativeEndPos < 0) &&
        (negativeStartPos <= negativeEndPos) &&
        (negativeStartPos >= (1 - (inputString.length + 1)))) {

        document.getElementById("myStringSliced_BothNegative").innerHTML =
            `Sliced string: ` + inputString.slice(negativeStartPos, negativeEndPos)
    }
    else {
        document.getElementById("myStringSliced_BothNegative").innerHTML =
            `Invalid position(s)`;
    }
}



//----------JavaScript String substring()----------

//substring() is similar to slice().
//The difference is that start and end values less than 0 are treated as 0 in substring().

function print_StringSubstring() {

    let inputString = document.getElementById("enteredString_Substring").value;
    let startPosition = document.getElementById("enteredString_Substring_StartPos").valueAsNumber;
    let endPosition = document.getElementById("enteredString_Substring_EndPos").valueAsNumber;

    //check entered parameters are valid:
    //end position has to be less than/equal to length of entered string
    //start position has to be less than/equal to end position
    //end position has to be greater than 0
    if ((endPosition <= (inputString.length)) &&
        (startPosition <= endPosition) &&
        (endPosition > 0)) {

        document.getElementById("myString_Substring").innerHTML =
            `Substring: ` + inputString.substring(startPosition - 1, endPosition);
    }
    else {
        document.getElementById("myString_Substring").innerHTML =
            `Invalid position(s)`;
    }
}


//If you omit the second parameter, substring() will slice out the rest of the string:

function print_Substring_Omit2ndParam() {

    let inputString = document.getElementById("enteredSubstring_OmitSecondParam").value;
    let startPosition = document.getElementById("enteredSubstringStartPos_OmitSecondParam").valueAsNumber;

    if (startPosition <= (inputString.length)) {

        //omitting 2nd parameter here:
        document.getElementById("mySubstring_OmitSecondParam").innerHTML =
            `Substring: ` + inputString.substring(startPosition - 1);
    }
    else {
        document.getElementById("mySubstring_OmitSecondParam").innerHTML =
            `Invalid position(s)`;
    }
}



//----------JavaScript String substr()----------

//substr() is similar to slice().
//The difference is that the second parameter specifies the length of the extracted part:

function print_substr() {

    let inputString = document.getElementById("enteredString_substr").value;
    let startPosition = document.getElementById("enteredString_substr_StartPos").valueAsNumber;
    let lengthPosition = document.getElementById("enteredString_substr_LengthPos").valueAsNumber;

    if (startPosition < (inputString.length + 1) &&
        (lengthPosition <= (inputString.length)) &&
        (lengthPosition > 0) &&
        (startPosition > 0)) {

        document.getElementById("myString_substr").innerHTML =
            `substr: ` + inputString.substr(startPosition - 1, lengthPosition);
    }

    else {
        document.getElementById("myString_substr").innerHTML =
            `Invalid position(s)`;
    }
}


//If you omit the second parameter, substr() will slice out the rest of the string:

function print_substr_Omit2ndParam() {

    let inputString = document.getElementById("enteredsubstr_OmitSecondParam").value;
    let startPosition = document.getElementById("enteredsubstrStartPos_OmitSecondParam").valueAsNumber;

    if ((startPosition < (inputString.length + 1)) &&
        (startPosition > 0)) {

        //omitting 2nd parameter here:
        document.getElementById("mysubstr_OmitSecondParam").innerHTML =
            `substr: ` + inputString.substr(startPosition - 1);
    }

    else {
        document.getElementById("mysubstr_OmitSecondParam").innerHTML =
            `Invalid position(s)`;
    }
}


//If the first parameter is negative, the position counts from the end of the string:

function print_substr_negative() {

    let inputString = document.getElementById("enteredString_substr_negative").value;
    let startPosition = document.getElementById("enteredString_substr_negative_StartPos").valueAsNumber;

    if (startPosition <= (inputString.length + 1) &&
        (startPosition >= (1 - (inputString.length + 1))) &&
        (startPosition != 0)){

        document.getElementById("myString_substr_negative").innerHTML =
            `substr: ` + inputString.substr(startPosition);
    }
    else {
        document.getElementById("myString_substr_negative").innerHTML =
            `Invalid positions(s)`;
    }
}
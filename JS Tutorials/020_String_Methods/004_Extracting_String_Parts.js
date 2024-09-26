//----------Extracting String Parts----------

//There are 3 methods for extracting a part of a string:
//  slice(start, end)
//  substring(start, end)
//  substr(start, length)



//----------JavaScript String slice()----------

//slice() extracts a part of a string and returns the extracted part in a new string.
//The method takes 2 parameters: start position, and end position (end not included).

function print_StringSplice(){
    let enteredString_ForSlice =
        document.getElementById("enteredStringInputSlice").value;
    let forSlice_StartPos =
        document.getElementById("enteredStringInputSliceStartPos").valueAsNumber;
    let forSlice_End_Pos =
        document.getElementById("enteredStringInputSliceEndPos").valueAsNumber;

    if ((forSlice_StartPos >= 1) && (forSlice_End_Pos <= (enteredString_ForSlice.length + 1))){
        document.getElementById("myStringSliced").innerHTML =
            `Sliced String: ` + enteredString_ForSlice.slice(forSlice_StartPos - 1, forSlice_End_Pos - 1);
    }
    else{
        document.getElementById("myStringSliced").innerHTML =
            `Position(s) not in range`;
    }
}

//NOTE:
//JavaScript counts positions from zero.
//First position is 0.
//Second position is 1.


//If you omit the second parameter, the method will slice out the rest of the string:

function print_StringSplice_OmitSecondParameter(){
    let enteredString_ForSlice_OmitSecondParam =
        document.getElementById("enteredStringSlice_OmitSecondParam").value;
    let forSlice_StartPos_OmitSecondParam =
        document.getElementById("enteredStringSliceStartPos_OmitSecondParam").valueAsNumber;


    if ((forSlice_StartPos_OmitSecondParam >= 1) &&
        (forSlice_StartPos_OmitSecondParam <= (enteredString_ForSlice_OmitSecondParam.length))){
        document.getElementById("myStringSliced_OmitSecondParam").innerHTML =
            `Sliced string: ` + enteredString_ForSlice_OmitSecondParam.slice(forSlice_StartPos_OmitSecondParam - 1);
    }
    else {
        document.getElementById("myStringSliced_OmitSecondParam").innerHTML =
            `Position not in range`;
    }
}
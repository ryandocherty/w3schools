//----------Extracting String Characters----------

//There are 4 methods for extracting string characters:

//The at(position) Method
//The charAt(position) Method
//The charCodeAt(position) Method
//Using property access [] like in arrays



//-----JavaScript String charAt()-----

//The charAt() method returns the character at a specified index (position) in a string:

function print_StringCharAt(){
    let enteredString_ForCharAt = document.getElementById("enteredStringInputCharAt").value;
    let enteredString_ForCharAtPosition = document.getElementById("enteredStringInputCharAtPosition").valueAsNumber;

    if ((enteredString_ForCharAtPosition <= enteredString_ForCharAt.length) && (enteredString_ForCharAtPosition >= 1)){
        if (enteredString_ForCharAt.charAt(enteredString_ForCharAtPosition - 1) === " "){
            document.getElementById("myStringCharAtProperty").innerHTML =
                `Character at position ` + enteredString_ForCharAtPosition + ` is : ` +
                `[space]`;
        }
        else{
            document.getElementById("myStringCharAtProperty").innerHTML =
                `Character at position ` + enteredString_ForCharAtPosition + ` is : ` +
                enteredString_ForCharAt.charAt(enteredString_ForCharAtPosition - 1);
        }
    }
    else{
        document.getElementById("myStringCharAtProperty").innerHTML =
            `Invalid position(s)`;
    }
}



//-----JavaScript String charCodeAt()-----

//The charCodeAt() method returns the code of the character at a specified index in a string:
//The method returns a UTF-16 code (an integer between 0 and 65535).

function print_StringCharCodeAt() {
    let enteredString_ForCharCodeAt = document.getElementById("enteredStringInputCharCodeAt").value;
    document.getElementById("myStringCharCodeAtProperty").innerHTML =
        `UTF-16 code for ` + `"` + enteredString_ForCharCodeAt + `" ` +
        `is: ` + enteredString_ForCharCodeAt.charCodeAt(0);
}



//-----JavaScript String at()-----

//ES2022 introduced the string method at():

function print_StringAt(){
    let enteredString_ForAt = document.getElementById("enteredStringInputAt").value;
    let enteredString_ForAtPosition = document.getElementById("enteredStringInputAtPosition").valueAsNumber;

    if ((enteredString_ForAtPosition <= enteredString_ForAt.length) && (enteredString_ForAtPosition >= 1)){
        if (enteredString_ForAt.at(enteredString_ForAtPosition - 1) === " "){
            document.getElementById("myStringAtProperty").innerHTML =
                `Character at position ` + enteredString_ForAtPosition + ` is : ` +
                `[space]`;
        }
        else{
            document.getElementById("myStringAtProperty").innerHTML =
            `Character at position ` + enteredString_ForAtPosition + ` is: ` +
            enteredString_ForAt.at(enteredString_ForAtPosition - 1);
        }
    }
    else{
        document.getElementById("myStringAtProperty").innerHTML =
        `Invalid position(s)`;
    }

}

//NOTE:
//The at() method returns the character at a specified index (position) in a string.
//The at() method is supported in all modern browsers since March 2022
//It allows the use of negative indexes while charAt() do not.
//Now you can use myString.at(-2) instead of charAt(myString.length-2).
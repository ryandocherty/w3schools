//----------Escape Characters----------


/*
Because strings must be written within quotes, JavaScript will misunderstand this string:

let text = "We are the so-called "Vikings" from the north.";

The string will be chopped to "We are the so-called ".
To solve this problem, you can use an backslash escape character.
The backslash escape character (\) turns special characters into string characters:

CODE          RESULT          DESCRIPTION
\'            '               Single quote
\"            "               Double quote
\\            \               Backslash

*/

//  \" inserts a double quote in a string:
let double_quote_example = "We are the so-called \"Vikings\" from the North.";

function print_DoubleQuoteInAString(){
    document.getElementById("myDoubleQuoteInAString").innerHTML = 
    double_quote_example;
}


//  \' inserts a single quote in a string:
let single_quote_example = 'It\'s alright.';

function print_SingleQuoteInAString(){
    document.getElementById("mySingleQuoteInAString").innerHTML = 
    single_quote_example;
}


//  \\ inserts a backslash in a string:
let backslash_example = "The character \\ is called a backslash.";

function print_BackslashInAString(){
    document.getElementById("myBackslashInAString").innerHTML = 
    backslash_example;
}


/*
Six other escape sequences are valid in JavaScript:

CODE        RESULT
\b          Backspace
\f          Form Feed
\n          New Line
\r          Carriage Return
\t          Horizontal Tabulator
\v          Vertical Tabulator

NOTE - The six escape characters above were originally designed to control typewriters, teletypes, and fax machines.
They do not make any sense in HTML. 

*/
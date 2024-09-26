//----------JavaScript Strings----------

//Strings are for storing text
//Strings are written with quotes



//----Using Quotes-----

//A JavaScript string is zero or more characters written inside quotes.
let stringExample1 = "I am a string";

//You can use single or double quotes:
let stringExample2 = "Double Quotes";
let stringExample3 = 'Single Qoutes';

//NOTE - strings created with single or double quotes work the same, there is no difference between the two.



//----Quotes Inside Quotes----

//You can use quotes inside a string, as long as they don't match the quotes surrounding the string:
let stringExample4 = "It's alright mate";
let stringExample5 = "Me nan is called 'Pat'";
let stringExample6 = 'Ye nan is called "Pat"';

function print_StringsWithDifferentQuotes(){
    document.getElementById("myStringsDifferentQuotes").innerHTML =
    `let stringExample4 = ` + `" ` + stringExample4 + ` "` + `<br>` +
    `let stringExample5 = ` + `" ` + stringExample5 + ` "` + `<br>` +
    `let stringExample6 = ` + `' ` + stringExample6 + ` '` + `<br>`;
}



//----Template Strings----

//Templates were introduced with ES6 (JavaScript 2016).
//Templates are strings enclosed in backticks (`This is a template string`).
//Templates allow single and double quotes inside a string:
let stringExample7 = `He's often called "Slurms MacKenzie"`;



//----String Length----

//To find the length of a string, use the built-in length property:
let stringExample8 = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
let stringExample8_Length = stringExample8.length;

function print_EnteredStringLength(){
   let stringExampleLength = document.getElementById("enteredStringInput").value;
   document.getElementById("myStringLengthProperty").innerHTML = 
   `Entered string length: ` + stringExampleLength.length;
}
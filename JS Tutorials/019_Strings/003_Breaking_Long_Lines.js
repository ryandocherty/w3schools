//----------Breaking Long Lines----------

//For readability, programmers often like to avoid long code lines.

//A safe way to break up a statement is after an operator:
document.getElementById("example").innerHTML =
"Hello mate!";

//A safe way to break up a string is by using string addition:
document.getElementById("example").innerHTML = "Hello" +
"mate!";



//----Template Strings----

//Templates were introduced with ES6 (JavaScript 2016).
//Templates are strings enclosed in backticks (`This is a template string`).
//Templates allow multiline strings:

let templateString_multipleLines =
`The quick
brown fox
jumps over
the lazy dog`;
//----------JavaScript String Methods----------

//Basic String Methods
//Javascript strings are primitive and immutable: All string methods produce a new string without altering the original string.

/*

String length                   String toUpperCase()
String charAt()                 String toLowerCase()
String charCodeAt()             String concat()
String at()                     String trim()
String [ ]                      String trimStart()
String slice()                  String trimEnd()    
String substring()              String padStart()
String substr()                 String padEnd()
String replace()
String replaceAll()
String split()

*/


//-----JavaScript String Length-----

//The length property returns the length of a string:

function print_EnteredStringLength(){
    let enteredStringValue = document.getElementById("enteredStringInput").value;
    document.getElementById("myStringLengthProperty").innerHTML = 
    `String length: ` + enteredStringValue.length;
}
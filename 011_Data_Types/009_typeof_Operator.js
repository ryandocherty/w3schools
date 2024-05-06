//----------The typeof Operator----------


//You can use the JavaScript typeof operator to find the type of a JavaScript variable
//The typeof operator returns the type of a variable or an expression:

typeof ""             // Returns "string"
typeof "John"         // Returns "string"
typeof "John Doe"     // Returns "string"

typeof 0              // Returns "number"
typeof 314            // Returns "number"
typeof 3.14           // Returns "number"
typeof (3)            // Returns "number"
typeof (3 + 4)        // Returns "number"


function typeof_Function(){

    document.getElementById("myTypeOf").innerHTML =
    'typeof " " is: ' + typeof "" + '<br>' +
    'typeof "John" is: ' + typeof "John" + '<br>' +
    'typeof "John Doe" is: ' + typeof "John Doe" + '<br>' + '<br>' +
    
    'typeof 0 is: ' + typeof 0 + '<br>' +
    'typeof 314 is: ' + typeof 314 + '<br>' +
    'typeof 3.14 is: ' + typeof 3.14 + '<br>' +
    'typeof (3) is: ' + typeof (3) + '<br>' +
    'typeof (3 + 4) is: ' + typeof (3 + 4);
}
//----------JavaScript Strings as Objects----------

//Normally, JavaScript strings are primitive values, created from literals:
let x_stringLiteral = "John";

//But strings can also be defined as objects with the keyword new:
let y_stringObject = new String("John");


//NOTE:
//Do not create String objects.
//The new keyword complicates the code and slows down execution speed.
//String objects can produce unexpected results:

function print_StringObjectEqual(){
    document.getElementById("myStringObjectEqual").innerHTML =
    `let x = "John";` + `<br>` +
    `let y = new String("John");` + `<br>` + `<br>` +
    '(x == y): ' + (x_stringLiteral == y_stringObject);
}

function print_StringObjectNotEqual(){
    document.getElementById("myStringObjectNotEqual").innerHTML =
    `let x = "John";` + `<br>` +
    `let y = new String("John");` + `<br>` + `<br>` +
    '(x === y): ' + (x_stringLiteral === y_stringObject);
}

//Note the difference between (x==y) and (x===y).


//(x == y) true or false?
//(x === y) true or false?
let xx_stringObject = new String("Bob");
let yy_stringObject =  new String("Bob");

function print_StringObjectsComparisons(){
    document.getElementById("myCompareStringObjects").innerHTML =
    `(x == y): ` + (xx_stringObject == yy_stringObject) + `<br>` +
    `(x === y): ` + (xx_stringObject === yy_stringObject) + `<br>` + `<br>` +
    `Note: Comparing two JavaScript objects always returns false.`;
}
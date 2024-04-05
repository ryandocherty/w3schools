//----------Redeclaring Variables----------

//Redeclaring a variable using the var keyword can impose problems.
//Redeclaring a variable inside a block will also redeclare the variable outside the block:

var x = 10;     //here x is 10
function printVarBeforeRedeclaration_Function(){
    document.getElementById("myParagraph1").innerHTML = "Value of var x before redeclaration: " + x;
}

function printVarAfterRedeclaration_Function(){
    var x = 2;  //here x is 2
    document.getElementById("myParagraph2").innerHTML = "Value of var x after redeclaration: " + x;
    
}
//here x is 2



//Redeclaring a variable using the let keyword can solve this problem.
//Redeclaring a variable inside a block will not redeclare the variable outside the block:

let y = 10;
//here y is 10

{
let y = 2;
//here y is 2
}

//here y is 10



/*
----------Difference Between var, let and const----------
        Scope   Redeclare   Reassign    Hoisted     Binds this
var	    No	    Yes	        Yes	        Yes	        Yes
let	    Yes	    No	        Yes	        No	        No
const	Yes	    No	        No	        No	        No
*/



//----------What is Good?----------
//let and const have block scope.
//let and const can not be redeclared.
//let and const must be declared before use.
//let and const does not bind to this.
//let and const are not hoisted.

//----------What is Not Good?----------
//var does not have to be declared.
//var is hoisted.
//var binds to this.



//----------Redeclaring var & let----------

//Redeclaring a JavaScript variable with var is allowed anywhere in a program:
var z = 2;
//now z is 2

var z = 3;
//now z is 3


/*
With let, redeclaring a variable in the same block is NOT allowed:

var x = 2;   //allowed
let x = 3;   //not allowed

{
let x = 2;   //allowed
let x = 3;   //not allowed
}

{
let x = 2;   //allowed
var x = 3;   //not allowed

*/


//Redeclaring a variable with let, in another block, IS allowed:
let a = 2;   //allowed

{
let a = 3;   //allowed
}

{
let a = 4;    //allowed
}
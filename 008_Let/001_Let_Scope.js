//----------JavaScript Let----------

//The let keyword was introduced in ES6 (2015)
//Variables declared with let have Block Scope
//Variables declared with let must be Declared before use
//Variables declared with let cannot be Redeclared in the same scope



//----------Block Scope----------

//Before ES6 (2015), JavaScript did not have Block Scope.
//JavaScript had Global Scope and Function Scope.
//ES6 introduced the two new JavaScript keywords: let and const.
//These two keywords provided Block Scope in JavaScript:

//Variables declared with let inside a { } block cannot be accessed from outside the block:
function let_Function(){
    let x = 2;
    //x can be used here
}
//x can NOT be used here




//----------Global Scope----------

//Variables declared with the var always have Global Scope.
//Variables declared with the var keyword can NOT have block scope:

//Variables declared with varinside a { } block can be accessed from outside the block:
function var_Function(){
    var y = 2;
}
//y CAN be used here




//----------Cannot be Redeclared----------

//Variables defined with let can not be redeclared.
//You can not accidentally redeclare a variable declared with let.

//With let you can not do this:
//let a = "John Doe";
//let a = 0;


//Variables defined with var can be redeclared.
//With var you can do this:
var a = "John Doe";
var a = 0;
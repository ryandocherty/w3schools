//----------JavaScript Numbers----------


//All JavaScript numbers are stored as decimal numbers (floating point).
//Numbers can be written with, or without decimals:

function decimals_Function(){

    let x1 = 34.00;     // With decimals
    let x2 = 34;        // Without decimals
    let x3 = 3.4;

    document.getElementById("myDecimals").innerHTML = 
    "let x1 = 34.00;" + "<br>" + "x1 is: " + x1 + "<br>" + "<br>" +
    "let x2 = 34;" + "<br>" + "x2 is: " + x2 + "<br>" + "<br>" +
    "let x3 = 3.4;" + "<br>" + "x3 is: " + x3;
}



//---Exponential Notation---
//Extra large or extra small numbers can be written with scientific (exponential) notation:

function exponentialNotation_Function(){

    let y = 123e5;    // 12300000
    let z = 123e-5;   // 0.00123

    document.getElementById("myExponential").innerHTML =
    "let y = 123e5;" + "<br>" + "y (123^5) is: " + y + "<br>" + "<br>" +
    "let z = 123e-5;" + "<br>" + "z (123^-5) is: " + z;
}


//  NOTE - Most programming languages have many number types:
//  Whole numbers (integers):
//  byte (8-bit), short (16-bit), int (32-bit), long (64-bit)

//  Real numbers (floating-point):
//  float (32-bit), double (64-bit).

//  Javascript numbers are always one type:
//  double (64-bit floating point).



//---JavaScript BigInt---
//All JavaScript numbers are stored in a 64-bit floating-point format.
//JavaScript BigInt is a new datatype (ES2020) that can be used to store integer values,
//that are too big to be represented by a normal JavaScript Number:

function bigInt_Function(){

    //You cannot perform math between a BigInt type and a Number type.
    let bigBoy = BigInt("123456789012345678901234567890");

    document.getElementById("myBigInt").innerHTML = 
    'let bigBoy = BigInt("123456789012345678901234567890");' + "<br>" + 
    'bigBoy is: ' + bigBoy;

    document.getElementById("myBigInt_Info").innerHTML = 
    'Note - you cannot perform maths between a BigInt type and a Number type.';
}
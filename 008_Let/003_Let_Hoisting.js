//----------Let Hoisting----------

//Variables defined with var are hoisted to the top and can be initialized at any time.
//Meaning: You can use the variable before it is declared:

//This is ok:
carName = "Volvo";
var carName;


//Variables defined with let are also hoisted to the top of the block, but not initialized.
//Meaning: Using a let variable before it is declared will result in a ReferenceError:

function printReferenceError_Function(){
    try{
        carName2 = "Saab";
        let carName2 = "Volvo";
    }
    catch(errorMessage){
        document.getElementById("myErrorParagraph2").innerHTML = errorMessage;
    }
}
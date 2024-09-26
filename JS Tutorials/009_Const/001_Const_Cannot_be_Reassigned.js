//----------JavaScript Const----------

//The const keyword was introduced in ES6 (2015)
//Variables defined with const cannot be Redeclared
//Variables defined with const cannot be Reassigned
//Variables defined with const have Block Scope



//----------Cannot be Reassigned----------

//A variable defined with the const keyword cannot be reassigned:
function reassigningConst_Function(){
    try{
        const PI = 3.141592653589793;
        PI = 3.14;      // This will give an error
        PI = PI + 10;   // This will also give an error
    }

    catch (errorMessage){
        document.getElementById("myConstError").innerHTML = errorMessage;
    }
}
//----------Local Variables----------


//Variables declared within a JavaScript function, become LOCAL to the function.
//Local variables can only be accessed from within the function.


// code here can NOT use carName

function myFunction(){
    let carName = "Volvo";
    // code here CAN use carName
}
  
// code here can NOT use carName




function carName_InsideFunction(){
    let carName = "Volvo";

    document.getElementById("myLocalInsideVariable").innerHTML =
    'let carName = "Volvo";' + '<br>' + '<br>' +
    "Inside function: " + carName + ", " + typeof carName;
}


function carName_OutsideFunction() {
    try{
        typeof carName + " " + carName;
    }
    
    catch (undefinedError){
        document.getElementById("myLocalOutsideVariable").innerHTML =
        "Outside function: " + undefinedError;
    }
}



function callAllFunctions_005_Function(){
    carName_InsideFunction();
    carName_OutsideFunction();
}
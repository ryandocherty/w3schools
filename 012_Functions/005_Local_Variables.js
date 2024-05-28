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
    let carName_Volvo = "Volvo";
    let text_insideFunction = "Inside function: " + typeof carName_Volvo + " " + carName_Volvo;

    document.getElementById("myLocalVariable").innerHTML = text_insideFunction;
}



let carName_BMW = "BMW";

function carName_OutsideFunction(){
    let text_outsideFunction = "Outside function: " + typeof carName_BMW + " " + carName_BMW;
    document.getElementById("myLocalVariable2").innerHTML = text_outsideFunction;
}



function callAllFunctions_005_Function(){
    carName_InsideFunction();
    carName_OutsideFunction();
}
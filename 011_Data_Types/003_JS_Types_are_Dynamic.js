//----------JavaScript Types are Dynamic----------

//JavaScript has dynamic types. This means that the same variable can be used to hold different data types:

function dynamicDataTypes_Function(){
    let x;          //now x is undefined
    document.getElementById("myChangeDataType").innerHTML = 'let x;' + '<br>' + 'x is: ' + x;

    x = 5;          //now x is a number
    document.getElementById("myChangeDataType2").innerHTML = 'x = 5;' + '<br>' + 'x is: ' + x;

    x = "John";     //now x is a string
    document.getElementById("myChangeDataType3").innerHTML = 'x = "John";' + '<br>' + 'x is: ' + x;
}


function callAllFunctions_003_Function(){
    dynamicDataTypes_Function();
}
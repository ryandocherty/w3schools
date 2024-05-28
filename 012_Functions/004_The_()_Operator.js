//----------The () Operator----------




//Convert Fahrenheit to Celsius:
function fahrenheitToCelcius(fahrenheit){
    return (5/9) * (fahrenheit - 32);
}

//The () operator invokes (calls) the function:
let celciusValue = fahrenheitToCelcius(108);

function printFahrenheitToCelcius_Function(){
    document.getElementById("myCelciusFunction").innerHTML =
    'let celciusValue = fahrenheitToCelcius(108);' + '<br>' + '<br>' +

    'function fahrenheitToCelcius(fahrenheit){' + '<br>' +
    '&nbsp &nbsp return (5/9) * (fahrenheit - 32);' + '<br>' +
    '}' + '<br>' + '<br>' +

    'celciusValue = ' + celciusValue;
}



//Accessing a function with incorrect parameters can return an incorrect answer:
let celciusValue_IncorrectParameters = fahrenheitToCelcius();

function printCelciusValue_IncorrectParameters_Function(){
    document.getElementById("myCelciusFunction_IncorrectParameters").innerHTML =
    'let celciusValue = fahrenheitToCelcius();' + '<br>' + '<br>' +

    'celciusValue = ' + celciusValue_IncorrectParameters;
}


//Accessing a function without () returns the function and not the function result:
let celciusValue_NoParameters = fahrenheitToCelcius;

function printCelciusValue_NoParameters_Function(){
    document.getElementById("myCelciusFunction_NoParameters").innerHTML =
    'let celciusValue = fahrenheitToCelcius;' + '<br>' + '<br>' +

    'celciusValue = ' + celciusValue_NoParameters;


    document.getElementById("myCelciusFunction_Info").innerHTML =
    'NOTE - As you see from the examples above, <span style="color:#FF0000">fahrenheitToCelcius</span> ' + 
    'refers to the function object, and <span style="color:#FF0000">fahrenheitToCelcius()</span> refers to the function result.'
}




//----------Functions Used as Variable Values----------

//Functions can be used the same way as you use variables, in all types of formulas, assignments, and calculations.

//Instead of using a variable to store the return value of a function
//You can use the function directly, as a variable value:

function printCelciusValue_FunctionAsVariableValue_Function(){
    document.getElementById("myCelciusFunction_FunctionAsVariableValue").innerHTML =
    'The temperature is ' + fahrenheitToCelcius(89) + " degrees celcius"
}
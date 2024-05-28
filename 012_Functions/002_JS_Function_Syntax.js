//----------JavaScript Function Syntax----------



//A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ().

//Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).

//The parentheses may include parameter names separated by commas:
//(parameter1, parameter2, ...)

//The code to be executed, by the function, is placed inside curly brackets: {}

function name(parameter1, parameter2, parameter3) {
    // code to be executed
}


//Function parameters are listed inside the parentheses () in the function definition.
//Function arguments are the values received by the function when it is invoked.
//Inside the function, the arguments (the parameters) behave as local variables.



function printExampleFunction_Function(){

    document.getElementById("myExampleFunction").innerHTML =
    'function name(parameter1, parameter2, parameter3){' + '<br>' +
    '&nbsp &nbsp // code to be executed' + '<br>' +
    '}' + '<br>';

    document.getElementById("myExampleFunction_Info").innerHTML =
    'Function <b>parameters</b> are listed inside the parentheses ( ) in the function definition.' + '<br>' +
    'Function <b>arguments</b> are the <b>values</b> received by the function when it is invoked.' + '<br>' +
    'Inside the function, the arguments (the parameters) behave as local variables.';
}




//----------Function Invocation----------

//The code inside the function will execute when "something" invokes (calls) the function:

//  When an event occurs (when a user clicks a button)
//  When it is invoked (called) from JavaScript code
//  Automatically (self invoked)
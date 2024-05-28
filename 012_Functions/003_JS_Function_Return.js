//----------Function Return----------



//When JavaScript reaches a return statement, the function will stop executing.
//If the function was invoked from a statement, JavaScript will "return" to execute the code after the invoking statement.
//Functions often compute a return value. The return value is "returned" back to the "caller":


//Function is called, the return value will end up in result
let returnFunctionResult = returnMultipleTwoNumbers_Function(10, 5);


function returnMultipleTwoNumbers_Function(number1, number2){
    //Function returns the product of a and b
    return number1 * number2;
}


function printMultipleTwoNumbers_Function(){

    document.getElementById("myPrintReturnFunction").innerHTML =
    'let returnFunctionResult = returnMultipleTwoNumbers_Function(10, 5);' + '<br>' + '<br>' +

    'function returnMultipleTwoNumbers_Function(number1, number2){' + '<br>' +
    '&nbsp &nbsp return number1 * number2;' + '<br>' +
    '}' + '<br>' + '<br>' +

    'returnFunctionResult = ' + returnFunctionResult;



    document.getElementById("myPrintReturnFunction_Info").innerHTML =
    '<b>Why Functions?</b>' + '<br>' +
    'With functions you can reuse code.' + '<br>' +
    'You can write code that can be used many times.' + '<br>' +
    'You can use the same code with different arguments, to produce different results.'
}
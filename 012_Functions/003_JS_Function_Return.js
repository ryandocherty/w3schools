//----------Function Return----------



//When JavaScript reaches a return statement, the function will stop executing.
//If the function was invoked from a statement, JavaScript will "return" to execute the code after the invoking statement.
//Functions often compute a return value. The return value is "returned" back to the "caller":

//Function is called, the return value will end up in result
let result = returnMultipleTwoNumbers_Function(4, 5)

function returnMultipleTwoNumbers_Function(number1, number2){
    //Function returns the product of a and b
    return number1 * number2;
}

function printMulipleTwoNumbers_Function(){
    document.getElementById("myReturnFunction").innerHTML =
    'Number 1 = 4' + '<br>' +
    'Number 2 = 5' + '<br>' + '<br>' +
    'Result = ' + result;
}
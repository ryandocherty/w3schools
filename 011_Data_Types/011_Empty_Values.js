//----------Empty Values----------



//An empty value has nothing to do with undefined.
//An empty string has both a legal value and a type.


function printEmptyValue_Function(){

    let car = "";    // The value is "", the typeof is "string"

    document.getElementById("myEmptyValue").innerHTML =
    'let car = "";' + '<br>' +
    'typeof car is: ' + typeof car;
}
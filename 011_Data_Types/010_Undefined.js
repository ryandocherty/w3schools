//----------Undefined----------



//In JavaScript, a variable without a value, has the value undefined. The type is also undefined.

function printUndefined_Function(){

    let car;    // Value is undefined, type is undefined

    document.getElementById("myUndefined").innerHTML =
    'let car;' + '<br>' + 
    'typeof car is: ' + typeof car;

    document.getElementById("myUndefined_Info").innerHTML =
    "The value (and the data type) of a variable with no value is <b>undefined</b>."
}



//Any variable can be emptied, by setting the value to undefined. The type will also be undefined.

function printEmptyVariable_Function(){
    
    let car = "BMW";    
    car = undefined;    //Value is undefined, type is undefined

    document.getElementById("myEmptyVariable").innerHTML =
    'let car = "BMW";' + '<br>' +
    'car = undefined;' + '<br>' + '<br>' +
    'typeof car is: ' + typeof car;

    document.getElementById("myEmptyVariable_Info").innerHTML =
    'Variables can be emptied if you set the value to <b>undefined</b>.'
}
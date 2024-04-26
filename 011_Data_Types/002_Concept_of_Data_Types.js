//----------The Concept of Data Types----------


//In programming, data types are an important concept
//To be able to operate on variables, it is important to know something about the type
//Without data types, a computer cannot safely solve this:

let x = 16 + "Volvo";

//Does it make any sense to add "Volvo" to 16? Will it produce an error or will it produce a result?
//JavaScript will treat the example above as:

let y = "16" + "Volvo";

//NOTE: When adding a number and a string, JavaScript will treat the number as a string.


function addNumerToString_Function(){

    let a = 16 + "BMW";
    let b = "BMW" + 16;

    document.getElementById("myAddNumberToString").innerHTML = 
    '16 + "BMW" results in: ' + a + "<br>" +
    '"BMW" + 16 results in: ' + b;
}



//JavaScript evaluates expressions from left to right. Different sequences can produce different results:
//In the first example, JavaScript treats 16 and 4 as numbers, until it reaches "BMW".
//In the second example, since the first operand is a string, all operands are treated as strings.

function addNumberToString2_Function(){
    let a = 16 + 4 + "BMW";
    let b = "BMW" + 16 + 4;

    document.getElementById("myAddNumberToString2_Info").innerHTML =
    "JavaScript evaluates expressions from left to right. Different sequences can produce different results:"

    document.getElementById("myAddNumberToString2").innerHTML = 
    '16 + 4 + "BMW" results in: ' + a + "<br>" +
    '"BMW" + 16 + 4 results in: ' + b;
}

function printNumberToStringInfo_Function(){
    document.getElementById("myAddNumberToString3_Info").innerHTML =
    "In the first example, JavaScript treats 16 and 4 as numbers, until it reaches 'BMW'." + "<br>" +
    "In the second example, since the first operand is a string, all operands are treated as strings."
}



function callAllFunctions_002_Function(){
    addNumerToString_Function();
    addNumberToString2_Function();
    printNumberToStringInfo_Function();
}
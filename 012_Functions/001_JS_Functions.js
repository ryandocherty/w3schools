//----------JavaScript Functions----------



//A JavaScript function is a block of code designed to perform a particular task.
//A JavaScript function is executed when "something" invokes it (calls it).

//----Why Use Functions?---
//With functions you can reuse code
//You can write code that can be used many times.
//You can use the same code with different arguments, to produce different results.



//Function to compute the product of p1 and p2:

function multiplyTwoNumbers_Function(p1, p2){
    return p1 * p2;
}


let result = multiplyTwoNumbers_Function(4, 3);


function printResult_Function(){
  
  document.getElementById("myPrintResult").innerHTML =
  'function multiplyTwoNumbers_Function(p1, p2){' + '<br>' +
  '&nbsp &nbsp return p1 * p2;' + '<br>' +
  '}' + '<br>' + '<br>' +
  
  'let result = multiplyTwoNumbers_Function(4, 3);' + '<br>' + '<br>' +
  'result = ' + result;
}
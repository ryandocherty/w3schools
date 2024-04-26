//----------JavaScript Strings----------


//A string (or a text string) is a series of characters like "John Doe".
//Strings are written with quotes. You can use single or double quotes:

// Using double quotes:
let carName1 = "Volvo XC60";

// Using single quotes:
let carName2 = 'Volvo XC60';



//You can use quotes inside a string, as long as they don't match the quotes surrounding the string:

function quotesFunction_Function(){

    let answer1 = "It's alright";
    let answer2 = "He is called 'Johnny'";
    let answer3 = 'He is called "Johnny"';

    document.getElementById("myQuotes").innerHTML = 
    answer1 + "<br>" + 
    answer2 + "<br>" +
    answer3;

}


function callAllFunctions_004_Function(){
    quotesFunction_Function();
}
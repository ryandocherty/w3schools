//----------JavaScript Comments----------

//JavaScript comments can be used to explain JavaScript code, and to make it more readable.
//JavaScript comments can also be used to prevent execution, when testing alternative code.



//----------Single Line Comments----------
//Single line comments start with //.
//Any text between // and the end of the line will be ignored by JavaScript (will not be executed).
//This example uses a single-line comment before each code line:

function changeBothLines_Function(){
    //change heading:
    document.getElementById("myHeader").innerHTML = "Header changed."
    //change paragraph:
    document.getElementById("myParagraph").innerHTML = "Paragraph changed."
}


//This example uses a single line comment at the end of each line to explain the code:
let x = 5;      //Declare x, give it the value of 5
let y = x + 2;  //Declare y, give it the value of x + 2



//----------Multi Line Comments----------

/*
The code below will change
the heading with id = "myHeader"
and the paragraph with id = "myParagraph"
in the web page:
*/

function changeBothLinesAgain_Function(){
    //change heading:
    document.getElementById("myHeader").innerHTML = "Header changed again."
    //change paragraph:
    document.getElementById("myParagraph").innerHTML = "Paragraph changed again."
}

//It is most common to use single line comments.
//Block comments are often used for formal documentation.



//----------Using Comments to Prevent Execution----------
//Using comments to prevent execution of code is suitable for code testing.
//Adding // in front of a code line changes the code lines from an executable line to a comment.
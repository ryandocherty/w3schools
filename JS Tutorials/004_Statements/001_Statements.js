//----------JavaScript Statements----------

//JavaScript statements are composed of:
//Values, Operators, Expressions, Keywords, and Comments

let x, y, z;  // Statement 1
x = 5;        // Statement 2
y = 6;        // Statement 3
z = x + y;    // Statement 4

function valueOfZ_Function(){
    document.getElementById("demo").innerHTML = "The sum of " + x + " and " + y + " is " + z + ".";
}


//Most JavaScript programs contain many JavaScript statements
//In HTML, JavaScript statements are executed by the browser
//The statements are executed, one by one, in the same order as they are written
//JavaScript programs (and JavaScript statements) are often called JavaScript code

//This statement tells the browser to write "Hello Dolly." inside an HTML element with id="demo1":

function writeHelloDolly_Function(){
    document.getElementById("demo1").innerHTML = "Hello Dolly";
}
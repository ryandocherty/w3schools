//----------Semicolons ;----------

//Semicolons separate JavaScript statements
//Add a semicolon at the end of each executable statement:

let a, b, c;
a = 15;
b = 26;
c = a + b;
        
//When separated by semicolons, multiple statements on one line are allowed:
//a = 5; b = 6; c = a + b; 

function valueOfC_Function(){
    document.getElementById("demo2").innerHTML = " The sum of " + a + " and " + b + " is " + c;
}

//On the web, you might see examples without semicolons
//Ending statements with semicolon is not required, but highly recommended
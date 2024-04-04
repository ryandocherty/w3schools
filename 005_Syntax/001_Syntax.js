//----------JavaScript Syntax----------


//JavaScript syntax is the set of rules, how JavaScript programs are constructed:

//how to create variables:
var a;
let b;

//how to use variables:
a = 5;
b = 6;
let c = a + b;


/*----------JavaScript Values----------
The JavaScript syntax defines two types of values:

    Fixed values
    Variable values

Fixed values are called Literals.
Variable values are called Variables.
*/



/*----------JavaScript Literals----------
The two most important syntax rules for fixed values are:

    1. Numbers are written with or without decimals:                10.50 or 1001 0r 15.6
    2. Strings are text, written within double or single quotes:    "John Doe" or 'John Doe'   
*/



/*----------JavaScript Variables----------
In a programming language, variables are used to store data values.
JavaScript uses the keywords var, let and const to declare variables.
An equal sign is used to assign values to variables.
*/

//In this example, d is defined as a variable. Then, d is assigned (given) the value 6:
let d;
d = 6;



//----------JavaScript Operators----------
//JavaScript uses arithmetic operators ( + - * / ) to compute values:         
(5 + 6) * 10;

//JavaScript uses an assignment operator ( = ) to assign values to variables:  
let e, f;
e = 10;
f = 20;



/*----------JavaScript Expressions----------
An expression is a combination of values, variables, and operators, which computes to a value.
The computation is called an evaluation.
*/

//For example, 5 * 10 evaluates to 50
5 * 10;

//Expressions can also contain variable values:
x * 10;

//The values can be of various types, such as numbers and strings.
//For example, "John" + " " + "Doe", evaluates to "John Doe":
"John" + " " + "Doe";



/*----------JavaScript Keywords----------
JavaScript keywords are used to identify actions to be performed.
In these examples below, using var or let will produce the same result.
*/

//The let keyword tells the browser to create variables:
let g, h;
g = 5 + 6;
h = g * 10; 

//The var keyword also tells the browser to create variables:
var i, j;
i = 5 + 7;
j = i * 10;



/*----------JavaScript Identifiers / Names----------
Identifiers are JavaScript names.
Identifiers are used to name variables and keywords, and functions.
The rules for legal names are the same in most programming languages.

A JavaScript name must begin with:

    A letter (A-Z or a-z)
    A dollar sign ($)
    Or an underscore (_)

Subsequent characters may be letters, digits, underscores, or dollar signs.

Note - Numbers are not allowed as the first character in names. 
       This way JavaScript can easily distinguish identifiers from numbers.
*/



/*----------JavaScript is Case Sensitive----------
All JavaScript identifiers are case sensitive.
Note - JavaScript does not interpret LET or Let as the keyword let.
*/

//The variables lastName and lastname, are two different variables:
let lastName, lastname;
lastName = "Doe";
lastname = "Smith";



/*----------JavaScript and Camel Case----------
Historically, programmers have used different ways of joining multiple words into one variable name:

Hyphens: first-name, last-name, master-card, inter-city.
Hyphens are not allowed in JavaScript. They are reserved for subtractions.

Underscore: 
first_name, last_name, master_card, inter_city.

Upper Camel Case (Pascal Case): 
FirstName, LastName, MasterCard, InterCity.

Lower Camel Case: 
firstName, lastName, masterCard, interCity.

JavaScript programmers tend to use camel case that starts with a lowercase letter
*/



/*----------JavaScript Character Set----------
JavaScript uses the Unicode character set.
Unicode covers (almost) all the characters, punctuations, and symbols in the world.
*/
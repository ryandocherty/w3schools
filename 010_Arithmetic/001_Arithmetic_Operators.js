//----------JavaScript Arithmetic Operators----------


//Arithmetic operators perform arithmetic on numbers (literals or variables)



//      +   Addition
//      - 	Subtraction
//      * 	Multiplication
//      ** 	Exponentiation (ES2016)
//      / 	Division
//      % 	Modulus (Remainder)
//      ++ 	Increment
//      -- 	Decrement




//----------Arithmetic Operations----------

//A typical arithmetic operation operates on two numbers
//The two numbers can be literals:
let a = 100 + 50;

//or variables:
let b = c + d;

//or expressions:
let e = (100 + 50) * a;




//----------Adding----------
//The addition operator (+) adds numbers:
let x = 5;
let y = 2;
let z = x + y;

//----------Subtracting----------
//The subtraction operator (-) subtracts numbers:
z = x - y;

//----------Multiplying----------
//The multiplication operator (*) multiplies numbers:
z = x * y;

//----------Dividing----------
//The division operator (/) divides numbers:
z = x / y;

//----------Remainder----------
//The modulus operator (%) returns the division remainder
//In arithmetic, the division of two integers produces a quotient and a remainder
//In mathematics, the result of a modulo operation is the remainder of an arithmetic division
z = x % y;

//----------Exponentiation----------
//The exponentiation operator (**) raises the first operand to the power of the second operand:
z = x ** 2;

//x ** y produces the same result as Math.pow(x,y):
z = Math.pow(x, 2);




//----------Operator Precedence----------

//Operator precedence describes the order in which operations are performed in an arithmetic expression:
let f = 100 + 50 * 3;

//Is the result of example above the same as 150 * 3, or is it the same as 100 + 150?
//Is the addition or the multiplication done first?
//As in traditional school mathematics, the multiplication is done first.
//Multiplication (*) and division (/) have higher precedence than addition (+) and subtraction (-).
//And (as in school mathematics) the precedence can be changed by using parentheses.
//When using parentheses, the operations inside the parentheses are computed first:
f = (100 + 50) * 3;

//When many operations have the same precedence (like addition and subtraction or multiplication and division), 
//they are computed from left to right:
f = 100 + 50 - 3;
f = 100 / 50 * 3;
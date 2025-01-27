//----------JavaScript Arrow Function----------

//Arrow functions were introduced in ES6.
//Arrow functions allow you to write shorter function syntax:

let myArrowFunction = (a, b) => a * b;
console.log(myArrowFunction(4, 5));

//Before Arrow:
before_arrow = function(){
    return `Before Arrow.`;
}

//With Arrow Function:
with_arrow = () => {
    return `With Arrow.`;
}

//It can get shorter!
//If the function only has 1 statement, and the statement returns a value,
//you can remove the brackets AND the *return* keyword.
//NOTE - the below example only works if the function has only 1 statement.

//Arrow Functions Return Value by Default:
arrow_short = () => `Short Arrow.`;


//If you have parameters, you pass them inside the parentheses:
//Arrow Function With Parameters:
hello_params = (val) => `Hello ` + val;

//In fact, if you only have 1 paremeter, you can skip the parentheses as well:
//Arrow Function Without Parentheses:
hello_without_parentheses = val => `Hello ` + val;


/*-----What about *this*?-----

The handling of *this* is also different in arrow functions compared to regular functions.
In short, with arrow functions there is no binding of *this*.
In regular functions the *this* keyword represents the object that called the function,
which could be the window, the document the button and so on.
With arrow function the *this* keyword ALWAYS represents the object that defined the arrow function.

Let's look at 2 examples to understand the difference.

Both examples call a method twice, first when the page loads, and once again when the user clicks a button.
The first example uses a regular function, and the second example uses an arrow function.

The result shows that the first example returns two different objects (window and button),
and the second example returns the window object twice, 
because the window object is the 'owner' of the function.

*/







console.log(before_arrow());
console.log(with_arrow());
console.log(arrow_short());
console.log(hello_params(`parameters!`));
console.log(hello_without_parentheses(`without parentheses!`))
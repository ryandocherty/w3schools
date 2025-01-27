//----------TypeScript - Simple Types----------


//using export{} means this file will be treated as a module.
export{}


//TypeScript supports some simple types (primitive) you may already know.

//There are 3 main primitives in JS and TS:
//boolean - true or false values.
//number - intergers and floating point values.
//string - text values.

//There are also 2 less common primitives used i later versions of JS and TS:
//bigint - intergers and floating point numbers, but allows for larger
//         negative & positive numbers than the *number* type.
//symbol - used to create a globally unique identifier.



//----------Type Assignment----------


//When creating a variable, there are 2 main ways TS assignes a type: 
//Explicit or Implicit.

//Explicit means declaring/assigning a variable and writing out the type.
//Explicit type assignments are easier to read and convey the intention:
let firstName_Explicit: string = "Bob";
console.log(`typeof firstName_Explicit is ` + typeof firstName_Explicit);

//Implicit means declaring/assigning a variable without writing out the type.
//Implicit means that TS will "guess" the type, based on the assigned value:
let firstName_Implicit = "Dave";
console.log(`typeof firstName_Implicit is ` + typeof firstName_Implicit);

//NOTE - Having TypeScript "guess" the type of a value is called *infer*.
//Implicit assignment forces TypeScript to *infer* the value.
//Implicit type assignments are shorter, faster to type, and often used when developing and testing.



//----------Error in Type Assignment----------


//TypeScript will  throw an error if data types do not match:
let firstName_Explicit_01: string = "Dennis";   //explicit type string
//firstName_Explicit_01 = 123;  //attempts to re-assign the value to a different type
//Output: Type 'number' is not assignable to type 'string'.

//Implicit type assignment would have made "firstName_Explicit_01"
//less noticeable as a string,but both will throw an error:
let firstName_Implicit_01 = "Frank";    //inferred to type string
//firstName_Implicit_01 = 321;  //attempts to re-assign the value to a different type
//Output: Type 'number' is not assignable to type 'string'.

//JavaScript will NOT throw an error for mismatched types.



//----------Unable to Infer----------

//TypeScript may not always properly infer what the type of a variable may be.
//In such cases, it will set the type to *any* which disables type-checking.

//Implicit any as JSON.parse doesn't know what type of data it returns, so it can be 'any' thing:
const json_example = JSON.parse("55");
console.log(`typeof json_example is ` + typeof json_example);
//Most expect json_example to be an object, but it can be a string or a number like the above example.

//This behaviour can be disabled by enabling "noImplicitAny" as an option in "tsconfig.json".
//This is a JSON config file for customising how some of TypeScript behaves.

//NOTE - you may see primitive types capitalised like "Boolean"
//"Boolean" !== "boolean"
//For this tutorial we are using the lower-case values.
//The upper case ones are for very specific circumstances.






/*----------Creating & Compiling TypeScript Code----------

1. Create a new folder and open it in VSCode
2. Create a new TypeScript file in the folder, i.e "fileName.ts"
3. Write code, add "export{}" to top of the .ts file
4. Open the VSCode terminal - Ctrl+'
5. Compile the TypeScript code with the command "tsc .\fileName.ts"
6. Check that a .js file was created
7. Run the compiled JavaScript code with the command "node .\fileName.js"
8. To compile the .ts file on every change, use command "npx tsc fileName --watch"

*/
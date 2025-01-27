"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//TypeScript supports some simple types (primitive) you may already know.
//There are 3 main primitives in JS and TS:
//boolean - true or false values
//number - intergers and floating point values
//string - text values
//There are also 2 less common primitives used i later versions of JS and TS:
//bigint - intergers and floating point numbers, but allows for larger 
//         negative & positive numbers than the *number* type
//symbol - used to create a globally unique identifier
//----------TypeScript - Type Assignment----------
//When creating a variable, there are 2 main ways TS assignes a type: 
//Explicit or Implicit.
//Explicit means declaring/assigning a variable and writing out the type
//Explicit type assignments are easier to read and convey the intention:
var firstName_Explicit = "Bob";
console.log("Typeof firstName_Explicit is " + typeof firstName_Explicit);
//Implicit means declaring/assigning a variable without writing out the type
//Implicit means that TS will "guess" the type, based on the assigned value:
var firstName_Implicit = "Dave";
console.log("Typeof firstName_Explicit is " + typeof firstName_Implicit);
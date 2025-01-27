export{}

//----------TypeScript - Special Types----------

//TypeScript has special types that may not refer to any specific type of data.


//Type: any
//The *any* type disables type-checking and effectively allows all types to be used.
//This example below does not use *any* and will throw an error:

let u = true;
//u = "hello";      //Error: Type 'string' is not assignable to type 'boolean'.
//Math.round(u);    //Error: Argument of type 'boolean' is not assignable to parameter of type 'number'.

//Setting *any* to the special type *any* disables type-checking:
let v: any = true;
v = "hello";        //no error as it can be "any" type
Math.round(v);      //no error as it can be "any" type

//NOTE:
//*any* can be a useful way too get past errors since it disables type-checking,
//but TypeScript will not be able to provide type satefy, 
//and tools which rely on type data, such as auto completion, will not work.
//Remember, it should be avoided at "any" cost.


//Type: unknown
//*unknown* is a similar, but safer alternative to *any*.
//TypeScript will prevent *unknown* types from being used.
//See example below:
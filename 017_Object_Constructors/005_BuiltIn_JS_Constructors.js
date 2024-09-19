//----------Built-in JavaScript Constructors----------

//JavaScript has built-in constructors for all native objects:

new Object()   // A new Object object
new Array()    // A new Array object
new Map()      // A new Map object
new Set()      // A new Set object
new Date()     // A new Date object
new RegExp()   // A new RegExp object
new Function() // A new Function object

function print_typeof_Object_Constructors(){
    document.getElementById("myPrintTypeofObjectConstructors").innerHTML =
    'The typeof new Object() is ' + typeof new Object() + '<br>' +
    'The typeof new Array() is ' + typeof new Array() + '<br>' +
    'The typeof new Map() is ' + typeof new Map() + '<br>' +
    'The typeof new Set() is ' + typeof new Set() + '<br>' +
    'The typeof new Date() is ' + typeof new Date() + '<br>' +
    'The typeof new RegExp() is ' + typeof new RegExp() + '<br>' +
    'The typeof new Function() is ' + typeof new Function();
}

//NOTE - The Math() object is not in the list. 'Math' is a global object. The 'new' keyword cannot be used on 'Math'.



//----------Did You Know?----------

//Use object literals {} instead of new Object().
//Use array literals [] instead of new Array().
//Use pattern literals /()/ instead of new RegExp().
//Use function expressions () {} instead of new Function().

"";           // primitive string
0;            // primitive number
false;        // primitive boolean

{};           // object object
[];           // array object
/()/          // regexp object
function x(){}; // function

function print_typeof_Literals(){
    document.getElementById("myPrintTypeofLiterals").innerHTML =
    'The typeof "" is ' + typeof "" + '<br>' +
    'The typeof 0 is ' + typeof 0 + '<br>' +
    'The typeof false is ' + typeof false + '<br>' +
    'The typeof {} is ' + typeof {} + '<br>' +
    'The typeof [] is ' + typeof [] + '<br>' +
    'The typeof /()/ is ' + typeof /()/ + '<br>' +
    'The typeof function(){} is ' + typeof function(){};
}
//--------JavaScript Object Methods--------




//Object methods are actions that can be performed on objects.
//A method is a function definition stored as a property value.

const personObjectWithMethod = {
    firstName: "John",
    lastName: "Doe",
    id: 69420,
    fullName: function(){
        return this.firstName + " " + this.lastName;
    }
};



//----Accessing Object Methods----

//You access an object method with the following syntax:  objectName.methodName()

//If you invoke the fullName property with (), it will execute as a function:
let personObject_fullNameAsFunction = personObjectWithMethod.fullName();

//If you access the fullName property without (), it will return the function definition:
let personObject_fullNameAsFunctionDefinition = personObjectWithMethod.fullName;




//----Adding a Method to an Object----

//Adding a new method to an object is easy:
const personObjectAddMethod = {
    firstName: "Castro",
    lastName: "Saint",
    id: 23,
};

//Add a method
personObjectAddMethod.fullName = function(){
    return this.firstName + " " + this.lastName;
};



//----Using JavaScript Methods----

//This example uses the JavaScript toUpperCase() method to convert a text to uppercase:
personObjectAddMethod.fullNameUppercase = function(){
    return (this.firstName + " " + this.lastName).toUpperCase();
};







//--------print functions--------
//Idea - could I have these print functions in a switch case statement?

function printPersonObjectWithMethod_Function(){
    document.getElementById("myPrintPersonObject").innerHTML = 
    'personObject = ' + JSON.stringify(personObjectWithMethod) + ' ' +
    '"fullName": function(){return this.firstName + " " + this.lastName}'
};

function printPersonObject_fullNameAsFunction(){
    document.getElementById("myPrintFullNameAsFunction").innerHTML =
    'fullName = ' + personObject_fullNameAsFunction;
};

function printPersonObject_fullNameAsFunctionDefinition(){
    document.getElementById("myPrintFullNameAsFunctionDefinition").innerHTML =
    'fullName = ' + personObject_fullNameAsFunctionDefinition;
};

function printPersonObject_AddMethod(){
    document.getElementById("myPrintAddMethod").innerHTML =
    JSON.stringify(personObjectAddMethod) + '<br>' +
    'Full name: ' + personObjectAddMethod.fullName();
};

function printToUppercase(){
    document.getElementById("myPrintToUppercase").innerHTML =
    JSON.stringify(personObjectAddMethod.fullNameUppercase());
};
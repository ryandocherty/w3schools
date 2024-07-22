//----------JavaScript Object Properties----------


//An Object is an Unordered Collection of Properties
//Properties are the most important part of JavaScript objects.
//Properties can be changed, added, deleted, and some are read only.

const person1 = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    eyeColor: "Blue"
}


//----Accessing JavaScript Properties----

//The syntax for accessing the property of an object is:

let ageOfPerson1 = person1.age;         //objectName.property
let ageOfPerson1_1 = person1["age"];    //objectName["property"]

let x = "firstName";
let ageOfPerson1_2 = person1[x]       //objectName[expression]



function printObjectAccessing_Function(){
    let x = "firstName";
    let y = "lastName";
    let z = "eyeColor";

    document.getElementById("myPrintObjectAccessing").innerHTML =
    'person = ' + JSON.stringify(person1) +'<br>' + '<br>' +
    person1.firstName + " is " + person1.age + " years old." + '<br>' +
    person1["firstName"] + "'s full name is " + person1["firstName"] + " " + person1["lastName"] + "." + '<br>' +
    person1[x] + " " + person1[y] + " has " + person1[z] + " eyes.";
};



//----Adding and Deleting Properties----


function printAddingDeleting_Function() {

    //You can add new properties to an existing object by simply giving it a value:
    person1.nationality = "English";

    //The 'delete' keyword deletes a property from an object:
    delete person1.age;

    document.getElementById("myPrintAddingDeleting").innerHTML =
    'person.nationality = "English";' + '<br>' +
    'delete person.age ' + '<br>' + '<br>' +
    'person = ' + JSON.stringify(person1);
};
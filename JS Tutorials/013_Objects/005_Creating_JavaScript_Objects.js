//----Creating a JavaScript Object----



//These examples create a JavaScript object with 4 properties:

const personObject1 = {firstName:"John", lastName:"Doe", age:50, eyeColor:"Blue"};


//Spaces and line breaks are not important. An object initializer can span multiple lines:

const personObject2 = {
    firstName: "Jim",
    lastName: "Flim",
    age: 36,
    eyeColor: "Brown"
};


//This example creates an empty JavaScript object, and then adds 4 properties:

const personObject3 = {};

personObject3.firstName = "Castro";
personObject3.lastName = "Saint";
personObject3.age = 42;
personObject3.eyeColor = "Green"



//----Using the 'new' Keyword----

//This example create a new JavaScript object using new Object(), and then adds 4 properties:

const personObject4 = new Object();

personObject4.firstName = "Ronald";
personObject4.lastName = "Ronaldson";
personObject4.age = 69;
personObject4.eyeColor = "Beige"



//----NOTE----

//The examples above do exactly the same.
//But, there is no need to use new Object().
//For readability, simplicity and execution speed, use the object literal method.






function printPersonObject1_Function(){
    document.getElementById("myPersonObject1").innerHTML = "personObject1 = " + JSON.stringify(personObject1);
}

function printPersonObject2_Function(){
    document.getElementById("myPersonObject2").innerHTML =
    'const personObject2 = {' + '<br>' +
    '&nbsp &nbsp &nbsp fistName: "' + personObject2.firstName + '",' + '<br>' +
    '&nbsp &nbsp &nbsp lastName:  "' + personObject2.lastName + '",' + '<br>' +
    '&nbsp &nbsp &nbsp age: "' + personObject2.age + '",' + '<br>' +
    '&nbsp &nbsp &nbsp eyeColor: "' + personObject2.eyeColor + '"' + '<br>' +
    '};';
}

function printPersonObject3_Function(){
    document.getElementById("myPersonObject3").innerHTML =
    'const personObject3 = { };' + '<br>' + '<br>' +
    'personObject3.firstName = ' + personObject3.firstName + ';' + '<br>' +
    'personObject3.lastName = ' + personObject3.lastName + ';' + '<br>' +
    'personObject3.age = ' + personObject3.age + ';' + '<br>' +
    'personObject3.eyeColor = ' + personObject3.eyeColor + ';';
}
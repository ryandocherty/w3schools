//----------JavaScript Objects----------


//JavaScript objects are written with curly braces {}
//Object properties are written as name:value pairs, separated by commas

//The object (person) in the example below has 4 properties: firstName, lastName, age, and eyeColor:

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColour: "blue"
}


function personObject_Function(){
    
    document.getElementById("myPersonObject").innerHTML =
    'const person = {firstName:"John", lastName:"Doe", age:50, eyeColour:"blue"};' + '<br>' + '<br>' +
    'First Name: ' + person.firstName + '<br>' +
    'Last Name: ' + person.lastName + '<br>' +
    'Age: ' + person.age + '<br>' +
    'Eye Colour: ' + person.eyeColour;
}
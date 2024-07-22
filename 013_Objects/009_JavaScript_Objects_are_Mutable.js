//----JavaScript Objects are Mutable----


const personObject_Mutable = {
    firstName: "Shamus",
    lastName: "Limond",
    age: 47,
    eyeColor: "Blue"
}

function printOriginalPersonObject_Mutable(){
    document.getElementById("myOriginalPersonObjectMutable").innerHTML = "person = " + JSON.stringify(personObject_Mutable);
}



//Objects are mutable: They are addressed by reference, not by value.
//If person is an object, the following statement will not create a copy of person:

const x = personObject_Mutable;

function printXObject(){
    document.getElementById("myXObject").innerHTML = "x = " + JSON.stringify(x);
}


//The object x is not a copy of person. The object x is person.
//The object x and the object person share the same memory address.
//Any changes to x will also change person:

function changeAndPrintUpdatedXObject(){
    x.age = 10;
    x.firstName = "Brian";
    x.lastName = "Brianson";
    x.eyeColor = "Orange";
    document.getElementById("myUpdatedXObject").innerHTML = "x = " + JSON.stringify(x);
}
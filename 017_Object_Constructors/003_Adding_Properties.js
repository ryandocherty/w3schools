//--------Adding a Property to an Object--------

function PersonConstructor2(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
    this.nationality = "English";
}

const myFather2 = new PersonConstructor2("Jimbo", "Jams", 42, "green");


//Adding a property to a created object is easy:
//Note - The new property will be added to myFather. Not to any other Person Objects.
myFather2.nationality = "Scottish";



//----------Adding a Property to a Constructor----------

//You can NOT add a new property to an object constructor:
PersonConstructor2.height = "5 ft 9";

//To add a new property, you must add it to the constructor function prototype:
PersonConstructor2.prototype.height = "5 ft 9";

const myBrother2 = new PersonConstructor2("Jimothy", "Jenkins", 24, "blue");





//----Print Functions----

function print_AddPropertyToObject(){
    document.getElementById("myPrintAddPropertyToObject").innerHTML =
    'myFather.nationality = "Scottish";' + '<br>' +
    'Nationality of myFather is ' + myFather2.nationality;
}


function print_AddPropertyToObjectConstructor() {
    document.getElementById("myPrintAddPropertyToObjectConstructor").innerHTML =
    'Person.height = "5 ft 9";' + '<br>' +
    'Height of myBrother is undefined';
}


function print_AddPropertyPrototype(){
    document.getElementById("myPrintAddPropertyPrototype").innerHTML =
    'Person.prototype.height = "5 ft 9";' + '<br>' +
    'Height of myBrother is ' + myBrother2.height;
}
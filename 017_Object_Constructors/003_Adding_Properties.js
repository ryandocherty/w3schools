//--------Adding a Property to an Object--------

function PersonConstructor2(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
    this.nationality = "English";
}

const myFather = new PersonConstructor2("Jimbo", "Jams", 42, "green");

//Adding a property to a created object is easy:
//Note - The new property will be added to myFather. Not to any other Person Objects.
myFather.nationality = "Scottish";



//----------Adding a Property to a Constructor----------

//You can NOT add a new property to an object constructor:
//PersonConstructor2.nationality = "Welsh";

//To add a new property, you must add it to the constructor function prototype:
//PersonConstructor2.prototype.nationality = "Irish";






function print_AddPropertyToObject(){
    document.getElementById("myPrintAddPropertyToObject").innerHTML =
    'myFather.nationality = "Scottish";' + '<br>' +
    'myFather is ' + myFather.nationality;
};
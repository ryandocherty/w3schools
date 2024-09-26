//--------Constructor Function Methods--------

//A constructor function can also have methods:

function PersonConstructor3(first, last, ageOfPerson, eyecolor){
    this.firstName = first;
    this.lastName = last;
    this.age = ageOfPerson;
    this.eyeColor = eyecolor;
    this.fullName = function(){
        return this.firstName + " " + this.lastName;
    };
}

const myFather3 = new PersonConstructor3("Flimbo", "Jorbs", 45, "purple");



//----------Adding a Method to an Object----------

//Adding a method to a created object is easy:

const myBrother3 = new PersonConstructor3("Bob", "Flop", 44, "brown");

myBrother3.changeLastName = function(_name){
    this.lastName = _name;
}

myBrother3.changeLastName("Flip");




//----------Adding a Method to a Constructor----------

//You cannot add a new method to an object constructor function.
//This code will produce a TypeError:

let errorMessage = "";

try{
    PersonConstructor3.changeFirstName = function(_name){
        this.firstName = _name;
    }
    myBrother3.changeFirstName("Rob");
}

catch(err){
    errorMessage = err;
}


//Adding a new method must be done to the constructor function prototype:
//NOTE - The ageTimesTen() function assigns the value of _age to the person's age property, substituting 'this' with 'myBrother3'.

PersonConstructor3.prototype.ageTimesTen = function(_age){
    this.age = _age * 10;
}

myBrother3.ageTimesTen(23);







//----------Print Functions----------

function print_ConstructorFunctionMethod(){
    document.getElementById("myPrintConstructorFunctionMethod").innerHTML =
    "myFather's full name is " + myFather3.fullName();
}

function print_AddMethodToObject(){
    document.getElementById("myPrintAddMethodToObject").innerHTML =
    'const myBrother = new PersonConstructor3("Bob", "Flop", 44, "brown");' + '<br>' +
    'myBrother.changeName = function(_name){this.lastName = _name;}' + '<br>' +
    'myBrother.changeName("Flip");' + '<br>' + '<br>' +
    "myBrother's full name is " + myBrother3.fullName();
}

function print_AddMethodToConstructorError(){
    document.getElementById("myPrintAddMethodToConstructorError").innerHTML = 
    'Person.changeFirstName = function(_name){this.firstName = _name;}' + '<br>' +
    'myBrother3.changeFirstName("Rob");' + '<br>' + '<br>' + errorMessage;
}

function print_AddMethodPrototype(){
    document.getElementById("myPrintAddMethodPrototype").innerHTML =
    'Person.prototype.ageTimesTen = function(_age){this.age = _age * 10;}' + '<br>' +
    'myBrother3.ageTimesTen(23);' + '<br>' +
    'Age of ' + myBrother3.fullName() + ' is ' + myBrother3.age;
}
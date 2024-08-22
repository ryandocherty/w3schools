//----------JavaScript Object Constructors----------



//----Object Constructor Functions----

//Sometimes we need to create many objects of the same type.
//To create an object type we use an object constructor function.
//It is considered good practice to name constructor functions with an upper-case first letter.

function PersonConstructor(first, last, age, eye){
    this.firstName = first;
    this.lastName = last;
    this.ageNum = age;
    this.eyeColour = eye;
}

//Note:
//In the constructor function, "this" has no value.
//The value of "this" will become the new object when a new object is created.
//Now we can use new PersonConstructor() to create many new Person objects:

const myFather = new PersonConstructor("Ste", "Doc", 59, "blue");
const myMother = new PersonConstructor("Roscoe", "Doc", 3, "brown");
const mySister = new PersonConstructor("Jim", "Doc", 30, "green");
const mySelf = new PersonConstructor("Megatron", "Doc", 29, "blue");






function print_PersonConstructor(){
    document.getElementById("myPrintPersonConstructor").innerHTML =
    'function Person(first, last, age, eye){' + '<br>' +
    '&nbsp &nbsp &nbsp &nbsp this.firstName = first;' + '<br>' +
    '&nbsp &nbsp &nbsp &nbsp this.lastName = last;' + '<br>' +
    '&nbsp &nbsp &nbsp &nbsp this.ageNum = age;' + '<br>' +
    '&nbsp &nbsp &nbsp &nbsp this.eyeColour = eye;' + '<br>' +
    '}'
}

function printPersonConstructorObjects(){
    document.getElementById("myPrintPersonConstructorObjects").innerHTML =
    'myFather = ' + JSON.stringify(myFather) + '<br>' +
    'myMother = ' + JSON.stringify(myMother) + '<br>' +
    'mySister = ' + JSON.stringify(mySister) + '<br>' +
    'mySelf = ' + JSON.stringify(mySelf);
}
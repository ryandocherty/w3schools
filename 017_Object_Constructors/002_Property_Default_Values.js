//----Property Default Values----

//A value given to a property will be a default value for all objects created by the constructor:

function PersonConstructor(first, last, age, eye){
    this.firstName = first;
    this.lastName = last;
    this.ageNum = age;
    this.eyeColour = eye;
    this.nationality = "English";
}

const myCat1 = new PersonConstructor("Roscoe", "Smith", 3.5, "blue");
const myCat2 = new PersonConstructor("Rosa", "Doc", 4.5, "brown");






function print_PersonDefaultValue(){
    document.getElementById("myPrintPersonDefaultValue").innerHTML =
    'myCat1 is ' + myCat1.nationality + '<br>' +
    'myCat2 is '+ myCat2.nationality;
}
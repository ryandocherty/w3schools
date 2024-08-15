//----------How to Display JavaScript Objects----------

//Some solutions to display JavaScript objects are:
//Displaying the Object Properties by name
//Displaying the Object Properties in a Loop
//Displaying the Object using Object.values()
//Displaying the Object using JSON.stringify()



//Displaying a JavaScript object will output [object Object]

const personObject_SimpleDisplay = {
    name: "John",
    age: 30,
    city: "Lincoln",

    print_personObject_SimpleDisplay: function () {
        document.getElementById("myPrintPersonObjectSimpleDisplay").innerHTML = personObject_SimpleDisplay;
    }
};



//----Displaying Object Properties as a String----

//The properties of an object can be displayed as a string:

const personObject_StringDisplay = {
    name: "Jim",
    age: 29,
    city: "London",

    print_personObject_StringDisplay: function () {
        document.getElementById("myPrintPersonObjectStringDisplay").innerHTML =
            this.name + "<br>" + this.age + "<br>" + this.city;
    }
};



//----Displaying Properties in a Loop----

//The properties of an object can be collected in a loop:

const personObject_LoopDisplay = {
    name: "Vermithor",
    age: 102,
    city: "Dragonstone",
    color: "Bronze",

    print_personObject_LoopDisplay: function () {
        let textForLabel = "";
        for (let x in personObject_LoopDisplay) {
            if (!(personObject_LoopDisplay[x] instanceof Function)) {
                textForLabel += personObject_LoopDisplay[x] + "<br>";
            }
        }
        document.getElementById("myPrintPersonObjectLoopDisplay").innerHTML = textForLabel;
    }
};



//NOTE - You must use person[x] in the loop.
//person.x will not work (because x is the loop variable).



//----Displaying Properties Using Object.values()----

//Object.values() creates an array from the property values:

const personObject_ObjectValues = {
    name: "Jimbo",
    age: 24,
    city: "Liverpool",

    print_personObject_ObjectValues: function () {
        let textForLabel = "";
        const myPersonObjectValuesArray = Object.values(personObject_ObjectValues);
        for (let x in myPersonObjectValuesArray) {
            if (!(myPersonObjectValuesArray[x] instanceof Function))
                textForLabel += myPersonObjectValuesArray[x] + "<br>";
        }
        document.getElementById("myPrintPersonObjectValues").innerHTML = textForLabel;
    }
};



//----Displaying Properties Using Object.entries()----

//Object.entries() makes it simple to use objects in loops:

const fruitsObject_ObjectEntries = {
    Bananas: 300,
    Oranges: 200,
    Apples: 420,

    print_fruitsObject_ObjectEntries: function () {
        let textForLabel = "";
        for (let [fruit, amount] of Object.entries(fruitsObject_ObjectEntries)) {
            if (!(fruit && amount instanceof Function)) {
                textForLabel += fruit + ": " + amount + "<br>";
            }
        }
        document.getElementById("myPrintPersonObjectEntries").innerHTML = textForLabel;
    }
};




//----Displaying Properties Using JSON.stringify()----

//JavaScript objects can be converted to a string with JSON method JSON.stringify()
//JSON.stringify() is included in JavaScript and supported in all major browsers

const personObject_JSONstringify = {
    name: "Jason",
    age: 25,
    city: "Sin Tellens",

    print_personObject_JSONstringify: function(){
        let textForLabel = "";
        for (let x in personObject_JSONstringify){
            if (!(personObject_JSONstringify[x] instanceof Function)){
                textForLabel += JSON.stringify(personObject_JSONstringify) + "<br";
            }
        }
        document.getElementById("myPrintPersonJSONstringify").innerHTML = textForLabel;
    }
};
//----------Nested Objects----------



//Property values in an object can be other objects:

const nestedObjectExample = {
    firstName: "Ben",
    lastName: "Big",
    age: 26,
    myCars: {
        car1: "Ford",
        car2: "BMW",
        car3: "Fiat"
    }
};

function printNestedObjectExample(){
    document.getElementById("myNestedObjectExample").innerHTML =
    "nestedObjectExample: " + JSON.stringify(nestedObjectExample);
};



//You can access nested objects using the dot notation or the bracket notation:

nestedObjectExample.myCars.car1;
nestedObjectExample.myCars["car2"];
nestedObjectExample["myCars"]["car3"];

function printNestedObjectAccessing(){
    document.getElementById("myNestedObjectAccessing").innerHTML =
    'nestedObjectExample.myCars.car1 = ' + nestedObjectExample.myCars.car1 + '<br>' +
    'nestedObjectExample.myCars["car2"] = ' + nestedObjectExample.myCars["car2"] + '<br>' +
    'nestedObjectExample["myCars"]["car3"] = ' + nestedObjectExample["myCars"]["car3"];
};
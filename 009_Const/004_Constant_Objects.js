//----------Constant Objects and Arrays----------

//The keyword const is a little misleading.
//It does not define a constant value. It defines a constant reference to a value.

//Because of this you can NOT:
//Reassign a constant value
//Reassign a constant array
//Reassign a constant object

//But you CAN:
//Change the elements of constant array
//Change the properties of constant object



//----------Constant Objects----------
//You can change the properties of a constant object:

// You can create a const object:
const car = {
    type: "Fiat", 
    model: "500", 
    color: "white"
}

function printCarObject_Function() {
    document.getElementById("myCarObject").innerHTML = "Cars Object: " + JSON.stringify(car);
}


function printUpdatedObject_Function(){

    car.color = "red";      // You can change a property
    car.owner = "Johnson";  // You can add a property

    document.getElementById("myUpdatedCarObject").innerHTML = "Updated Cars Object: " + JSON.stringify(car);
}
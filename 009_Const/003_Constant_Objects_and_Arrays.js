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



//----------Constant Arrays----------
//You can change the elements of a constant array:

// You can create a constant array:
const cars = ["Saab", "Volvo", "BMW"];

function printCarsArray_Function(){
    for (i = 0; i < cars.length; i++){
        document.getElementById("myCarsArray").innerHTML += (i + 1) + ": " + cars[i] + ". ";
    }
}

function printUpdatedCarsArray_Function(){
    // You can change an element:
    cars[0] = "Toyota";

    // You can add an element:
    cars.push("Audi");


    for (i = 0; i < cars.length; i++){
        document.getElementById("myUpdatedCarsArray").innerHTML += (i + 1) + ": " + cars[i] + ". ";
    }
}


//But you can NOT reassign the array:
function reassignArrayError_Function(){
    try{
        const cars2 = ["Saab", "Volvo", "BMW"];
        cars2 = ["Toyota", "Nissan", "Audi"];
    }

    catch (errorMessage){
        document.getElementById("myReassignCarsArray").innerHTML = errorMessage;
    }
}
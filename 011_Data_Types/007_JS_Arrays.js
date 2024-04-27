//----------JavaScript Arrays----------


//JavaScript arrays are written with square brackets.
//Array items are separated by commas.


//The following code declares (creates) an array called cars, containing three items (car names):

function carsArray_Function(){

    const cars = ["Saab", "Volvo", "BMW"];

    document.getElementById("myCarsArray").innerHTML =
    'const cars = ["Saab", "Volvo", "BMW"];' + "<br>" +
    'cars array = ' + JSON.stringify(cars);

    document.getElementById("myCarsArray_Info").innerHTML =
    "Array indexes are zero-based, which means the first item is [0], second is [1], and so on."
}

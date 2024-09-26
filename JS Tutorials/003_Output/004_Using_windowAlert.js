//----------Using window.alert()----------


//You can use an alert box to display data:

function windowAlert_Function(){
    window.alert("window.alert(5 + 6) = "+ (5 + 6));

    //You can skip the window keyword - in JavaScript, the window object is the global scope object
    //This means that variables, properties, and methods by default belong to the window object
    //This also means that specifying the window keyword is optional:
    alert("alert(5 + 10) = " + (5 + 10));
}
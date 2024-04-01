//Using innerHTML

//To access an HTML element, JavaScript can use the document.getElementById(id) method
//The id attribute defines the HTML element. The innerHTML property defines the HTML content:


function innerHTML_Function(){
    document.getElementById("demo").innerHTML = "Paragraph Changed" + " " + 69420;
}
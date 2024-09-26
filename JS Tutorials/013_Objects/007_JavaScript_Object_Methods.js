//----JavaScript Object Methods----



//Methods are 'actions' that can be performed on objects.
//Methods are 'function definitions' stored as 'property values'.

//PROPERTY	        PROPERTY VALUE
//firstName         John
//lastName          Doe
//age               50
//eyeColor          blue
//fullName 	        function() {return this.firstName + " " + this.lastName;}


const personObject6 = {
    firstName: "Dwayne",
    lastName : "Dibley",
    id       : 69420,
    fullName : function(){
        return this.firstName + " " + this.lastName;
    }
};


//In the example above, 'this' refers to the 'personObject6' object.
//'this.firstName' means the 'firstName' property of 'personObject6'.
//'this.lastName' means the 'lastName' property of 'personObject6'.








function printPersonObject6_Function(){
    document.getElementById("myPersonObject6").innerHTML =
    'const personObject6 = {' + '<br>' +
    '&nbsp &nbsp &nbsp firstName: ' + '"' + personObject6.firstName + '",' + '<br>' +
    '&nbsp &nbsp &nbsp lastName : ' + '"' + personObject6.lastName + '",' + '<br>' +
    '&nbsp &nbsp &nbsp id       : ' + personObject6.id + ',' + '<br>' +
    '&nbsp &nbsp &nbsp fullName : function(){' + '<br>' +
    '&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp return this.firstName + " " + this.lastName;' + '<br>' +
    '};' + '<br>' + '<br>' +
    'personObject6.fullName =  ' + personObject6.fullName();
};
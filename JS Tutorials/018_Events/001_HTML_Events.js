//----------HTML Events----------

/*

HTML Events

An HTML event can be something the browser does, or something a user does.

Here are some examples of HTML events:

    An HTML web page has finished loading
    An HTML input field was changed
    An HTML button was clicked

Often, when events happen, you may want to do something.

JavaScript lets you execute code when events are detected.

HTML allows event handler attributes, with JavaScript code, to be added to HTML elements.

With single quotes: <element event='some JavaScript'>
With double quotes: <element event="some JavaScript">

*/

function print_HTMLElementsQuotes(){
    document.getElementById("myHTMLElementsQuotes").innerHTML =
    "With single quotes: element event='some JavaScript'" + "<br>" +
    'With double quotes: element event="some JavaScript"';
}


//In this example, an onclick attribute (with code), is added to a <button> element.
//the JavaScript code changes the content of the element with id="myPrintCurrentTime".
function print_CurrentTime(){
    document.getElementById("myPrintCurrentTime").innerHTML = Date();
}

function print_CurrentTime2(){
    document.getElementById("myPrintCurrentTime2").innerHTML = Date();
}
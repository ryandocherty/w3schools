//----------Using document.write()----------

//For testing purposes, it is convenient to use document.write()
//Never call document.write after the document has finished loading. It will overwrite the whole document

function documentWrite_Function(){
    document.write("Document Overwritten");
}
 
//WARNING - Using document.write() after an HTML document is loaded, will delete all existing HTML
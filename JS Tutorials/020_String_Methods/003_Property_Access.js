//----------Property Access [ ]----------

let property_access_string = "Hello";
let propery_access_character = property_access_string[2];

//NOTE:
//Property access might be a little unpredictable:
//It makes strings look like arrays (but they are not)
//If no character is found, [ ] returns undefined, while charAt() returns an empty string.
//It is read only. string[0] = "A" gives no error (but does not work!)
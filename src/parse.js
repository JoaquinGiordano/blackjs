
/**
 *  @function String.toBase64 convert a simple text to Base64 text
 *  @return {String} simple text encrypted on base64
*/

String.prototype.toBase64 = function () {
    return btoa(this);
}


/**
 *  @function String.toText convert a Base64 text to a simple text
 *  @return {String} simple text decrypred of base64
*/

String.prototype.toText = function () {
    return atob(this);
}

/**
 *  @function String.toText convert a string to a integer
 *  @return {String} string conveted to an int
*/

String.prototype.toInt = function() {
    return parseInt(this);
}
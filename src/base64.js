
/**
 *  @function String.toBase64 convert a simple text to Base64 text
 *  @return simple text encrypted on base64
*/

String.prototype.toBase64 = function () {
    return btoa(this);
}


/**
 *  @function String.toText convert a Base64 text to a simple text
 *  @return simple text decrypred of base64
*/

String.prototype.toText = function () {
    return atob(this);
}


/**
 *  @function Object.getChars get the quantity of characters that an object have
 *  @return {Number} chars quantity
*/

Object.prototype.getChars = () => {

    if (this.nodeName === "INPUT"){
        return this.value.length;
    }else{
        return this.innerHTML.length;
    }

}

/**
 *  @function String.getChars get the quantity of characters that a string have
 *  @return {Number} chars quantity
*/

String.prototype.getChars = () => {
    return this.length;
}

/**
 *  @function getElement get an element of HTML
 *  @param {String} arg element, id or class
 *  @return {Object} an HTML Element
*/

function getElement(arg) {
    console.warn('This function will be deprecated soon. Try using "elemment.get(id/class)" instread of it.')
    return document.querySelector(arg);
}

/**
 *  @function Object.getChar get a char in a especific position that an object have
 *  @param {Number} position position of the character that you want to obtain
 *  @return {String} char at that position
*/

Object.prototype.getChar = function (position) {

    if (this.nodeName === "INPUT") {
        return this.value.charAt(position);
    } else {
        return this.innerHTML.charAt(position);
    }

}

/**
 *  @function String.getChar get a char in a especific position of a string
 *  @param {Number} position position of the character that you want to obtain
 *  @return {String} char at that position
*/

String.prototype.getChar = function (position) {

    return this.charAt(position);

}

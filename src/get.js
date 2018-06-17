
/**
 *  @function Object.getChars get the quantity of characters that an object have
 *  @return chars quantity
*/

Object.prototype.getChars = function () {

    if (this.nodeName === "INPUT"){
        return this.value.length;
    }else{
        return this.innerHTML.length;
    }

}

/**
 *  @function String.getChars get the quantity of characters that a string have
 *  @return chars quantity
*/

String.prototype.getChars = function () {
    return this.length;
}

/**
 *  @function getElement get an element of HTML
 *  @param arg element, id or class
 *  @return an HTML Element
*/

function getElement(arg) {
    return document.querySelector(arg);
}

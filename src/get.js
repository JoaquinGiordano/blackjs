
//Get the chars quantity of a element
Object.prototype.getChars = function () {
    try {
        //if the element can return a value
        return this.value.length;
    } catch (err) {
        //else
        return this.innerHTML.length;
    }
}

//Get the chars quantity of a string
String.prototype.getChars = function () {
    return this.length;
}

//Get an HTML Element
function getElement(arg) {
    return document.querySelector(arg);
}

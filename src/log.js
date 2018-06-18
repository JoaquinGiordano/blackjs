
/**
 *  @function log write anything in the console
 *  @param {String} text text to write
*/

function log(text) {
    console.log(text);
}

/**
 *  @function warn write anything in the console as a warning
 *  @param {String} text text of the warning
*/

function warn(text) {
    console.warn(text);
}

/**
 *  @function error write anything in the console as error
 *  @param {String} text text of the error
*/

function error(text) {
    console.error(text);
}

/**
 *  @function Object.log write a text of an objecto in the console
*/

Object.prototype.log = function () {

    if (this.nodeName === "INPUT") {
        console.log(this.value);
    } else {
        console.log(this.innerHTML);
    }

}


/**
 *  @function Object.contain check if an object contains any text or character
 *  @param {String} data text to search
 *  @return {Boolean} true or false depends if the object contains that text or character
*/

Object.prototype.contain = function (data) {
    if (this.nodeName === "INPUT") {
        if (this.value.toLowerCase().indexOf(data.toLowerCase()) != -1){
            return true;
        }else{
            return false;
        }
    }else{
        if (this.innerHTML.toLowerCase().indexOf(data.toLowerCase()) != -1) {
            return true;
        } else {
            return false;
        }
    }
}

/**
 *  @function String.contain check if a string contains any text or character
 *  @param {String} data text to search
 *  @return {Boolean} true or false depends if the string contains that text or character
*/

String.prototype.contain = function (data) {
    if (this.toLowerCase().indexOf(data.toLowerCase()) != -1) {
        return true;
    } else {
        return false;
    }
}
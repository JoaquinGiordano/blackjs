
/**
 *  @function Object.contain check if an object contains any text or character
 *  @param {String} data text to search
 *  @param {Boolean} capitals if you want to diference between capitals letters or not
 *  @return {Boolean} true or false depends if the object contains that text or character
*/

Object.prototype.contain = function (data, capitals = false) {
    if (!capitals){
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
    }else{
        if (this.nodeName === "INPUT") {
            if (this.value.indexOf(data) != -1){
                return true;
            }else{
                return false;
            }
        }else{
            if (this.innerHTML.indexOf(data) != -1) {
                return true;
            } else {
                return false;
            }
        }
    }
    
}

/**
 *  @function String.contain check if a string contains any text or character
 *  @param {String} data text to search
 *  @param {Boolean} capitals if you want to diference between capitals letters or not
 *  @return {Boolean} true or false depends if the string contains that text or character
*/

String.prototype.contain = function (data, capitals = false) {
    if(!capitals){
        if (this.toLowerCase().indexOf(data.toLowerCase()) != -1) {
            return true;
        } else {
            return false;
        }
    }else{
        if (this.indexOf(data) != -1) {
            return true;
        } else {
            return false;
        }
    }
   
}
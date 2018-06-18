
/**
 *  @function clearData clear all the saved data
*/
function clearData() {
    localStorage.clear();
}

/**
 *  @function String.saveData save a string
 *  @param {String} where where do you want to save the string
*/

String.prototype.saveData = function(where){
    localStorage.setItem(where,this)
}

/**
 *  @function Object.saveData save the text of an object
 *  @param {String} where where do you want to save the text
*/

Object.prototype.saveData = function(where){
    if (this.nodeName === "INPUT") {
        localStorage.setItem(where, this.value)
    } else {
        localStorage.setItem(where, this.innerHTML)
    }
}

/**
 *  @function Object.gaveData get saved data and put it in a Object
 *  @param {String} where where did you saved the data
*/


Object.prototype.getData = function (where) {
    if (this.nodeName === "INPUT") {
        this.value = localStorage.getItem(where)
    } else {
        this.innerHTML = localStorage.getItem(where)
    }
}

/**
 *  @function getData save saved data
 *  @param {String} where where did you saved the data
 *  @return {*} data
*/

function getData(where) {
    return localStorage.getItem(where);
}




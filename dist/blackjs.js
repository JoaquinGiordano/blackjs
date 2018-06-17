
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


/**
 *  @function timer.start create a loop
 *  @param func function to loop
 *  @param ticks velocity of the loops
 *  @return loop 
 * 
 * 
 *  @function timer.stop stop a timer
 *  @param timer_var varible where the timer was created
*/

var timer = {
  
    start: function (func, ticks) {
        var interval = setInterval(func, ticks);
        return interval;
    },

    stop: function (timer_var) {
        clearInterval(timer_var);
    }


};
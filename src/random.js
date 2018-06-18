
/**
 *  @function random generate a random number between 2 parameters
 *  @param {Number} num1 first number
 *  @param {Number} num2 second number
 *  @example
 *  <div><code>
 *      //return a number between 5 and 25
 *      random(5,25)
 *  </div></code>
 *  @return {Number} a number between that 2 parameters
*/

function random(num1, num2) {
    if (num1 == undefined || num2 == undefined) {
        return Math.random();
    } else {
        return Math.floor(Math.random() * num2) + num1;
    }
}

/**
 *  @function randomize select a random option of an array
 *  @param {Array} data array with the options
 *  @example
 *  <div><code>
 *      //return one of the 3 array's options
 *      randomize(['hello','hi','hey'])
 *  </div></code>
 *  @return {*} a random option of your array
*/

function randomize(data) {
    var num = random(0, data.length);
    return data[num];
}

/**
 *  @function Object.randomize generate a random number between 2 parameters in a object
 *  @param {Number} num1 first number
 *  @param {Number} num2 second number
*/

Object.prototype.randomize = function(num1,num2){
    if (num1 == undefined || num2 == undefined) {
        if (this.nodeName === "INPUT") {
            this.value = Math.random();
        } else {
            this.innerHTML = Math.random();
        }
    } else {
        if (this.nodeName === "INPUT") {
            this.value = Math.floor(Math.random() * num2) + num1;
        } else {
            this.innerHTML = Math.floor(Math.random() * num2) + num1;
        }
    }
}
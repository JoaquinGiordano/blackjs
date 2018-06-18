
/**
 * @todo Rewrite all the anim function
*/

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





/**
 *  @function Object.getChars get the quantity of characters that an object have
 *  @return {Number} chars quantity
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
 *  @return {Number} chars quantity
*/

String.prototype.getChars = function () {
    return this.length;
}

/**
 *  @function getElement get an element of HTML
 *  @param {String} arg element, id or class
 *  @return {Object} an HTML Element
*/

function getElement(arg) {
    return document.querySelector(arg);
}

/**
 *  @function Object.getChar get a char in a especific position that an object have
 *  @param {Number} position position of the character that you want to obtain
 *  @return {String} char at that position
*/

Object.prototype.getChar = function(position) {

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



/**
 *  @function go navigate to another webpage or load an HTML file
 *  @param {String} url Url to navigate
*/

function go(url) {
    window.location = url;
}


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


/**
 *  @function timer.start create an infinite loop
 *  @param {Function} func function to loop
 *  @param {Number} ticks velocity of the loops
 *  @return loop 
 * 
 * 
 *  @function timer.stop stop the loop
 *  @param {*} timer_var varible where the timer was created
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

/**
 *  @function loop crate a loop
 *  @param {Number} times times that this loop will be executed
 *  @param {Function} func function that this loop will execute
*/

function loop(times, func) {
    times -= 1;
    for (var i = 0; i <= times; i++) {
        func();
    }
}

/**
 *  @function isEqual determinate if all the elements of an array have the same value
 *  @param {Array} url array to compare
 *  @return {Boolean} if all the array elements have the same value
*/

function isEqual(data) {
    var result = true;
    var fs = true;
    var primary_data;
    data.forEach(function (e) {
        if (fs == true) {
            primary_data = e;
            fs = false;
        } else {
            if (primary_data != e) {
                result = false;

            }
        }
    });
    return result;
}

/**
 *  @function sum add all the array elements value
 *  @param {Array} url array to add
 *  @return {Number} all the array elements added
*/

function sum(numbers) {
    var fs = true;
    var actualNumber = 0;
    numbers.forEach(function (e) {
        if (fs == true) {
            actualNumber = e;
            fs = false;
        } else {
            actualNumber += e;
        }
    })
    return actualNumber;
}

/**
 *  @function subs substract all the array elements value
 *  @param {Array} url array to substract
 *  @return {Number} all the array elements substracted
*/

function subs(numbers) {
    var fs = true;
    var actualNumber = 0;
    numbers.forEach(function (e) {
        if (fs == true) {
            actualNumber = e;
            fs = false;
        } else {
            actualNumber -= e;
        }
    })
    return actualNumber;
}

/**
 *  @function devide devide all the array elements value
 *  @param {Array} url array to devide
 *  @return {Number} all the array elements devided
*/

function devide(numbers) {
    var fs = true;
    var actualNumber = 0;
    numbers.forEach(function (e) {
        if (fs == true) {
            actualNumber = e;
            fs = false;
        } else {
            actualNumber /= e;
        }
    })
    return actualNumber;
}

/**
 *  @function multiply multiply all the array elements value
 *  @param {Array} url array to multiply
 *  @return {Number} all the array elements multiplied
*/

function multiply(numbers) {
    var fs = true;
    var actualNumber = 0;
    numbers.forEach(function (e) {
        if (fs == true) {
            actualNumber = e;
            fs = false;
        } else {
            actualNumber *= e;
        }
    })
    return actualNumber;
}

/**
 *  @function String.toBase64 convert a simple text to Base64 text
 *  @return {String} simple text encrypted on base64
*/

String.prototype.toBase64 = function () {
    return btoa(this);
}


/**
 *  @function String.toText convert a Base64 text to a simple text
 *  @return {String} simple text decrypred of base64
*/

String.prototype.toText = function () {
    return atob(this);
}

/**
 *  @function String.toText convert a string to a integer
 *  @return {String} string conveted to an int
*/

String.prototype.toInt = function() {
    return parseInt(this);
}

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

/**
 *  @function time get the actual time
 *  @param {Array} data set the elements that you want to have
 *  @example 
 *  <div><code>
 *      //return [17,06,18]
 *      time(["day","month","year"])
 *  </code></div>
 *  @return array with the elements that you wanted
*/

function time(data) {

    var date = new Date();
    var final = "";
    data.forEach(function (e) {

        if (e == undefined) {
            final == date;
        }
        if (e == "hour") {
            if (date.getHours() <= 9) {
                final += "0" + date.getHours() + ";";
            } else {
                final += date.getHours() + ";";
            }
        }
        if (e == "minute") {
            if (date.getMinutes() <= 9) {
                final += "0" + date.getMinutes() + ";";
            } else {
                final += date.getMinutes() + ";";
            }
        }
        if (e == "second") {
            if (date.getSeconds() <= 9) {
                final += "0" + date.getSeconds() + ";";
            } else {
                final += date.getSeconds() + ";";
            }
        }
        if (e == "milisecond") {
            if (date.getMilliseconds() <= 9) {
                final += "0" + date.getMilliseconds() + ";";
            } else {
                final += date.getMilliseconds() + ";";
            }
        }
        if (e == "day") {
            final += date.getDate() + ";";
        }
        if (e == "dayoftheweek") {
            final += date.getDay() + 1 + ";";
        }
        if (e == "year") {
            final += date.getFullYear() + ";";
        }
        if (e == "month") {
            final += date.getMonth() + 1 + ";";
        }

    })
    pre_final = final.slice(0,-1).split(";")
    final = [];
    pre_final.forEach(function(e){
        final.push(parseInt(e))
    })
    return final;
}

/**
 * @function wait wait a while before execute a function
 * @param {Function} func funtion that will be executed after a the time 
 * @param {Number} ticks set the wait time
 */

function wait(func,ticks) {
    setTimeout(function () { func(); }, ticks);
}

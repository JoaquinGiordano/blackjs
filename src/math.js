
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
 *  @function ruleOfThree do a rule of three
 *  @param {Number} a first number              (if this)
 *  @param {Number} b second number             (is equal to this)
 *  @param {Number} c third number              (so this)
 *  @return {Number}  result                    (will be equal to this)
*/

function ruleOfThree(a,b,c) {
    return (c*b) / a;
}
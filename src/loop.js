
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
 *  @param {Function} func function that this loop will execute
 *  @param {Number} times times that this loop will be executed
*/

function loop(func,times = 1) {
    times -= 1;
    for (var i = 0; i <= times; i++) {
        func();
    }
}
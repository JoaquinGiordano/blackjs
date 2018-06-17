
/**
 *  @function timer.start() function to create a loop
 *  @param func - function to loop
 *  @param ticks - velocity of the loops
 * 
 * 
 *  @function timer.stop() function to stop a loop
 *  @param timer_var - varible where the timer was created
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
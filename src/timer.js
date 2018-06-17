
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
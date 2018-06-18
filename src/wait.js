
/**
 * @function wait wait a while before execute a function
 * @param {Function} func funtion that will be executed after a the time 
 * @param {Number} ticks set the wait time
 */

function wait(func,ticks) {
    setTimeout(function () { func(); }, ticks);
}

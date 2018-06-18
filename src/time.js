
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
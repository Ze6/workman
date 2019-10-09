/* Calendar 
* zcalendar.js
*  By Csware
*  Author Ian Moncrieffe
*/

const month = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
    ];

const weekDay = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Saturday',
    'Sunday',
    ];



function cDate (rawDate) {
    var cdate = new Date(rawDate)
    
    return `${weekDay[cdate.getDay()]} ${month[cdate.getMonth()]} ${cdate.getDate()} ${cdate.getFullYear()}`
}
module.exports = cDate;
    
    

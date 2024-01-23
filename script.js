function runningClock()
{
    let currentTime = new Date;
    let currentDate = currentTime.getDate();
    let currentMonth = monthName[currentTime.getMonth()+1];
    let currentYear = currentTime.getFullYear();
    let day = dayName[currentTime.getDay()+1];
    let currentHours = currentTime.getHours();
    let currentMin = currentTime.getMinutes();
    let currentSeconds = currentTime.getSeconds();
    let currentMiliSeconds = currentTime.getMilliseconds();

    let displayTime =`${formattingTime(currentHours)} : ${formattingTime(currentMin)} : ${formattingTime(currentSeconds)} : ${formattingMiliSecond(currentMiliSeconds)}`;
    let displayDayAndDate = `${currentMonth}, ${currentDate}, ${currentYear}, ${day}`;

    document.getElementById("time").innerHTML = 
    `<pre class = "fontClass">${displayDayAndDate}\n${displayTime}
    </pre>`;
}
function formattingTime(val) {
    return val < 10 ? `0${val}` : val;
}
function formattingMiliSecond(val) {
    if (val < 100) return val < 100 && val > 9? `0${val}` : `00${val}`;
    else return val;
}
const monthName = {
    1 : "January",
    2 : "February",
    3 : "March",
    4 : "April",
    5 : "May",
    6 : "June",
    7 : "July",
    8 : "August",
    9 : "September",
    10: "October",
    11: "November",
    12: "December"
};

const dayName = {
    1 : "Sunday",
    2 : "Monday",
    3 : "Tuesday",
    4 : "Wednesday",
    5 : "Thursday",
    6 : "Friday",
    7 : "Saturday"
};


setInterval(runningClock,1);
runningClock();
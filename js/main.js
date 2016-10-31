var timeHolder = document.getElementById("time");
var hexHolder = document.getElementById("hex");

function getTime() {
    var now = new Date();
    var hours = now.getHours();
    if (hours < 10)
        hours = "0" + hours;
    var minutes = now.getMinutes();
    if (minutes < 10)
        minutes = "0" + minutes;
    var seconds = now.getSeconds();
    if (seconds < 10)
        seconds = "0" + seconds;
    var hoursString = hours.toString();
    var minutesString = minutes.toString();
    var secondsString = seconds.toString();
    var newTime = timeHolder;

    var currentTime = hoursString + ":" + minutesString + ":" + secondsString;

    timeHolder.innerHTML = currentTime;

    var hexCurrentTime = hoursString + minutesString + secondsString;

    hexHolder.innerHTML = "#" + hexCurrentTime;

    var newBackgroundColor = "#" + hexCurrentTime;
    document.getElementById("body").style.backgroundColor = newBackgroundColor;
}

function updateTime() {
    currentTime = setInterval(getTime, 1000);
}

updateTime();


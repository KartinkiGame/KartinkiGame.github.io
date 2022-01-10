var totalSeconds = 65;
var minutes;
var seconds;
var counter;
var result;
var counter;

function timer() {
    if (totalSeconds!=0){
        minutes = Math.floor(totalSeconds % 3600 / 60);
        seconds = totalSeconds % 60;
        totalSeconds--;
        document.getElementById("timer").innerHTML=minutes + ":" + seconds;
    }
    else {
        totalSeconds = 65;
        clearInterval(counter);
        document.getElementById("timer").innerHTML=minutes + ":0";
        document.getElementById("start").click();
    }
}
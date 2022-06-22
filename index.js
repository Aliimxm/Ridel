var timerSeconds=3;
var timerMins=5;
var timerHours=24;
ts=$("h1.ms.seconds").text(timerSeconds.toString());
tm=$("h1.sec.mi").text(timerMins.toString());
th=$("h1.min.hour").text(timerHours.toString());
var ts;
var th;
var tm;
$("body").keypress(timer());
function timer()
{

    timeOut=setInterval(function ()
    {
        timerSeconds--;
        ts=$("h1.ms.seconds").text(timerSeconds.toString());
        if(timerSeconds===0)
        {
            timerSeconds=60;
            timerMins--;
            tm=$("h1.sec.mi").text(timerMins.toString());
    
        }
        if(timerMins===0)
        {
            timerMins=60;
            timerHours--;
           th=$("h1.min.hour").text(timerHours.toString());
    
        }
    },1000);
}
let hr = 0;
let min = 0;
let sec = 0;
let msec = 0;
let timer = false;
let flag = 1;
function start() {
    if (flag) {
        timer = true;
        document.getElementById("start").innerHTML = "stop";
        document.getElementById("start").style.display = "none";
        // document.getElementById("start").style.display="none";
        stopwatch();


    }

}
function stop() {
    timer = false;
    document.getElementById("start").style.display = "inline-block";
    document.getElementById("start").innerHTML = "start";

}
function reset() {
    timer = false;
    hr = 0;
    min = 0;
    sec = 0;
    msec = 0;
    document.getElementById("msec").innerHTML = "00";
    document.getElementById("sec").innerHTML = "00";
    document.getElementById("min").innerHTML = "00";
    document.getElementById("hour").innerHTML = "00";
    
    document.getElementById("start").innerHTML = "start";
    document.getElementById("start").style.display = "inline-block";

}
function stopwatch() {
    if (timer == true) {

        if (min == 60) {
            hr = hr + 1;
            min = 0;
        }
        if (sec == 60) {
            min = min + 1;
            sec = 0;
        }
        if (msec == 100) {
            sec = sec + 1;
            msec = 0;
        }

        msec = msec + 1;

        


        if(sec<10)
        {
            document.getElementById("sec").innerHTML = "0"+ sec;
        }
        else{

            document.getElementById("sec").innerHTML = sec;
        }
        if(min<10)
        {
            document.getElementById("min").innerHTML = "0"+ min;
        }
        else{

            document.getElementById("min").innerHTML = min;
        }
        
        if(msec==100){
            document.getElementById("msec").innerHTML = "100";
        }
        else if(msec<10){

            document.getElementById("msec").innerHTML = "00"+ msec;
        }
        else{
            document.getElementById("msec").innerHTML = "0"+ msec;
        }

        document.getElementById("hour").innerHTML ="0"+ hr;

        setTimeout("stopwatch()", 7);
    }
}
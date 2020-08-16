var a = document.getElementById('div1');

var b;
var cs = 0;
var s = 0;
var min = 0;

var check = false;

var s_cs = "";
var s_s = "";
var s_min ="";

a.innerHTML = "00.00.00"

function start (){

    if(!check){
        check = true;
        b = setInterval( () =>{
            cs = cs + 1 ;
            if (cs == 100) {
                cs = 0;
                s = s + 1 ;
            }
            if (s == 60){
                s = 0;
                min = min + 1;
            }
            if(cs<10){
                s_cs = '0' + cs;
            }
            else
                s_cs = cs;
            
            if(s<10){
                s_s = '0' + s;
            }
            else
                s_s = s;
            
            if(min<10){
                s_min = '0' + min;
            }
            else
                s_min = min;
            
            a.innerHTML = `${s_min}:${s_s}:${s_cs}`
        },10);
    }
}

function pause(){
    check = false;
    clearInterval(b);
}

function stop(){
    clearInterval(b);
    check = false;
    cs=0;
    s=0;
    min=0;
    a.innerHTML ="00:00:00";
}
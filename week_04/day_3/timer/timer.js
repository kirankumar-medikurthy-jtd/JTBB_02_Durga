let hour=document.querySelector("#hours");
let minutes=document.querySelector("#minutes");
let secounds=document.querySelector("#secounds");
let millisecounds=document.querySelector("#millisecounds");
let h=0;
let min=0;
let sec=0;
let mil=0;


let start=document.createElement("button")
start.innerHTML="start";
start.setAttribute("class" , "start");
let restart=document.createElement("button");
restart.innerHTML="restart";
restart.setAttribute("class" , "restart");
let stopwatch=document.createElement("button");
stopwatch.innerHTML="stop";
stopwatch.setAttribute("class" , "stopwatch");
let final=document.querySelector("#final");
final.append(start,restart,stopwatch);


start.onclick=function(){
    timer=true;
}
stopwatch.onclick=function(){
    timer=false;
}
restart.onclick=function(){
    timer=false;
    h=0;
    min=0;
    sec=0;
    mil=0;
    hour.innerHTML="00";
    minutes.innerHTML="00";
    secounds.innerHTML="00";
    millisecounds.innerHTML="00";
}

setInterval(() =>{
    if(timer){
    mil++;
    if(mil==60){
        sec++;
        secounds.innerHTML=(sec<=9)?  `0${sec}`: sec;
        mil=0;
    }
    if(sec==60){
        min++;
        minutes.innerHTML=(min<10)? `0${min}` : min;
        sec=0;
    }mil
    if(min==60){
        h++;
        hour.innerHTML=(h<10) ? `0${h}` : h;
        min=0;
    }
    console.log(mil,sec,min,h);
    millisecounds.innerHTML= (mil<10)? `0${mil}`: mil ;
    }
},20);



const time=document.querySelector(".container");
const time1=document.querySelector(".container1");
const time2=document.querySelector(".container2");

setInterval(() =>{
    const now=new Date() ;
    const hour= now.getHours();
    const min=now.getMinutes();
    const sec=now.getSeconds();
    time.innerHTML=(hour<10) ? `0${hour}`:hour;
    time1.innerHTML=(min<10) ? `0${min}`:min;
    time2.innerHTML=(sec<10) ? `0${sec}`:sec;
},1000);



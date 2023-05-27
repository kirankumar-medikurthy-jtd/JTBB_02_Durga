
// var timeStart = new Date("05m 00s ").getTime();
// var a = setInterval(function(){
//     var now=new Date().getTime();
//     var dis=timeStart-now;
//     let min=5;
//     let sec=00;
//     for(let i=sec;i>=0;i--){
//         document.querySelector("#demo").innerHTML=  min + "m " + i + "s ";
//     }
   
//     if(dis<0){
//         clearInterval(a);
//         document.querySelector("#demo").innerHTML="EXPAIRED";
//     }
// },1000)
let hoursTag = document.querySelector(".hours");
let minutesTag = document.querySelector(".minutes");
let secondTag = document.querySelector(".second");
let btn = document.querySelector(".btn");
btn.onclick = function() {
  
   let minutes = Number(document.querySelector(".m").value)-1;
   let hours = 0;
   let second = 60;
   document.querySelector(".m").value = minutes;
   document.querySelector(".s").value = second;
   var temp = setInterval(()=>{
     second-=1;
     document.querySelector(".s").value = second;
     if(second == 0){
        if(minutes <= 0){
            document.querySelector(".m").value = "00";
            clearInterval(temp);
        }else{
            minutes -= 1;
            document.querySelector(".m").value = minutes;
            second = 60;
        }
     }
   },10)
}
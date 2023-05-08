// let color=document.querySelector(".color")
// color.onclick=function(){
//     color.textContent="hello"
// }
function logOut(){
    localStorage.removeItem("loginData");
    window.location.href="../loginpage/login.html";
}

let submit=document.querySelector(".button")
    submit.onclick= function() {
    let name=document.querySelector(".name").value;
    let author=document.querySelector(".author").value;
    let year=document.querySelector(".year").value;
    let Pub=document.querySelector(".Pub").value;
    let type=document.querySelector(".type").value;
    let price=document.querySelector(".price").value;
    let rate=document.querySelector(".rate").value;
    console.log(name,author,year,Pub,type,price,rate)
    let resultantData=JSON.parse(localStorage.getItem("bookDetails")) || [];
    localStorage.setItem("bookDetails" , JSON.stringify([ ...resultantData,{name,author,year,Pub,type,price,rate}]));
   console.log(localStorage.getItem("bookDetails"));
   
 }



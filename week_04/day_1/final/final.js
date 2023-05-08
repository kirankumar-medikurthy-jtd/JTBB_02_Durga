let final=document.querySelector(".final")
let view=JSON.parse(localStorage.getItem("bookInformation"));
let totalData=JSON.parse(localStorage.getItem("bookDetails"));

// let name = document.createElement("h1");
// name.textContent = view.name;
// final.append(name);
// console.log(final);
if(view){
    let image = document.createElement("div");
    image.style.border="20x solid black"
    let avatar = document.createElement("img");
    avatar.setAttribute("src",view.avatar);
    avatar.setAttribute("id", "author")

    let author = document.createElement("h1");
    author.textContent = view.authour;
    author.style.color="teal";
    author.setAttribute("class", "avatar")
    
    let name = document.createElement("h1");
    name.textContent = view.name;
    name.setAttribute("class", "name")
   
    let rate = document.createElement("h3");
    rate.textContent = "rate : " + view.rate;
    rate.setAttribute("class", "rate")
    
    let publisher = document.createElement("h3");
    publisher.textContent = "publisher : "+ view.publisher;
    publisher.setAttribute("class", "publisher")


    let price = document.createElement("h3");
    price.textContent = "price : "+ view.price;
    price.setAttribute("class", "price")

    let type = document.createElement("h3");
    type.textContent = "type : "+ view.type;
    type.setAttribute("class", "type")

    let serial = document.createElement("h3");
    serial.textContent = "serialNo : "+ view.serial;
    serial.setAttribute("class", "serialNo")
    
    let button=document.createElement("button");
    button.textContent="delete";
    button.style.padding="10px 40px";
    button.style.backgroundColor="aqua";
    button.onclick = function (){ 
        console.log("yes")
        let del=[];
        for(let i=0;i<totalData.length;i++){
            if(view.serial_number != totalData[i].serial_number){
                del.push(totalData[i]);
            }
            else{
                console.log(totalData[i].view);
            }
        }
        localStorage.removeItem("bookInformation")
        localStorage.setItem("bookDetails", JSON.stringify(del))
        alert("Succussfully deleted!")
         window.location.href="../viewPage/viewPage.html";
    }

    let edit=document.createElement("button");
    edit.textContent="edit";
    edit.style.marginLeft="20px";
    edit.style.padding="10px 40px";
    edit.style.backgroundColor="aqua";

    edit.onclick=function(){
        let final=document.querySelector(".final")
        final.innerHTML="";

        //let image=document.createElement("div");
        let image = document.createElement("div");
        image.style.border="30x solid black"
        let avatar = document.createElement("img");
        avatar.setAttribute("src",view.avatar);
        avatar.setAttribute("id","avatar");


        let div=document.createElement("div");
        let inputName=document.createElement("input");
        div.appendChild(inputName);
        inputName.setAttribute("type" , "text");
        inputName.setAttribute("class" , "inputName");
        inputName.setAttribute("value" , view.name);
        inputName.style.padding="10px";
        inputName.style.borderRadius="10px";
        inputName.style.marginTop="100px";


        let div2=document.createElement("div");
        let inputType=document.createElement("input");
        div2.appendChild(inputType)
        inputType.setAttribute("type" , "text");
        inputType.setAttribute("class" , "inputType");
        inputType.setAttribute("value" , view.type);
        inputType.style.padding="10px";
        inputType.style.borderRadius="10px";
        inputType.style.marginTop="20px";


        let div3=document.createElement("div");
        let inputRate=document.createElement("input");
        div3.appendChild(inputRate)
        inputRate.setAttribute("type" , "text");
        inputRate.setAttribute("class" , "inputRate");
        inputRate.setAttribute("value" , view.rate);
        inputRate.style.padding="10px";
        inputRate.style.borderRadius="10px";
        inputRate.style.marginTop="20px";


        let div4=document.createElement("div");
        let inputPub=document.createElement("input");
        div4.appendChild(inputRate);
        inputPub.setAttribute("type" , "text");
        inputPub.setAttribute("class" , "inputPub");
        inputPub.setAttribute("value" , view.publisher);
        inputPub.style.padding="10px";
        inputPub.style.borderRadius="10px";
        inputPub.style.marginTop="20px";


        let div5=document.createElement("div");
        let inputAuthor=document.createElement("input");
        div5.appendChild(inputAuthor);
        inputAuthor.setAttribute("type" , "text");
        inputAuthor.setAttribute("class" , "authour");
        inputAuthor.setAttribute("value" , view.authour);
        inputAuthor.style.padding="10px";
        inputAuthor.style.borderRadius="10px";
        inputAuthor.style.marginTop="20px";

        let div6=document.createElement("div");
        let inputPrice=document.createElement("input");
        div6.appendChild(inputPrice);
        inputPrice.setAttribute("type" , "text");
        inputPrice.setAttribute("class" , "inputPrice");
        inputPrice.setAttribute("value" , view.authour);
        inputPrice.style.padding="10px";
        inputPrice.style.borderRadius="10px";
        inputPrice.style.marginTop="20px";


        let div7=document.createElement("div");
        let inputSerialNo=document.createElement("input");
        div7.appendChild(inputSerialNo);
        inputSerialNo.setAttribute("type" , "text");
        inputSerialNo.setAttribute("class" , "inputSerialNo");
        inputSerialNo.setAttribute("value" , view.serial_number);
        inputSerialNo.style.padding="10px";
        inputSerialNo.style.borderRadius="10px";
        inputSerialNo.style.marginTop="20px";


        let div8=document.createElement("div");
        let Inputyear=document.createElement("input");
        div8.appendChild(Inputyear);
        Inputyear.setAttribute("type" , "text");
        Inputyear.setAttribute("class" , "Inputyear");
        Inputyear.setAttribute("value" , view.year);
        Inputyear.style.padding="10px";
        Inputyear.style.borderRadius="10px";
        Inputyear.style.marginTop="20px";
    

        let div9=document.createElement("div");
        let create=document.createElement("button");
        div9.append(create);
        create.setAttribute("id" , "create")
        create.innerHTML="done";
        create.style.padding="10px 80px";
        create.style.backgroundColor="aqua";
        create.style.borderRadius="20px";
        
        create.onclick=function (){
            let ima=document.querySelector("image");
            let name=document.querySelector(".inputName").value;
            let Type=document.querySelector(".inputType").value;
            let Rate=document.querySelector(".inputRate").value;
            let Pub=document.querySelector(".inputPub").value;
            let authour=document.querySelector(".authour").value;
            let Price=document.querySelector(".inputPrice").value;
            let SerialNo=document.querySelector(".inputSerialNo").value;
            let year=document.querySelector(".Inputyear").value;
            let obj={ima,name,Type,Rate,Pub,authour,Price,SerialNo,year}
            let arr=[];
            for(let i=0;i<totalData;i++){
                if(view.serial_number == totalData[i].serial_number){
                    arr.push(...view,obj);
                }
                else{
                    arr.push(totalData[i]);
                }
            }
            localStorage.setItem("bookInformation", JSON.stringify(arr));
            alert("edit successfully");
            window.location.href="../viewPage/viewPage.html";
        }


        final.append(avatar,inputName,inputType,inputRate,inputAuthor,inputSerialNo,inputPrice,inputPub,Inputyear, create);
        console.log(final);
    }

    

    final.append(avatar,name,author,rate,publisher,price,type,serial, button , edit);
    console.log(final);


    // let button=Document.createElement("button");
    // button.value="delete";
    }
    else{
        window.location.href="../viewPage/viewPage.html";
    }

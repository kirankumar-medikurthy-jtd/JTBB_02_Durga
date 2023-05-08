let button=document.querySelector(".button");
//console.log(button);
button.onclick=function(){
    let search=document.querySelector(".input").value;
    if(search === ""){
        alert("you must write something");
    }
    else{
    let button2=document.createElement("span");
    button2.setAttribute("class" , "todo");
    let del=document.createElement("button");
    del.setAttribute("class" , "delete")
    del.innerHTML="DELETE";
    let edit=document.createElement("button");
    edit.innerHTML="EDIT";
    let display=document.querySelector(".display");
    display.append(button2,del,edit);
    button2.append(search)
    
    del.onclick=function(){
         del.remove();
         button2.remove();
    }
    }
}

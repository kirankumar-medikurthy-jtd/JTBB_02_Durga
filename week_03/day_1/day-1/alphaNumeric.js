//Find a string whether it contains alphanumeric characters or not?
let str="durga123"
let num="0123456789"
let alpha="abcdefghijklmnopqrstuvwxyz";
let sp="~!@#$%^&*";
let count=0;
for(let i=0;i<str.length;i++){
  for(let j=0;j<num.length;j++){
    if(str[i]==num[j]){
      count++
    }
  }
}
let count1=0;
for(let i=0;i<str.length;i++){
  for(let j=0;j<alpha.length;j++){
    if(str[i]==alpha[j]){
      count1++
    }
  }
}
let count2=0;
for(let i=0;i<str.length;i++){
  for(let j=0;j<sp.length;j++){
    if(str[i]==sp[j]){
      count2++
    }
  }
}
//console.log(count2);
if(count>0&&count1>0&&count2>0){
  console.log("alphanumeric")
}
else
{
  console.log("not a alpha numeric")
}


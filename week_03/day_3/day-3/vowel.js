//Write a program to count all vowels and consonants present in a string?


let str="jtbfoundation"
let count=0;
let count1=0;
for(let i=0;i<str.length;i++){
    if(str[i]=="a" || str[i]=="e" || str[i]=="i" || str[i]=="o" || str[i]=="u"){
        count++
    }
    else{
        count1++
    }
}
console.log(count)


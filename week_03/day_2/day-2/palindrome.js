//Write a program to check whether a string is palindrome or not?
let str="madam"
let bag=""
for(let i=str.length-1;i>=0;i--){
    bag=bag+str[i]
}
if(bag==str){
    console.log("palindrome")
}
else {
    console.log("not a palindrome")
}

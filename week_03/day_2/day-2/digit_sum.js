
//Write a program to calculate the sum of digits present in a number?
//Example : input : 124, output : 7

let num=124;
let sum=0;
while(num>0){
    r=num%10;
    sum=sum+r
    num=Math.floor(num/10);
    
}
console.log(sum)

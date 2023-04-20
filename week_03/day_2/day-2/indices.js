/*Write a program to check to print indices of two numbers present in an array, whose sum is equal to target value ?
             Example : input  : Array = [2,3,4,6,8,1];     Target : 10
                                          Output = 2,3*/
 
 
 let arr=[1,2,4,5,6,7,8]
let target=9;
let count=0;
let count1=0
for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]+arr[j]==target){
            count=i
            count1=j
        }
    }
}
console.log(count,count1)



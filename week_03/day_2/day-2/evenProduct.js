//Write a program to calculate a product of all even numbers present in an array?
let arr=[1,2,3,4]
let product=1;
for(let i=0;i<arr.length;i++){
    if(arr[i]%2==0){
        product=product*arr[i]
    }
}
console.log(product)

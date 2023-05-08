//Write a program to find the k largest missing number present in the array
let arr = [2, 8, 7, 3, 5, 9, 11];
let array=[];
let min = Infinity;
let max = -Infinity;
let k=3;
let count = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] < min) {
    min = arr[i]
  }
  else if (arr[i] > max) {
    max = arr[i]
  }
}
let result = []
for (let i = 0; i <= 11; i++) {
  result[i] = 0
}
for (let i = min; i <= max; i++) {
  result[i] += 1
}
for (let i = 0; i < arr.length; i++) {
  result[arr[i]] += 1
}

for (let i = 0; i <= result.length; i++) {
    if (result[i] == 1) {
      array.push(i);
      //console.log(i)
    }
}
//console.log(array)
console.log(array[array.length-k]);

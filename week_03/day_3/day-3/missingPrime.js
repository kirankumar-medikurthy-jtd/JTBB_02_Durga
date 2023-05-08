//Write a program to find the all missing number prime numbers  present in an array
function isPrime(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

function findMissingPrimes(arr) {
let maxNum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxNum) {
      maxNum = arr[i];
    }
  }
  const missingPrimes = [];
  
  for (let i = 2; i <= maxNum; i++) {
    if (arr.includes(i)) {
      continue;
    }
    if (isPrime(i)) {
      missingPrimes.push(i);
    }
  }
  
  return missingPrimes;
}

const arr = [2, 8, 7, 4, 6, 9, 11];
const missingPrimes = findMissingPrimes(arr);

console.log(missingPrimes);

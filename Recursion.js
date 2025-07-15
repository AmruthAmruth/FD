// function factorial(n){
//   if(n===0) return 1;
//   return n * factorial(n-1)
// }
// console.log(factorial(5));

// function print1ToN(n) {
//   if (n === 0) return;
//   print1ToN(n - 1);
//   console.log(n);
// }
// console.log(print1ToN(5));

// function sum(n){
//   if(n===0) return 0;
//   return n + sum(n-1)
// }
// console.log(sum(5));

// function fib(n){
//   if(n===1) return 1;
//   if(n===0) return 0;
//   return fib(n-1) + fib(n-2)
// }
// console.log(fib(5));

// function reverseStr(str){
//   if(str==="") return "";
//   return str.slice(1)+str[0]
// }

// console.log(reverseStr("Amruth"));

// function checkPalindrome(str,left=0,right=str.length-1){
//   if(left>=right) return true
//   if(str[left] !== str[right]){
//     return false
//   }
//   return checkPalindrome(str,left+1,right-1)
// }

// console.log(checkPalindrome("MAM"));

// function isSorted(arr) {
//   if (arr.length <= 1) return true;
//   if (arr[0] > arr[1]) return false;
//   return isSorted(arr.slice(1));
// }
// console.log(isSorted([1, 2, 3, 4]));

// function reverseArr(arr) {
//   if (arr.length === 0) {
//     return arr.toString("").split(" ");
//   }
//   return reverseArr(arr.slice(1)) + arr[0];
// }
// console.log(reverseArr([1, 2, 3, 4, 5]));

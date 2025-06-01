function factorial(n){
    if(n===1){
        return 1
    }
    return n * factorial(n-1)
}
console.log(factorial(5));





function sumOfArray(arr){
    if(arr.length===0) return 0;

    return arr[0] + sumOfArray(arr.slice(1))
}
console.log(sumOfArray([1,3,2]));

function reverseStr(str){
    if(str.length===0){
        return str
    }
    return reverseStr(str.slice(1))+str[0]
}
console.log(reverseStr("Hello"));


function fibonacci(n){
    if(n<=1) return n;
    return fibonacci(n-1) + fibonacci(n-2)
}
console.log(fibonacci(6));

function isPalindrom(str, left = 0, right = str.length - 1) {
  if (left >= right) return true;
  if (str[left] !== str[right]) return false;
  return isPalindrom(str, left + 1, right - 1);
}

console.log(isPalindrom("mamam"));

function sumOfNNumber(n){
    if(n===1) return 1;
    return n + sumOfNNumber(n-1)
}

console.log(sumOfNNumber(5));

function countDown(n){
    if(n===0) {
        console.log("Done");
        return 1
    }
    setTimeout(()=>{
        console.log(n);
        countDown(n-1)
    },1000)
}

countDown(10)
























// function removeDuplicates(arr) {
//   let result = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (!result.includes(arr[i])) {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }

// console.log(removeDuplicates([1, 2, 3, 2, 4, 1, 5]));

// function countChars(str){
//   let count={}
//   for(let char of str){
//     count[char]=(count[char]+1 || 1)
//   }
//   return count
// }

// console.log(countChars("Hello"));

// function doubleOdds(arr){
//   let result = arr.map((num)=>num % 2 !== 0 ? num*2 : num)
//   return result;
// }

// console.log(doubleOdds([1,2,3,4,5,6]));

// function reverseString(str) {

//     let result=""
//   for(let i=str.length-1;i>=0;i--){
//     result += str[i]
//   }
//   return result;

// }

// console.log(reverseString("Amruth"));

// function isPalindrome(str){
//     for(let i=0;i<str.length/2;i++){
//         if(str[i]!==str[str.length-1-i]){
//                 return false
//         }
//     }
//     return true
// }

// console.log(isPalindrome("Amruth"));

// function mostFrequent(arr){
//     let obj ={}
//     let num=0;
//     let elem=null;
//     for(let char of arr){
//         obj[char]=(obj[char] || 0) +1
//         if(num<obj[char]){
//             num=obj[char];
//         elem=char
//         }
//     }

// return elem
// }

// console.log(mostFrequent(["a", "b", "a", "c", "a", "b"]));

// function removeDuplicates(arr){
//     let set = new Set(arr)
//     return [...set]
// }

// console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));

// function flattenArray(arr){

//     return  arr.flat(Infinity)
// }

// console.log(flattenArray([1, [2, 3], [4, [5, 6]], 7]));

// function countChars(obj){
//     let hash={}
//     for(let char of obj){
//         hash[char] = (hash[char] || 0) +1
//     }
//     return hash;
// }

// console.log(countChars("amruth"));

// function capitalizeWords(str){
//     let words = str.split(" ");
//     let cap = words.map((word)=>word[0].toUpperCase()+word.slice(1))
//     return cap.join(" ")
// }

// console.log(capitalizeWords("Hello World"));

// function isAnagram(str1,str2){
//     if(str1.length!==str2.length) return false;
//     for(let char of str1){
//         if(!str2.includes(char)){
//             return false;
//         }
//     }
//     return true
// }

// console.log(isAnagram("listewn", "silent"));



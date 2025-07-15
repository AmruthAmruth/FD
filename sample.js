// function insertionSort(arr){
//     let n= arr.length;
//     for(let i=1;i<n;i++){
//         let key=arr[i]
//         let j=i-1;
//         while(j >=0 && arr[j] > key){
//             arr[j+1]=arr[j]
//             j--
//         }
//         arr[j+1]=key
//     }
//     return arr
// }

// function insertionSort(arr) {
//   let n = arr.length;
//   for (let i = 1; i < n; i++) {
//     let key = arr[i];
//     let j = i - 1;
//     while (j >= 0 && arr[j] > key) {
//       arr[j + 1] = arr[j];
//       j--;
//     }
//     arr[j + 1] = key;
//   }
//   return arr;
// }

// console.log("Insertion Sort ", insertionSort([2, 5, 1, 3, 4]));

// function selectionSort(arr){
//   let n = arr.length;
//   for(let i=0;i<n-1;i++){
//     let minIndex = i;
//     for(let j=i+1;j<n;j++){
//       if(arr[minIndex] > arr[j]){
//         minIndex=j
//       }

//     }
//     if(minIndex !== i){
//       [arr[minIndex],arr[i]]=[arr[i],arr[minIndex]]
//     }
//   }
//   return arr
// }

// console.log("Selection Sort ", selectionSort([2, 1, 4, 5, 3]));

// function QuickSort(arr) {
//   let n = arr.length;
//   if (n <= 1) return arr;
//   let pivot = arr[n - 1];
//   let left = [];
//   let right = [];
//   for (let i = 0; i < n - 1; i++) {
//     if (arr[i] < pivot) {
//       left.push(arr[i]);
//     } else {
//       right.push(arr[i]);
//     }
//   }
//   return [...QuickSort(left), pivot, ...QuickSort(right)];
// }

// console.log("Quick Sort ", QuickSort([2, 5, 1, 3, 4]));




    // function merge(arr){
    //     if(arr.length <= 1) return arr
    //     let mid = Math.floor(arr.length/2)
    //     let left=merge(arr.slice(0,mid))
    //     let right=merge(arr.slice(mid))
    //    return  mergeSort(left,right)
      
    // }

    // function mergeSort(left,right){
    //   console.log("Left",left);
      
    //     let result=[]
    //     let i=0,j=0;
    //     while(i< left.length && j < right.length){
    //         if(left[i] < right[j]){
    //             result.push(left[i])
    //             i++
    //         }else{
    //             result.push(right[j])
    //             j++
    //         }
    //     }
    //     return result.concat(left.slice(i)).concat(right.slice(j))
    // }


    function merge(arr){
      if(arr.length<=1) return arr;
      let mid = Math.floor(arr.length/2);
      let left=merge(arr.slice(0,mid));
      let right=merge(arr.slice(mid))
      return mergeSort(left,right)
    }

    function mergeSort(left,right){
      let result=[];
      let i=0;let j=0;
      while(i< left.length &&  j< right.length){
            if(left[i]<right[j]){
              result.push(left[i])
              i++
            }else{
              result.push(right[j])
              j++
            }
      }
      return result.concat(left.slice(i).concat(right.slice(j)))
    }

console.log("Merge Sort", merge([4,1,3,2,5]));
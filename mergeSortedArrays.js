function mergeSortedArrays(array1, array2){
    const mergedArray = [];
    let array1Item = array1[0];
    let array2Item = array2[0];
    let i = 1;
    let j = 1;
    
    //We should actually move these 2 if statements to line 2 so that we do the checks before we do assignments in line 3 and 4!
    if(array1.length === 0) {
      return array2;
    }
    if(array2.length === 0) {
      return array1;
    }
  
    while (array1Item || array2Item){
     if(array2Item === undefined || array1Item < array2Item){
       mergedArray.push(array1Item);
       array1Item = array1[i];
       i++;
     }   
     else {
       mergedArray.push(array2Item);
       array2Item = array2[j];
       j++;
     }
    }
    return mergedArray;
  }
  
  mergeSortedArrays([0,3,4,31], [3,4,6,30]);

// My Solution
  function mergeArr(arr1, arr2) {
    let mergedArr = arr1.concat(arr2);
    sortArr(mergedArr);
    return mergedArr;
}

function sortArr(arr) {
    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[i] < arr[j]) {

                let x = arr[i];
                arr[i] = arr[j];
                arr[j] = x;
            }

        }
    }
    return arr;
}


let testArr = [3, 2, 1]
console.log(sortArr(testArr))

let arr1 = [1, 2, 3];
let arr2 = [9, 7, 8];
console.log(mergeArr(arr1, arr2));
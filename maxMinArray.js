// Max/min number from an array. Write a method that will accept an array of int as an argument and it will return the max/min number from a given array.

function maxMinArr(arr){
    let min =arr[0];
    let max = arr[0];
  
    for(let i=0; i< arr.length; i++){
      if(min > arr[i]){
        min = arr[i]
      }
      if(max < arr[i]){
        max = arr[i]
      }
    }
    return {
      "max":max,
      "min":min
    }
  }
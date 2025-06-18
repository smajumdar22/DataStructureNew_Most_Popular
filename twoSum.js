function twoSum(arr,target){
    let map = new Map();
    let newArr =[];
    for(let i=0;i<arr.length;i++){
      map.set(arr[i],i)
      //console.log(map.get(arr[i]))
    }
    
    for(let i=0;i<arr.length;i++){
      let complement = target - arr[i];
      console.log(complement)
      if(map.has(complement)&& map.get(complement) !== i){
          console.log("I am here")
         newArr.push(i,map.get(complement));
         console.log(newArr)
         return newArr;
      }
      
    }
   
    return null;
  }

  //Sum

function sum(arr, sum){
  let newArr =[];

  for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
      if(arr[i]+arr[j] == sum){
        newArr.push({num1: arr[i],num2:arr[j]});
      }
    }
  }
  return newArr;
}

//console.log(sum([1,2,4,5],6))

  
  twoSum([2,7,11,15],9)

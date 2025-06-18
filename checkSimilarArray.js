

let arr1 = ['a','b','c','d'];
let arr2 = ['x','y','z'];




// const check =(arr1,arr2) => {
//  let mySet = new Set();
//  //mySet.add(arr1);
//  //console.log(mySet)
//  arr1.forEach(function (e,i){
//    mySet.add(e);
//  });
//  for(let val in arr2){
//    if(mySet.has(arr2[val])){
//      return true;
//    }
//    //console.log(arr2[val])
//  }

//  //console.log(mySet)
//  return false;
// }

const check =(arr1,arr2) => {
  let map = {};
  arr1.forEach(function (e,i){
    console.log(e)
     if(!map[arr1[e]]) {
       let item = e;
       map[item] = true
     }    
  });

  for (let val in arr2){
    if(map[arr2[val]]){
      return true;
    }
  }
  return false;
}

// function check(arr1,arr2){
//     return arr1.some(item => arr2.includes(item))
//   }

console.log(check(arr1,arr2))



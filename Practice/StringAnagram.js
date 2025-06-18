const anagram =(str, str2) =>{
   if (str.length != str2.length){
    return 'Not an anagram';
   }

   let mapCount1 = getCountLetter(str);
   let mapCount2 = getCountLetter(str2);

   for (let [key, val] of mapCount1){
    if (!mapCount2.has(key) || val !== mapCount2.get(key) ){
       return false;
    }
   }
   return true;
//    compareMaps(mapCount1, mapCount2);
}

const getCountLetter =(str) => {
    let newMap = new Map();

    for (let i=0; i< str.length; i++){
        if (newMap.has(str[i])){
            newMap.set(str[i], newMap.has(str[i]) + 1 );
        }
        else{
             newMap.set(str[i], 1 );

        }
    }

    return newMap;

}

const compareMaps =(map1, map2)=>{
   for (let [key,val] of map1) {
    if (!map2.has(key) || val !== map2.get(key) ){
        return false;
     }
    };
     return true;
}



let testStr1 = 'shubham';
let testStr2 = 'mahbuhs';
console.log(anagram(testStr1, testStr2));